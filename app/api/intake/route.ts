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

// --- Pricing tier guidance (internal) ---
const PRICING = {
  Starter: { base: 80, low: 65, high: 95 },
  Growth: { base: 115, low: 95, high: 135 },
  Pro: { base: 165, low: 135, high: 195 },
} as const;

export type PricingTier = "Starter" | "Growth" | "Pro";

export type PricingEstimate = {
  suggestedTier: PricingTier;
  estimatedPages: number;
  monthlyLow: number;
  monthlyHigh: number;
  rationale: string[];
};

const PRO_KEYWORDS = [
  "login",
  "account",
  "accounts",
  "portal",
  "roles",
  "dashboard",
  "database",
  "sql",
  "backups",
  "security",
  "hipaa",
];

const GROWTH_KEYWORDS = [
  "ai intake",
  "smart intake",
  "ai faq",
  "smart faq",
];

function hasProSignals(lead: LeadUpdates): boolean {
  const features = (lead.mustHaveFeatures ?? []).join(" ").toLowerCase();
  const notes = (lead.notes ?? "").toLowerCase();
  const text = `${features} ${notes}`;
  return PRO_KEYWORDS.some((k) => text.includes(k));
}

function hasGrowthSignals(lead: LeadUpdates): boolean {
  const features = (lead.mustHaveFeatures ?? []).join(" ").toLowerCase();
  const notes = (lead.notes ?? "").toLowerCase();
  const text = `${features} ${notes}`;
  return GROWTH_KEYWORDS.some((k) => text.includes(k));
}

function estimatePages(lead: LeadUpdates): number {
  const type = lead.websiteType;
  const features = lead.mustHaveFeatures ?? [];
  if (type === "1-page") return 1;
  if (type === "multi-page") {
    const count = features.length;
    if (count <= 2) return 6;
    if (count <= 5) return 8;
    return Math.min(15, 6 + count);
  }
  if (type === "ecommerce" || type === "booking/appointments") return 10;
  if (type === "LMS/training") return 20;
  return 8;
}

function chooseTier(lead: LeadUpdates): PricingTier {
  const type = lead.websiteType;
  if (type === "LMS/training") return "Pro";
  if (hasProSignals(lead)) return "Pro";
  if (type === "1-page") return "Starter";
  if (hasGrowthSignals(lead)) return "Growth";
  if (type === "ecommerce" || type === "booking/appointments") return "Growth";
  if (type === "multi-page") {
    const pages = estimatePages(lead);
    if (pages <= 5) return "Starter";
    return "Growth";
  }
  return "Starter";
}

function estimatePricing(lead: LeadUpdates): PricingEstimate {
  const suggestedTier = chooseTier(lead);
  const estimatedPages = estimatePages(lead);
  const range = PRICING[suggestedTier];
  const rationale: string[] = [];

  if (lead.websiteType === "1-page") {
    rationale.push("1-page site with simple scope.");
  } else if (lead.websiteType === "multi-page") {
    rationale.push(`Multi-page site (~${estimatedPages} pages).`);
    if (hasGrowthSignals(lead)) rationale.push("AI/Smart features (intake or FAQ) → Growth tier.");
    if (hasProSignals(lead)) rationale.push("Account/login/database-type needs → Pro tier.");
  } else if (lead.websiteType === "ecommerce" || lead.websiteType === "booking/appointments") {
    rationale.push(`${lead.websiteType} typically needs more than 5 pages and optional AI features.`);
  } else if (lead.websiteType === "LMS/training") {
    rationale.push("LMS/training implies platform features, accounts, and higher complexity.");
  }

  if (suggestedTier === "Starter" && !lead.websiteType) {
    rationale.push("Insufficient info; defaulting to Starter range. Scope may change after more details.");
  }

  return {
    suggestedTier,
    estimatedPages,
    monthlyLow: range.low,
    monthlyHigh: range.high,
    rationale: rationale.length > 0 ? rationale : [`Based on ${suggestedTier} tier (${estimatedPages} pages).`],
  };
}

// Example lead inputs → tier (for verification):
// 1) { websiteType: "1-page", mustHaveFeatures: ["contact form"] } => Starter ($65–$95)
// 2) { websiteType: "multi-page", mustHaveFeatures: ["smart intake", "smart faq"] } => Growth ($95–$135)
// 3) { websiteType: "LMS/training" } or { mustHaveFeatures: ["login", "dashboard", "SQL", "backups"] } => Pro ($135–$195)

export type IntakeResponseBody = {
  assistant_message: string;
  lead_updates: LeadUpdates;
  missing_fields: string[];
  done: boolean;
  lead_summary: string;
  /** Optional; present when pricing estimator runs (always computed from merged lead). */
  pricing_estimate?: PricingEstimate;
};

