"use client";

import { useEffect, useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import Theme1Home from "./designs/Theme1Home";
import Theme2Home from "./designs/Theme2Home";
import Theme3Home from "./designs/Theme3Home";
import Theme4Home from "./designs/Theme4Home";
import Theme5Home from "./designs/Theme5Home";
import Theme6Home from "./designs/Theme6Home";

type Theme = "theme1" | "theme2" | "theme3" | "theme4" | "theme5" | "theme6";

const THEME_PAGES: Record<Theme, React.ReactNode> = {
  theme1: <Theme1Home />,
  theme2: <Theme2Home />,
  theme3: <Theme3Home />,
  theme4: <Theme4Home />,
  theme5: <Theme5Home />,
  theme6: <Theme6Home />,
};

export default function ClientThemeShell() {
  const [theme, setTheme] = useState<Theme>("theme1");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const saved = (localStorage.getItem("theme") as Theme) || "theme1";
    const valid = ["theme1", "theme2", "theme3", "theme4", "theme5", "theme6"].includes(saved) ? saved : "theme1";
    setTheme(valid);
    document.documentElement.setAttribute("data-theme", valid);
  }, [mounted]);

  function applyTheme(t: Theme) {
    setTheme(t);
    localStorage.setItem("theme", t);
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
