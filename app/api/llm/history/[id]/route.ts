import { NextResponse } from "next/server";
import { getSupabaseServer } from "@/app/lib/supabase-server";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  if (!id) {
    return NextResponse.json({ error: "Missing session id" }, { status: 400 });
  }

  const supabase = getSupabaseServer();
  if (!supabase) {
    return NextResponse.json(
      { error: "Database not configured" },
      { status: 503 }
    );
  }

  const { data: session, error: sessionError } = await supabase
    .from("llm_sessions")
    .select("id, created_at, title, prompt, summary, grok_summary, model_ids, conversation_model_id, messages")
    .eq("id", id)
    .single();

  if (sessionError || !session) {
    return NextResponse.json(
      { error: sessionError?.message ?? "Session not found" },
      { status: 404 }
    );
  }

  const { data: responses, error: responsesError } = await supabase
    .from("llm_responses")
    .select("provider, model_id, response, error, sort_order")
    .eq("session_id", id)
    .order("sort_order", { ascending: true });

  if (responsesError) {
    console.error("LLM history session responses error:", responsesError);
    return NextResponse.json(
      { error: responsesError.message ?? "Failed to load responses" },
      { status: 500 }
    );
  }

  const messages = session.messages;
  const messagesList = Array.isArray(messages)
    ? (messages as { role: string; content: string }[]).map((m) => ({
        role: m.role as "user" | "assistant",
        content: typeof m.content === "string" ? m.content : "",
      }))
    : [];

  return NextResponse.json({
    session: {
      id: session.id,
      created_at: session.created_at,
      title: session.title ?? null,
      prompt: session.prompt ?? "",
      summary: session.summary ?? "",
      grok_summary: session.grok_summary ?? null,
      model_ids: Array.isArray(session.model_ids) ? session.model_ids : [],
      conversation_model_id: session.conversation_model_id ?? null,
      messages: messagesList,
    },
    responses: (responses ?? []).map((r: { provider: string; model_id: string; response: string; error: string | null; sort_order: number }) => ({
      provider: r.provider,
      model_id: r.model_id,
      response: r.response ?? "",
      error: r.error ?? null,
      sort_order: r.sort_order,
    })),
  });
}
