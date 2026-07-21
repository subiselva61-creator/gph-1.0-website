import type { Metadata } from "next";
import { AdvisorCloseCTA } from "@/components/AdvisorCloseCTA";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/motion/SectionHeading";
import ScrollReveal from "@/components/react-bits/ScrollReveal";
import ShinyText from "@/components/react-bits/ShinyText";
import { ValeranHero } from "@/components/ValeranHero";
import { Container } from "@/components/ui/Container";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Our Proposal",
  description:
    "Proven green hydrogen technology ready to deploy at scale, paired with innovative blended finance models for the Global South.",
};

const features = [
  {
    title: "Green Hydrogen Focus",
    body: "A clean, zero-emission fuel that's ready for large-scale deployment.",
  },
  {
    title: "Innovative Finance Models",
    body: "Connecting global investors with local markets for sustainable growth.",
  },
  {
    title: "Stronger Local Economies",
    body: "Building green portfolios that deliver both climate action and economic resilience.",
  },
];

export default function OurProposalPage() {
  return (
    <>
      <ValeranHero
        compact
        title="Our Proposal"
        lines={[
          "Proven green hydrogen technology ready to deploy at scale",
          "Blended finance models connecting international investors with local markets",
          "Our goal: vibrant local capital markets under a structured SDG framework",
        ]}
        imageSrc={images.heroHydrogen}
        imageAlt="Clean energy infrastructure"
      />

      <section className="py-section">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <SectionHeading>Green Hydrogen — Powering the Future</SectionHeading>
              <p className="mt-6 text-body text-ink-muted">
                At Green PowerHouse, we see green hydrogen as a game-changer in
                the clean energy revolution. It&apos;s a fuel that produces no
                emissions, is technologically ready, and has captured global
                attention—from Europe to North America—especially in regions
                where solar and wind are limited. For us, green hydrogen
                represents not just a sustainable energy source, but also a
                reliable revenue stream that will drive economies for decades to
                come.
              </p>
            </div>
            <div>
              <SectionHeading>Smarter Financial Solutions</SectionHeading>
              <p className="mt-6 text-body text-ink-muted">
                Technology alone isn&apos;t enough. To make green hydrogen
                accessible, we design innovative financial tools that connect
                investors with sustainable projects in the Global South.
                Traditional green bonds are a good start, but they don&apos;t
                always strengthen local economies. That&apos;s why we focus on
                creating blended finance models that bring in international
                capital while also building stronger local financial markets.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className= "py-section">
        <Container>
          <SectionHeading>What we bring</SectionHeading>
          <Reveal as="ul" stagger={0.12} className="mt-12 grid gap-10 lg:grid-cols-3">
            {features.map((f) => (
              <li key={f.title} className="border-t border-line pt-6">
                <h3 className="font-display text-h3 font-normal text-ink">
                  {f.title}
                </h3>
                <p className="mt-4 text-body-sm text-ink-muted">{f.body}</p>
              </li>
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="py-section">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-eyebrow text-ink-muted">
              <ShinyText text="Our conviction" speed={2.5} className="text-eyebrow" />
            </p>
            <ScrollReveal
              as="p"
              enableBlur
              baseOpacity={0.15}
              baseRotation={2}
              blurStrength={6}
              containerClassName="mt-8 font-display text-h2 font-normal italic leading-snug text-ink"
              textClassName="font-display text-h2 font-normal italic leading-snug text-ink"
            >
              Building a solid Ministry of Finance-owned green portfolio of local currency blended finance vehicles is not only achievable — it is the best way forward to connect local bonds directly to international investors.
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <AdvisorCloseCTA />
    </>
  );
}
