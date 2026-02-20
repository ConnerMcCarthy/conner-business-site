import { NextResponse } from "next/server";

type LLMResponse = {
  provider: string;
  response: string;
  error?: string;
};

type LLMRequestBody = {
  prompt: string;
  /** If provided, only these model ids are called. Summary runs only when length > 1. */
  models?: string[];
};

type LLMResult = {
  summary: string;
  responses: LLMResponse[];
};

async function callOpenAI(prompt: string): Promise<string> {
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
      messages: [{ role: "user", content: prompt }],
      max_completion_tokens: 2000,
    }),
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(`OpenAI API error: ${res.status} ${JSON.stringify(error)}`);
  }

  const data = await res.json();
  
  // Handle different response structures for different models
  const content = data.choices?.[0]?.message?.content;
  if (content) {
    return content;
  }
  
  // Log the actual response structure for debugging
  console.error("OpenAI response structure:", JSON.stringify(data, null, 2));
  
  // Try alternative paths
  if (data.choices?.[0]?.message?.text) {
    return data.choices[0].message.text;
  }
  if (data.choices?.[0]?.text) {
    return data.choices[0].text;
  }
  
  throw new Error(`Unexpected OpenAI response structure: ${JSON.stringify(data)}`);
}

async function callOpenAI41(prompt: string): Promise<string> {
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
      messages: [{ role: "user", content: prompt }],
      max_tokens: 2000,
    }),
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(`OpenAI API error: ${res.status} ${JSON.stringify(error)}`);
  }

  const data = await res.json();
  const content = data.choices?.[0]?.message?.content;
  return content ?? "";
}

async function callClaude(prompt: string): Promise<string> {
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
      messages: [{ role: "user", content: prompt }],
    }),
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(`Claude API error: ${res.status} ${JSON.stringify(error)}`);
  }

  const data = await res.json();
  return data.content?.[0]?.text || "No response";
}

async function callClaudeSonnet(prompt: string): Promise<string> {
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
      messages: [{ role: "user", content: prompt }],
    }),
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(`Claude API error: ${res.status} ${JSON.stringify(error)}`);
  }

  const data = await res.json();
  return data.content?.[0]?.text || "No response";
}

async function callGrok(prompt: string): Promise<string> {
  const apiKey = process.env.GROK_API_KEY;
  if (!apiKey) {
    throw new Error("Grok API key not configured");
  }

  // Note: Grok API endpoint may vary; adjust based on xAI's actual API
  // This is a placeholder structure - you'll need to check xAI's documentation
  const res = await fetch("https://api.x.ai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "grok-4-1-fast-reasoning", // Grok 4-1 fast reasoning model
      messages: [{ role: "user", content: prompt }],
      max_tokens: 2000,
    }),
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(`Grok API error: ${res.status} ${JSON.stringify(error)}`);
  }

  const data = await res.json();
  return data.choices?.[0]?.message?.content || "No response";
}

async function callGrokNonReasoning(prompt: string): Promise<string> {
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
      messages: [{ role: "user", content: prompt }],
      max_tokens: 2000,
    }),
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(`Grok API error: ${res.status} ${JSON.stringify(error)}`);
  }

  const data = await res.json();
  return data.choices?.[0]?.message?.content || "No response";
}

async function callDeepSeek(prompt: string): Promise<string> {
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
      messages: [{ role: "user", content: prompt }],
      max_tokens: 2000,
    }),
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(`DeepSeek API error: ${res.status} ${JSON.stringify(error)}`);
  }

  const data = await res.json();
  return data.choices?.[0]?.message?.content || "No response";
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
- Keep total output under 700 words unless the user explicitly asked for more.

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
  if (content) return content;
  if (data.choices?.[0]?.message?.text) return data.choices[0].message.text;
  if (data.choices?.[0]?.text) return data.choices[0].text;
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

function buildPromises(
  prompt: string,
  modelIds: string[]
): Promise<LLMResponse>[] {
  const set = new Set(modelIds);
  const promises: Promise<LLMResponse>[] = [];

  if (set.has("openai-5.2")) {
    promises.push(
      callOpenAI(prompt).then(
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
      callOpenAI41(prompt).then(
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
      callClaude(prompt).then(
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
      callClaudeSonnet(prompt).then(
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
      callGrok(prompt).then(
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
      callGrokNonReasoning(prompt).then(
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
      callDeepSeek(prompt).then(
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
    const { prompt, models: requestedModels } = body;

    if (!prompt || typeof prompt !== "string" || prompt.trim().length === 0) {
      return NextResponse.json(
        { error: "Prompt is required and must be a non-empty string" },
        { status: 400 }
      );
    }

    const modelIds: string[] =
      requestedModels && requestedModels.length > 0
        ? requestedModels
        : [...MODEL_IDS];

    const promises = buildPromises(prompt, modelIds);
    if (promises.length === 0) {
      return NextResponse.json(
        { error: "At least one model must be selected" },
        { status: 400 }
      );
    }

    const responses: LLMResponse[] = await Promise.all(promises);

    let summary: string = "";
    if (responses.length > 1) {
      try {
        summary = await generateSummary(responses);
      } catch (error) {
        summary =
          "Failed to generate summary. " +
          (error instanceof Error ? error.message : "Unknown error");
      }
    }

    const result: LLMResult = {
      summary,
      responses,
    };

    return NextResponse.json(result);
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
