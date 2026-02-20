import { NextResponse } from "next/server";
import { getSupabaseServer } from "@/app/lib/supabase-server";

export async function GET() {
  const supabase = getSupabaseServer();
  if (!supabase) {
    return NextResponse.json(
      { error: "Database not configured" },
      { status: 503 }
    );
  }

  const { data, error } = await supabase
    .from("llm_sessions")
    .select("id, created_at, title, prompt, summary, model_ids, conversation_model_id")
    .order("created_at", { ascending: false })
    .limit(100);

  if (error) {
    console.error("LLM history error:", error);
    return NextResponse.json(
      { error: error.message ?? "Failed to load history" },
      { status: 500 }
    );
  }

  const entries = (data ?? []).map((row: { id: string; created_at: string; title: string | null; prompt: string; summary: string; model_ids: string[]; conversation_model_id: string | null }) => ({
    id: row.id,
    created_at: row.created_at,
    title: row.title ?? null,
    prompt: row.prompt ?? "",
    summary: row.summary ?? "",
    model_ids: Array.isArray(row.model_ids) ? row.model_ids : [],
    conversation_model_id: row.conversation_model_id ?? null,
  }));

  return NextResponse.json({ entries });
}
