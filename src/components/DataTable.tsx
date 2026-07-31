import { cn } from "@/lib/utils";
import type { LedgerTableData } from "@/lib/agriculture/tables";

type DataTableProps = {
  data: LedgerTableData;
  className?: string;
  /** Drawing reference printed in the table header strip, e.g. "TBL / 04". */
  reference?: string;
};

/** Ruled ledger table — hairline rules, mono numerals, no fills. */
export function DataTable({ data, className, reference }: DataTableProps) {
  return (
    <figure className={cn("border border-rule bg-paper-raised", className)}>
      {(data.caption || reference) && (
        <figcaption className="flex items-baseline justify-between gap-4 border-b border-rule px-4 py-2.5">
          {data.caption && (
            <span className="mono-label text-ink">{data.caption}</span>
          )}
          {reference && (
            <span className="mono-label text-ink-faint">§ {reference}</span>
          )}
        </figcaption>
      )}

      <div className="overflow-x-auto">
        <table className="w-full min-w-[30rem] border-collapse text-left">
          <thead>
            <tr className="border-b border-rule">
              {data.columns.map((col) => (
                <th
                  key={col.key}
                  scope="col"
                  className={cn(
                    "mono-label px-4 py-2.5 text-ink-faint",
                    col.align === "right" && "text-right",
                  )}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row, i) => (
              <tr
                key={i}
                className={cn(
                  "border-b border-rule last:border-b-0",
                  row.highlight && "bg-paper-alt",
                )}
              >
                {data.columns.map((col) => (
                  <td
                    key={col.key}
                    className={cn(
                      "px-4 py-3 text-body-sm text-ink-muted",
                      col.align === "right" && "text-right",
                      col.numeric && "mono-num text-ink",
                      row.highlight && "font-medium text-ink",
                    )}
                  >
                    {String(row[col.key] ?? "")}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {data.note && (
        <p className="border-t border-rule px-4 py-2.5 text-[0.8125rem] text-ink-faint">
          {data.note}
        </p>
      )}
    </figure>
  );
}
