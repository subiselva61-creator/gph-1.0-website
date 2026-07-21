import type { Metadata } from "next";
import { AdvisorCloseCTA } from "@/components/AdvisorCloseCTA";
import { CaseStudyCarousel } from "@/components/CaseStudyCarousel";
import { DragSectorGallery } from "@/components/DragSectorGallery";
import { PillLinkRow } from "@/components/PillLinkRow";
import { ValeranHero } from "@/components/ValeranHero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: `${siteConfig.name} | Driving the Green Hydrogen Economy`,
  },
  description:
    "Green PowerHouse is dedicated to driving the green hydrogen economy through AI-powered investment matching, project advisory, and green infrastructure finance.",
  openGraph: {
    title: `${siteConfig.name} | Driving the Green Hydrogen Economy`,
    description:
      "AI-powered investment matching, project advisory, and green infrastructure finance for governments, institutional investors & infrastructure developers.",
  },
};

const growthPills = [
  {
    href: "/our-proposal",
    label: "Green Hydrogen",
    description: "technology-ready, zero-emission fuel",
  },
  {
    href: "/our-proposal",
    label: "Structured Finance",
    description: "blended local-currency vehicles",
  },
  {
    href: "/solar-panels",
    label: "Solar Circularity",
    description: "second-life panels, first-life impact",
  },
  {
    href: "/market-insights",
    label: "Market Intelligence",
    description: "global demand, local execution",
  },
];

export default function HomePage() {
  return (
    <>
      <ValeranHero
        badge="Green hydrogen platforms"
        title="Driving the green hydrogen economy"
        lines={[
          "AI-powered investment matching, project advisory, and green infrastructure finance for governments, institutional investors & infrastructure developers.",
        ]}
        primaryCta={{ href: "/contact-us", label: "Get started" }}
        secondaryCta={{ href: "/our-proposal", label: "Learn more" }}
      />

      <PillLinkRow
        title="For Sustainable Growth"
        intro="Let's make your projects long-term viable with a global vision and clear guidance."
        items={growthPills}
      />

      <DragSectorGallery />

      <CaseStudyCarousel />

      <AdvisorCloseCTA />
    </>
  );
}
