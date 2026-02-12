import { Suspense } from "react";
import ClientThemeShell from "./ClientThemeShell";

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-600">Loading…</div>}>
      <ClientThemeShell />
    </Suspense>
  );
}
