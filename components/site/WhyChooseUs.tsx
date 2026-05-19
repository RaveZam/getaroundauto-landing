const pillars = [
  {
    n: "01",
    title: "Quality inspected",
    body: "Every vehicle gets a full mechanical and cosmetic check before it hits the lot — no surprises after the test drive.",
    icon: (
      <path d="M4 12l4 4 12-12" />
    ),
  },
  {
    n: "02",
    title: "Honest pricing",
    body: "Fair market values, no mystery fees, no high-pressure add-ons. The sticker is the conversation starter, not a trap.",
    icon: (
      <>
        <path d="M3 12h18" />
        <path d="M7 6l-4 6 4 6" />
        <path d="M17 6l4 6-4 6" />
      </>
    ),
  },
  {
    n: "03",
    title: "Financing help",
    body: "We work with local lenders to find you a payment plan that fits — even if your credit history isn't squeaky-clean.",
    icon: (
      <>
        <rect x="3" y="6" width="18" height="13" rx="1" />
        <path d="M3 10h18" />
        <path d="M7 15h4" />
      </>
    ),
  },
  {
    n: "04",
    title: "Local & friendly",
    body: "Born and raised in the Delta. When you call, a real person answers — usually one who already knows your truck.",
    icon: (
      <>
        <circle cx="12" cy="9" r="3" />
        <path d="M5 21c0-4 3-7 7-7s7 3 7 7" />
      </>
    ),
  },
];

export function WhyChooseUs() {
  return (
    <section id="why" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="eyebrow-rule">Why folks come back</span>
          <h2 className="display text-5xl lg:text-6xl mt-4 text-ink">
            Four reasons it&rsquo;s easier here.
          </h2>
        </div>

        <ul className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-rule border border-rule rounded-md overflow-hidden">
          {pillars.map((p) => (
            <li
              key={p.n}
              className="bg-cream p-7 lg:p-8 flex flex-col gap-5 hover:bg-paper transition-colors"
            >
              <div className="flex items-start justify-between">
                <span className="display text-3xl text-brick">{p.n}</span>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-ink text-cream">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {p.icon}
                  </svg>
                </span>
              </div>
              <div className="mt-3">
                <h3 className="display text-2xl text-ink leading-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {p.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
