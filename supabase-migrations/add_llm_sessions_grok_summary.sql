-- Add Grok 4-1 reasoning brief summary to llm_sessions.
-- Run in Supabase SQL Editor.
ALTER TABLE llm_sessions
ADD COLUMN IF NOT EXISTS grok_summary text;
