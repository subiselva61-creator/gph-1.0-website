import { Cta } from "@/components/meridian/Cta";
import { SectionLabel } from "@/components/meridian/SectionLabel";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

type Ticket = {
  name: string;
  ref: string;
  blurb: string;
  /** `note` prints in the right-hand column; it falls back to "incl." */
  includes: { label: string; note?: string }[];
  lines: { label: string; value: string }[];
  total: string;
  totalUnit: string;
  auth: string;
  holder: string;
  cta: string;
  ctaHref: string;
  featured: boolean;
};

/** Desk 01 — subscription access to the green hydrogen terminal. */
const terminalPlans: Ticket[] = [
  {
    name: "Terminal · Watchlist",
    ref: "№ GPH-TW-2026",
    blurb: "For the analyst who needs the map before the desk.",
    includes: [
      { label: "Plant register", note: "Full" },
      { label: "Capital register", note: "Names only" },
      { label: "Live tracking", note: "10 projects" },
      { label: "Newswire", note: "Daily digest" },
      { label: "Trade desk", note: "Read only" },
      { label: "Structured pipeline", note: "Screening" },
      { label: "Seats", note: "1" },
      { label: "Support", note: "Email" },
    ],
    lines: [
      { label: "Subscription", value: "$250.00" },
      { label: "Onboarding", value: "$0.00" },
      { label: "Per-seat fees", value: "$0.00" },
    ],
    total: "$250",
    totalUnit: "/ month",
    auth: "0xgphtw2026",
    holder: "your watchlist",
    cta: "Buy now",
    ctaHref: "/contact-us",
    featured: false,
  },
  {
    name: "Terminal · Desk",
    ref: "№ GPH-TD-2026",
    blurb: "For the team that has to act on what it reads.",
    includes: [
      { label: "Everything in Watchlist" },
      { label: "Plant register", note: "Daily refresh" },
      { label: "Capital register", note: "Contacts + tickets" },
      { label: "Live tracking", note: "100 projects" },
      { label: "Newswire", note: "Real time" },
      { label: "Trade desk", note: "Post interest" },
      { label: "Structured pipeline", note: "Through FID" },
      { label: "Seats", note: "5" },
      { label: "Support", note: "Shared channel" },
    ],
    lines: [
      { label: "Subscription", value: "$600.00" },
      { label: "Onboarding", value: "$0.00" },
      { label: "Per-seat fees", value: "$0.00" },
    ],
    total: "$600",
    totalUnit: "/ month",
    auth: "0xgphtd2026",
    holder: "your desk",
    cta: "Buy now",
    ctaHref: "/contact-us",
    featured: true,
  },
  {
    name: "Terminal · House",
    ref: "№ GPH-TH-2026",
    blurb: "For the institution running the whole book.",
    includes: [
      { label: "Everything in Desk" },
      { label: "Plant register", note: "Unlimited + API" },
      { label: "Capital register", note: "Warm introductions" },
      { label: "Live tracking", note: "Unlimited" },
      { label: "Newswire", note: "Analyst notes" },
      { label: "Trade desk", note: "Brokered matching" },
      { label: "Structured pipeline", note: "To financial close" },
      { label: "Seats", note: "Unlimited" },
      { label: "Support", note: "Named advisor" },
    ],
    lines: [
      { label: "Subscription", value: "$1,000.00" },
      { label: "Onboarding", value: "$0.00" },
      { label: "Per-seat fees", value: "$0.00" },
    ],
    total: "$1,000",
    totalUnit: "/ month",
    auth: "0xgphth2026",
    holder: "your institution",
    cta: "Buy now",
    ctaHref: "/contact-us",
    featured: false,
  },
];

function TicketCard({ ticket }: { ticket: Ticket }) {
  return (
    <article
      className={cn(
        "relative flex h-full flex-col border bg-paper",
        ticket.featured ? "border-ink" : "border-rule",
      )}
    >
      {ticket.featured && (
        <p className="mono-label border-b border-ink bg-ink py-1.5 text-center text-ink-invert">
          ★ Most mandates ★
        </p>
      )}

      <header className="border-b border-rule p-5">
        <h3 className="text-h3 text-ink">{ticket.name}</h3>
        <p className="mono-label mt-2 text-ink-faint">{ticket.ref}</p>
        <p className="mt-4 text-body-sm text-ink-muted">{ticket.blurb}</p>
      </header>

      <div className="p-5">
        <p className="mono-label text-ink-faint">What you get</p>
        <ul className="mt-4 flex flex-col gap-3">
          {ticket.includes.map((item) => (
            <li
              key={item.label}
              className="flex items-baseline justify-between gap-4"
            >
              <span className="text-body-sm text-ink">
                <span className="text-ink-faint">· </span>
                {item.label}
              </span>
              <span className="mono-micro shrink-0 text-ink-faint">
                {item.note ?? "incl."}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tear line */}
      <div className="mx-5 border-t border-dashed border-rule-strong" />

      <div className="flex flex-1 flex-col p-5">
        <dl className="flex flex-col gap-2.5">
          {ticket.lines.map((line) => (
            <div
              key={line.label}
              className="flex items-baseline justify-between gap-4"
            >
              <dt className="text-body-sm text-ink-muted">{line.label}</dt>
              <dd className="mono-num text-[0.8125rem] text-ink">
                {line.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 flex items-baseline justify-between gap-4 border-t border-rule pt-4">
          <span className="mono-label text-ink">Total due</span>
          <span className="text-right">
            <span className="mono-num block text-[1.375rem] font-medium leading-tight text-ink">
              {ticket.total}
            </span>
            {ticket.totalUnit && (
              <span className="mono-label block text-ink-faint">
                {ticket.totalUnit}
              </span>
            )}
          </span>
        </div>

        <div className="mt-6 flex flex-wrap items-baseline justify-between gap-2 border-t border-rule pt-4">
          <span className="mono-micro text-ink-faint">Auth · {ticket.auth}</span>
          <span className="mono-micro text-ink-faint">
            Holder · {ticket.holder}
          </span>
        </div>

        <div className="mt-6 flex-1" />

        <Cta
          href={ticket.ctaHref}
          variant={ticket.featured ? "primary" : "secondary"}
          className="w-full"
        >
          {ticket.cta}
        </Cta>
      </div>
    </article>
  );
}

export function PricingLedger() {
  return (
    <section id="plans" className="border-b border-rule py-section">
      <Container>
        <SectionLabel
          left="Desk 01 · Terminal access"
          center="Three plans · pick one"
          right="Priced · 2026.04"
        />

        <h2 className="display text-display mt-10 max-w-3xl">
          Pick a mandate. <em>Real figures, no hidden fees.</em>
        </h2>

        <p className="mt-7 max-w-2xl text-body text-ink-muted">
          Three plans on the green hydrogen terminal. Every plan sees the same
          market; what changes is how much of it you can track, contact, and
          trade against.
        </p>

        <div className="mt-12 grid items-start gap-6 lg:grid-cols-3">
          {terminalPlans.map((ticket) => (
            <TicketCard key={ticket.ref} ticket={ticket} />
          ))}
        </div>

        <p className="mono-label mt-8 text-ink-faint">
          Terminal is still in build · subscriptions taken now hold the 2026 rate
          for the life of the account
        </p>
      </Container>
    </section>
  );
}
