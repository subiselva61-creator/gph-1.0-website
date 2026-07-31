import type { Metadata } from "next";
import { CloseCTA } from "@/components/meridian/CloseCTA";
import { PageHero } from "@/components/meridian/PageHero";
import { SheetSection } from "@/components/meridian/SheetSection";
import { PullQuote } from "@/components/PullQuote";
import { Reveal } from "@/components/motion/Reveal";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Market Insights",
  description:
    "Green hydrogen technology — the key to net-zero CO2 emissions energy. Market insights on capital flows and structured finance for the Global South.",
};

const benefitsLeft = [
  "Building an autonomous and long-term source of revenue for the country (with the objective of full state ownership control)",
  "Generation of additional revenues by tapping into the dynamically expanding seller's market for green hydrogen and through sale of carbon credits",
  "Becoming a leader in green energy export",
];

const benefitsRight = [
  "Reducing CO2 emissions for industries like steel and cement",
  "Job creation and economic growth",
  "Local private-sector opportunities through ancillary activities like construction, day-to-day operation and maintenance",
];

const methodology = [
  "Our experience has shown that a significant number of long-term international investors will invest only in projects that comply with our methodology — familiar with our way of working across 20 years of cross-border finance ecosystems.",
  "For our investors, portfolio diversification is a key driver. They trust our ability to build structured finance vehicles that meet their criteria and hire us as risk management partners during the lifecycle of the project.",
  "Given the urgent need to counter climate change and heightened international interest in green hydrogen, our partners have mandated us to create a neutral and trustworthy ecosystem designed to build and finance green hydrogen infrastructures worldwide.",
];

export default function MarketInsightsPage() {
  return (
    <>
      <PageHero
        sheet="GPH / 05"
        sheetOf="1 / 3"
        title={
          <>
            Market <em>insights.</em>
          </>
        }
        lines={[
          "Green hydrogen technology — the key to net-zero CO₂ emissions energy",
          "Capital flows, Global South opportunity, and structured finance",
          "Our goal: a livable future that works for the many, not the few",
        ]}
        imageSrc={images.heroMarket}
        imageAlt="Global financial district skyline"
      />

      <SheetSection
        reference="GPH / 05.1"
        stamp="Briefing · 2026.01"
        title={
          <>
            The carrier problem, <em>solved.</em>
          </>
        }
      >
        <p className="mt-8 max-w-3xl text-body text-ink-muted">
          The pressing need for climate-friendly energy is omnipresent. While
          renewable sources like solar and wind power have become economically
          viable and readily available, the challenge of energy storage and
          shipping has remained daunting. That has changed. Recent advances in
          green hydrogen ecosystems not only enable easier and more
          cost-effective handling of the energy carrier, but also open up vast
          opportunities for the Global South.
        </p>

        <div className="mt-14 grid gap-10 border-t border-rule pt-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mono-label text-ink-faint">01 · Precedent</p>
            <h3 className="text-h3 mt-3 text-ink">India as a case in point</h3>
            <p className="mt-5 text-body text-ink-muted">
              India has clearly stated its ambition to become a global hub for
              green hydrogen production and export. In August 2023, India for the
              first time set national standards for green hydrogen, placing
              limits on emissions for renewable-powered hydrogen production from
              biomass and electrolysis. It has also organized a
              cross-ministerial administrative structure for rapid development
              and deployment.
            </p>
          </div>
          <div>
            <p className="mono-label text-ink-faint">02 · Constraint</p>
            <h3 className="text-h3 mt-3 text-ink">
              Limited access to global capital
            </h3>
            <p className="mt-5 text-body text-ink-muted">
              Despite the obvious advantages, investors in the Global North have
              been reluctant to commit to the South. Advancement in technology is
              not enough. To fulfill the promise of green hydrogen, we need
              smooth capital flow. Our Duty of Care demands that we deploy the
              resources at our disposal to make the future livable for the
              generations that follow.
            </p>
          </div>
        </div>
      </SheetSection>

      <PullQuote stamp="Thesis · filed 2026.02">
        These models are adaptable and scalable, offering the countries of the
        Global South a chance to leap ahead of traditional fossil fuel economies
        toward a sustainable future.
      </PullQuote>

      <SheetSection
        reference="GPH / 05.2"
        alt
        stamp="Twenty years of cross-border finance"
        title={
          <>
            How investors <em>actually commit.</em>
          </>
        }
      >
        <Reveal as="div" stagger={0.08} className="mt-8 max-w-3xl space-y-5">
          {methodology.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="text-body text-ink-muted">
              {paragraph}
            </p>
          ))}
        </Reveal>
      </SheetSection>

      <SheetSection
        reference="GPH / 05.3"
        stamp="6 benefits · producer countries"
        title={
          <>
            Benefits for green hydrogen{" "}
            <em>country producers.</em>
          </>
        }
      >
        <p className="mt-8 max-w-3xl text-body text-ink-muted">
          Many nations of the Global South are equipped with assets that most
          European countries can only dream of — plentiful renewable energy,
          thriving high-value agriculture, and a young and eager workforce.
        </p>

        <div className="mt-12 grid gap-x-16 gap-y-0 border-t border-rule lg:grid-cols-2">
          <Reveal as="ul" stagger={0.1}>
            {benefitsLeft.map((item, i) => (
              <li
                key={item}
                className="flex gap-4 border-b border-rule py-5 text-body-sm text-ink-muted"
              >
                <span className="mono-label shrink-0 text-ink-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </Reveal>
          <Reveal as="ul" stagger={0.1}>
            {benefitsRight.map((item, i) => (
              <li
                key={item}
                className="flex gap-4 border-b border-rule py-5 text-body-sm text-ink-muted"
              >
                <span className="mono-label shrink-0 text-ink-faint">
                  {String(i + 4).padStart(2, "0")}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </Reveal>
        </div>
      </SheetSection>

      <CloseCTA label="Talk to our team" ctaLabel="Get started" />
    </>
  );
}
