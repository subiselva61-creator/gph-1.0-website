import { SectionLabel } from "@/components/meridian/SectionLabel";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { disciplines } from "@/lib/home/firm";

export function Disciplines() {
  return (
    <section
      id="activities"
      className="border-b border-rule bg-paper-alt py-section"
    >
      <Container>
        <SectionLabel
          left={`${disciplines.length} disciplines · one standard`}
          center="Advisory · transactions · capital · execution"
          right="Index · 2026"
        />

        <h2 className="display text-display mt-10 max-w-3xl">
          Four disciplines, <em>one standard of execution.</em>
        </h2>

        <p className="mt-7 max-w-2xl text-body text-ink-muted">
          Our core capabilities run from the first strategic assessment through
          to the transaction, the capital behind it, and the years of execution
          that follow. Each is offered on the same terms as the last.
        </p>

        <div className="mt-14">
          {disciplines.map((discipline) => (
            <article
              key={discipline.id}
              id={discipline.id}
              className="grid gap-x-10 gap-y-6 border-t border-rule py-12 lg:grid-cols-[8rem_1fr]"
            >
              <div className="flex items-baseline gap-4 lg:block">
                <span className="serif-em block text-[clamp(2.5rem,5vw,3.75rem)] leading-none text-ink-faint">
                  {discipline.index}
                </span>
                <span className="mono-label text-accent lg:mt-4 lg:block">
                  {discipline.tag}
                </span>
              </div>

              <Reveal stagger={0.08} className="max-w-3xl">
                <h3 className="display text-h2">{discipline.name}</h3>

                {discipline.body.map((paragraph) => (
                  <p key={paragraph} className="mt-6 text-body text-ink-muted">
                    {paragraph}
                  </p>
                ))}

                <figure className="mt-9 border-l-2 border-accent pl-6">
                  <blockquote className="serif-em max-w-2xl text-[clamp(1.125rem,2vw,1.5rem)] leading-[1.35] text-ink">
                    &ldquo;{discipline.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mono-label mt-4 text-ink-faint">
                    {discipline.cite}
                  </figcaption>
                </figure>
              </Reveal>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
