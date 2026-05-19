type Props = {
  variant?: "sedan" | "suv" | "truck";
  className?: string;
};

export function CarSilhouette({ variant = "sedan", className = "" }: Props) {
  if (variant === "truck") {
    return (
      <svg
        viewBox="0 0 220 100"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        <path d="M10 78 L18 60 L30 50 L86 50 L96 36 L138 36 L150 50 L210 50 L210 78" />
        <path d="M210 78 L10 78" />
        <rect x="100" y="42" width="34" height="10" />
        <circle cx="48" cy="80" r="11" />
        <circle cx="172" cy="80" r="11" />
        <path d="M10 78 L10 70 L22 70" opacity="0.6" />
      </svg>
    );
  }
  if (variant === "suv") {
    return (
      <svg
        viewBox="0 0 220 100"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        <path d="M14 80 L24 56 L46 38 L162 38 L188 56 L206 60 L208 80" />
        <path d="M14 80 L208 80" />
        <path d="M60 56 L92 42 L160 42 L182 56" />
        <circle cx="58" cy="82" r="11" />
        <circle cx="170" cy="82" r="11" />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 220 100"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
      strokeLinecap="round"
    >
      <path d="M14 78 L28 62 L62 44 L150 44 L184 62 L206 66 L208 78" />
      <path d="M14 78 L208 78" />
      <path d="M70 58 L96 48 L150 48 L172 58" />
      <circle cx="58" cy="80" r="11" />
      <circle cx="170" cy="80" r="11" />
    </svg>
  );
}
