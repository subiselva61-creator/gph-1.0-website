import { cn } from "@/lib/utils";
import type { LedgerTableData } from "@/lib/agriculture/tables";

type DataTableProps = {
  data: LedgerTableData;
  className?: string;
};

export function DataTable({ data, className }: DataTableProps) {
  return (
    <div className={cn("glass-panel overflow-x-auto px-5 py-5", className)}>
      {data.caption ? (
        <p className="mb-4 text-eyebrow text-ink-muted">{data.caption}</p>
      ) : null}
      <table className="w-full min-w-[28rem] border-collapse text-left text-body-sm">
        <thead>
          <tr className="border-b border-glass-border">
            {data.columns.map((col) => (
              <th
                key={col.key}
                className={cn(
                  "pb-3 pr-4 font-medium tracking-[0.04em] text-ink",
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
                "border-b border-glass-border/70",
                row.highlight && "bg-glass",
              )}
            >
              {data.columns.map((col) => (
                <td
                  key={col.key}
                  className={cn(
                    "py-3 pr-4 text-ink-muted",
                    col.align === "right" && "text-right",
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
      {data.note ? (
        <p className="mt-3 text-[0.8125rem] italic text-ink-muted">
          {data.note}
        </p>
      ) : null}
    </div>
  );
}
