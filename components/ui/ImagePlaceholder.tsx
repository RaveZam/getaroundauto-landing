type Props = {
  label?: string;
  ratio?: string;
  className?: string;
  tone?: "ink" | "cream";
};

/**
 * Blank image placeholder used while real photography is pending.
 * Styled to feel intentional (vintage photo card) rather than missing.
 */
export function ImagePlaceholder({
  label = "Photo coming soon",
  ratio = "4 / 5",
  className = "",
  tone = "ink",
}: Props) {
  const isInk = tone === "ink";
  return (
    <div
      className={`relative overflow-hidden border ${
        isInk ? "border-ink/15 bg-ink/[0.04]" : "border-cream-2 bg-cream-2/60"
      } ${className}`}
      style={{ aspectRatio: ratio }}
      aria-label={label}
      role="img"
    >
      {/* corner ticks */}
      <span className="absolute left-3 top-3 h-3 w-3 border-l border-t border-current opacity-40" />
      <span className="absolute right-3 top-3 h-3 w-3 border-r border-t border-current opacity-40" />
      <span className="absolute left-3 bottom-3 h-3 w-3 border-l border-b border-current opacity-40" />
      <span className="absolute right-3 bottom-3 h-3 w-3 border-r border-b border-current opacity-40" />

      {/* diagonal hatching */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, currentColor 0 1px, transparent 1px 14px)",
        }}
      />

      {/* center mark */}
      <div className="absolute inset-0 grid place-items-center text-center">
        <div className="flex flex-col items-center gap-3 px-6">
          <svg
            viewBox="0 0 48 48"
            className="h-8 w-8 opacity-60"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
          >
            <rect x="6" y="10" width="36" height="28" rx="1" />
            <circle cx="18" cy="22" r="3" />
            <path d="M6 34l11-9 8 7 6-4 11 7" />
          </svg>
          <span className="text-[0.65rem] uppercase tracking-[0.28em] font-medium opacity-70">
            {label}
          </span>
        </div>
      </div>
    </div>
  );
}
