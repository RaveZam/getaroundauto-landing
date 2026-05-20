import { business } from "@/lib/business";
import { PhoneLink } from "@/components/ui/PhoneLink";

export function Footer() {
  return (
    <footer className="relative bg-ink text-cream/80 overflow-hidden">
      <div aria-hidden className="awning h-1.5 w-full" />
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-10 py-12 sm:py-16 grid grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10">
        <div className="col-span-2 lg:col-span-5">
          <p className="display text-3xl sm:text-4xl text-cream">{business.name}</p>
          <p className="mt-3 text-sm text-cream/60 max-w-sm leading-relaxed">
            A family-run lot on Highway 49 selling hand-picked, road-tested
            used cars to neighbors across the Arkansas Delta.
          </p>
        </div>

        <div className="col-span-2 sm:col-span-1 lg:col-span-3">
          <p className="text-[0.6rem] uppercase tracking-[0.28em] text-cream/40">
            Visit
          </p>
          <p className="mt-3 text-sm leading-snug text-cream/90">
            {business.address.street}
            <br />
            {business.address.city}, {business.address.state}{" "}
            {business.address.zip}
          </p>
        </div>

        <div className="col-span-1 lg:col-span-2">
          <p className="text-[0.6rem] uppercase tracking-[0.28em] text-cream/40">
            Call
          </p>
          <PhoneLink
            className="mt-3 text-sm text-cream/90 hover:text-brick transition-colors"
            showIcon={false}
          />
          <a
            href={business.phoneAltHref}
            className="mt-1 block text-sm text-cream/70 hover:text-brick tabular-nums"
          >
            {business.phoneAlt}
          </a>
        </div>

        <div className="col-span-1 lg:col-span-2">
          <p className="text-[0.6rem] uppercase tracking-[0.28em] text-cream/40">
            Browse
          </p>
          <ul className="mt-3 space-y-1.5 text-sm">
            {[
              ["About Us", "#services"],
              ["Why Us", "#why"],
              ["Contact", "#contact"],
            ].map(([l, h]) => (
              <li key={h}>
                <a
                  href={h}
                  className="text-cream/80 hover:text-brick transition-colors"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-10 py-5 flex flex-wrap items-center justify-between gap-3 text-[0.6rem] sm:text-[0.65rem] uppercase tracking-[0.22em] sm:tracking-[0.25em] text-cream/50">
          <span>© {new Date().getFullYear()} {business.name}</span>
          <span>West Helena · Arkansas · Hwy 49 W</span>
        </div>
      </div>
    </footer>
  );
}
