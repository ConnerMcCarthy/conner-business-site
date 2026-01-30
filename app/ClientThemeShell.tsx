"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import Theme1Home from "./designs/Theme1Home";
import Theme2Home from "./designs/Theme2Home";
import Theme3Home from "./designs/Theme3Home";
import Theme4Home from "./designs/Theme4Home";
import Theme5Home from "./designs/Theme5Home";

type Theme = "theme1" | "theme2" | "theme3" | "theme4" | "theme5";

const THEME_PAGES: Record<Theme, React.ReactNode> = {
  theme1: <Theme1Home />,
  theme2: <Theme2Home />,
  theme3: <Theme3Home />,
  theme4: <Theme4Home />,
  theme5: <Theme5Home />,
};

export default function ClientThemeShell() {
  const [theme, setTheme] = useState<Theme>("theme1");
  const [mounted, setMounted] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const topbarRef = useRef<HTMLElement>(null);

  const checkScroll = useCallback(() => {
    const el = topbarRef.current;
    if (!el) return;
    const { scrollLeft, clientWidth, scrollWidth } = el;
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 2);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const saved = (localStorage.getItem("theme") as Theme) || "theme1";
    const valid = ["theme1", "theme2", "theme3", "theme4", "theme5"].includes(saved) ? saved : "theme1";
    setTheme(valid);
    document.documentElement.setAttribute("data-theme", valid);
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;
    const run = () => checkScroll();
    run();
    const t = setTimeout(run, 100);
    const el = topbarRef.current;
    const ro = el ? new ResizeObserver(run) : null;
    if (el) ro?.observe(el);
    window.addEventListener("resize", run);
    return () => {
      clearTimeout(t);
      if (el && ro) ro.disconnect();
      window.removeEventListener("resize", run);
    };
  }, [mounted, checkScroll]);

  function scrollRight() {
    const el = topbarRef.current;
    if (!el) return;
    el.scrollBy({ left: 120, behavior: "smooth" });
    requestAnimationFrame(() => setTimeout(checkScroll, 300));
  }

  function applyTheme(t: Theme) {
    setTheme(t);
    localStorage.setItem("theme", t);
    document.documentElement.setAttribute("data-theme", t);
  }

  return (
    <>
      <header
        ref={topbarRef}
        className="topbar relative"
        onScroll={checkScroll}
      >
        <div className="brand text-xl">Designs</div>
        <ThemeSwitcher theme={theme} onChange={applyTheme} />
        {canScrollRight && (
          <button
            type="button"
            onClick={scrollRight}
            className="absolute right-0 top-0 z-10 flex h-full w-10 flex-shrink-0 items-center justify-end pr-1 text-white/70 transition-opacity hover:text-white"
            aria-label="Scroll to see more themes"
          >
            <span className="text-3xl font-medium">&gt;</span>
          </button>
        )}
      </header>

      {mounted ? THEME_PAGES[theme] : THEME_PAGES.theme1}
    </>
  );
}
