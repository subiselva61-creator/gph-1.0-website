import type { Metadata } from "next";
import { CashewDesk } from "@/components/home/CashewDesk";
import { Comparison } from "@/components/home/Comparison";
import { DynamicIsland } from "@/components/home/DynamicIsland";
import { FieldShift } from "@/components/home/FieldShift";
import { Hero } from "@/components/home/Hero";
import { Interviews } from "@/components/home/Interviews";
import { PartnerWall } from "@/components/home/PartnerWall";
import { PricingLedger } from "@/components/home/PricingLedger";
import { SectorIndex } from "@/components/home/SectorIndex";
import { Terminal } from "@/components/home/Terminal";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: `${siteConfig.name} | Driving the Green Hydrogen Economy`,
  },
  description:
    "Green PowerHouse runs three desks: a green hydrogen intelligence terminal, second-life solar panels, and West African cashew trade.",
  openGraph: {
    title: `${siteConfig.name} | Driving the Green Hydrogen Economy`,
    description:
      "A green hydrogen intelligence terminal from $250 a month, second-life solar panels, and graded West African cashew trade — from one advisory house.",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <SectorIndex />
      {/* Desk 01 → 02 → 03, then the proof, then the ledger */}
      <Terminal />
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
