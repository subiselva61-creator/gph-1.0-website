import Link from "next/link";

/** Thin top strip above the ticker — carries one standing announcement. */
export function AnnouncementBar() {
  return (
    <div className="border-b border-rule bg-paper-alt">
      <div className="mx-auto flex max-w-[var(--canvas-max)] items-center justify-center gap-3 px-[var(--space-container-x)] py-1.5">
        <span className="mono-label text-ink-faint">
          Second-life solar now shipping to West Africa
        </span>
        <Link
          href="/solar-panels"
          className="mono-label text-ink underline decoration-rule-strong underline-offset-2 transition-colors hover:text-accent"
        >
          View programme
        </Link>
      </div>
    </div>
  );
}
