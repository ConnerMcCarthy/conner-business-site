import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "OpenAI API key not configured" },
        { status: 503 }
      );
    }

    const formData = await request.formData();
    const file = formData.get("file") as File | null;
    if (!file || !(file instanceof File)) {
      return NextResponse.json(
        { error: "Missing or invalid file. Send a single audio file as 'file'." },
        { status: 400 }
      );
    }

    const body = new FormData();
    body.append("file", file);
    body.append("model", "gpt-4o-transcribe");
    body.append("response_format", "text");

    const res = await fetch("https://api.openai.com/v1/audio/transcriptions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
      body,
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      return NextResponse.json(
        { error: err?.error?.message || `Transcription failed: ${res.status}` },
        { status: res.status }
      );
    }

    const text = await res.text();
    return NextResponse.json({ text: text.trim() || "" });
  } catch (e) {
    console.error("Transcribe API error:", e);
    return NextResponse.json(
      { error: "Transcription failed. Please try again." },
      { status: 500 }
    );
  }
}
