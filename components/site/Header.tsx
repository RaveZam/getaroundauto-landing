"use client";

import { useEffect, useState } from "react";
import { business } from "@/lib/business";
import { PhoneLink } from "@/components/ui/PhoneLink";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const links: [string, string][] = [
    ["About", "#about"],
    ["Why Us", "#why"],
    ["Visit", "#contact"],
  ];

  return (
    <header className="relative z-30 border-b border-rule/60 bg-cream/85 backdrop-blur supports-[backdrop-filter]:bg-cream/60">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-10 h-14 sm:h-16 flex items-center gap-4 sm:gap-8">
        <a href="#top" className="flex items-center gap-2.5 sm:gap-3 group min-w-0">
          <span className="hidden sm:inline-flex">
            <Mark />
          </span>
          <div className="flex flex-col leading-none min-w-0">
            <span className="display text-[1.25rem] sm:text-[1.05rem] tracking-tight truncate">
              {business.name}
            </span>
            <span className="hidden xs:inline text-[0.55rem] sm:text-[0.6rem] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-muted mt-1 truncate">
              West Helena · Arkansas
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm text-ink/80 ml-6">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="relative py-1 hover:text-ink transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <PhoneLink className="hidden sm:inline-flex text-sm font-medium text-ink hover:text-brick transition-colors" />
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 bg-ink text-cream px-3.5 py-2 text-xs uppercase tracking-[0.2em] font-medium hover:bg-brick transition-colors rounded-md"
          >
            Visit Us
            <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-ink/15 bg-cream/70 text-ink hover:bg-cream transition-colors"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              {open ? (
                <>
                  <path d="M6 6l12 12" />
                  <path d="M18 6l-12 12" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        id="mobile-nav"
        className={`md:hidden fixed inset-x-0 top-14 z-40 origin-top transition-all duration-200 ${
          open ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-95 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div className="mx-3 mt-2 rounded-lg border border-ink/15 bg-cream shadow-[0_20px_40px_-20px_rgba(15,42,71,0.4)] overflow-hidden">
          <nav className="flex flex-col py-2">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="px-5 py-3.5 text-base text-ink hover:bg-paper border-b border-rule/60 last:border-b-0 flex items-center justify-between"
              >
                <span>{label}</span>
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-muted" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
            ))}
          </nav>
          <div className="bg-paper px-5 py-4 flex flex-col gap-2 border-t border-rule">
            <p className="text-[0.6rem] uppercase tracking-[0.28em] text-muted">Call the lot</p>
            <PhoneLink className="text-lg font-medium text-ink hover:text-brick transition-colors" />
            <a
              href={business.phoneAltHref}
              className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-brick transition-colors tabular-nums"
            >
              or {business.phoneAlt}
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 bg-ink text-cream px-4 py-3 text-xs uppercase tracking-[0.22em] font-medium hover:bg-brick transition-colors rounded-md"
            >
              Visit Us
              <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function Mark() {
  return (
    <span className="relative inline-flex items-center justify-center h-9 w-9 sm:h-10 sm:w-10 bg-ink text-cream rounded-md overflow-hidden shrink-0">
      <svg viewBox="0 0 32 32" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M5 21l3-7 4-3h8l4 3 3 7" />
        <path d="M5 21h22" />
        <circle cx="11" cy="22" r="2.5" />
        <circle cx="21" cy="22" r="2.5" />
      </svg>
      <span className="absolute -bottom-1 left-1 right-1 h-1 bg-brick" />
    </span>
  );
}
