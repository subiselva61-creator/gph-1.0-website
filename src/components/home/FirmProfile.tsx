import { SectionLabel } from "@/components/meridian/SectionLabel";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { firmProfile, standingBlocks } from "@/lib/home/firm";

export function FirmProfile() {
  return (
    <section id="firm" className="border-b border-rule py-section">
      <Container>
        <SectionLabel
          left="Who we are · since 2023"
          center="Advisory and principal investment under one roof"
          right="Filed from Dubai"
        />

        <h2 className="display text-display mt-10 max-w-3xl">
          An independent strategic advisory{" "}
          <em>&amp; investment group.</em>
        </h2>

        <p className="mt-7 max-w-2xl text-body text-ink-muted">
          {firmProfile.lead}
        </p>

        <div className="mt-14 grid gap-px border border-rule bg-rule lg:grid-cols-2">
          <div className="bg-paper p-6 sm:p-8">
            <p className="mono-label text-accent">Our mission</p>
            <p className="mt-5 text-body text-ink">{firmProfile.mission}</p>
          </div>
          <div className="bg-paper p-6 sm:p-8">
            <p className="mono-label text-accent">Our vision</p>
            <p className="mt-5 text-body text-ink">{firmProfile.vision}</p>
          </div>
        </div>

        <Reveal
          as="ul"
          stagger={0.08}
          className="mt-6 grid gap-px border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4"
        >
          {standingBlocks.map((block) => (
            <li key={block.kicker} className="flex flex-col bg-paper p-6">
              <span className="mono-label text-ink-faint">{block.kicker}</span>
              <h3 className="text-h3 mt-8 text-ink">{block.title}</h3>
              <p className="mt-4 text-body-sm text-ink-muted">{block.body}</p>
            </li>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
