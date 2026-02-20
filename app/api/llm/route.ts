import { NextResponse } from "next/server";
import { getSupabaseServer } from "@/app/lib/supabase-server";

type LLMResponse = {
  provider: string;
  response: string;
  error?: string;
};

export type ChatMessage = { role: "user" | "assistant"; content: string };

type LLMRequestBody = {
  prompt: string;
  /** If provided, only these model ids are called. Summary runs only when length > 1. */
  models?: string[];
  /** Full conversation history for follow-up replies. When provided, used instead of single prompt. */
  messages?: ChatMessage[];
  /** When replying in a conversation, send the existing session id so we update it instead of creating a new entry. */
  sessionId?: string;
  /** Include Grok 4-1 reasoning summary when 2+ models. Default true. */
  useGrokSummary?: boolean;
  /** Include OpenAI 5.2 synthesis when 2+ models. Default true. */
  useSynthesis?: boolean;
};

type LLMResult = {
  summary: string;
  grokSummary?: string;
  responses: LLMResponse[];
};

/** Normalize API content to string (handles OpenAI array format and other shapes). */
function normalizeContent(content: unknown): string {
  if (typeof content === "string") return content;
  if (Array.isArray(content)) {
    return content
      .map((part) =>
        part && typeof part === "object" && "text" in part
          ? (part as { text?: string }).text
          : String(part)
      )
      .filter(Boolean)
      .join("");
  }
  return String(content ?? "");
}

async function callOpenAI(messages: ChatMessage[]): Promise<string> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error("OpenAI API key not configured");
  }

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-5.2",
      messages,
      max_completion_tokens: 2000,
    }),
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(`OpenAI API error: ${res.status} ${JSON.stringify(error)}`);
  }

  const data = await res.json();
  const content = data.choices?.[0]?.message?.content;
  if (content !== undefined && content !== null) {
    return normalizeContent(content);
  }
  if (data.choices?.[0]?.message?.text) {
    return normalizeContent(data.choices[0].message.text);
  }
  if (data.choices?.[0]?.text) {
    return normalizeContent(data.choices[0].text);
  }
  console.error("OpenAI response structure:", JSON.stringify(data, null, 2));
  throw new Error(`Unexpected OpenAI response structure: ${JSON.stringify(data)}`);
}

async function callOpenAI41(messages: ChatMessage[]): Promise<string> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error("OpenAI API key not configured");
  }

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-4.1",
      messages,
      max_tokens: 2000,
    }),
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(`OpenAI API error: ${res.status} ${JSON.stringify(error)}`);
  }

  const data = await res.json();
  const content = data.choices?.[0]?.message?.content;
  return normalizeContent(content ?? "");
}

async function callClaude(messages: ChatMessage[]): Promise<string> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    throw new Error("Anthropic API key not configured");
  }

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-opus-4-6",
      max_tokens: 2000,
      messages,
    }),
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(`Claude API error: ${res.status} ${JSON.stringify(error)}`);
  }

  const data = await res.json();
  const text = data.content?.[0]?.text;
  return normalizeContent(text ?? "");
}

async function callClaudeSonnet(messages: ChatMessage[]): Promise<string> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    throw new Error("Anthropic API key not configured");
  }

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-6",
      max_tokens: 2000,
      messages,
    }),
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(`Claude API error: ${res.status} ${JSON.stringify(error)}`);
  }

  const data = await res.json();
  const text = data.content?.[0]?.text;
  return normalizeContent(text ?? "");
}

async function callGrok(messages: ChatMessage[]): Promise<string> {
  const apiKey = process.env.GROK_API_KEY;
  if (!apiKey) {
    throw new Error("Grok API key not configured");
  }

  const res = await fetch("https://api.x.ai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "grok-4-1-fast-reasoning",
      messages,
      max_tokens: 2000,
    }),
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(`Grok API error: ${res.status} ${JSON.stringify(error)}`);
  }

  const data = await res.json();
  return normalizeContent(data.choices?.[0]?.message?.content ?? "");
}

