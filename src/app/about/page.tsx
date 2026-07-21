import type { Metadata } from "next";
import Link from "next/link";
import { AdvisorCloseCTA } from "@/components/AdvisorCloseCTA";
import { BracketLink } from "@/components/BracketLink";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/motion/SectionHeading";
import { ValeranHero } from "@/components/ValeranHero";
import { Container } from "@/components/ui/Container";
import { images } from "@/lib/images";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Green PowerHouse drives the green energy transition in the Global South — matching international investors with high-impact renewable projects.",
};

export default function AboutPage() {
  return (
    <>
      <ValeranHero
        compact
        title="Driving the green energy transition in the Global South"
        subtitle="Green PowerHouse is at the forefront of the global green energy revolution, empowering nations and investors to drive sustainable development."
        imageSrc={images.heroAbout}
        imageAlt="Renewable energy landscape"
      />

      <section className="py-section">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12">
            <SectionHeading className="lg:col-span-5">Who we are</SectionHeading>
            <Reveal className="prose-measure space-y-5 lg:col-span-7">
              <p className="text-body text-ink-muted">
                As a premier financial market infrastructure company, we
                specialize in matching international investors with high-impact
                renewable energy projects, particularly in the Global South.
              </p>
              <p className="text-body text-ink-muted">
                Beyond green hydrogen finance, we build platforms for{" "}
                <Link
                  href="/solar-panels"
                  className="link-underline text-ink hover:text-accent"
                >
                  second-life solar
                </Link>{" "}
                — affordable photovoltaic solutions for community infrastructure
                — and{" "}
                <Link
                  href="/agriculture"
                  className="link-underline text-ink hover:text-accent"
                >
                  agricultural commodities
                </Link>{" "}
                — Integrated Delivery Commodity, powered by Green PowerHouse,
                building agricultural infrastructure across West Africa.
              </p>
              <p className="text-body text-ink-muted">
                {siteConfig.description}
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <BracketLink href="/our-team">Our Team</BracketLink>
                <BracketLink href="/contact-us">Contact</BracketLink>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <AdvisorCloseCTA />
    </>
  );
}
