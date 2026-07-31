import type { Metadata } from "next";
import { DataTable } from "@/components/DataTable";
import { CloseCTA } from "@/components/meridian/CloseCTA";
import { PageHero } from "@/components/meridian/PageHero";
import { SheetSection } from "@/components/meridian/SheetSection";
import { PullQuote } from "@/components/PullQuote";
import { Reveal } from "@/components/motion/Reveal";
import * as content from "@/lib/agriculture/content";
import * as tables from "@/lib/agriculture/tables";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Agriculture",
  description:
    "Strategic Blueprint – Vision 2030. Integrated Delivery Commodity, powered by Green PowerHouse — technology-enabled agricultural infrastructure across West Africa.",
};

function Prose({ paragraphs }: { paragraphs: string[] }) {
  return (
    <Reveal as="div" stagger={0.08} className="mt-8 max-w-3xl space-y-5">
      {paragraphs.map((p) => (
        <p key={p.slice(0, 48)} className="text-body text-ink-muted">
          {p}
        </p>
      ))}
    </Reveal>
  );
}

function BlockList({
  items,
  columns = 3,
}: {
  items: { index?: number; title: string; description: string }[];
  columns?: 2 | 3;
}) {
  return (
    <Reveal
      as="ul"
      stagger={0.08}
      className={`mt-12 grid gap-px border-t border-rule ${
        columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"
      }`}
    >
      {items.map((item, i) => (
        <li key={item.title} className="border-b border-rule py-7 lg:pr-8">
          <p className="mono-label text-ink-faint">
            {String(item.index ?? i + 1).padStart(2, "0")}
          </p>
          <h3 className="text-h3 mt-3 text-ink">{item.title}</h3>
          <p className="mt-3 text-body-sm text-ink-muted">{item.description}</p>
        </li>
      ))}
    </Reveal>
  );
}

