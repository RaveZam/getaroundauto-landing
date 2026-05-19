const services = [
  {
    name: "Pre-owned sales",
    body: "Trucks, sedans, and SUVs from $10K and up. Every one inspected, road-tested, and priced to move.",
    cta: "See the lot",
    href: "#inventory",
  },
  {
    name: "Trade-ins",
    body: "Drive in, get a fair offer the same day. Roll the value straight into your next vehicle — no haggling games.",
    cta: "Bring it by",
    href: "#contact",
  },
  {
    name: "Financing referrals",
    body: "We'll connect you with local lenders that know the area and work with a wide range of credit situations.",
    cta: "Talk to us",
    href: "#contact",
  },
];

export function Services() {
  return (
    <section className="relative py-20 lg:py-28 bg-gray-50">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-red-700">
            Our Services
          </span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900">
            Three things, done properly.
          </h2>
          <p className="mt-4 text-gray-600">
            We&apos;re not a giant superstore. We sell good cars, take honest
            trades, and help you sort the paperwork.
          </p>
        </div>

        <ol className="mt-12 grid lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <li
              key={s.name}
              className="bg-white border border-gray-200 rounded-xl p-7 hover:shadow-md transition-shadow"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-red-700 text-white text-sm font-bold">
                {i + 1}
              </span>
              <h3 className="mt-5 text-xl font-bold text-gray-900">{s.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {s.body}
              </p>
              <a
                href={s.href}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-red-700 hover:text-red-800"
              >
                {s.cta}
                <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
