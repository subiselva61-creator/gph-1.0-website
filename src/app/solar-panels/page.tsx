import type { Metadata } from "next";
import { AdvisorCloseCTA } from "@/components/AdvisorCloseCTA";
import { CaseStudyCarousel } from "@/components/CaseStudyCarousel";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/motion/SectionHeading";
import ShinyText from "@/components/react-bits/ShinyText";
import { ValeranHero } from "@/components/ValeranHero";
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

export default function SolarPanelsPage() {
  return (
    <>
      <ValeranHero
        compact
        title="Sustainable solar solutions with a second life"
        lines={[
          "Premium pre-loved European photovoltaic panels",
          "Decades of power left to give — not waste",
          "Affordable renewable energy for the Global South",
        ]}
        imageSrc={images.heroSolar}
        imageAlt="Solar panel array"
      />

      {specs.map((spec, i) => (
        <section key={spec.title} className="py-section">
          <Container>
            <Reveal
              className={`max-w-xl ${i % 2 === 1 ? "lg:ml-auto lg:text-right" : ""}`}
            >
              <p className="text-eyebrow text-accent">
                {String(i + 1).padStart(2, "0")}
              </p>
              <SectionHeading className="mt-4">{spec.title}</SectionHeading>
              {spec.title === "Cost Benefits" ? (
                <p
                  className={`mt-6 text-body text-ink-muted ${i % 2 === 1 ? "lg:ml-auto" : ""} prose-measure`}
                >
                  Second-life solar panels deliver reliable renewable energy at
                  up to{" "}
                  <ShinyText
                    text="60–70% lower cost"
                    speed={2.5}
                    className="text-body"
                  />{" "}
                  than new systems — helping communities expand electrification
                  and redirect savings to water, education, and healthcare.
                </p>
              ) : (
                <p
                  className={`mt-6 text-body text-ink-muted ${i % 2 === 1 ? "lg:ml-auto" : ""} prose-measure`}
                >
                  {spec.body}
                </p>
              )}
            </Reveal>
          </Container>
        </section>
      ))}

      <CaseStudyCarousel title="Impact in Practice" />

      <AdvisorCloseCTA />
    </>
  );
}
