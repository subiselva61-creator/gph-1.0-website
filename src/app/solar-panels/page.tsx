import type { Metadata } from "next";
import { Interviews } from "@/components/home/Interviews";
import { CloseCTA } from "@/components/meridian/CloseCTA";
import { NumberedSheet } from "@/components/meridian/NumberedSheet";
import { PageHero } from "@/components/meridian/PageHero";
import { SectionLabel } from "@/components/meridian/SectionLabel";
import { PullQuote } from "@/components/PullQuote";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Solar Panels",
  description:
    "Sustainable solar solutions with a second life. Premium pre-loved European photovoltaic panels for affordable renewable energy in the Global South.",
};

const specs = [
  {
    title: "Our Source",
    body: "Premium, pre-loved panels. We specialize in sourcing and inspecting used photovoltaic panels from across Europe. A large portion still produce up to 90% of their original power, with a remaining operational lifespan of 15 to 20 years.",
  },
  {
    title: "Our Mission",
    body: "Affordable energy for development. In close partnership with ADA (Action for Development of Africa), we provide cost-effective photovoltaic solutions for sustainable development projects in the Global South.",
  },
  {
    title: "Together, we enable",
    body: "Affordable energy for community infrastructure. Power for critical projects like water access and purification. Energy independence for large-scale economic initiatives.",
  },
  {
    title: "Our Promise",
    body: "Complete traceability by documenting every panel's lifecycle and maintaining rigorous European standards through direct sourcing and inspection. All logistics managed from our central base in France.",
  },
  {
    title: "Cost Benefits",
    body: "Second-life solar panels deliver reliable renewable energy at up to 60–70% lower cost than new systems — helping communities expand electrification and redirect savings to water, education, and healthcare.",
  },
  {
    title: "Our Partnership",
    body: "Collaboration with ADA delivers solutions aligned with local needs. On-ground expertise ensures smooth implementation, strong community engagement, and long-term sustainability.",
  },
];

const figures = [
  { value: "90%", label: "Original power retained" },
  { value: "15–20", label: "Years of operational life left" },
  { value: "60–70%", label: "Lower cost than a new system" },
];

export default function SolarPanelsPage() {
  return (
    <>
      <PageHero
        sheet="GPH / 02"
        sheetOf="1 / 2"
        title={
          <>
            Sustainable solar solutions <em>with a second life.</em>
          </>
        }
        lines={[
          "Premium pre-loved European photovoltaic panels",
          "Decades of power left to give — not waste",
          "Affordable renewable energy for the Global South",
        ]}
        imageSrc={images.heroSolar}
        imageAlt="Solar panel array at dusk"
      />

      <section className="border-b border-rule bg-paper-alt py-section">
        <Container>
          <SectionLabel
            left="Bulletin № 02"
            center="GPH-2026-SOLAR · Sheet 1/1"
            right="Filed from France · 11:02 CET"
          />

          <Reveal
            as="ul"
            stagger={0.12}
            className="mt-12 grid gap-px border-t border-rule sm:grid-cols-3"
          >
            {figures.map((figure) => (
              <li
                key={figure.label}
                className="border-b border-rule py-8 sm:pr-8"
              >
                <p className="mono-num text-[clamp(2.5rem,5.5vw,4rem)] font-medium leading-none tracking-[-0.04em] text-ink">
                  {figure.value}
                </p>
                <p className="mono-label mt-4 text-ink-faint">{figure.label}</p>
              </li>
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-rule py-section">
        <Container>
          <div className="flex items-baseline justify-between gap-4 border-b border-rule pb-3">
            <span className="mono-label text-ink">
              Spec · 6 zones, A through F
            </span>
            <span className="mono-label text-ink-faint">
              Programme · second-life photovoltaic
            </span>
          </div>

          <NumberedSheet className="mt-10" items={specs} letters />
        </Container>
      </section>

      <PullQuote
        stamp="Conviction · filed 2026.02"
        attribution="Green PowerHouse · circular solar programme"
      >
        A panel at ninety percent output is not waste. It is a village clinic
        with a refrigerator, a workshop that stays open after dark, and a school
        where children can read after sunset.
      </PullQuote>

      <Interviews
        heading={
          <>
            Impact in practice, <em>told by the people it reaches.</em>
          </>
        }
        issue="Issue 02 · Solar"
      />

      <CloseCTA
        label="Solar programme"
        heading={
          <>
            Bring a system to your community, <em>at a fraction of the cost.</em>
          </>
        }
        body="Tell us the site, the load, and the timeline. We will size the array against available second-life stock and come back with a costed plan."
        ctaLabel="Request a site assessment"
      />
    </>
  );
}
