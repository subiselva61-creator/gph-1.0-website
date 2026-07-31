import { cn } from "@/lib/utils";

type SectionLabelProps = {
  /** Left-hand annotation — usually a count or § marker. */
  left: string;
  /** Centre annotation — an instruction or provenance note. */
  center?: string;
  /** Right-hand annotation — a filing stamp or status. */
  right?: string;
  className?: string;
};

/**
 * The three-part mono annotation row that sits above every section heading.
 * e.g. "8 partners · since 2023" | "Hover a cell" | "Wall · quiet"
 */
export function SectionLabel({
  left,
  center,
  right,
  className,
}: SectionLabelProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-1.5 border-b border-rule pb-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6",
        className,
      )}
    >
      <span className="mono-label text-ink">{left}</span>
      {center && (
        <span className="mono-label text-ink-faint sm:text-center">
          {center}
        </span>
      )}
      {right && (
        <span className="mono-label text-ink-faint sm:text-right">{right}</span>
      )}
    </div>
  );
}
