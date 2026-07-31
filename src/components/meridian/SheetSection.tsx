import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

type SheetSectionProps = {
  id?: string;
  /** Drawing reference without the § prefix, e.g. "AGR / 03". */
  reference: string;
  sheet?: string;
  title: React.ReactNode;
  /** Right-hand annotation replacing the sheet counter. */
  stamp?: string;
  alt?: boolean;
  children: React.ReactNode;
};

/** A numbered sheet on an inner page: ruled header, display title, then content. */
export function SheetSection({
  id,
  reference,
  sheet,
  title,
  stamp,
  alt,
  children,
}: SheetSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "border-b border-rule py-section",
        alt && "bg-paper-alt",
      )}
    >
      <Container>
        <div className="flex flex-col gap-1.5 border-b border-rule pb-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
          <span className="mono-label text-ink">§ {reference}</span>
          <span className="mono-label text-ink-faint">
            {stamp ?? (sheet ? `Sheet ${sheet}` : null)}
          </span>
        </div>

        <h2 className="display text-display mt-10 max-w-4xl">{title}</h2>

        {children}
      </Container>
    </section>
  );
}
