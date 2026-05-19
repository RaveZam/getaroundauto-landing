import { business } from "@/lib/business";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="h-1 bg-red-700" />
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10 py-14 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center justify-center h-9 w-9 bg-red-700 text-white rounded-full">
              <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 21l3-7 4-3h8l4 3 3 7" />
                <path d="M5 21h22" />
                <circle cx="11" cy="22" r="2.5" />
                <circle cx="21" cy="22" r="2.5" />
              </svg>
            </span>
            <p className="font-bold text-xl text-white">{business.name}</p>
          </div>
          <p className="mt-4 text-sm text-gray-400 max-w-sm leading-relaxed">
            A family-run lot on Highway 49 selling hand-picked, road-tested
            used cars to neighbors across the Arkansas Delta.
          </p>
        </div>

        <div className="lg:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            Visit
          </p>
          <p className="mt-3 text-sm leading-snug text-gray-200">
            {business.address.street}
            <br />
            {business.address.city}, {business.address.state}{" "}
            {business.address.zip}
          </p>
        </div>

        <div className="lg:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            Call
          </p>
          <a
            href={business.phoneHref}
            className="mt-3 inline-block text-sm text-gray-200 hover:text-red-400 transition-colors tabular-nums"
          >
            {business.phone}
          </a>
        </div>

        <div className="lg:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            Browse
          </p>
          <ul className="mt-3 space-y-1.5 text-sm">
            {[
              ["Inventory", "#inventory"],
              ["About", "#about"],
              ["Why Us", "#why"],
              ["Contact", "#contact"],
            ].map(([l, h]) => (
              <li key={h}>
                <a
                  href={h}
                  className="text-gray-300 hover:text-red-400 transition-colors"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-10 py-5 flex flex-wrap items-center justify-between gap-3 text-xs text-gray-500">
          <span>© {new Date().getFullYear()} {business.name}</span>
          <span>Helena · Arkansas · Hwy 49 W</span>
        </div>
      </div>
    </footer>
  );
}
