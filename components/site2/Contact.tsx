import { business } from "@/lib/business";

export function Contact() {
  return (
    <section id="contact" className="relative py-20 lg:py-28 bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-red-700">
              Visit Us
            </span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900">
              Come on by — or just give us a ring.
            </h2>

            <dl className="mt-8 space-y-6">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Phone
                </dt>
                <dd className="mt-1.5">
                  <a
                    href={business.phoneHref}
                    className="text-2xl font-bold text-gray-900 hover:text-red-700 transition-colors tabular-nums"
                  >
                    {business.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Address
                </dt>
                <dd className="mt-1.5 text-gray-900 leading-snug">
                  {business.address.street}
                  <br />
                  {business.address.city}, {business.address.state}{" "}
                  {business.address.zip}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Hours
                </dt>
                <dd className="mt-1.5 space-y-1.5">
                  {business.hours.map((h) => (
                    <div
                      key={h.day}
                      className="flex items-baseline justify-between gap-8 max-w-sm border-b border-dashed border-gray-300 pb-1.5"
                    >
                      <span className="text-gray-900 text-sm">{h.day}</span>
                      <span className="text-gray-600 tabular-nums text-sm">
                        {h.time}
                      </span>
                    </div>
                  ))}
                </dd>
              </div>
            </dl>

            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(business.address.full)}`}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 bg-red-700 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-red-800 transition-colors"
            >
              Get Directions
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
          </div>

          <div className="relative rounded-md overflow-hidden border border-gray-200 bg-white aspect-[4/3] lg:aspect-auto lg:min-h-[420px]">
            <iframe
              title="Map to Get Around Auto"
              src={`https://www.google.com/maps?q=${encodeURIComponent(business.address.full)}&output=embed`}
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
