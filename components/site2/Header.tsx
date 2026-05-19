import { business } from "@/lib/business";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10 h-16 flex items-center gap-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="inline-flex items-center justify-center h-9 w-9 bg-red-700 text-white rounded-full">
            <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 21l3-7 4-3h8l4 3 3 7" />
              <path d="M5 21h22" />
              <circle cx="11" cy="22" r="2.5" />
              <circle cx="21" cy="22" r="2.5" />
            </svg>
          </span>
          <span className="font-bold text-lg tracking-tight text-gray-900">
            {business.name}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-gray-700 ml-4">
          {[
            ["Inventory", "#inventory"],
            ["About", "#about"],
            ["Why Us", "#why"],
            ["Visit", "#contact"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="hover:text-red-700 transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <a
            href={business.phoneHref}
            className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-red-700 transition-colors"
          >
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
            </svg>
            {business.phone}
          </a>
          <a
            href="#inventory"
            className="inline-flex items-center gap-2 bg-red-700 text-white px-4 py-2 text-sm font-semibold hover:bg-red-800 transition-colors rounded-full"
          >
            View Inventory
          </a>
        </div>
      </div>
    </header>
  );
}
