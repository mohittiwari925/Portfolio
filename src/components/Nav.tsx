"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 mix-blend-difference">
      <div className="mx-auto flex max-w-[1600px] items-start justify-between px-6 py-6 sm:px-10 sm:py-8">
        <a href="#top" className="font-mono-ui text-xs uppercase tracking-widest text-ink">
          Mohit Tiwari
        </a>

        <nav className="hidden gap-8 font-mono-ui text-xs uppercase tracking-widest text-ink md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-opacity hover:opacity-60">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="/resume.pdf"
          className="hidden font-mono-ui text-xs uppercase tracking-widest text-ink transition-opacity hover:opacity-60 md:inline-block"
        >
          Resume ↗
        </a>

        <button
          aria-label="Toggle menu"
          className="text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 bg-canvas px-6 py-4 font-mono-ui text-sm uppercase tracking-widest text-ink md:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2">
              {l.label}
            </a>
          ))}
          <a href="/resume.pdf" className="py-2">
            Resume ↗
          </a>
        </nav>
      )}
    </header>
  );
}
