import { business } from "@/lib/business";
import { PhoneLink } from "@/components/ui/PhoneLink";

export function Contact() {
  return (
    <section id="contact" className="relative py-16 sm:py-24 lg:py-32 bg-cream-2/60 border-t border-rule">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          {/* LEFT: details */}
          <div className="lg:col-span-5">
            <span className="eyebrow-rule">Find the lot</span>
            <h2 className="display text-4xl sm:text-5xl lg:text-6xl mt-4 text-ink">
              Come on by — or
              <br />
              <span className="italic font-light text-brick">just give us a ring.</span>
            </h2>

            <dl className="mt-8 sm:mt-10 space-y-6 sm:space-y-7">
              <div>
                <dt className="text-[0.65rem] uppercase tracking-[0.25em] text-muted">
                  Phone
                </dt>
                <dd className="mt-2 space-y-1">
                  <PhoneLink className="display text-2xl sm:text-3xl text-ink hover:text-brick transition-colors break-words" showIcon={false} />
                  <a
                    href={business.phoneAltHref}
                    className="block text-base text-muted hover:text-brick tabular-nums"
                  >
                    or {business.phoneAlt}
                  </a>
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

          {/* RIGHT: map */}
          <div className="lg:col-span-7">
            <MapEmbed />
          </div>
        </div>
      </div>
    </section>
  );
}

function MapEmbed() {
  return (
    <div className="relative border border-ink/15 rounded-md bg-paper aspect-[4/3] lg:aspect-[7/6]">
      <iframe
        title={`Map to ${business.name}`}
        src={`https://www.google.com/maps?q=${encodeURIComponent(business.address.full)}&output=embed`}
        className="absolute inset-0 h-full w-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      {/* card overlay */}
      <div className="hidden sm:block absolute -top-4 -right-4 left-2 sm:left-auto bg-cream border border-ink/15 rounded-md p-4 shadow-lg max-w-xs">
        <div className="flex items-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-brick" />
          <p className="display text-lg text-ink leading-none">
            {business.name}
          </p>
        </div>
        <p className="mt-2 text-xs text-muted leading-snug">
          {business.address.street} · {business.address.city}, {business.address.state} {business.address.zip}
        </p>
        <a
          href={`https://maps.google.com/?q=${encodeURIComponent(business.address.full)}`}
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
