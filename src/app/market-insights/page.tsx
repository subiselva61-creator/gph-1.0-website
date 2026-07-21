import type { Metadata } from "next";
import { AdvisorCloseCTA } from "@/components/AdvisorCloseCTA";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/motion/SectionHeading";
import BlurText from "@/components/react-bits/BlurText";
import ScrollReveal from "@/components/react-bits/ScrollReveal";
import { ValeranHero } from "@/components/ValeranHero";
import { Container } from "@/components/ui/Container";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Market Insights",
  description:
    "Green hydrogen technology — the key to net-zero CO2 emissions energy. Market insights on capital flows and structured finance for the Global South.",
};

const benefitsLeft = [
  "Building an autonomous and long-term source of revenue for the country (with the objective of full state ownership control)",
  "Generation of additional revenues by tapping into the dynamically expanding seller's market for green hydrogen and through sale of carbon credits",
  "Becoming a leader in green energy export",
];

const benefitsRight = [
  "Reducing CO2 emissions for industries like steel and cement",
  "Job creation and economic growth",
  "Local private-sector opportunities through ancillary activities like construction, day-to-day operation and maintenance",
];

export default function MarketInsightsPage() {
  return (
    <>
      <ValeranHero
        compact
        title="Market Insights"
        lines={[
          "Green hydrogen technology — the key to net-zero CO₂ emissions energy",
          "Capital flows, Global South opportunity, and structured finance",
          "Our goal: a livable future that works for the many, not the few",
        ]}
        imageSrc={images.heroMarket}
        imageAlt="Global financial district skyline"
      />

      <section className="py-section">
        <Container>
          <div className="mx-auto max-w-3xl">
            <BlurText
              as="p"
              text="The pressing need for climate-friendly energy is omnipresent. While renewable sources like solar and wind power have become economically viable and readily available, the challenge of energy storage and shipping has remained daunting. That has changed. Recent advances in green hydrogen ecosystems not only enable easier and more cost-effective handling of the energy carrier, but also open up vast opportunities for the Global South."
              animateBy="words"
              direction="top"
              delay={40}
              stepDuration={0.28}
              className="text-body text-ink-muted"
            />
          </div>
        </Container>
      </section>

      <section className= "py-section">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <SectionHeading>India as a Case in Point</SectionHeading>
              <p className="mt-6 text-body text-ink-muted">
                India has clearly stated its ambition to become a global hub for
                green hydrogen production and export. In August 2023, India for
                the first time set national standards for green hydrogen,
                placing limits on emissions for renewable-powered hydrogen
                production from biomass and electrolysis. It has also organized
                a cross-ministerial administrative structure for rapid
                development and deployment.
              </p>
            </div>
            <div>
              <SectionHeading>Limited Access to Global Capital</SectionHeading>
              <p className="mt-6 text-body text-ink-muted">
                Despite the obvious advantages, investors in the Global North
                have been reluctant to commit to the South. Advancement in
                technology is not enough. To fulfill the promise of green
                hydrogen, we need smooth capital flow. Our Duty of Care demands
                that we deploy the resources at our disposal to make the future
                livable for the generations that follow.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-section">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <ScrollReveal
              as="p"
              enableBlur
              baseOpacity={0.15}
              baseRotation={2}
              blurStrength={6}
              containerClassName="font-display text-h2 font-normal italic leading-snug text-ink"
              textClassName="font-display text-h2 font-normal italic leading-snug text-ink"
            >
              These models are adaptable and scalable, offering the countries of the Global South a chance to leap ahead of traditional fossil fuel economies toward a sustainable future.
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section className= "py-section">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6">
            <p className="text-body text-ink-muted">
              Our experience has shown that a significant number of long-term
              international investors will invest only in projects that comply
              with our methodology — familiar with our way of working across 20
              years of cross-border finance ecosystems.
            </p>
            <p className="text-body text-ink-muted">
              For our investors, portfolio diversification is a key driver. They
              trust our ability to build structured finance vehicles that meet
              their criteria and hire us as risk management partners during the
              lifecycle of the project.
            </p>
            <p className="text-body text-ink-muted">
              Given the urgent need to counter climate change and heightened
              international interest in green hydrogen, our partners have
              mandated us to create a neutral and trustworthy ecosystem designed
              to build and finance green hydrogen infrastructures worldwide.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-section">
        <Container>
          <SectionHeading>
            Benefits for Green Hydrogen Country Producers
          </SectionHeading>
          <p className="mt-5 max-w-3xl text-body text-ink-muted">
            Many nations of the Global South are equipped with assets that most
            European countries can only dream of — plentiful renewable energy,
            thriving high-value agriculture, and a young and eager workforce.
          </p>
          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <Reveal as="ul" stagger={0.1} className="space-y-4">
              {benefitsLeft.map((item) => (
                <li
                  key={item}
                  className="border-t border-line pt-4 text-body-sm text-ink-muted"
                >
                  {item}
                </li>
              ))}
            </Reveal>
            <Reveal as="ul" stagger={0.1} className="space-y-4">
              {benefitsRight.map((item) => (
                <li
                  key={item}
                  className="border-t border-line pt-4 text-body-sm text-ink-muted"
                >
                  {item}
                </li>
              ))}
            </Reveal>
          </div>
        </Container>
      </section>

      <AdvisorCloseCTA label="Talk to our team" ctaLabel="Get started" />
    </>
  );
}
