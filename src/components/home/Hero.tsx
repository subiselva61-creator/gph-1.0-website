import { ConsoleMockup } from "@/components/home/ConsoleMockup";
import { Cta } from "@/components/meridian/Cta";
import { Container } from "@/components/ui/Container";
import { sectors } from "@/lib/home/sectors";

export function Hero() {
  return (
    <section className="blueprint-grid border-b border-rule pt-[clamp(3.5rem,7vw,6rem)]">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          {/* Two headlines share one grid cell and crossfade between them */}
          <h1 className="display text-hero grid">
            <span className="headline-a col-start-1 row-start-1">
              Driving the green hydrogen economy
            </span>
            <span className="headline-b col-start-1 row-start-1" aria-hidden>
              Financing the energy transition
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-body text-ink-muted">
            One house, three products — Hydro AI for green hydrogen intelligence
            and investor matching, second-life solar panels, and West African
            cashew trade. Each one replaces a chain of intermediaries with a
            single counterparty.
          </p>

          <ul className="mono-label mx-auto mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-x-3 gap-y-2 text-ink-faint [&>li:last-child>span]:hidden">
            {sectors.map((sector) => (
              <li key={sector.id} className="flex items-center gap-3">
                <a
                  href={`#${sector.id}`}
                  className="focus-ring link-underline text-ink"
                >
                  {sector.index} · {sector.desk}
                </a>
                <span aria-hidden>/</span>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Cta href="#sectors">Get started</Cta>
            <Cta href="#plans" variant="secondary">
              See the plans
            </Cta>
          </div>
        </div>

        <div className="pb-[clamp(2.5rem,5vw,4rem)] pt-[clamp(2.5rem,5vw,4rem)]">
          <figure className="mx-auto max-w-5xl">
            <figcaption className="mb-3">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-rule pb-3">
                <span className="mono-label shiny-text font-bold">
                  Hydro AI Website · product 01
                </span>
                <span className="mono-label text-ink-faint">
                  Interface in build · 2026
                </span>
              </div>
              <p className="mt-3 text-body-sm text-ink-muted">
                This is Hydro AI — the green hydrogen intelligence platform we
                sell. Plant and investor registers, live tracking, buy and sell
                trade, live news, and an AI engine that matches the right
                investor to the right project.
              </p>
            </figcaption>
            <ConsoleMockup />
          </figure>
        </div>
      </Container>
    </section>
  );
}