const SYSTEM_PROMPT =
  "You are an intake assistant for a web development business. Your job is to qualify leads and collect clear project requirements for NEW WEBSITE / WEB PLATFORM projects.\n\n" +
  "Business context:\n" +
  "- Service: " + BUSINESS_TYPE + ". " + SERVICE_AREA + ".\n" +
  "\n- We build modern websites and web platforms for small businesses: secure sites, landing pages, booking/contact flows, LMS/Moodle, and optional AI features like FAQ assistants.\n\n" +
  "Rules:\n" +
  "1. Ask ONE question at a time. Keep questions short and non-technical unless the user is clearly technical.\n" +
  "2. Do NOT quote exact prices or guarantee timelines.\n" +
  "3. Pricing: When the user asks about cost, use the Pricing guidance (internal) block to give a rough monthly range with a short disclaimer only when we have websiteType, mustHaveFeatures, currentStatus, and timelineUrgency; otherwise say projects vary and ask the next scoping question.\n" +
  "4. Be professional and friendly.\n\n" +
  "Required fields (all must be present before you ask the wrap-up question):\n" +
  "- Contact: at least one of phone OR email.\n" +
  "- businessName: name of their business.\n" +
  "- websiteGoal: what they want the website to achieve (free text).\n" +
  "- websiteType: exactly one of \"1-page\", \"multi-page\", \"ecommerce\", \"booking/appointments\", \"LMS/training\", \"other\".\n" +
  "- mustHaveFeatures: array of strings, at least one item (e.g. contact form, booking, blog).\n" +
  "- currentStatus: exactly one of \"no site\", \"has site needs redesign\", \"moving from builder\", \"urgent fix\".\n" +
  "- timelineUrgency: exactly one of \"asap\", \"2-4 weeks\", \"1-2 months\", \"flexible\".\n\n" +
  "Optional (nice-to-have): domainStatus, hostingStatus, budgetRange, brandingAssets, contentReadiness, cityState, exampleSites, preferredContact, bestTimeToReach, notes.\n\n" +
  "Completion flow (IMPORTANT):\n" +
  "- First, collect all required fields above. Populate missing_fields with the list of required field names still missing. Do NOT set done=true yet.\n" +
  "- Once every required field is present, you MUST ask: \"Do you have any other questions?\"\n" +
  "- If the user then asks another question, answer it briefly and helpfully, then ask again: \"Do you have any other questions?\" Keep done=false.\n" +
  "- Only when the user clearly indicates they have no more questions (e.g. \"no\", \"nope\", \"that's all\") do you set done=true and fill lead_summary with a concise 2-4 sentence summary. Say a short closing.\n\n" +
  "You will receive the current conversation and the current lead object. Extract any new info from the latest user message and merge into lead_updates.\n\n" +
  "Output ONLY valid JSON, no markdown or extra text, with this exact structure (lead_updates: only keys you are updating this turn; lead_summary: 2-4 sentence summary when done, else empty string):\n" +
  "{ \"assistant_message\": \"...\", \"lead_updates\": { }, \"missing_fields\": [], \"done\": false, \"lead_summary\": \"\" }\n\n" +
  "Allowed lead_updates keys: businessName, contactName, phone, email, cityState, websiteGoal, websiteType, mustHaveFeatures, niceToHaveFeatures, currentStatus, timelineUrgency, domainStatus, hostingStatus, budgetRange, brandingAssets, contentReadiness, exampleSites, preferredContact, bestTimeToReach, notes.";

function buildMessages(
  body: IntakeRequestBody,
  pricingContext: string
): { role: "system" | "user" | "assistant"; content: string }[] {
  const leadContext =
    Object.keys(body.lead ?? {}).length > 0
      ? `\n\nCurrent lead data we have so far:\n${JSON.stringify(body.lead)}`
      : "";
  const systemWithContext = SYSTEM_PROMPT + leadContext + pricingContext;
  const conversation = (body.messages ?? []).map((m) => ({
    role: m.role as "user" | "assistant",
    content: m.content,
  }));
  return [
    { role: "system", content: systemWithContext },
    ...conversation,
  ];
}

function buildPricingContext(lead: LeadUpdates | undefined): string {
  if (!lead || Object.keys(lead).length === 0) return "";
  const est = estimatePricing(lead);
  return [
    "",
    "Pricing guidance (internal) — use only when user asks about cost and we have websiteType, mustHaveFeatures, currentStatus, timelineUrgency:",
    "- Suggested tier: " + est.suggestedTier,
    "- Estimated pages: " + est.estimatedPages,
    "- Rough monthly range: $" + est.monthlyLow + "–$" + est.monthlyHigh + "/mo (not a quote)",
    "- Rationale: " + est.rationale.join(" "),
  ].join("\n");
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

    const pricingContext = buildPricingContext(body.lead);
    const apiMessages = buildMessages(body, pricingContext);

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

    const mergedLead: LeadUpdates = { ...body.lead, ...parsed.lead_updates };
    const pricingEstimate = estimatePricing(mergedLead);

    return NextResponse.json({
      ...parsed,
      pricing_estimate: {
        suggestedTier: pricingEstimate.suggestedTier,
        estimatedPages: pricingEstimate.estimatedPages,
        monthlyLow: pricingEstimate.monthlyLow,
        monthlyHigh: pricingEstimate.monthlyHigh,
        rationale: pricingEstimate.rationale,
      },
    });
  } catch (e) {
    console.error("Intake API error:", e);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

