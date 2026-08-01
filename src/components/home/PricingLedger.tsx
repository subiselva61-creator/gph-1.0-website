import { Cta } from "@/components/meridian/Cta";
import { SectionLabel } from "@/components/meridian/SectionLabel";
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

/** Product 01 — Hydro AI subscription plans. */
const hydroAiPlans: Ticket[] = [
  {
    name: "Hydro AI · Watchlist",
    ref: "№ GPH-HA-W-2026",
    blurb: "For the analyst who needs the map before the match.",
    includes: [
      { label: "Matching AI engine", note: "3 matches / mo" },
      { label: "Plant intelligence", note: "Full" },
      { label: "Investor register", note: "Names only" },
      { label: "Live tracking", note: "10 projects" },
      { label: "Live news", note: "Daily digest" },
      { label: "Trade desk", note: "Read only" },
      { label: "Structured pipeline", note: "Screening" },
      { label: "Seats", note: "1" },
    ],
    lines: [
      { label: "Subscription", value: "$250.00" },
      { label: "Onboarding", value: "$0.00" },
      { label: "Per-seat fees", value: "$0.00" },
    ],
    total: "$250",
    totalUnit: "/ month",
    auth: "0xgphhaw2026",
    holder: "your watchlist",
    cta: "Buy now",
    ctaHref: "/contact-us",
    featured: false,
  },
  {
    name: "Hydro AI · Desk",
    ref: "№ GPH-HA-D-2026",
    blurb: "For the team that acts on AI-ranked investment options.",
    includes: [
      { label: "Everything in Watchlist" },
      { label: "Matching AI engine", note: "Unlimited" },
      { label: "Plant intelligence", note: "Daily refresh" },
      { label: "Investor register", note: "Contacts + tickets" },
      { label: "Live tracking", note: "100 projects" },
      { label: "Live news", note: "Real time" },
      { label: "Trade desk", note: "Post interest" },
      { label: "Structured pipeline", note: "Through FID" },
      { label: "Seats", note: "5" },
    ],
    lines: [
      { label: "Subscription", value: "$600.00" },
      { label: "Onboarding", value: "$0.00" },
      { label: "Per-seat fees", value: "$0.00" },
    ],
    total: "$600",
    totalUnit: "/ month",
    auth: "0xgphhad2026",
    holder: "your desk",
    cta: "Buy now",
    ctaHref: "/contact-us",
    featured: true,
  },
  {
    name: "Hydro AI · House",
    ref: "№ GPH-HA-H-2026",
    blurb: "For the institution running the full Hydro AI book.",
    includes: [
      { label: "Everything in Desk" },
      { label: "Matching AI engine", note: "API + custom weights" },
      { label: "Plant intelligence", note: "Unlimited + API" },
      { label: "Investor register", note: "Warm introductions" },
      { label: "Live tracking", note: "Unlimited" },
      { label: "Live news", note: "Analyst notes" },
      { label: "Trade desk", note: "Brokered matching" },
      { label: "Structured pipeline", note: "To financial close" },
      { label: "Seats", note: "Unlimited" },
    ],
    lines: [
      { label: "Subscription", value: "$1,000.00" },
      { label: "Onboarding", value: "$0.00" },
      { label: "Per-seat fees", value: "$0.00" },
    ],
    total: "$1,000",
    totalUnit: "/ month",
    auth: "0xgphhah2026",
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
        <h4 className="text-h3 text-ink">{ticket.name}</h4>
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

/** Flip to true when ready to show Hydro AI subscription plans again. */
export const SHOW_HYDRO_AI_PLANS = false;

/** The plans block — rendered inside the Hydro AI section, not on its own. */
export function PricingLedger() {
  if (!SHOW_HYDRO_AI_PLANS) return null;

  return (
    <div id="plans" className="mt-16 border-t border-rule pt-14">
      <SectionLabel
        left="Plans · Hydro AI"
        center="Three plans · pick one"
        right="Priced · 2026.04"
      />

      <h3 className="display text-h2 mt-10 max-w-3xl">
        Pick a mandate. <em>Real figures, no hidden fees.</em>
      </h3>

      <p className="mt-7 max-w-2xl text-body text-ink-muted">
        Every plan sees the same market; what changes is how much matching,
        tracking, and trade access you get — up to $1,000 a month for the full
        house. Subscriptions taken before Hydro AI opens hold the 2026 rate for
        the life of the account.
      </p>

      <div className="mt-12 grid items-start gap-6 lg:grid-cols-3">
        {hydroAiPlans.map((ticket) => (
          <TicketCard key={ticket.ref} ticket={ticket} />
        ))}
      </div>
    </div>
  );
}
