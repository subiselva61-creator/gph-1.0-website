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

        <div className="pb-[clamp(1.5rem,3vw,2.5rem)] pt-[clamp(1.75rem,3.5vw,2.75rem)]">
          <figure className="mx-auto max-w-4xl">
            <figcaption className="mb-3 text-center">
              <h2 className="display shiny-text text-h3 font-bold sm:text-h2">
                Hydro AI Website
              </h2>
              <p className="mx-auto mt-2 max-w-xl text-body-sm text-ink-muted">
                Plant and investor intelligence, live trade, news, and an AI
                engine that matches capital to the right project.
              </p>
            </figcaption>
            <div className="origin-top scale-[0.92] sm:scale-95">
              <ConsoleMockup />
            </div>
          </figure>
        </div>
      </Container>
    </section>
  );
}
