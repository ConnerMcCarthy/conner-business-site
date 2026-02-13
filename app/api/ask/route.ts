import { readFile } from "fs/promises";
import { join } from "path";
import { NextResponse } from "next/server";

const FALLBACK_PROMPT = `You are a helpful assistant for a licensed plumbing company. Answer questions about services, pricing, and installations in a friendly, professional way. If asked about specific pricing, encourage them to contact for an estimate. Never mention or recommend other plumbers or competitors—always keep the customer directed to this company (call or email us for details).`;

async function getBusinessData(): Promise<string> {
  try {
    const path = join(process.cwd(), "app", "data", "business-data.md");
    const content = await readFile(path, "utf-8");
    return content.trim();
  } catch {
    return "";
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const question = typeof body?.question === "string" ? body.question.trim() : "";
    if (!question) {
      return NextResponse.json({ error: "Please enter a question." }, { status: 400 });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({
        answer:
          "AI responses are not configured yet. Please call or email with your question about our plumbing services, pricing, or installations.",
      });
    }

    const businessData = await getBusinessData();
    const systemContent = businessData
      ? `You are a helpful assistant for the plumbing company described in the following business data. Use ONLY this information to answer the customer's question. Be concise and professional. If the answer is not in the data, say so and suggest they call or email this company for details. Do not make up information. Never mention or recommend other plumbers or competitors—always direct the customer to this company (e.g. "call us", "we can assess", "schedule an estimate with us").\n\n---\n\n${businessData}`
      : FALLBACK_PROMPT;

    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        messages: [
          { role: "system", content: systemContent },
          { role: "user", content: question },
        ],
        max_tokens: 600,
      }),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      console.error("OpenAI API error:", res.status, err);
      return NextResponse.json(
        { error: "Unable to get a response. Please call (555) 123-4567 for help." },
        { status: 502 }
      );
    }

    const data = (await res.json()) as { choices?: { message?: { content?: string } }[] };
    const answer = data?.choices?.[0]?.message?.content?.trim() || "Sorry, I couldn't generate a response. Please call us at (555) 123-4567.";
    return NextResponse.json({ answer });
  } catch (e) {
    console.error("Ask API error:", e);
    return NextResponse.json(
      { error: "Something went wrong. Please try again or call (555) 123-4567." },
      { status: 500 }
    );
  }
}
