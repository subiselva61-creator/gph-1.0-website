import { cn } from "@/lib/utils";

type SheetField = {
  label: string;
  value: string;
};

type SheetHeaderProps = {
  /** Drawing number, e.g. "GPH / 01" — the § prefix is added automatically. */
  sheet: string;
  rev?: string;
  fields?: SheetField[];
  className?: string;
};

/**
 * Technical drawing header — the ruled strip that opens every sheet.
 * Renders as "§ GPH / 01 · Rev A" on the left with label/value columns right.
 */
export function SheetHeader({
  sheet,
  rev = "Rev A",
  fields = [],
  className,
}: SheetHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 border-y border-rule py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6",
        className,
      )}
    >
      <div className="flex items-baseline gap-3">
        <span className="mono-label text-ink">§ {sheet}</span>
        <span className="mono-label text-ink-faint">{rev}</span>
      </div>

      {fields.length > 0 && (
        <dl className="flex flex-wrap items-baseline gap-x-6 gap-y-2 sm:gap-x-10">
          {fields.map((field) => (
            <div key={field.label} className="flex items-baseline gap-2">
              <dt className="mono-label text-ink-faint">{field.label}</dt>
              <dd className="mono-num text-[0.75rem] text-ink">{field.value}</dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  );
}
