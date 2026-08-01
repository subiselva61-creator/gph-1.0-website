import { Cta } from "@/components/meridian/Cta";
import { Container } from "@/components/ui/Container";
import { disciplines, firmProfile, principles } from "@/lib/home/firm";

export function Hero() {
  return (
    <section className="blueprint-grid border-b border-rule py-[clamp(3.5rem,7vw,6rem)]">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="mono-label text-ink-faint">{firmProfile.eyebrow}</p>

          {/* Two headlines share one grid cell and crossfade between them */}
          <h1 className="display text-hero mt-6 grid">
            <span className="headline-a col-start-1 row-start-1">
              Strategic advisory. Principal investment.{" "}
              <em>Long-term value.</em>
            </span>
            <span className="headline-b col-start-1 row-start-1" aria-hidden>
              Counsel at the moments that <em>define a decade.</em>
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-body text-ink-muted">
            We support corporations, investors, governments and public
            institutions on complex strategic initiatives, business
            transformation, infrastructure investment and long-term value
            creation — applying the same principles to our own ventures that we
            recommend to our clients.
          </p>

          <ul className="mono-label mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-x-3 gap-y-2 text-ink-faint [&>li:last-child>span]:hidden">
            {disciplines.map((discipline) => (
              <li key={discipline.id} className="flex items-center gap-3">
                <a
                  href={`#${discipline.id}`}
                  className="focus-ring link-underline text-ink"
                >
                  {discipline.index} · {discipline.name}
                </a>
                <span aria-hidden>/</span>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Cta href="#activities">Discover our activities</Cta>
            <Cta href="/contact-us" variant="secondary">
              Contact us
            </Cta>
          </div>

          <ul className="mono-micro mt-9 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-ink-faint [&>li:last-child>span:last-child]:hidden">
            {principles.map((principle) => (
              <li key={principle.index} className="flex items-center gap-3">
                <span className="text-ink">{principle.name}</span>
                <span aria-hidden>·</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
