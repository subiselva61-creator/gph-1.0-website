import type { Metadata } from "next";
import { CloseCTA } from "@/components/meridian/CloseCTA";
import { NumberedSheet } from "@/components/meridian/NumberedSheet";
import { PageHero } from "@/components/meridian/PageHero";
import { SheetSection } from "@/components/meridian/SheetSection";
import { PullQuote } from "@/components/PullQuote";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Our Proposal",
  description:
    "Proven green hydrogen technology ready to deploy at scale, paired with innovative blended finance models for the Global South.",
};

const features = [
  {
    title: "Green Hydrogen Focus",
    body: "A clean, zero-emission fuel that's ready for large-scale deployment.",
  },
  {
    title: "Innovative Finance Models",
    body: "Connecting global investors with local markets for sustainable growth.",
  },
  {
    title: "Stronger Local Economies",
    body: "Building green portfolios that deliver both climate action and economic resilience.",
  },
];

export default function OurProposalPage() {
  return (
    <>
      <PageHero
        sheet="GPH / 04"
        sheetOf="1 / 2"
        title={
          <>
            Our <em>proposal.</em>
          </>
        }
        lines={[
          "Proven green hydrogen technology ready to deploy at scale",
          "Blended finance models connecting international investors with local markets",
          "Our goal: vibrant local capital markets under a structured SDG framework",
        ]}
        imageSrc={images.heroHydrogen}
        imageAlt="Clean energy infrastructure"
      />

      <SheetSection
        reference="GPH / 04.1"
        stamp="Two readings · technology and capital"
        title={
          <>
            Green hydrogen, <em>powering the future.</em>
          </>
        }
      >
        <div className="mt-10 grid gap-10 border-t border-rule pt-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mono-label text-ink-faint">01 · Technology</p>
            <p className="mt-5 text-body text-ink-muted">
              At Green PowerHouse, we see green hydrogen as a game-changer in the
              clean energy revolution. It&apos;s a fuel that produces no
              emissions, is technologically ready, and has captured global
              attention—from Europe to North America—especially in regions where
              solar and wind are limited. For us, green hydrogen represents not
              just a sustainable energy source, but also a reliable revenue
              stream that will drive economies for decades to come.
            </p>
          </div>
          <div>
            <p className="mono-label text-ink-faint">02 · Capital</p>
            <p className="mt-5 text-body text-ink-muted">
              Technology alone isn&apos;t enough. To make green hydrogen
              accessible, we design innovative financial tools that connect
              investors with sustainable projects in the Global South.
              Traditional green bonds are a good start, but they don&apos;t
              always strengthen local economies. That&apos;s why we focus on
              creating blended finance models that bring in international capital
              while also building stronger local financial markets.
            </p>
          </div>
        </div>
      </SheetSection>

      <SheetSection
        reference="GPH / 04.2"
        alt
        stamp="Spec · 3 zones, A through C"
        title={
          <>
            What <em>we bring.</em>
          </>
        }
      >
        <NumberedSheet className="mt-10" items={features} letters />
      </SheetSection>

      <PullQuote
        stamp="Our conviction · filed 2026.01"
        attribution="Green PowerHouse · structured finance desk"
      >
        Building a solid Ministry of Finance-owned green portfolio of local
        currency blended finance vehicles is not only achievable — it is the best
        way forward to connect local bonds directly to international investors.
      </PullQuote>

      <CloseCTA />
    </>
  );
}
