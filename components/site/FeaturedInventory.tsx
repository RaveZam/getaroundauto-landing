import { inventory, formatMiles, formatPrice, type Car } from "@/lib/inventory";

export function FeaturedInventory() {
  return (
    <section id="inventory" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <span className="eyebrow-rule">On the lot · this week</span>
            <h2 className="display text-5xl lg:text-6xl mt-4 text-ink max-w-xl">
              Pull up &amp; pick your next ride.
            </h2>
          </div>
          <p className="max-w-sm text-muted leading-relaxed">
            A small sample of what&apos;s ready to drive home today. Call the
            lot for the full list — inventory turns over fast.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {inventory.map((car, i) => (
            <CarCard key={car.id} car={car} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function CarCard({ car }: { car: Car; index: number }) {
  return (
    <li className="group relative bg-paper border border-rule rounded-md overflow-hidden transition-all hover:-translate-y-0.5 hover:shadow-[0_24px_44px_-28px_rgba(15,42,71,0.45)]">
      <div className="relative bg-ink overflow-hidden">
        <div className="relative aspect-[4/3]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={car.image}
            alt={`${car.year} ${car.make} ${car.model}`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          {/* warm bottom shade for legibility */}
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/55 to-transparent"
          />
        </div>

        {car.highlight && (
          <span className="absolute top-3 left-3 text-[0.6rem] uppercase tracking-[0.22em] px-2 py-1 rounded-sm font-medium bg-brick text-cream shadow-sm">
            {car.highlight}
          </span>
        )}

        <span className="absolute top-3 right-3 text-[0.58rem] uppercase tracking-[0.22em] text-cream/85 bg-ink/55 backdrop-blur-sm px-2 py-1 rounded-sm">
          {car.body} · {car.drivetrain}
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.25em] text-muted mb-1">
              {car.year}
            </p>
            <h3 className="display text-2xl text-ink leading-none">
              {car.make}{" "}
              <span className="text-ink/80 font-normal">{car.model}</span>
            </h3>
            {car.trim && (
              <p className="text-xs text-muted mt-1.5 italic">{car.trim}</p>
            )}
          </div>
          <div className="text-right shrink-0">
            <p className="display text-2xl text-brick tabular-nums">
              {formatPrice(car.price)}
            </p>
            <p className="text-[0.65rem] uppercase tracking-[0.22em] text-muted mt-1">
              {formatMiles(car.miles)}
            </p>
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-rule flex items-center justify-between">
          <a
            href="#contact"
            className="text-xs font-medium uppercase tracking-[0.22em] text-ink group-hover:text-brick transition-colors inline-flex items-center gap-2"
          >
            View details
            <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
          <span className="text-[0.6rem] uppercase tracking-[0.22em] text-muted">
            #{car.id.padStart(4, "0")}
          </span>
        </div>
      </div>
    </li>
  );
}
