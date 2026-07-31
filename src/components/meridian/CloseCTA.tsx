import { Cta } from "@/components/meridian/Cta";
import { SectionLabel } from "@/components/meridian/SectionLabel";
import { Container } from "@/components/ui/Container";

type CloseCTAProps = {
  label?: string;
  heading?: React.ReactNode;
  body?: string;
  ctaLabel?: string;
  href?: string;
};

/** The closing dispatch band that ends every inner page. */
export function CloseCTA({
  label = "Your advisor",
  heading = (
    <>
      Schedule a discussion, <em>not a sales call.</em>
    </>
  ),
  body = "Tell us the mandate, the geography, and the timeline. We will tell you whether we are the right house for it.",
  ctaLabel = "Schedule a discussion",
  href = "/contact-us",
}: CloseCTAProps) {
  return (
    <section className="border-b border-rule py-section">
      <Container>
        <SectionLabel
          left={label}
          center="Dubai · Paris · Abidjan"
          right="Reply within two working days"
        />

        <h2 className="display text-display mt-10 max-w-3xl">{heading}</h2>

        <p className="mt-7 max-w-xl text-body text-ink-muted">{body}</p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <Cta href={href}>{ctaLabel}</Cta>
          <Cta href="/about" variant="secondary">
            About the house
          </Cta>
        </div>
      </Container>
    </section>
  );
}
