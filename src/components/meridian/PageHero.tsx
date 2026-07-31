import Image from "next/image";
import { SheetHeader } from "@/components/meridian/SheetHeader";
import { Container } from "@/components/ui/Container";

type PageHeroProps = {
  /** Drawing number without the § prefix, e.g. "GPH / 04". */
  sheet: string;
  issued?: string;
  sheetOf?: string;
  title: React.ReactNode;
  lines?: string[];
  imageSrc?: string;
  imageAlt?: string;
};

export function PageHero({
  sheet,
  issued = "2026.01",
  sheetOf = "1 / 1",
  title,
  lines = [],
  imageSrc,
  imageAlt = "",
}: PageHeroProps) {
  return (
    <section className="blueprint-grid border-b border-rule">
      <Container>
        <div className="py-[clamp(2.5rem,5vw,4.5rem)]">
          <SheetHeader
            sheet={sheet}
            fields={[
              { label: "Issued", value: issued },
              { label: "Scale", value: "1 : 1" },
              { label: "Sheet", value: sheetOf },
            ]}
          />

          <h1 className="display text-hero mt-10 max-w-4xl">{title}</h1>

          {lines.length > 0 && (
            <ul className="mt-8 max-w-2xl border-t border-rule">
              {lines.map((line) => (
                <li
                  key={line}
                  className="border-b border-rule py-3 text-body text-ink-muted"
                >
                  {line}
                </li>
              ))}
            </ul>
          )}

          {imageSrc && (
            <figure className="hatch mt-12 border border-rule p-2">
              <div className="relative aspect-16/7 overflow-hidden bg-paper-alt">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  priority
                  sizes="100vw"
                  className="img-graded object-cover"
                />
              </div>
            </figure>
          )}
        </div>
      </Container>
    </section>
  );
}
