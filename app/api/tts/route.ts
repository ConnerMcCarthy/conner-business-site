import { NextResponse } from "next/server";

const TTS_MAX_CHARS = 4096;
const VOICE = "marin";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const text = typeof body?.text === "string" ? body.text.trim() : "";
    if (!text) {
      return NextResponse.json({ error: "Missing or empty text" }, { status: 400 });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "OpenAI API key not configured" }, { status: 503 });
    }

    const input = text.length > TTS_MAX_CHARS ? text.slice(0, TTS_MAX_CHARS) + "…" : text;

    const res = await fetch("https://api.openai.com/v1/audio/speech", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini-tts",
        input,
        voice: VOICE,
        response_format: "mp3",
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("OpenAI TTS error:", res.status, err);
      return NextResponse.json(
        { error: res.status === 401 ? "Invalid API key" : "TTS failed" },
        { status: res.status >= 500 ? 502 : res.status }
      );
    }

    const audioBuffer = await res.arrayBuffer();
    return new NextResponse(audioBuffer, {
      headers: {
        "Content-Type": "audio/mpeg",
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("TTS route error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
