const quotes = [
  {
    body: "Drove down from Memphis on a tip from my brother-in-law. Walked the lot for an hour, no one breathing down my neck. Drove home in a clean Silverado.",
    name: "Marcus T.",
    where: "Memphis, TN",
    rating: 5,
  },
  {
    body: "First car for our daughter. They let her take three different sedans out and answered every one of her questions. Felt like family by closing.",
    name: "Denise & Ray P.",
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
    <section className="relative py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
        <div className="max-w-2xl text-center mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-red-700">
            Reviews
          </span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900">
            What our customers say.
          </h2>
        </div>

        <ul className="grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <li
              key={i}
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 flex flex-col"
            >
              <div className="flex gap-0.5 text-red-700 mb-4">
                {Array.from({ length: q.rating }).map((_, j) => (
                  <svg key={j} viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
                    <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-800 leading-relaxed">{q.body}</p>
              <div className="mt-6 pt-5 border-t border-gray-200">
                <p className="font-bold text-gray-900">{q.name}</p>
                <p className="text-xs text-gray-500 mt-0.5">{q.where}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
