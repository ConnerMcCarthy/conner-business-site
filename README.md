# Conner McCarthy — Business & Tools

A Next.js site that combines a **themed business/portfolio homepage**, a **website scoping intake flow**, and a **Multi-LLM Aggregator** for comparing and synthesizing AI model responses.

---

## What the site does

### Home

- **Themeable landing** — Multiple visual themes (e.g. simple, contractor, small business, portfolio, professional) selectable via URL (`?theme=theme2`) or in-app.
- **Sections** — Hero, services, contact, and optional “Ask AI” / intake entry points depending on theme.

### Intake (`/intake`)

- **Conversational website scoping** — Chat-style flow that collects business context and website goals.
- **Structured lead data** — Captures project type, scope, and a free-form website description; supports pricing/estimation logic based on keywords.
- **Email delivery** — Option to send the summarized lead to a configured address.

### Multi-LLM Aggregator (`/llm`)

- **One prompt, many models** — Send a single prompt to several LLMs at once and compare answers in one place.
- **Supported models**
  - OpenAI 5.2, OpenAI 4.1  
  - Claude Opus 4.6, Claude Sonnet 4.6  
  - Grok 4-1 Fast (Reasoning & Non-Reasoning)  
  - DeepSeek Chat  
- **Summaries (when 2+ models selected)**
  - **Grok 4-1 Reasoning** — Short compare/contrast summary (optional).
  - **Model-Response Synthesis (OpenAI 5.2)** — Structured synthesis: per-model summaries, agreement/disagreement, gaps, and a final synthesis (optional).
- **Options**
  - Checkboxes to choose which summaries to run.
  - **Double prompt** — Sends the prompt twice (end-to-end) to potentially improve some model responses.
- **Speech-to-text** — Record or upload audio; transcript is appended to the prompt (gpt-4o-transcribe).
- **Continue conversation** — After a multi-model run, pick one model and keep a single-model thread with full history.
- **History (`/llm/history`)** — All runs saved to Supabase; list view with expandable entries showing prompt, full conversation (for continued chats), Grok summary, Synthesis, and individual model responses. Conversation entries are tagged and show the full thread in chat bubbles.

---

## Tech stack

| Area        | Tech |
|------------|------|
| Framework  | Next.js 16 (App Router) |
| UI         | React 19, Tailwind CSS 4 |
| Database   | Supabase (PostgreSQL) |
| Markdown   | react-markdown, remark-gfm |
| Email      | Nodemailer |
| Maps       | Leaflet / react-leaflet (where used) |

---

## Getting started

### Install and run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

Create `.env.local` and set what you use:

| Variable | Purpose |
|----------|---------|
| `SUPABASE_URL` | Supabase project URL (LLM history) |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key (server-only) |
| `OPENAI_API_KEY` | OpenAI (prompts, synthesis, transcription) |
| `ANTHROPIC_API_KEY` | Claude models |
| `GROK_API_KEY` | Grok models |
| `DEEPSEEK_API_KEY` | DeepSeek model |
| (Email) | As required by your intake/contact flow |

### Database (Supabase)

For LLM history, run the schema in the Supabase SQL Editor (see `supabase-migrations/` or the schema described in the codebase: `llm_sessions`, `llm_responses` with columns such as `prompt`, `messages`, `summary`, `grok_summary`, `title`, `conversation_model_id`, etc.).

---

## Project structure (high level)

```
app/
  page.tsx              # Home (theme shell)
  ClientThemeShell.tsx  # Theme routing + switcher
  ThemeSwitcher.tsx
  designs/              # Theme-specific home components (theme1–theme7)
  intake/
    page.tsx            # Intake form
  llm/
    page.tsx            # Multi-LLM Aggregator
    history/
      page.tsx          # LLM history list + expandable detail
  api/
    llm/
      route.ts          # Multi-model + summaries + persistence
      history/
        route.ts        # List sessions
        [id]/route.ts   # Session detail + responses
    transcribe/
      route.ts          # Speech-to-text
    intake/
      route.ts          # Intake backend
  lib/
    supabase-server.ts  # Server Supabase client
  components/
    IntakePage.tsx
```

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Run production server |
| `npm run lint` | Run ESLint |

---

## License

Private. All rights reserved.
