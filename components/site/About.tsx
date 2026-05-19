import { business } from "@/lib/business";

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-paper border-y border-rule">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(15,42,71,0.12) 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
      />
      <div className="relative mx-auto max-w-[1240px] px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-md overflow-hidden aspect-[4/5] bg-ink shadow-[0_30px_60px_-30px_rgba(15,42,71,0.45)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/storefront.jpg"
              alt="The Get Around Auto storefront on Highway 49"
              className="absolute inset-0 h-full w-full object-cover"
              style={{ objectPosition: "55% 50%" }}
            />
            <div
              aria-hidden
              className="absolute inset-0 mix-blend-multiply"
              style={{
                background:
                  "linear-gradient(180deg, rgba(15,42,71,0.15) 0%, rgba(15,42,71,0.02) 35%, rgba(15,42,71,0.45) 100%)",
              }}
            />
            <span className="absolute top-3 left-3 inline-flex items-center gap-2 text-[0.6rem] uppercase tracking-[0.28em] bg-cream/85 text-ink px-2.5 py-1.5 rounded-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-brick" />
              The shop · {business.address.city}
            </span>
          </div>
          {/* taped corner ticket */}
          <div className="absolute -bottom-5 -right-4 bg-ink text-cream px-5 py-4 rounded-md max-w-[14rem] shadow-lg">
            <div className="display text-xl leading-tight">
              &ldquo;If we wouldn&rsquo;t drive it home, we won&rsquo;t put it on the lot.&rdquo;
            </div>
            <p className="mt-2 text-[0.6rem] uppercase tracking-[0.25em] text-cream/70">
              — The Get Around crew
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 lg:pl-6">
          <span className="eyebrow-rule">Our story</span>
          <h2 className="display text-5xl lg:text-6xl mt-4 text-ink">
            A little lot on{" "}
            <span className="italic font-light text-brick">Highway 49</span>{" "}
            with a long memory for names.
          </h2>
          <div className="mt-8 space-y-5 text-muted max-w-2xl leading-relaxed">
            <p>
              {business.name} sits right at {business.address.street} in {" "}
              {business.address.city}. We&apos;re small on square footage and
              big on care — every car gets a thorough inspection, an honest
              write-up, and a fair sticker before it ever rolls out front.
            </p>
            <p>
              When you stop by, you&apos;ll talk to the same folks who picked
              the vehicle out, road-tested it, and signed off on it. No
              shuffling between desks. No mystery markups. Just a straight
              answer and a chance to take the keys for a drive.
            </p>
          </div>

          <ul className="mt-10 grid sm:grid-cols-3 gap-4 max-w-2xl">
            {[
              ["1-on-1", "From hello to handshake"],
              ["No-pressure", "Test drive on your terms"],
              ["After the sale", "Call us with questions, anytime"],
            ].map(([k, v]) => (
              <li
                key={k}
                className="border border-rule rounded-md p-4 bg-cream/60"
              >
                <p className="display text-xl text-ink">{k}</p>
                <p className="text-xs text-muted mt-2 leading-snug">{v}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
