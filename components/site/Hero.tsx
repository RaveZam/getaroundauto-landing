import { business } from "@/lib/business";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* background texture */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(15,42,71,0.18) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-32 -right-24 h-[420px] w-[420px] rounded-full bg-brick/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1240px] px-6 lg:px-10 pt-14 lg:pt-20 pb-16 lg:pb-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* COPY */}
          <div className="lg:col-span-7 rise">
            <div className="flex items-center gap-3 mb-7">
              <span className="eyebrow-rule">
                {business.established} · 1150 Hwy 49 W
              </span>
            </div>

            <h1 className="display text-[clamp(3rem,7.4vw,6.5rem)] text-ink">
              Honest cars,
              <br />
              <span className="relative inline-block">
                <span className="italic font-light text-brick">
                  fair handshakes
                </span>
                <svg
                  viewBox="0 0 380 18"
                  preserveAspectRatio="none"
                  className="absolute left-0 -bottom-2 w-full h-3 text-brick/60"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M2 12 C 80 2, 180 18, 378 6" />
                </svg>
              </span>
              <br />
              right here in Helena.
            </h1>

            <p className="mt-10 max-w-xl text-[1.05rem] leading-relaxed text-muted">
              We hand-pick every vehicle on the lot. No pressure, no surprises —
              just dependable trucks, sedans, and SUVs ready to get you
              wherever you&apos;re going.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={business.phoneHref}
                className="group inline-flex items-center gap-3 bg-ink text-cream pl-5 pr-3 py-3.5 rounded-md hover:bg-brick transition-colors"
              >
                <span className="text-xs uppercase tracking-[0.22em] opacity-70">
                  Call the lot
                </span>
                <span className="tabular-nums font-medium">
                  {business.phone}
                </span>
                <span className="inline-flex h-7 w-7 items-center justify-center bg-cream/15 rounded-sm group-hover:translate-x-0.5 transition-transform">
                  <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </span>
              </a>
              <a
                href="#inventory"
                className="text-sm font-medium text-ink underline decoration-brick decoration-2 underline-offset-4 hover:text-brick"
              >
                Browse the lot →
              </a>
            </div>

            {/* mini stat row */}
            <dl className="mt-14 grid grid-cols-3 max-w-md border-t border-rule pt-6">
              {[
                ["40+", "On the lot"],
                ["100%", "Inspected"],
                ["1-on-1", "Service"],
              ].map(([n, l]) => (
                <div key={l}>
                  <dt className="display text-3xl text-ink">{n}</dt>
                  <dd className="mt-1 text-[0.65rem] uppercase tracking-[0.22em] text-muted">
                    {l}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* IMAGE — the lot photo featuring the actual signage */}
          <div className="lg:col-span-5 relative rise lg:pt-10" style={{ animationDelay: "180ms" }}>
            <div className="relative rounded-md overflow-hidden shadow-[0_30px_60px_-30px_rgba(15,42,71,0.45)] aspect-[4/5] bg-ink">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/storefront.jpg"
                alt="The Get Around Auto storefront on Highway 49 in Helena, Arkansas"
                className="absolute inset-0 h-full w-full object-cover"
                style={{ objectPosition: "55% 50%" }}
              />
              {/* warm color treatment to unify the rough photo */}
              <div
                aria-hidden
                className="absolute inset-0 mix-blend-multiply"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(15,42,71,0.18) 0%, rgba(15,42,71,0.05) 40%, rgba(15,42,71,0.55) 100%)",
                }}
              />
              <div
                aria-hidden
                className="absolute inset-0 opacity-25"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(135deg, rgba(255,255,255,0.06) 0 1px, transparent 1px 14px)",
                }}
              />

              {/* caption */}
              <div className="absolute bottom-3 left-3 right-3 text-cream">
                <span className="inline-flex items-center gap-2 text-[0.6rem] uppercase tracking-[0.28em] bg-ink/55 backdrop-blur-sm px-2.5 py-1.5 rounded-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-brick" />
                  1150 Hwy 49 W · Helena, AR
                </span>
              </div>
            </div>

            {/* sticker */}
            <div className="absolute -bottom-6 -left-6 bg-cream border border-ink/15 rounded-md px-4 py-3 shadow-md max-w-[14rem]">
              <div className="eyebrow-rule mb-2 text-ink/80 before:bg-ink/40">
                Stop by
              </div>
              <p className="text-sm leading-snug text-ink">
                {business.address.street}
                <br />
                {business.address.city}, {business.address.state}{" "}
                {business.address.zip}
              </p>
            </div>
            {/* corner badge */}
            <div className="absolute -top-5 -right-5 h-24 w-24 rounded-full bg-brick text-cream grid place-items-center text-center rotate-[8deg] shadow-lg">
              <div>
                <div className="display text-2xl leading-none">Est.</div>
                <div className="text-[0.6rem] uppercase tracking-[0.25em] mt-1">
                  Helena AR
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee trust strip */}
      <div className="relative border-y border-rule bg-paper overflow-hidden">
        <div className="flex whitespace-nowrap marquee-track py-4 text-ink/70">
          {Array.from({ length: 2 }).map((_, dup) => (
            <div key={dup} className="flex items-center gap-10 px-5 shrink-0">
              {[
                "Hand-picked inventory",
                "Honest pricing",
                "Trade-ins welcome",
                "Financing referrals",
                "Family owned",
                "Serving the Delta since day one",
              ].map((t, i) => (
                <span key={i} className="flex items-center gap-10">
                  <span className="text-[0.7rem] uppercase tracking-[0.32em] font-medium">
                    {t}
                  </span>
                  <span className="inline-block h-1 w-1 rounded-full bg-brick" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
