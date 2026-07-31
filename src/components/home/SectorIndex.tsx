import Link from "next/link";
import { SectionLabel } from "@/components/meridian/SectionLabel";
import { Container } from "@/components/ui/Container";
import { sectors } from "@/lib/home/sectors";
import { cn } from "@/lib/utils";

export function SectorIndex() {
  return (
    <section id="sectors" className="border-b border-rule py-section">
      <Container>
        <SectionLabel
          left="3 products · one house"
          center="Hydro AI · Solar · Cashew"
          right="Index · 2026.04"
        />

        <h2 className="display text-display mt-10 max-w-3xl">
          Three things we sell. <em>Nothing else.</em>
        </h2>

        <p className="mt-7 max-w-2xl text-body text-ink-muted">
          Green PowerHouse sells three products out of one house. Two are trading
          today; the third — Hydro AI, the green hydrogen intelligence website
          with AI investor matching — is being built now and opens on
          subscription. Every product shares the same balance sheet, the same
          partners, and the same record-keeping.
        </p>

        <ol className="mt-14 grid gap-px border border-rule bg-rule lg:grid-cols-3">
          {sectors.map((sector) => (
            <li key={sector.id} className="flex flex-col bg-paper p-6">
              <div className="flex items-baseline justify-between gap-3">
                <span className="mono-label text-ink-faint">
                  {sector.index === "01" ? "Product" : "Desk"} {sector.index}
                </span>
                <span
                  className={cn(
                    "mono-micro border px-1.5 py-0.5",
                    sector.trading
                      ? "border-accent/40 bg-accent-soft text-accent"
                      : "border-rule text-ink-faint",
                  )}
                >
                  {sector.status}
                </span>
              </div>

              <h3 className="text-h3 mt-8 text-ink">{sector.name}</h3>
              <p className="display text-h3 mt-2 text-ink-muted">
                <em>{sector.headline}</em>
              </p>

              <p className="mt-5 text-body-sm text-ink-muted">{sector.blurb}</p>

              <ul className="mt-6 border-t border-rule">
                {sector.points.map((point) => (
                  <li
                    key={point}
                    className="border-b border-rule py-2.5 text-body-sm text-ink"
                  >
                    <span className="text-ink-faint">· </span>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-1 items-end justify-between gap-4">
                <a
                  href={`#${sector.id}`}
                  className="focus-ring mono-label link-underline text-ink"
                >
                  Read more ↓
                </a>
                <Link
                  href={sector.href}
                  className="focus-ring mono-label link-underline text-ink-faint"
                >
                  {sector.hrefLabel}
                </Link>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
