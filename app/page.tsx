import { business } from "@/lib/business";

export default function Home() {
  return (
    <main className="flex-1 min-h-screen bg-gray-50 flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-5xl">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
            {business.name} — Design Preview
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            Choose a design to preview
          </h1>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Two directions for the website. Click either to view the full
            mockup — you can switch between them at any time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <DesignCard
            href="/design1"
            label="Design 1"
            title="Editorial / Americana"
            description="Warm cream palette, serif display type, hand-drawn touches. A distinctive, magazine-style feel."
            swatches={["#f4efe6", "#0f2a47", "#b23a2c"]}
            tone="warm"
          />
          <DesignCard
            href="/design2"
            label="Design 2"
            title="Classic Red & White"
            description="Clean white background with deep red accents and a friendly sans-serif. A familiar, approachable dealership look."
            swatches={["#ffffff", "#111827", "#b91c1c"]}
            tone="clean"
          />
        </div>

        <p className="mt-10 text-center text-xs text-gray-500">
          Tip: a floating switcher in the corner of each design lets you jump
          between them.
        </p>
      </div>
    </main>
  );
}

function DesignCard({
  href,
  label,
  title,
  description,
  swatches,
  tone,
}: {
  href: string;
  label: string;
  title: string;
  description: string;
  swatches: string[];
  tone: "warm" | "clean";
}) {
  return (
    <a
      href={href}
      className="group relative bg-white border border-gray-200 rounded-2xl p-7 hover:border-gray-900 hover:shadow-xl transition-all overflow-hidden"
    >
      {/* preview swatch row */}
      <div
        className="aspect-[16/9] rounded-xl mb-6 relative overflow-hidden flex"
        style={{
          background: tone === "warm" ? "#f4efe6" : "#ffffff",
          border: "1px solid #e5e7eb",
        }}
      >
        {tone === "warm" ? (
          <WarmPreview />
        ) : (
          <CleanPreview />
        )}
      </div>

      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            {label}
          </p>
          <h2 className="mt-2 text-2xl font-bold text-gray-900">{title}</h2>
        </div>
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-white group-hover:translate-x-0.5 transition-transform">
          <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </span>
      </div>

      <p className="mt-3 text-sm text-gray-600 leading-relaxed">{description}</p>

      <div className="mt-5 flex items-center gap-2">
        {swatches.map((c) => (
          <span
            key={c}
            className="h-5 w-5 rounded-full border border-gray-200"
            style={{ background: c }}
            aria-label={c}
          />
        ))}
        <span className="ml-2 text-[0.7rem] uppercase tracking-wider text-gray-500">
          Palette
        </span>
      </div>
    </a>
  );
}

function WarmPreview() {
  return (
    <div className="absolute inset-0 p-4 flex flex-col justify-between" style={{ color: "#0f2a47" }}>
      <div className="flex items-center justify-between">
        <span className="text-[0.55rem] uppercase tracking-[0.22em]" style={{ color: "#b23a2c" }}>
          — Est. Helena, AR
        </span>
        <span className="text-[0.55rem] uppercase tracking-[0.22em]">Hwy 49</span>
      </div>
      <div>
        <p
          className="font-medium leading-[0.95] text-2xl"
          style={{ fontFamily: "Georgia, serif", letterSpacing: "-0.02em" }}
        >
          Honest cars,
          <br />
          <span className="italic font-light" style={{ color: "#b23a2c" }}>
            fair handshakes.
          </span>
        </p>
      </div>
      <div className="flex items-center gap-2">
        <span
          className="text-[0.55rem] px-2 py-1 rounded"
          style={{ background: "#0f2a47", color: "#f4efe6" }}
        >
          CALL THE LOT
        </span>
        <span className="h-1 w-1 rounded-full" style={{ background: "#b23a2c" }} />
        <span className="text-[0.55rem]">Browse the lot →</span>
      </div>
    </div>
  );
}

function CleanPreview() {
  return (
    <div className="absolute inset-0 p-4 flex flex-col justify-between" style={{ color: "#111827" }}>
      <div className="flex items-center justify-between">
        <span
          className="text-[0.55rem] font-semibold px-2 py-0.5 rounded-full"
          style={{ background: "#fef2f2", color: "#b91c1c" }}
        >
          ● Open today
        </span>
        <span className="text-[0.55rem] font-semibold">870-226-1073</span>
      </div>
      <div>
        <p className="font-extrabold leading-[1.05] text-2xl tracking-tight">
          Quality used cars,
          <br />
          <span style={{ color: "#b91c1c" }}>honest prices.</span>
        </p>
      </div>
      <div className="flex items-center gap-2">
        <span
          className="text-[0.55rem] font-semibold px-2.5 py-1 rounded-full"
          style={{ background: "#b91c1c", color: "white" }}
        >
          Browse Inventory →
        </span>
        <span
          className="text-[0.55rem] font-semibold px-2.5 py-1 rounded-full border"
          style={{ borderColor: "#d1d5db" }}
        >
          Call
        </span>
      </div>
    </div>
  );
}
