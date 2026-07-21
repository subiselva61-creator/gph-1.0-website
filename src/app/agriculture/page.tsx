import type { Metadata } from "next";
import { AdvisorCloseCTA } from "@/components/AdvisorCloseCTA";
import { DataTable } from "@/components/DataTable";
import { PullQuote } from "@/components/PullQuote";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/motion/SectionHeading";
import ShinyText from "@/components/react-bits/ShinyText";
import { ValeranHero } from "@/components/ValeranHero";
import { Container } from "@/components/ui/Container";
import * as content from "@/lib/agriculture/content";
import * as tables from "@/lib/agriculture/tables";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Agriculture",
  description:
    "Strategic Blueprint – Vision 2030. Integrated Delivery Commodity, powered by Green PowerHouse — technology-enabled agricultural infrastructure across West Africa.",
};

function Section({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-section">
      <Container>{children}</Container>
    </section>
  );
}

function Heading({ children }: { children: React.ReactNode }) {
  return <SectionHeading>{children}</SectionHeading>;
}

function Prose({ paragraphs }: { paragraphs: string[] }) {
  return (
    <Reveal as="div" stagger={0.1} className="mt-8 max-w-3xl space-y-5">
      {paragraphs.map((p) => (
        <p key={p.slice(0, 48)} className="text-body text-ink-muted">
          {p}
        </p>
      ))}
    </Reveal>
  );
}

function PillarList({
  items,
}: {
  items: { index?: number; title: string; description: string }[];
}) {
  return (
    <Reveal as="ul" stagger={0.1} className="mt-10 grid gap-8 lg:grid-cols-3">
      {items.map((item) => (
        <li key={item.title} className="border-t border-line pt-5">
          {item.index != null ? (
            <p className="text-eyebrow text-accent">
              {String(item.index).padStart(2, "0")}
            </p>
          ) : null}
          <h3 className="mt-2 font-display text-h3 font-normal text-ink">
            {item.title}
          </h3>
          {item.description.startsWith("$") ? (
            <p className="mt-3 text-body-sm text-ink-muted">
              <ShinyText
                text={item.description}
                speed={2.5}
                className="text-body-sm"
              />
            </p>
          ) : (
            <p className="mt-3 text-body-sm text-ink-muted">
              {item.description}
            </p>
          )}
        </li>
      ))}
    </Reveal>
  );
}

