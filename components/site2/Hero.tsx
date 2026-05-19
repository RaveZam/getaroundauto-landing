import { business } from "@/lib/business";

export function Hero() {
  return (
    <section id="top" className="relative bg-white">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10 pt-14 lg:pt-20 pb-16 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* COPY */}
          <div>
            <span className="inline-flex items-center gap-2 bg-red-50 text-red-700 text-xs font-semibold px-3 py-1.5 rounded-full">
              <span className="h-1.5 w-1.5 rounded-full bg-red-700" />
              Open today · 1150 Hwy 49 W, Helena AR
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.05]">
              Quality used cars,
              <br />
              <span className="text-red-700">honest prices.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
              Family-owned and hand-picked. Every vehicle on our lot is
              inspected, road-tested, and priced fairly — no pressure, no
              surprises.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#inventory"
                className="inline-flex items-center gap-2 bg-red-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-800 transition-colors"
              >
                Browse Inventory
                <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
              <a
                href={business.phoneHref}
                className="inline-flex items-center gap-2 border border-gray-300 text-gray-900 px-6 py-3 rounded-full font-semibold hover:border-red-700 hover:text-red-700 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
                </svg>
                {business.phone}
              </a>
            </div>

            <dl className="mt-12 grid grid-cols-3 max-w-md border-t border-gray-200 pt-6">
              {[
                ["40+", "On the lot"],
                ["100%", "Inspected"],
                ["1-on-1", "Service"],
              ].map(([n, l]) => (
                <div key={l}>
                  <dt className="text-3xl font-bold text-red-700">{n}</dt>
                  <dd className="mt-1 text-xs text-gray-600">{l}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="relative rounded-md overflow-hidden shadow-xl aspect-[4/5] bg-gray-900">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/storefront.jpg"
                alt="The Get Around Auto storefront on Highway 49 in Helena, Arkansas"
                className="absolute inset-0 h-full w-full object-cover"
                style={{ objectPosition: "55% 50%" }}
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.45) 100%)",
                }}
              />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="inline-flex items-center gap-2 text-xs font-medium bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                  1150 Hwy 49 W · Helena, AR
                </span>
              </div>
            </div>

            <div className="hidden sm:block absolute -bottom-6 -left-6 bg-white border border-gray-200 rounded-xl px-5 py-4 shadow-lg max-w-[15rem]">
              <p className="text-xs font-semibold text-red-700 uppercase tracking-wider">
                Stop by
              </p>
              <p className="mt-1.5 text-sm leading-snug text-gray-900">
                {business.address.street}
                <br />
                {business.address.city}, {business.address.state}{" "}
                {business.address.zip}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust strip — static */}
      <div className="border-y border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-10 py-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-gray-600">
          {[
            "Hand-picked inventory",
            "Honest pricing",
            "Trade-ins welcome",
            "Financing referrals",
            "Family owned",
          ].map((t, i, arr) => (
            <span key={t} className="flex items-center gap-8 text-sm font-medium">
              {t}
              {i < arr.length - 1 && (
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-red-700" />
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
