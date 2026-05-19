import { business } from "@/lib/business";

type Props = {
  className?: string;
  showIcon?: boolean;
  label?: string;
};

export function PhoneLink({
  className = "",
  showIcon = true,
  label,
}: Props) {
  return (
    <a
      href={business.phoneHref}
      className={`inline-flex items-center gap-2 group ${className}`}
    >
      {showIcon && (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          className="h-3.5 w-3.5 opacity-70 group-hover:rotate-12 transition-transform"
        >
          <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
        </svg>
      )}
      <span className="tabular-nums">{label ?? business.phone}</span>
    </a>
  );
}
