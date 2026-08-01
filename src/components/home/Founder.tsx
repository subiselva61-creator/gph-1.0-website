import { FounderPortrait } from "@/components/home/FounderPortrait";
import { Cta } from "@/components/meridian/Cta";
import { SectionLabel } from "@/components/meridian/SectionLabel";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { founder } from "@/lib/home/firm";
import { images } from "@/lib/images";

export function Founder() {
  return (
    <section
      id="founder"
      className="border-b border-rule bg-paper-alt py-section"
    >
      <Container>
        <SectionLabel
          left="Founder · on the record"
          center="Three decades across strategy, transactions and capital"
          right="Plate · 35mm"
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[21rem_1fr] lg:gap-16">
          <FounderPortrait
            src={images.founderPortrait}
            alt={`Portrait of ${founder.name}, ${founder.role}`}
            className="w-full max-w-84"
          />

          <Reveal>
            <h2 className="display text-display">{founder.name}</h2>
            <p className="mono-label mt-3 text-accent">{founder.role}</p>

            {founder.body.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-6 max-w-2xl text-body text-ink-muted"
              >
                {paragraph}
              </p>
            ))}

            <dl className="mt-10 grid gap-px border border-rule bg-rule sm:grid-cols-3">
              {founder.stats.map((stat) => (
                <div key={stat.label} className="bg-paper p-5">
                  <dt className="mono-label text-ink-faint">{stat.label}</dt>
                  <dd className="display mono-num text-h2 mt-3 text-ink">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mono-label mt-10 text-ink-faint">Track record</p>
            <ul className="mt-3 border-t border-rule">
              {founder.record.map((entry) => (
                <li
                  key={entry}
                  className="border-b border-rule py-3 text-body-sm text-ink"
                >
                  <span className="text-ink-faint">· </span>
                  {entry}
                </li>
              ))}
            </ul>

            <div className="mt-9">
              <Cta href="/our-team" variant="secondary">
                Meet the house
              </Cta>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
