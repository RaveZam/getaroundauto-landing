type Props = {
  current: "1" | "2";
};

export function DesignSwitcher({ current }: Props) {
  const other = current === "1" ? "/design2" : "/design1";
  const otherLabel = current === "1" ? "Design 2 (Red/White)" : "Design 1 (Original)";
  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2">
      <a
        href="/"
        className="inline-flex items-center gap-1.5 bg-white text-gray-900 border border-gray-300 text-xs font-semibold px-3.5 py-2.5 rounded-full shadow-md hover:bg-gray-50 transition-colors"
      >
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
        Chooser
      </a>
      <a
        href={other}
        className="inline-flex items-center gap-2 bg-black text-white text-xs font-semibold px-4 py-2.5 rounded-full shadow-lg hover:bg-gray-800 transition-colors"
      >
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12h18M3 6h18M3 18h18" />
        </svg>
        View {otherLabel}
      </a>
    </div>
  );
}
