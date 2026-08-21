import type { Metadata } from "next";
import { Disciplines } from "@/components/home/Disciplines";
import { FirmProfile } from "@/components/home/FirmProfile";
import { Founder } from "@/components/home/Founder";
import { Hero } from "@/components/home/Hero";
import { Interviews } from "@/components/home/Interviews";
import { BrandTicker } from "@/components/meridian/BrandTicker";
import { CloseCTA } from "@/components/meridian/CloseCTA";
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
      <BrandTicker />
      <FirmProfile />
      <Disciplines />
      <Founder />
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
