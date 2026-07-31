import type { Metadata } from "next";
import { CashewDesk } from "@/components/home/CashewDesk";
import { Comparison } from "@/components/home/Comparison";
import { DynamicIsland } from "@/components/home/DynamicIsland";
import { FieldShift } from "@/components/home/FieldShift";
import { Hero } from "@/components/home/Hero";
import { HydroAI } from "@/components/home/HydroAI";
import { Interviews } from "@/components/home/Interviews";
import { PartnerWall } from "@/components/home/PartnerWall";
import { PricingLedger } from "@/components/home/PricingLedger";
import { SectorIndex } from "@/components/home/SectorIndex";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: `${siteConfig.name} | Driving the Green Hydrogen Economy`,
  },
  description:
    "Green PowerHouse sells Hydro AI for green hydrogen intelligence and investor matching, second-life solar panels, and West African cashew trade.",
  openGraph: {
    title: `${siteConfig.name} | Driving the Green Hydrogen Economy`,
    description:
      "Hydro AI — AI-matched green hydrogen intelligence from $250 a month — plus second-life solar and graded West African cashew trade.",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <SectorIndex />
      {/* Product 01 → Desk 02 → Desk 03, then proof, then Hydro AI plans */}
      <HydroAI />
      <FieldShift />
      <CashewDesk />
      <DynamicIsland />
      <Comparison />
      <PartnerWall />
      <PricingLedger />
      <Interviews />
    </>
  );
}
