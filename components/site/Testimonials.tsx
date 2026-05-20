const quotes = [
  {
    body: "Drove down from Memphis on a tip from my brother-in-law. Walked the lot for an hour, no one breathing down my neck. Drove home in a clean Silverado.",
    name: "Marcus T.",
    where: "Memphis, TN",
    rating: 5,
  },
  {
    body: "First car for our daughter. They let her take three different sedans out and answered every one of her questions. Felt like family by closing.",
    name: "Denise &amp; Ray P.",
    where: "Helena, AR",
    rating: 5,
  },
  {
    body: "Traded in my old Camry. Got more than the bigger lots in West Helena offered and was out the door in a CR-V before lunch.",
    name: "Jordan W.",
    where: "West Helena, AR",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-10 sm:mb-14">
          <div>
            <span className="eyebrow-rule">Word of mouth</span>
            <h2 className="display text-4xl sm:text-5xl lg:text-6xl mt-4 text-ink max-w-xl">
              From folks who&apos;ve already pulled off the lot.
            </h2>
          </div>
        </div>

        <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
          {quotes.map((q, i) => (
            <li
              key={i}
              className="relative bg-paper border border-rule rounded-md p-6 sm:p-7 flex flex-col"
            >
              <span className="display text-7xl text-brick leading-none -mt-1 mb-2">
                &ldquo;
              </span>
              <p
                className="text-ink/85 leading-relaxed text-[1.02rem]"
                dangerouslySetInnerHTML={{ __html: q.body }}
              />
              <div className="mt-auto pt-6 flex items-center justify-between border-t border-rule mt-6">
                <div>
                  <p
                    className="display text-lg text-ink"
                    dangerouslySetInnerHTML={{ __html: q.name }}
                  />
                  <p className="text-[0.65rem] uppercase tracking-[0.25em] text-muted mt-1">
                    {q.where}
                  </p>
                </div>
                <div className="flex gap-0.5 text-brick">
                  {Array.from({ length: q.rating }).map((_, j) => (
                    <svg key={j} viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="currentColor">
                      <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9z" />
                    </svg>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
