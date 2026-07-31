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
            One house, three desks — a green hydrogen intelligence terminal,
            second-life solar panels, and West African cashew trade. Each one
            replaces a chain of intermediaries with a single counterparty.
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
            <Cta href="/contact-us">Get started</Cta>
            <Cta href="#plans" variant="secondary">
              See the plans
            </Cta>
          </div>
        </div>

        <div className="pb-[clamp(2.5rem,5vw,4rem)] pt-[clamp(2.5rem,5vw,4rem)]">
          <div className="mx-auto max-w-5xl">
            <ConsoleMockup />
            <div className="mt-3 flex items-baseline justify-between gap-4">
              <span className="mono-label text-ink-faint">
                Terminal preview · desk 01
              </span>
              <span className="mono-label text-ink-faint">
                Interface in build · 2026
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