async function callGrokNonReasoning(messages: ChatMessage[]): Promise<string> {
  const apiKey = process.env.GROK_API_KEY;
  if (!apiKey) {
    throw new Error("Grok API key not configured");
  }

  const res = await fetch("https://api.x.ai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "grok-4-1-fast-non-reasoning",
      messages,
      max_tokens: 2000,
    }),
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(`Grok API error: ${res.status} ${JSON.stringify(error)}`);
  }

  const data = await res.json();
  return normalizeContent(data.choices?.[0]?.message?.content ?? "");
}

async function callDeepSeek(messages: ChatMessage[]): Promise<string> {
  const apiKey = process.env.DEEPSEEK_API_KEY;
  if (!apiKey) {
    throw new Error("DeepSeek API key not configured");
  }

  const res = await fetch("https://api.deepseek.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "deepseek-chat",
      messages,
      max_tokens: 2000,
    }),
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(`DeepSeek API error: ${res.status} ${JSON.stringify(error)}`);
  }

  const data = await res.json();
  return normalizeContent(data.choices?.[0]?.message?.content ?? "");
}

/** Brief compare/contrast summary of model responses. Uses Grok 4-1 reasoning. */
async function generateGrokSummary(responses: LLMResponse[]): Promise<string> {
  const validResponses = responses.filter((r) => !r.error);
  if (validResponses.length === 0) return "";
  const context = validResponses
    .map((r) => `**${r.provider}:**\n${r.response}`)
    .join("\n\n---\n\n");
  const messages: ChatMessage[] = [
    {
      role: "user",
      content: `Briefly summarize and compare and contrast these models' responses.\n\n${context}`,
    },
  ];
  try {
    return await callGrok(messages);
  } catch {
    return "";
  }
}

/** One-sentence title summarizing the synthesis. Uses Grok 4.1 non-reasoning. */
async function generateTitle(summary: string): Promise<string> {
  if (!summary.trim()) return "";
  const apiKey = process.env.GROK_API_KEY;
  if (!apiKey) return "";
  const messages: ChatMessage[] = [
    {
      role: "user",
      content: `Summarize the following in one short sentence. Reply with only that sentence, no quotes or preamble.\n\n${summary}`,
    },
  ];
  try {
    const out = await callGrokNonReasoning(messages);
    return (out ?? "").trim().slice(0, 500) || "";
  } catch {
    return "";
  }
}

async function generateSummary(responses: LLMResponse[]): Promise<string> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error("OpenAI API key not configured for summary");
  }

  // Filter out errors and build context
  const validResponses = responses.filter((r) => !r.error);
  if (validResponses.length === 0) {
    return "No valid responses to summarize.";
  }

  const context = validResponses
    .map((r) => `**${r.provider}:**\n${r.response}`)
    .join("\n\n---\n\n");

  const summaryPrompt = `You are a model-response synthesizer. You will be given multiple responses from different models in the responses below.

Output in this exact structure:

## 1) Per-model summaries (1–3 bullets each)
For each model: 
- Thesis (1 sentence)
- Key points (bullets)
- Notable assumptions / caveats (bullets)

## 2) Agreement map
- Points most models share (bullets)
- Terms/definitions they implicitly agree on (if any)

## 3) Disagreement map
For each disagreement:
- Topic:
- Model positions (A/B/C…):
- What would resolve it (missing evidence, definitions, calculation, source):

## 4) Unique contributions
List insights that appear in only one model, labeled by model.

## 5) Gaps & omissions
- Important questions none answered
- Missing constraints, edge cases, or safety concerns

## 6) Synthesis (5–10 sentences)
A unified view that preserves key disagreements and explains why they matter.

Rules:
- Do not invent claims not present in responses
- When you attribute a point, label it with the model name/id from responses
- Prefer concrete comparisons over vague statements.
- Base target: ~500–700 words for up to 4 models with moderate disagreement.
- If analyzing 5–7 models, or if there are multiple substantive disagreements, you may expand to 900 words. More if necissary.

---

**Responses to synthesize:**

${context}`;

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-5.2",
      messages: [{ role: "user", content: summaryPrompt }],
      max_completion_tokens: 8000,
    }),
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(`Summary API error: ${res.status} ${JSON.stringify(error)}`);
  }

  const data = await res.json();
  const content = data.choices?.[0]?.message?.content;
  if (content !== undefined && content !== null) return normalizeContent(content);
  if (data.choices?.[0]?.message?.text) return normalizeContent(data.choices[0].message.text);
  if (data.choices?.[0]?.text) return normalizeContent(data.choices[0].text);
  console.error("Summary response structure:", JSON.stringify(data, null, 2));
  throw new Error(
    "Summary model returned no text. Check server logs for response structure."
  );
}

