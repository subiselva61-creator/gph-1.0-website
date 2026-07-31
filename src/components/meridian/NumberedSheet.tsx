import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

export type SheetItem = {
  title: string;
  body: string;
};

type NumberedSheetProps = {
  items: SheetItem[];
  /** Letter markers (A, B, C) instead of numbers (01, 02, 03). */
  letters?: boolean;
  className?: string;
};

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

/** Ruled list of numbered sheet entries — the workhorse layout for inner pages. */
export function NumberedSheet({
  items,
  letters,
  className,
}: NumberedSheetProps) {
  return (
    <Reveal
      as="ul"
      stagger={0.08}
      className={cn("border-t border-rule", className)}
    >
      {items.map((item, i) => (
        <li
          key={item.title}
          className="grid gap-4 border-b border-rule py-8 lg:grid-cols-[7rem_1fr] lg:gap-10"
        >
          <span className="mono-label text-ink-faint">
            {letters ? `${alphabet[i]}.` : String(i + 1).padStart(2, "0")}
          </span>
          <div className="min-w-0">
            <h3 className="text-h2 text-ink">{item.title}</h3>
            <p className="mt-4 max-w-2xl text-body text-ink-muted">
              {item.body}
            </p>
          </div>
        </li>
      ))}
    </Reveal>
  );
}