export default function AgriculturePage() {
  return (
    <>
      <ValeranHero
        compact
        title="Strategic Blueprint — Vision 2030"
        lines={[
          "Integrated Delivery Commodity, powered by Green PowerHouse",
          "Technology-enabled agricultural trading and logistics across West Africa",
          "Our goal: bridge fragmented supply chains from farm gate to global markets",
        ]}
        imageSrc={images.heroAgriculture}
        imageAlt="Agricultural fields at harvest"
      />

      <Section id="executive-summary">
        <Heading>Executive Summary</Heading>
        <Prose paragraphs={content.executiveSummaryParagraphs} />
        <PillarList items={content.executivePillars} />
        <div className="mt-14 max-w-3xl">
          <PullQuote>{content.executivePullQuote}</PullQuote>
        </div>
      </Section>

      <Section id="structural-opportunity">
        <Heading>Structural Opportunity</Heading>
        <Prose paragraphs={content.structuralOpportunityParagraphs} />
        <PillarList items={content.structuralBlocks} />
        <div className="mt-14">
          <DataTable data={tables.seasonalCalendar} />
        </div>
      </Section>

      <Section id="franchise-warehouse">
        <Heading>Franchise Warehouse Network</Heading>
        <Prose paragraphs={content.franchiseWarehouseParagraphs} />
        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          <div className="border-t border-line pt-5">
            <p className="font-display text-h2 font-normal text-ink">
              <ShinyText
                text="$50K–$145K"
                speed={2.5}
                className="font-display text-h2"
                color="var(--ink-muted)"
                shineColor="var(--ink)"
              />
            </p>
            <p className="mt-2 text-body-sm text-ink-muted">
              Investment per warehouse
            </p>
          </div>
          <div className="border-t border-line pt-5">
            <p className="font-display text-h2 font-normal text-ink">
              <ShinyText
                text="300–800 tons"
                speed={2.5}
                className="font-display text-h2"
                color="var(--ink-muted)"
                shineColor="var(--ink)"
              />
            </p>
            <p className="mt-2 text-body-sm text-ink-muted">
              Annual handling capacity
            </p>
          </div>
        </div>
        <div className="mt-14">
          <DataTable data={tables.warehouseEconomics} />
        </div>
      </Section>

      <Section id="digital-platform">
        <Heading>Digital Coordination Platform</Heading>
        <p className="mt-6 max-w-3xl text-body text-ink-muted">
          Beyond physical infrastructure, IDC powered by GPH plans to develop a
          digital coordination platform linking all actors in the agricultural
          supply chain.
        </p>
        <PillarList items={content.digitalPlatformModules} />
        {content.digitalPlatformNote ? (
          <p className="mt-8 max-w-3xl text-body-sm italic text-ink-muted">
            {content.digitalPlatformNote}
          </p>
        ) : null}
      </Section>

      <Section id="capital-structure">
        <Heading>Capital & Returns</Heading>
        <p className="mt-6 max-w-3xl text-body text-ink-muted">
          {content.capitalStructureIntro}
        </p>
        <p className="mt-5 max-w-3xl text-body text-ink-muted">
          {content.capitalVelocityBody}
        </p>
        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <DataTable data={tables.capitalDeployment} />
          <DataTable data={tables.revenueProfitability} />
        </div>
        <div className="mt-12">
          <DataTable data={tables.commodityPortfolio} />
        </div>
      </Section>

      <Section id="shareholders">
        <Heading>Shareholder Pathway</Heading>
        <Prose paragraphs={content.shareholderParagraphs} />
        <p className="mt-6 max-w-3xl text-body font-medium text-ink">
          {content.shareholderSummary}
        </p>
        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <DataTable data={tables.shareholder2028} />
          <DataTable data={tables.shareholderResult} />
        </div>
      </Section>

      <Section id="economic-moat">
        <Heading>Economic Moat</Heading>
        <PillarList items={content.economicMoatBlocks} />
        <Prose paragraphs={content.economicMoatClosing} />
      </Section>

      <Section id="roadmap">
        <Heading>2026 Roadmap</Heading>
        <Prose paragraphs={content.roadmapIntro} />
        <div className="mt-12">
          <DataTable data={tables.investmentPriorities2026} />
        </div>
        <div className="mt-12">
          <DataTable data={tables.targetCommodityVolumes} />
        </div>
      </Section>

      <Section id="strategic-drivers">
        <Heading>Strategic Drivers</Heading>
        <PillarList items={content.strategicDrivers} />
      </Section>

      <Section id="constraints">
        <Heading>Operational Constraints</Heading>
        <ul className="mt-10 space-y-10">
          {content.operationalConstraints.map((item) => (
            <li key={item.title} className="border-t border-line pt-6">
              <h3 className="font-display text-h3 font-normal text-ink">
                {item.title}
              </h3>
              <div className="mt-4 grid gap-4 lg:grid-cols-2">
                {item.fields?.map((field) => (
                  <div key={field.label}>
                    <p className="text-eyebrow text-ink-muted">{field.label}</p>
                    <p className="mt-2 text-body-sm text-ink-muted">
                      {field.value}
                    </p>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="vision-2030">
        <Heading>Long-Term Vision 2030</Heading>
        <PillarList items={content.longTermVision2030} />
        <div className="mt-14 max-w-3xl">
          <PullQuote>{content.agroPullQuote}</PullQuote>
        </div>
      </Section>

      <Section id="risks">
        <Heading>Key Risks & Mitigations</Heading>
        <p className="mt-6 max-w-3xl text-body text-ink-muted">
          {content.keyRisksIntro}
        </p>
        <ul className="mt-12 space-y-10">
          {content.keyRisks.map((risk) => (
            <li key={risk.title} className="border-t border-line pt-6">
              <div className="flex items-baseline gap-4">
                {risk.index != null ? (
                  <span className="text-eyebrow text-accent">
                    {String(risk.index).padStart(2, "0")}
                  </span>
                ) : null}
                <h3 className="font-display text-h3 font-normal text-ink">
                  {risk.title}
                </h3>
              </div>
              <div className="mt-4 grid gap-4 lg:grid-cols-3">
                {risk.fields?.map((field) => (
                  <div key={field.label}>
                    <p className="text-eyebrow text-ink-muted">{field.label}</p>
                    <p className="mt-2 text-body-sm text-ink-muted">
                      {field.value}
                    </p>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
        {content.riskDashboard ? (
          <p className="mt-12 max-w-3xl text-body-sm italic text-ink-muted">
            {content.riskDashboard}
          </p>
        ) : null}
      </Section>

      <AdvisorCloseCTA
        label="Talk to our team"
        ctaLabel="Discuss Vision 2030"
      />
    </>
  );
}
