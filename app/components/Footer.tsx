import Link from "next/link";

type FooterProps = {
  id?: string;
  logo: string;
  links: { label: string; href: string }[];
};

export default function Footer({ id, logo, links }: FooterProps) {
  return (
    <footer id={id} className="bg-[#1f2933] py-8 text-slate-200">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm md:flex-row md:px-6">
        <p className="font-semibold tracking-[0.08em] uppercase">{logo}</p>
        <nav className="flex flex-wrap items-center justify-center gap-4" aria-label="Footer links">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
