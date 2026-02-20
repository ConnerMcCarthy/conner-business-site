import { createClient } from "@supabase/supabase-js";

/**
 * Server-only Supabase client with service role. Use in API routes only.
 * Bypasses RLS; never expose this client or the service role key to the client.
 */
export function getSupabaseServer() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    return null;
  }
  return createClient(url, key, { auth: { persistSession: false } });
}
