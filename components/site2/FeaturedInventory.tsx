import { inventory, formatMiles, formatPrice, type Car } from "@/lib/inventory";

export function FeaturedInventory() {
  return (
    <section id="inventory" className="relative py-20 lg:py-28 bg-gray-50">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-red-700">
              Featured Inventory
            </span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900">
              Find your next ride.
            </h2>
          </div>
          <p className="max-w-sm text-gray-600">
            A small sample of what&apos;s ready to drive home today. Call the
            lot for the full list — inventory turns over fast.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {inventory.map((car, i) => (
            <CarCard key={car.id} car={car} index={i} />
          ))}
        </ul>

        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-red-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-800 transition-colors"
          >
            See full inventory
            <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

function CarCard({ car }: { car: Car; index: number }) {
  return (
    <li className="group bg-white border border-gray-200 rounded-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative overflow-hidden bg-gray-100">
        <div className="relative aspect-[4/3]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={car.image}
            alt={`${car.year} ${car.make} ${car.model}`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {car.highlight && (
          <span className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-red-700 text-white">
            {car.highlight}
          </span>
        )}
      </div>

      <div className="p-5">
        <p className="text-xs font-medium text-gray-500">
          {car.year} · {car.body} · {car.drivetrain}
        </p>
        <h3 className="mt-1 text-lg font-bold text-gray-900">
          {car.make} {car.model}
        </h3>
        {car.trim && <p className="text-sm text-gray-500">{car.trim}</p>}

        <div className="mt-4 flex items-end justify-between gap-4">
          <div>
            <p className="text-2xl font-extrabold text-red-700 tabular-nums">
              {formatPrice(car.price)}
            </p>
            <p className="text-xs text-gray-500 mt-0.5">
              {formatMiles(car.miles)}
            </p>
          </div>
          <a
            href="#contact"
            className="text-sm font-semibold text-gray-900 hover:text-red-700 inline-flex items-center gap-1.5"
          >
            Details
            <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
        </div>
      </div>
    </li>
  );
}
