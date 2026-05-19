const pillars = [
  {
    title: "Quality inspected",
    body: "Every vehicle gets a full mechanical and cosmetic check before it hits the lot — no surprises after the test drive.",
    icon: <path d="M4 12l4 4 12-12" />,
  },
  {
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
    <section id="why" className="relative py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
        <div className="max-w-2xl text-center mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-red-700">
            Why Choose Us
          </span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900">
            Why folks keep coming back.
          </h2>
          <p className="mt-4 text-gray-600">
            Four simple reasons we&apos;ve become a trusted name in the Delta.
          </p>
        </div>

        <ul className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p) => (
            <li
              key={p.title}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-red-700 transition-colors"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-700">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {p.icon}
                </svg>
              </span>
              <h3 className="mt-5 text-lg font-bold text-gray-900">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {p.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