const MODEL_IDS = [
  "openai-5.2",
  "openai-4.1",
  "claude-opus",
  "claude-sonnet",
  "grok-reasoning",
  "grok-non-reasoning",
  "deepseek",
] as const;

const PROVIDER_TO_MODEL_ID: Record<string, string> = {
  "OpenAI 5.2": "openai-5.2",
  "OpenAI 4.1": "openai-4.1",
  "Claude Opus 4.6": "claude-opus",
  "Claude Sonnet 4.6": "claude-sonnet",
  "Grok 4-1 Fast Reasoning": "grok-reasoning",
  "Grok 4-1 Fast Non-Reasoning": "grok-non-reasoning",
  "DeepSeek Chat": "deepseek",
};

function buildPromises(
  messages: ChatMessage[],
  modelIds: string[]
): Promise<LLMResponse>[] {
  const set = new Set(modelIds);
  const promises: Promise<LLMResponse>[] = [];

  if (set.has("openai-5.2")) {
    promises.push(
      callOpenAI(messages).then(
        (r) => ({ provider: "OpenAI 5.2", response: r }),
        (e) => ({
          provider: "OpenAI 5.2",
          response: "",
          error: e instanceof Error ? e.message : "Unknown error",
        })
      )
    );
  }
  if (set.has("openai-4.1")) {
    promises.push(
      callOpenAI41(messages).then(
        (r) => ({ provider: "OpenAI 4.1", response: r }),
        (e) => ({
          provider: "OpenAI 4.1",
          response: "",
          error: e instanceof Error ? e.message : "Unknown error",
        })
      )
    );
  }
  if (set.has("claude-opus")) {
    promises.push(
      callClaude(messages).then(
        (r) => ({ provider: "Claude Opus 4.6", response: r }),
        (e) => ({
          provider: "Claude Opus 4.6",
          response: "",
          error: e instanceof Error ? e.message : "Unknown error",
        })
      )
    );
  }
  if (set.has("claude-sonnet")) {
    promises.push(
      callClaudeSonnet(messages).then(
        (r) => ({ provider: "Claude Sonnet 4.6", response: r }),
        (e) => ({
          provider: "Claude Sonnet 4.6",
          response: "",
          error: e instanceof Error ? e.message : "Unknown error",
        })
      )
    );
  }
  if (set.has("grok-reasoning")) {
    promises.push(
      callGrok(messages).then(
        (r) => ({ provider: "Grok 4-1 Fast Reasoning", response: r }),
        (e) => ({
          provider: "Grok 4-1 Fast Reasoning",
          response: "",
          error: e instanceof Error ? e.message : "Unknown error",
        })
      )
    );
  }
  if (set.has("grok-non-reasoning")) {
    promises.push(
      callGrokNonReasoning(messages).then(
        (r) => ({ provider: "Grok 4-1 Fast Non-Reasoning", response: r }),
        (e) => ({
          provider: "Grok 4-1 Fast Non-Reasoning",
          response: "",
          error: e instanceof Error ? e.message : "Unknown error",
        })
      )
    );
  }
  if (set.has("deepseek")) {
    promises.push(
      callDeepSeek(messages).then(
        (r) => ({ provider: "DeepSeek Chat", response: r }),
        (e) => ({
          provider: "DeepSeek Chat",
          response: "",
          error: e instanceof Error ? e.message : "Unknown error",
        })
      )
    );
  }

  return promises;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LLMRequestBody;
    const { prompt, models: requestedModels, messages: bodyMessages, sessionId: bodySessionId, useGrokSummary = true, useSynthesis = true } = body;

    const messages: ChatMessage[] =
      bodyMessages && bodyMessages.length > 0
        ? bodyMessages
        : prompt && typeof prompt === "string" && prompt.trim().length > 0
          ? [{ role: "user", content: prompt.trim() }]
          : [];

    if (messages.length === 0) {
      return NextResponse.json(
        { error: "Prompt or messages are required" },
        { status: 400 }
      );
    }

    const modelIds: string[] =
      requestedModels && requestedModels.length > 0
        ? requestedModels
        : [...MODEL_IDS];

    const promises = buildPromises(messages, modelIds);
    if (promises.length === 0) {
      return NextResponse.json(
        { error: "At least one model must be selected" },
        { status: 400 }
      );
    }

    const responses: LLMResponse[] = await Promise.all(promises);

    const isReplyToExistingSession =
      bodySessionId &&
      typeof bodySessionId === "string" &&
      modelIds.length === 1 &&
      messages.length > 1;

    let summary: string = "";
    let grokSummary: string = "";
    if (responses.length > 1) {
      const promises: Promise<string>[] = [];
      if (useSynthesis) {
        promises.push(
          generateSummary(responses).catch((error) =>
            "Failed to generate summary. " +
            (error instanceof Error ? error.message : "Unknown error")
          )
        );
      }
      if (useGrokSummary) {
        promises.push(generateGrokSummary(responses).catch(() => ""));
      }
      const results = await Promise.all(promises);
      let i = 0;
      if (useSynthesis) summary = results[i++] ?? "";
      if (useGrokSummary) grokSummary = results[i++] ?? "";
    }

    let title = "";
    if (!isReplyToExistingSession) {
      try {
        const titleSource = summary.trim() || grokSummary.trim();
        title = titleSource ? await generateTitle(titleSource) : "";
      } catch {
        // keep title ""
      }
    }

    let sessionId: string | null = null;
    const supabase = getSupabaseServer();
    if (supabase) {
      try {
        if (isReplyToExistingSession) {
          const r = responses[0];
          const messagesWithLatest: ChatMessage[] = [
            ...messages,
            { role: "assistant", content: r.error ? `[Error: ${r.error}]` : r.response },
          ];
          const { error: updateError } = await supabase
            .from("llm_sessions")
            .update({
              messages: messagesWithLatest as unknown as Record<string, unknown>[],
              conversation_model_id: modelIds[0],
            })
            .eq("id", bodySessionId);

          if (updateError) {
            console.error("LLM update session error:", updateError);
          } else {
            const { data: existingRows } = await supabase
              .from("llm_responses")
              .select("sort_order")
              .eq("session_id", bodySessionId)
              .order("sort_order", { ascending: false })
              .limit(1);
            const nextSortOrder = existingRows?.[0]?.sort_order != null ? existingRows[0].sort_order + 1 : 0;
            await supabase.from("llm_responses").insert({
              session_id: bodySessionId,
              provider: r.provider,
              model_id: PROVIDER_TO_MODEL_ID[r.provider] ?? r.provider,
              response: r.response,
              error: r.error ?? null,
              sort_order: nextSortOrder,
            });
            sessionId = bodySessionId;
          }
        } else {
          const promptText = messages[0]?.content ?? "";
          const conversationModelId = modelIds.length === 1 ? modelIds[0] : null;
          const { data: sessionRow, error: sessionError } = await supabase
            .from("llm_sessions")
            .insert({
              prompt: promptText,
              messages: messages as unknown as Record<string, unknown>[],
              model_ids: modelIds,
              summary,
              grok_summary: grokSummary || null,
              title: title || null,
              conversation_model_id: conversationModelId,
            })
            .select("id")
            .single();

          if (sessionError) {
            console.error("LLM save session error:", sessionError);
          } else if (sessionRow?.id) {
            sessionId = sessionRow.id;
            for (let i = 0; i < responses.length; i++) {
              const r = responses[i];
              await supabase.from("llm_responses").insert({
                session_id: sessionRow.id,
                provider: r.provider,
                model_id: PROVIDER_TO_MODEL_ID[r.provider] ?? r.provider,
                response: r.response,
                error: r.error ?? null,
                sort_order: i,
              });
            }
          }
        }
      } catch (err) {
        console.error("LLM save error:", err);
      }
    }

    const result: LLMResult = {
      summary,
      ...(grokSummary ? { grokSummary } : {}),
      responses,
    };
    return NextResponse.json(
      sessionId ? { ...result, sessionId } : result
    );
  } catch (error) {
    console.error("LLM API error:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}
