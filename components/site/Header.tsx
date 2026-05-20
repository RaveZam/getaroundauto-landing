import { business } from "@/lib/business";
import { PhoneLink } from "@/components/ui/PhoneLink";

export function Header() {
  return (
    <header className="relative z-30 border-b border-rule/60 bg-cream/85 backdrop-blur supports-[backdrop-filter]:bg-cream/60">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10 h-16 flex items-center gap-8">
        <a href="#top" className="flex items-center gap-3 group">
          <Mark />
          <div className="flex flex-col leading-none">
            <span className="display text-[1.05rem] tracking-tight">
              {business.name}
            </span>
            <span className="text-[0.6rem] uppercase tracking-[0.3em] text-muted mt-1">
              Helena · Arkansas
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm text-ink/80 ml-6">
          {[
            ["About", "#about"],
            ["Why Us", "#why"],
            ["Visit", "#contact"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="relative py-1 hover:text-ink transition-colors"
            >
              {label}
              <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-brick transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <PhoneLink className="hidden sm:inline-flex text-sm font-medium text-ink hover:text-brick transition-colors" />
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-ink text-cream px-3.5 py-2 text-xs uppercase tracking-[0.2em] font-medium hover:bg-brick transition-colors rounded-md"
          >
            Visit Us
            <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}

function Mark() {
  return (
    <span className="relative inline-flex items-center justify-center h-10 w-10 bg-ink text-cream rounded-md overflow-hidden">
      <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M5 21l3-7 4-3h8l4 3 3 7" />
        <path d="M5 21h22" />
        <circle cx="11" cy="22" r="2.5" />
        <circle cx="21" cy="22" r="2.5" />
      </svg>
      <span className="absolute -bottom-1 left-1 right-1 h-1 bg-brick" />
    </span>
  );
}