function FieldList({
  items,
  columns = 2,
}: {
  items: {
    index?: number;
    title: string;
    fields?: { label: string; value: string }[];
  }[];
  columns?: 2 | 3;
}) {
  return (
    <ul className="mt-12 border-t border-rule">
      {items.map((item, i) => (
        <li key={item.title} className="border-b border-rule py-8">
          <div className="flex items-baseline gap-4">
            <span className="mono-label text-ink-faint">
              {String(item.index ?? i + 1).padStart(2, "0")}
            </span>
            <h3 className="text-h3 text-ink">{item.title}</h3>
          </div>
          {item.fields && item.fields.length > 0 && (
            <dl
              className={`mt-5 grid gap-6 ${
                columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"
              }`}
            >
              {item.fields.map((field) => (
                <div key={field.label}>
                  <dt className="mono-label text-ink-faint">{field.label}</dt>
                  <dd className="mt-2 text-body-sm text-ink-muted">
                    {field.value}
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </li>
      ))}
    </ul>
  );
}

function KeyFigures({
  figures,
}: {
  figures: { value: string; label: string }[];
}) {
  return (
    <Reveal
      as="ul"
      stagger={0.12}
      className="mt-12 grid gap-px border-t border-rule sm:grid-cols-2"
    >
      {figures.map((figure) => (
        <li key={figure.label} className="border-b border-rule py-8 sm:pr-8">
          <p className="mono-num text-[clamp(2.25rem,5vw,3.5rem)] font-medium leading-none tracking-[-0.04em] text-ink">
            {figure.value}
          </p>
          <p className="mono-label mt-4 text-ink-faint">{figure.label}</p>
        </li>
      ))}
    </Reveal>
  );
}

export default function AgriculturePage() {
  return (
    <>
      <PageHero
        sheet="AGR / 00"
        sheetOf="1 / 13"
        title={
          <>
            Strategic Blueprint — <em>Vision 2030.</em>
          </>
        }
        lines={[
          "Integrated Delivery Commodity, powered by Green PowerHouse",
          "Technology-enabled agricultural trading and logistics across West Africa",
          "Our goal: bridge fragmented supply chains from farm gate to global markets",
        ]}
        imageSrc={images.heroAgriculture}
        imageAlt="Agricultural fields at harvest"
      />

      <SheetSection
        id="executive-summary"
        reference="AGR / 01"
        sheet="2 / 13"
        title={
          <>
            Executive <em>summary.</em>
          </>
        }
      >
        <Prose paragraphs={content.executiveSummaryParagraphs} />
        <BlockList items={content.executivePillars} />
      </SheetSection>

      <PullQuote stamp="Ambition · filed 2026.01">
        {content.executivePullQuote}
      </PullQuote>

      <SheetSection
        id="structural-opportunity"
        reference="AGR / 02"
        sheet="3 / 13"
        alt
        title={
          <>
            Structural <em>opportunity.</em>
          </>
        }
      >
        <Prose paragraphs={content.structuralOpportunityParagraphs} />
        <BlockList items={content.structuralBlocks} columns={2} />
        <DataTable
          className="mt-14"
          data={tables.seasonalCalendar}
          reference="AGR / 02.1"
        />
      </SheetSection>

      <SheetSection
        id="franchise-warehouse"
        reference="AGR / 03"
        sheet="4 / 13"
        title={
          <>
            Franchise warehouse <em>network.</em>
          </>
        }
      >
        <Prose paragraphs={content.franchiseWarehouseParagraphs} />
        <KeyFigures
          figures={[
            { value: "$50K–$145K", label: "Investment per warehouse" },
            { value: "300–800 t", label: "Annual handling capacity" },
          ]}
        />
        <DataTable
          className="mt-14"
          data={tables.warehouseEconomics}
          reference="AGR / 03.1"
        />
        <DataTable
          className="mt-8"
          data={tables.franchiseIncentives}
          reference="AGR / 03.2"
        />
      </SheetSection>

      <SheetSection
        id="digital-platform"
        reference="AGR / 04"
        sheet="5 / 13"
        alt
        title={
          <>
            Digital coordination <em>platform.</em>
          </>
        }
      >
        <p className="mt-8 max-w-3xl text-body text-ink-muted">
          Beyond physical infrastructure, IDC powered by GPH plans to develop a
          digital coordination platform linking all actors in the agricultural
          supply chain.
        </p>
        <BlockList items={content.digitalPlatformModules} columns={2} />
        {content.digitalPlatformNote && (
          <p className="mt-10 max-w-3xl border-l-2 border-accent pl-5 text-body-sm text-ink-muted">
            {content.digitalPlatformNote}
          </p>
        )}
      </SheetSection>

      <SheetSection
        id="capital-structure"
        reference="AGR / 05"
        sheet="6 / 13"
        title={
          <>
            Capital <em>and returns.</em>
          </>
        }
      >
        <div className="mt-8 max-w-3xl space-y-5">
          <p className="text-body text-ink-muted">
            {content.capitalStructureIntro}
          </p>
          <p className="text-body text-ink-muted">
            {content.capitalVelocityBody}
          </p>
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <DataTable data={tables.capitalDeployment} reference="AGR / 05.1" />
          <DataTable data={tables.revenueProfitability} reference="AGR / 05.2" />
        </div>
        <DataTable
          className="mt-8"
          data={tables.commodityPortfolio}
          reference="AGR / 05.3"
        />
        <DataTable
          className="mt-8"
          data={tables.monthlyCashFlow}
          reference="AGR / 05.4"
        />
      </SheetSection>

      <SheetSection
        id="shareholders"
        reference="AGR / 06"
        sheet="7 / 13"
        alt
        title={
          <>
            Shareholder <em>pathway.</em>
          </>
        }
      >
        <Prose paragraphs={content.shareholderParagraphs} />
        <p className="mt-8 max-w-3xl text-body font-medium text-ink">
          {content.shareholderSummary}
        </p>
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <DataTable data={tables.shareholder2028} reference="AGR / 06.1" />
          <DataTable data={tables.shareholderResult} reference="AGR / 06.2" />
        </div>
      </SheetSection>

      <SheetSection
        id="economic-moat"
        reference="AGR / 07"
        sheet="8 / 13"
        title={
          <>
            Economic <em>moat.</em>
          </>
        }
      >
        <BlockList items={content.economicMoatBlocks} />
        <Prose paragraphs={content.economicMoatClosing} />
      </SheetSection>

      <SheetSection
        id="roadmap"
        reference="AGR / 08"
        sheet="9 / 13"
        alt
        title={
          <>
            2026 <em>roadmap.</em>
          </>
        }
      >
        <Prose paragraphs={content.roadmapIntro} />
        <DataTable
          className="mt-14"
          data={tables.investmentPriorities2026}
          reference="AGR / 08.1"
        />
        <DataTable
          className="mt-8"
          data={tables.targetCommodityVolumes}
          reference="AGR / 08.2"
        />
        <DataTable
          className="mt-8"
          data={tables.expectedFinancials2026}
          reference="AGR / 08.3"
        />
      </SheetSection>

      <SheetSection
        id="strategic-drivers"
        reference="AGR / 09"
        sheet="10 / 13"
        title={
          <>
            Strategic <em>drivers.</em>
          </>
        }
      >
        <BlockList items={content.strategicDrivers} />
      </SheetSection>

      <SheetSection
        id="constraints"
        reference="AGR / 10"
        sheet="11 / 13"
        alt
        title={
          <>
            Operational <em>constraints.</em>
          </>
        }
      >
        <FieldList items={content.operationalConstraints} />
      </SheetSection>

      <SheetSection
        id="vision-2030"
        reference="AGR / 11"
        sheet="12 / 13"
        title={
          <>
            Long-term <em>vision 2030.</em>
          </>
        }
      >
        <BlockList items={content.longTermVision2030} />
      </SheetSection>

      <PullQuote stamp="Expansion · filed 2026.03">
        {content.agroPullQuote}
      </PullQuote>

      <SheetSection
        id="risks"
        reference="AGR / 12"
        sheet="13 / 13"
        alt
        title={
          <>
            Key risks <em>and mitigations.</em>
          </>
        }
      >
        <p className="mt-8 max-w-3xl text-body text-ink-muted">
          {content.keyRisksIntro}
        </p>
        <FieldList items={content.keyRisks} columns={3} />
        {content.riskDashboard && (
          <p className="mt-12 max-w-3xl border-l-2 border-accent pl-5 text-body-sm text-ink-muted">
            {content.riskDashboard}
          </p>
        )}
      </SheetSection>

      <CloseCTA
        label="Talk to our team"
        heading={
          <>
            Discuss Vision 2030, <em>sheet by sheet.</em>
          </>
        }
        body="The blueprint above is the whole plan. Tell us which sheet matters to you and we will walk through the numbers behind it."
        ctaLabel="Discuss Vision 2030"
      />
    </>
  );
}
