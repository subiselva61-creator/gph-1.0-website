import { ConsoleMockup } from "@/components/home/ConsoleMockup";
import { PricingLedger } from "@/components/home/PricingLedger";
import { Cta } from "@/components/meridian/Cta";
import { SectionLabel } from "@/components/meridian/SectionLabel";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

type ModuleStatus = "Live" | "In build" | "Queued";

const modules: {
  index: string;
  name: string;
  body: string;
  status: ModuleStatus;
  progress: number;
}[] = [
  {
    index: "01",
    name: "Matching AI engine",
    body: "Scores every investor against every project — mandate, ticket size, stage preference, geography, and risk — and returns the best places to put capital, ranked.",
    status: "In build",
    progress: 72,
  },
  {
    index: "02",
    name: "Plant intelligence",
    body: "Every announced, financed, and operating green hydrogen plant — capacity, electrolyser type, power source, offtake, and commissioning date.",
    status: "Live",
    progress: 100,
  },
  {
    index: "03",
    name: "Investor register",
    body: "The funds, sovereigns, utilities, and corporates writing the cheques, with ticket size, mandate, and the stage they are willing to enter at.",
    status: "In build",
    progress: 68,
  },
  {
    index: "04",
    name: "Live tracking",
    body: "Financial close, construction milestones, commissioning, and curtailment — pushed the day the record changes, not the quarter after.",
    status: "In build",
    progress: 45,
  },
  {
    index: "05",
    name: "Trade & buy / sell",
    body: "Post a buy or sell interest in capacity, offtake, or certificates and meet the other side of it without a broker in the middle.",
    status: "Queued",
    progress: 12,
  },
  {
    index: "06",
    name: "Live news & pipeline",
    body: "Policy, auctions, and tenders filtered to your watchlist — plus projects staged from screening to financial close, with what still needs to clear.",
    status: "Live",
    progress: 100,
  },
];

const buildSummary = [
  { label: "Modules", value: "6" },
  { label: "Live", value: "2" },
  { label: "In build", value: "3" },
  { label: "Private beta", value: "Q3 2026" },
];

export function HydroAI() {
  return (
    <section
      id="hydro-ai"
      className="border-b border-rule bg-paper-alt py-section"
    >
      <Container>
        <SectionLabel
          left="Product 01 · Hydro AI"
          center="Green hydrogen intelligence website"
          right="Status · in build"
        />

        <h2 className="display text-display mt-10 max-w-4xl">
          Hydro AI. <em>Match capital to the right plant.</em>
        </h2>

        <p className="mt-7 max-w-2xl text-body text-ink-muted">
          Hydro AI is the modern website we sell for the green hydrogen market —
          plant intelligence, the investors behind each cheque, live tracking,
          buy and sell trade, news, and a structured pipeline. At the centre sits
          a matching AI engine that links the perfect investor to the perfect
          project and shows you the best option to invest in. Still under build.
          The rate is already set.
        </p>

        <figure className="mt-14">
          <figcaption className="mb-3">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-rule pb-3">
              <span className="mono-label shiny-text font-bold">
                Hydro AI · principal investment 01
              </span>
              <span className="mono-label text-ink-faint">
                Interface in build · 2026
              </span>
            </div>
            <p className="mt-3 max-w-2xl text-body-sm text-ink-muted">
              One of the ventures we have chosen to build and fund ourselves —
              capital committed to our own conviction, not only recommended to
              clients.
            </p>
          </figcaption>
          <ConsoleMockup />
        </figure>

        <ol className="mt-14 grid gap-px border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => (
            <li key={module.index} className="flex flex-col bg-paper p-5">
              <div className="flex items-baseline justify-between gap-3">
                <span className="mono-label text-ink-faint">
                  {module.index}
                </span>
                <span
                  className={cn(
                    "mono-micro border px-1.5 py-0.5",
                    module.status === "Live"
                      ? "border-accent/40 bg-accent-soft text-accent"
                      : "border-rule text-ink-faint",
                  )}
                >
                  {module.status}
                </span>
              </div>

              <h3 className="text-h3 mt-6 text-ink">{module.name}</h3>
              <p className="mt-3 text-body-sm text-ink-muted">{module.body}</p>

              <div className="mt-auto pt-8">
                <div className="h-1 bg-paper-alt">
                  <div
                    className="h-full bg-accent"
                    style={{ width: `${module.progress}%` }}
                  />
                </div>
                <p className="mono-micro mt-1.5 text-ink-faint">
                  Build · {module.progress}%
                </p>
              </div>
            </li>
          ))}
        </ol>

        <dl className="mt-10 grid gap-px border border-rule bg-rule sm:grid-cols-4">
          {buildSummary.map((item) => (
            <div key={item.label} className="bg-paper px-5 py-4">
              <dt className="mono-label text-ink-faint">{item.label}</dt>
              <dd className="mono-num mt-2 text-[1.375rem] font-medium leading-none text-ink">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>

        <PricingLedger />

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Cta href="/contact-us">Join the private beta</Cta>
          <Cta href="/our-proposal" variant="secondary">
            Green hydrogen programme
          </Cta>
        </div>
      </Container>
    </section>
  );
}
