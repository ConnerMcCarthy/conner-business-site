"use client";

import Link from "next/link";
import { useState } from "react";

type NavLink = {
  label: string;
  href: string;
};

type NavbarProps = {
  logo: string;
  links: NavLink[];
  cta: {
    label: string;
    href: string;
  };
};

export default function Navbar({ logo, links, cta }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-[var(--topbar-height)] z-40 border-b border-slate-500/30 bg-[#2f3a46]">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="#" className="text-xl font-bold tracking-wide text-white" aria-label="Go to top of page">
          {logo}
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:text-orange-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href={cta.href}
            className="rounded-full bg-[#e56a2e] px-6 py-3 text-xs font-bold uppercase tracking-[0.05em] text-white transition-colors hover:bg-[#cd5620]"
          >
            {cta.label}
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          aria-controls="professional-mobile-nav"
          onClick={() => setIsOpen((open) => !open)}
          className="rounded-md p-2 text-white transition hover:bg-slate-600/40 lg:hidden"
        >
          <span className="block h-0.5 w-6 bg-white" />
          <span className="mt-1.5 block h-0.5 w-6 bg-white" />
          <span className="mt-1.5 block h-0.5 w-6 bg-white" />
        </button>
      </div>

      {isOpen && (
        <nav
          id="professional-mobile-nav"
          aria-label="Mobile"
          className="border-t border-slate-500/40 bg-[#2f3a46] px-4 py-4 lg:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-white transition-colors hover:text-orange-200"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={cta.href}
              className="mt-2 inline-flex w-fit rounded-full bg-[#e56a2e] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.05em] text-white transition-colors hover:bg-[#cd5620]"
              onClick={() => setIsOpen(false)}
            >
              {cta.label}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
