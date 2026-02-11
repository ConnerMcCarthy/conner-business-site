import { NextResponse } from "next/server";

const BUSINESS_TYPE = "Website Development";
const SERVICE_AREA =
  "Polk County / Rutherford County NC and remote clients";

export type LeadUpdates = {
  businessName?: string;
  contactName?: string;
  phone?: string;
  email?: string;
  cityState?: string;
  websiteGoal?: string;
  websiteType?:
    | "1-page"
    | "multi-page"
    | "ecommerce"
    | "booking/appointments"
    | "LMS/training"
    | "other";
  mustHaveFeatures?: string[];
  niceToHaveFeatures?: string[];
  currentStatus?:
    | "no site"
    | "has site needs redesign"
    | "moving from builder"
    | "urgent fix";
  timelineUrgency?: "asap" | "2-4 weeks" | "1-2 months" | "flexible";
  domainStatus?: "owns domain" | "needs domain" | "unsure";
  hostingStatus?: "has hosting" | "needs hosting" | "unsure";
  budgetRange?: string;
  brandingAssets?: "yes" | "no" | "partial";
  contentReadiness?: "yes" | "no" | "partial";
  exampleSites?: string[];
  preferredContact?: "call" | "text" | "email";
  bestTimeToReach?: string;
  notes?: string;
};

export type IntakeRequestBody = {
  businessType?: string;
  serviceArea?: string;
  messages: { role: "user" | "assistant"; content: string }[];
  lead?: LeadUpdates;
};

export type IntakeResponseBody = {
  assistant_message: string;
  lead_updates: LeadUpdates;
  missing_fields: string[];
  done: boolean;
  lead_summary: string;
};

const SYSTEM_PROMPT = `You are an intake assistant for a web development business. Your job is to qualify leads and collect clear project requirements for NEW WEBSITE / WEB PLATFORM projects.

Business context:
- Service: ${BUSINESS_TYPE}. ${SERVICE_AREA}.
- We build modern websites and web platforms for small businesses: secure sites, landing pages, booking/contact flows, LMS/Moodle, and optional AI features like FAQ assistants.

Rules:
1. Ask ONE question at a time. Keep questions short and non-technical unless the user is clearly technical.
2. Do NOT quote exact prices or guarantee timelines. You may ask for budget range as an optional, polite question.
3. If the user asks "how much?" or "what will it cost?", respond with a brief disclaimer (e.g. "Projects vary—I’d rather scope it first so we can give you a useful range.") and ask the next key scoping question instead.
4. Be professional and friendly. When you have enough info, set done=true and fill lead_summary with a clean 2–4 sentence summary for the business owner.

Required fields (done=true only when ALL are satisfied):
- Contact: at least one of phone OR email.
- businessName: name of their business.
- websiteGoal: what they want the website to achieve (free text).
- websiteType: exactly one of "1-page", "multi-page", "ecommerce", "booking/appointments", "LMS/training", "other".
- mustHaveFeatures: array of strings, at least one item (e.g. contact form, booking, blog).
- currentStatus: exactly one of "no site", "has site needs redesign", "moving from builder", "urgent fix".
- timelineUrgency: exactly one of "asap", "2-4 weeks", "1-2 months", "flexible".

Optional (nice-to-have): domainStatus, hostingStatus, budgetRange, brandingAssets, contentReadiness, cityState, exampleSites, preferredContact, bestTimeToReach, notes.

You will receive the current conversation and the current lead object. Extract any new info from the latest user message and merge into lead_updates. Populate missing_fields with the list of required field names still missing (e.g. ["email", "websiteType"]). Set done=true only when every required field is present. When done=true, set lead_summary to a concise professional summary for the developer.

Output ONLY valid JSON, no markdown or extra text, with this exact structure:
{
  "assistant_message": "Your next question or closing message to the user.",
  "lead_updates": { ... only include keys you are updating or inferring this turn ... },
  "missing_fields": ["field1", "field2"],
  "done": false,
  "lead_summary": "When done=true, a 2-4 sentence summary. Otherwise empty string."
}

Allowed lead_updates keys: businessName, contactName, phone, email, cityState, websiteGoal, websiteType, mustHaveFeatures, niceToHaveFeatures, currentStatus, timelineUrgency, domainStatus, hostingStatus, budgetRange, brandingAssets, contentReadiness, exampleSites, preferredContact, bestTimeToReach, notes.`;

function buildMessages(
  body: IntakeRequestBody
): { role: "system" | "user" | "assistant"; content: string }[] {
  const leadContext =
    Object.keys(body.lead ?? {}).length > 0
      ? `\n\nCurrent lead data we have so far:\n${JSON.stringify(body.lead)}`
      : "";
  const systemWithContext = SYSTEM_PROMPT + leadContext;
  const conversation = (body.messages ?? []).map((m) => ({
    role: m.role as "user" | "assistant",
    content: m.content,
  }));
  return [
    { role: "system", content: systemWithContext },
    ...conversation,
  ];
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as IntakeRequestBody;
    const messages = body.messages ?? [];
    if (messages.length === 0) {
      return NextResponse.json(
        { error: "messages array is required and must not be empty." },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            "AI intake is not configured. Please contact the site owner to set up the intake.",
        },
        { status: 503 }
      );
    }

    const apiMessages = buildMessages(body);

    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        messages: apiMessages,
        max_tokens: 800,
        response_format: { type: "json_object" },
      }),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      console.error("OpenAI intake API error:", res.status, err);
      return NextResponse.json(
        { error: "Unable to get a response. Please try again later." },
        { status: 502 }
      );
    }

    const data = (await res.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    const raw = data?.choices?.[0]?.message?.content?.trim() ?? "";

    if (!raw) {
      return NextResponse.json(
        { error: "Empty response from assistant." },
        { status: 502 }
      );
    }

    let parsed: IntakeResponseBody;
    try {
      parsed = JSON.parse(raw) as IntakeResponseBody;
    } catch {
      console.error("Intake: invalid JSON from model", raw);
      return NextResponse.json(
        {
          error: "The assistant returned invalid data. Please try again.",
          raw_output: raw,
        },
        { status: 500 }
      );
    }

    if (typeof parsed.assistant_message !== "string") {
      parsed.assistant_message = "Thanks for that. What else would you like to add?";
    }
    if (!Array.isArray(parsed.missing_fields)) parsed.missing_fields = [];
    if (typeof parsed.done !== "boolean") parsed.done = false;
    if (typeof parsed.lead_summary !== "string") parsed.lead_summary = "";
    if (typeof parsed.lead_updates !== "object" || parsed.lead_updates === null) {
      parsed.lead_updates = {};
    }

    return NextResponse.json(parsed);
  } catch (e) {
    console.error("Intake API error:", e);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
