import { SectionLabel } from "@/components/meridian/SectionLabel";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";

const testimonials = [
  {
    id: "client",
    relationship: "Client",
    quote:
      "When the stakes are this high, you don't want a consultant. You want someone who has actually built and run something themselves. That is the difference with Green Powerhouse.",
    attribution: "Group CEO, publicly listed industrial company",
  },
  {
    id: "ma-counterparty",
    relationship: "M&A Counterparty",
    quote:
      "We had multiple bidders at the table. Green Powerhouse was the only one who understood the business as an operator, not just as a buyer.",
    attribution: "Former majority shareholder, acquired portfolio company",
  },
  {
    id: "investor",
    relationship: "Investor",
    quote:
      "They co-invest alongside us rather than simply presenting opportunities. That alignment of interest is rare, and it shows in the quality of the decisions.",
    attribution: "Managing partner, institutional co-investor",
  },
  {
    id: "government-institutional-partner",
    relationship: "Government & Institutional Partner",
    quote:
      "Few advisers understand both the commercial and the sovereign dimension of a project of this scale. Green Powerhouse moved fluently between both.",
    attribution: "Senior government official, ministry of economy",
  },
] as const;

type InterviewsProps = {
  heading?: React.ReactNode;
  issue?: string;
};

export function Interviews({
  heading = (
    <>
      What they say, <em>across the relationships we maintain.</em>
    </>
  ),
  issue = "Testimonies · 2026",
}: InterviewsProps = {}) {
  return (
    <section className="border-b border-rule bg-paper-alt py-section">
      <Container>
        <SectionLabel
          left={`${testimonials.length} testimonies · 2026`}
          center="Client · counterparty · co-investor · institutional partner"
          right={issue}
        />

        <h2 className="display text-display mt-10 max-w-4xl">{heading}</h2>

        <p className="mt-7 max-w-3xl text-body text-ink-muted">
          A second, dedicated testimonials section, distinct from the
          discipline-level quotes above, gathering perspectives from across the
          four types of relationship Green PowerHouse maintains: client,
          transaction counterparty, co-investor and institutional partner.
        </p>

        <Reveal
          as="div"
          stagger={0.1}
          className="mt-14"
        >
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="border-t border-rule py-10 last:border-b"
            >
              <h3 className="display text-h3 text-ink">
                {testimonial.relationship}
              </h3>

              <figure className="mt-7">
                <blockquote className="serif-em max-w-4xl text-[clamp(1.25rem,2.4vw,2rem)] leading-[1.35] text-ink">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mono-label mt-6 uppercase tracking-[0.18em] text-accent">
                  {testimonial.attribution}
                </figcaption>
              </figure>
            </article>
          ))}
        </Reveal>

        <p className="serif-em mt-10 max-w-4xl text-body text-ink-muted">
          Invented, illustrative quotes. Green PowerHouse has no disclosed
          client testimonials at this stage. Attributions are anonymised by
          design and should be replaced with genuine feedback as soon as it is
          available, or kept in this anonymised form permanently to preserve
          confidentiality.
        </p>
      </Container>
    </section>
  );
}
