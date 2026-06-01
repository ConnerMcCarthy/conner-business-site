"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const WEBSITES: { name: string; url: string; image: string }[] = [
  { name: "Critter Sitter", url: "https://crittersitter.net", image: "/screenshots/crittersitter.jpg" },
  { name: "Lady K Cosmic", url: "https://ladykcosmic.com", image: "/screenshots/ladykcosmic.jpg" },
  { name: "MKP Hendo", url: "https://mkphendo.com", image: "/screenshots/mkphendo.jpg" },
  { name: "Pamela McCarthy", url: "https://pamelamccarthy.com", image: "/screenshots/pamelamccarthy.jpg" },
  { name: "McCarthy Studies", url: "https://mccarthystudies.com", image: "/screenshots/mccarthystudies.jpg" },
  { name: "Oort", url: "https://oort.connermccarthy.com", image: "/screenshots/oort.jpg" },
];

function SiteCard({ name, url, image }: { name: string; url: string; image: string }) {
  const [imgError, setImgError] = useState(false);
  const domain = url.replace(/^https?:\/\//, "");

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:scale-[1.02] hover:border-slate-300 hover:shadow-lg"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
        {!imgError ? (
          <Image
            src={image}
            alt={`Screenshot of ${name}`}
            fill
            sizes="(min-width: 1024px) 520px, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
            <span className="text-sm text-slate-400">{domain}</span>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between px-4 py-3">
        <div>
          <div className="text-sm font-semibold text-slate-800">{name}</div>
          <div className="text-xs text-slate-500">{domain}</div>
        </div>
        <span className="text-xs font-medium text-slate-400 transition-colors duration-200 group-hover:text-slate-700">
          Visit ↗
        </span>
      </div>
    </a>
  );
}

export default function WebsitesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-blue-50/95 to-blue-100">
      <header className="sticky top-0 z-30 border-b border-slate-200/60 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <Image
              src="/conner-headshot-v2.png"
              alt="Conner McCarthy"
              width={40}
              height={40}
              className="h-10 w-10 rounded-xl object-cover ring-1 ring-slate-200"
            />
            <div className="leading-tight">
              <div className="text-sm font-semibold">Conner McCarthy Websites</div>
              <div className="text-xs text-slate-500">Web design and Hosting</div>
            </div>
          </div>
          <Link
            href="/"
            className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-all duration-200 hover:border-slate-400 hover:bg-slate-50"
          >
            ← Back
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-12">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Client Websites
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Sites built and hosted by Conner McCarthy.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {WEBSITES.map((site) => (
              <SiteCard key={site.url} {...site} />
            ))}
          </div>
        </div>
      </div>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Conner McCarthy Websites</div>
          <div className="text-slate-500">Built with Next.js</div>
        </div>
      </footer>
    </main>
  );
}
