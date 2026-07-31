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
    name: "Plant register",
    body: "Every announced, financed, and operating green hydrogen plant — capacity, electrolyser type, power source, offtake, and commissioning date.",
    status: "Live",
    progress: 100,
  },
  {
    index: "02",
    name: "Capital register",
    body: "The funds, sovereigns, utilities, and corporates writing the cheques, with ticket size, mandate, and the stage they are willing to enter at.",
    status: "In build",
    progress: 68,
  },
  {
    index: "03",
    name: "Live tracking",
    body: "Financial close, construction milestones, commissioning, and curtailment — pushed the day the record changes, not the quarter after.",
    status: "In build",
    progress: 45,
  },
  {
    index: "04",
    name: "Trade desk",
    body: "Post a buy or sell interest in capacity, offtake, or certificates and meet the other side of it without a broker in the middle.",
    status: "Queued",
    progress: 12,
  },
  {
    index: "05",
    name: "Newswire",
    body: "Policy, auctions, subsidies, and tenders, filtered down to the projects and counterparties already on your watchlist.",
    status: "Live",
    progress: 100,
  },
  {
    index: "06",
    name: "Structured pipeline",
    body: "Projects staged from screening to financial close, each stage annotated with what it still needs to clear and who has to sign.",
    status: "In build",
    progress: 55,
  },
];

const buildSummary = [
  { label: "Modules", value: "6" },
  { label: "Live", value: "2" },
  { label: "In build", value: "3" },
  { label: "Private beta", value: "Q3 2026" },
];

export function Terminal() {
  return (
    <section
      id="terminal"
      className="border-b border-rule bg-paper-alt py-section"
    >
      <Container>
        <SectionLabel
          left="Desk 01 · Terminal"
          center="Green hydrogen intelligence"
          right="Status · in build"
        />

        <h2 className="display text-display mt-10 max-w-4xl">
          Every plant, <em>and every cheque behind it.</em>
        </h2>

        <p className="mt-7 max-w-2xl text-body text-ink-muted">
          The green hydrogen market is being priced off press releases and PDFs.
          The terminal replaces that with one screen: what is being built, who is
          funding it, what is trading, and what changed this morning. Six modules,
          one subscription, no analyst retainer.
        </p>

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

        <p className="display text-h2 mt-14 max-w-3xl">
          Still under construction. <em>The rate is not.</em>
        </p>

        <p className="mt-6 max-w-2xl text-body-sm text-ink-muted">
          Subscriptions taken before the terminal opens hold the 2026 rate for
          the life of the account — from $250 a month for a watchlist seat to
          $1,000 for the full house.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <Cta href="#plans">See the three plans</Cta>
          <Cta href="/contact-us" variant="secondary">
            Join the private beta
          </Cta>
        </div>
      </Container>
    </section>
  );
}
