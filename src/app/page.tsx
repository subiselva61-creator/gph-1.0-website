import type { Metadata } from "next";
import { CashewDesk } from "@/components/home/CashewDesk";
import { Comparison } from "@/components/home/Comparison";
import { Disciplines } from "@/components/home/Disciplines";
import { DynamicIsland } from "@/components/home/DynamicIsland";
import { FieldShift } from "@/components/home/FieldShift";
import { FirmProfile } from "@/components/home/FirmProfile";
import { Founder } from "@/components/home/Founder";
import { Hero } from "@/components/home/Hero";
import { HydroAI } from "@/components/home/HydroAI";
import { Interviews } from "@/components/home/Interviews";
import { PartnerWall } from "@/components/home/PartnerWall";
import { SectorIndex } from "@/components/home/SectorIndex";
import { CloseCTA } from "@/components/meridian/CloseCTA";
import { PullQuote } from "@/components/PullQuote";
import { founder } from "@/lib/home/firm";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: `${siteConfig.name} | International Strategic Advisory & Investment Group`,
  },
  description:
    "Green PowerHouse advises corporations, investors, governments and public institutions on corporate strategy, mergers and acquisitions, private capital deployment and industrial transformation — and deploys its own capital alongside them.",
  openGraph: {
    title: `${siteConfig.name} | International Strategic Advisory & Investment Group`,
    description:
      "Strategic advisory and principal investment — corporate strategy, M&A, private capital deployment and industrial transformation, backed by ventures we build and fund ourselves.",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* The house: who we are → what we do → who leads it → what we own */}
      <FirmProfile />
      <Disciplines />
      <Founder />
      <PullQuote
        stamp="Note · filed 2026.01"
        attribution={`${founder.name} · ${founder.role}, ${siteConfig.name}`}
      >
        {founder.quote}
      </PullQuote>
      <SectorIndex />
      {/* Trading desks and proof; Hydro AI last among ventures */}
      <FieldShift />
      <CashewDesk />
      <DynamicIsland />
      <Comparison />
      <PartnerWall />
      <HydroAI />
      <Interviews />
      <CloseCTA
        label="Let us talk about your project"
        heading={
          <>
            Government, institution or corporation.{" "}
            <em>In strict confidence.</em>
          </>
        }
        body="Our team is available to discuss strategic, investment or transformation matters. Tell us the mandate, the geography, and the timeline."
        ctaLabel="Contact us"
      />
    </>
  );
}
