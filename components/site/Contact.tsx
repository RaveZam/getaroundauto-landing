import { business } from "@/lib/business";
import { PhoneLink } from "@/components/ui/PhoneLink";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-cream-2/60 border-t border-rule">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          {/* LEFT: details */}
          <div className="lg:col-span-5">
            <span className="eyebrow-rule">Find the lot</span>
            <h2 className="display text-5xl lg:text-6xl mt-4 text-ink">
              Come on by — or
              <br />
              <span className="italic font-light text-brick">just give us a ring.</span>
            </h2>

            <dl className="mt-10 space-y-7">
              <div>
                <dt className="text-[0.65rem] uppercase tracking-[0.25em] text-muted">
                  Phone
                </dt>
                <dd className="mt-2">
                  <PhoneLink className="display text-3xl text-ink hover:text-brick transition-colors" showIcon={false} />
                </dd>
              </div>
              <div>
                <dt className="text-[0.65rem] uppercase tracking-[0.25em] text-muted">
                  Address
                </dt>
                <dd className="mt-2 text-ink text-lg leading-snug">
                  {business.address.street}
                  <br />
                  {business.address.city}, {business.address.state}{" "}
                  {business.address.zip}
                </dd>
              </div>
              <div>
                <dt className="text-[0.65rem] uppercase tracking-[0.25em] text-muted">
                  Hours
                </dt>
                <dd className="mt-2 space-y-1">
                  {business.hours.map((h) => (
                    <div
                      key={h.day}
                      className="flex items-baseline justify-between gap-8 max-w-sm border-b border-dashed border-rule pb-1.5"
                    >
                      <span className="text-ink">{h.day}</span>
                      <span className="text-muted tabular-nums text-sm">
                        {h.time}
                      </span>
                    </div>
                  ))}
                </dd>
              </div>
            </dl>
          </div>

          {/* RIGHT: stylized map */}
          <div className="lg:col-span-7">
            <FauxMap />
          </div>
        </div>
      </div>
    </section>
  );
}

function FauxMap() {
  return (
    <div className="relative border border-ink/15 rounded-md overflow-hidden bg-paper aspect-[4/3] lg:aspect-[7/6]">
      {/* grid */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(15,42,71,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,42,71,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* MS river */}
      <svg
        viewBox="0 0 400 300"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <path
          d="M340 -10 C 320 60, 360 110, 320 160 C 290 200, 320 250, 290 310"
          stroke="#0F2A47"
          strokeOpacity="0.18"
          strokeWidth="22"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M340 -10 C 320 60, 360 110, 320 160 C 290 200, 320 250, 290 310"
          stroke="#0F2A47"
          strokeOpacity="0.5"
          strokeWidth="1"
          strokeDasharray="2 5"
          fill="none"
        />
        {/* Highway 49 */}
        <path
          d="M0 180 L 260 150 L 400 130"
          stroke="#B23A2C"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M0 180 L 260 150 L 400 130"
          stroke="#F4EFE6"
          strokeWidth="1"
          strokeDasharray="6 6"
          fill="none"
        />
        {/* Side road */}
        <path
          d="M180 0 L 180 280"
          stroke="#0F2A47"
          strokeOpacity="0.35"
          strokeWidth="1.5"
          fill="none"
        />
        {/* pin */}
        <g transform="translate(180,158)">
          <circle r="18" fill="#0F2A47" opacity="0.08" />
          <circle r="10" fill="#0F2A47" opacity="0.15" />
          <circle r="6" fill="#B23A2C" />
          <circle r="2" fill="#F4EFE6" />
        </g>
      </svg>

      {/* labels */}
      <span className="absolute top-[42%] left-3 text-[0.55rem] uppercase tracking-[0.3em] text-brick font-semibold rotate-[-4deg]">
        Hwy 49 W
      </span>
      <span className="absolute bottom-6 right-6 text-[0.55rem] uppercase tracking-[0.3em] text-ink/50 rotate-[-90deg] origin-bottom-right">
        Mississippi River
      </span>
      <span className="absolute top-6 left-6 text-[0.6rem] uppercase tracking-[0.3em] text-ink/60">
        Helena · AR
      </span>

      {/* card */}
      <div className="absolute bottom-5 left-5 right-5 sm:right-auto bg-cream border border-ink/15 rounded-md p-4 shadow-lg max-w-xs">
        <div className="flex items-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-brick" />
          <p className="display text-lg text-ink leading-none">
            Get Around Auto
          </p>
        </div>
        <p className="mt-2 text-xs text-muted leading-snug">
          1150 Highway 49 W · Helena, AR 72390
        </p>
        <a
          href="https://maps.google.com/?q=1150+Highway+49+West+Helena+AR+72390"
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-flex text-[0.65rem] uppercase tracking-[0.25em] font-medium text-ink hover:text-brick"
        >
          Open in Maps →
        </a>
      </div>
    </div>
  );
}
