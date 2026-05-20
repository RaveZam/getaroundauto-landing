const services = [
  {
    name: "Pre-owned sales",
    body: "Trucks, sedans, and SUVs from $10K and up. Every one inspected, road-tested, and priced to move.",
    cta: "Come visit",
    href: "#contact",
  },
  {
    name: "Trade-ins",
    body: "Drive in, get a fair offer the same day. Roll the value straight into your next vehicle — no haggling games.",
    cta: "Bring it by",
    href: "#contact",
  },
  {
    name: "Financing referrals",
    body: "We&apos;ll connect you with local lenders that know the area and work with a wide range of credit situations.",
    cta: "Talk to us",
    href: "#contact",
  },
];

export function Services() {
  return (
    <section className="relative py-24 lg:py-32 bg-ink text-cream overflow-hidden">
      <div aria-hidden className="grain absolute inset-0 pointer-events-none" />
      <div aria-hidden className="awning absolute top-0 left-0 right-0 h-1.5 opacity-90" />

      <div className="relative mx-auto max-w-[1240px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <span className="eyebrow-rule text-brick before:bg-brick">
              What we do
            </span>
            <h2 className="display text-5xl lg:text-6xl mt-4">
              Three things, done{" "}
              <span className="italic font-light">properly</span>.
            </h2>
          </div>
          <p className="lg:col-span-5 text-cream/70 leading-relaxed">
            We&apos;re not trying to be a giant superstore. We sell good cars,
            take honest trades, and help you sort the paperwork.
          </p>
        </div>

        <ol className="mt-16 grid lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <li
              key={s.name}
              className="group relative border border-cream/15 rounded-md p-8 bg-ink-2/40 hover:bg-ink-2 transition-colors"
            >
              <span className="absolute -top-3 left-6 bg-brick text-cream text-[0.65rem] uppercase tracking-[0.28em] px-2.5 py-1 rounded-sm">
                {String(i + 1).padStart(2, "0")} / 03
              </span>
              <h3 className="display text-3xl mt-3">{s.name}</h3>
              <p
                className="mt-4 text-sm leading-relaxed text-cream/75"
                dangerouslySetInnerHTML={{ __html: s.body }}
              />
              <a
                href={s.href}
                className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] font-medium text-cream group-hover:text-brick transition-colors"
              >
                {s.cta}
                <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.8">
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
