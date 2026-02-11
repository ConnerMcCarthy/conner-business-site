"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ThemeSwitcher from "./ThemeSwitcher";
import Theme1Home from "./designs/simple-home";
import Theme2Home from "./designs/contractor-home";
import Theme3Home from "./designs/small-business-home";
import Theme4Home from "./designs/local-service-home";
import Theme5Home from "./designs/portfolio-home";
import Theme6Home from "./designs/custom-home";
import Theme7Home from "./designs/professional-home";

type Theme = "theme1" | "theme2" | "theme3" | "theme4" | "theme5" | "theme6" | "theme7";

const THEME_PAGES: Record<Theme, React.ReactNode> = {
  theme1: <Theme1Home />,
  theme2: <Theme2Home />,
  theme3: <Theme3Home />,
  theme4: <Theme4Home />,
  theme5: <Theme5Home />,
  theme6: <Theme6Home />,
  theme7: <Theme7Home />,
};

const THEMES: Theme[] = ["theme1", "theme2", "theme3", "theme4", "theme5", "theme6", "theme7"];

export default function ClientThemeShell() {
  const searchParams = useSearchParams();
  const [theme, setTheme] = useState<Theme>("theme1");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Apply theme from URL ?theme= on load (e.g. /?theme=theme2#ask-ai)
  useEffect(() => {
    if (!mounted) return;
    const t = searchParams.get("theme");
    const themeFromUrl = THEMES.includes(t as Theme) ? (t as Theme) : null;
    if (themeFromUrl) {
      setTheme(themeFromUrl);
      document.documentElement.setAttribute("data-theme", themeFromUrl);
    } else {
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [mounted, searchParams, theme]);

  // Scroll to hash (e.g. #ask-ai) after theme is applied
  useEffect(() => {
    if (!mounted || typeof window === "undefined") return;
    const hash = window.location.hash;
    if (hash) {
      const id = hash.slice(1);
      const scroll = () => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      };
      const t = setTimeout(scroll, 400);
      return () => clearTimeout(t);
    }
  }, [mounted, theme, searchParams]);

  function applyTheme(t: Theme) {
    setTheme(t);
    document.documentElement.setAttribute("data-theme", t);
  }

  return (
    <>
      <header className="topbar">
        <div className="brand text-xl">Samples</div>
        <ThemeSwitcher theme={theme} onChange={applyTheme} />
      </header>

      {mounted ? THEME_PAGES[theme] : THEME_PAGES.theme1}
    </>
  );
}
