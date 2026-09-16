import type { Metadata } from "next";
import Link from "next/link";
import { CloseCTA } from "@/components/meridian/CloseCTA";
import { Cta } from "@/components/meridian/Cta";
import { PageHero } from "@/components/meridian/PageHero";
import { SheetSection } from "@/components/meridian/SheetSection";
import { PullQuote } from "@/components/PullQuote";
import { Reveal } from "@/components/motion/Reveal";
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
      <PageHero
        sheet="GPH / 03"
        title={
          <>
            Driving the green energy transition{" "}
            <em>in the Global South.</em>
          </>
        }
        lines={[
          "Green PowerHouse is at the forefront of the global green energy revolution",
          "Empowering nations and investors to drive sustainable development",
        ]}
        imageSrc={images.heroAbout}
        imageAlt="Renewable energy landscape"
      />

      <SheetSection
        reference="GPH / 03.1"
        stamp="Filed from Dubai"
        title={
          <>
            Who <em>we are.</em>
          </>
        }
      >
        <Reveal
          as="div"
          stagger={0.08}
          className="mt-8 max-w-3xl space-y-5"
        >
          <p className="text-body text-ink-muted">
            As a premier financial market infrastructure company, we specialize
            in matching international investors with high-impact renewable energy
            projects, particularly in the Global South.
          </p>
          <p className="text-body text-ink-muted">
            Beyond green hydrogen finance, we build platforms for{" "}
            <Link
              href="/solar-panels"
              className="link-underline text-ink hover:text-accent"
            >
              second-life solar
            </Link>{" "}
            — affordable photovoltaic solutions for community infrastructure —
            and{" "}
            <Link
              href="/agriculture"
              className="link-underline text-ink hover:text-accent"
            >
              agricultural commodities
            </Link>{" "}
            — Integrated Delivery Commodity, powered by Green PowerHouse,
            building agricultural infrastructure across West Africa.
          </p>
          <p className="text-body text-ink-muted">{siteConfig.description}</p>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-3">
          <Cta href="/contact-us" variant="secondary">
            Contact
          </Cta>
        </div>
      </SheetSection>

      <PullQuote stamp="Mandate · filed 2026.01">
        Capital is not scarce. Trustworthy structures are. We exist to build the
        second one so the first can move.
      </PullQuote>

      <CloseCTA />
    </>
  );
}
