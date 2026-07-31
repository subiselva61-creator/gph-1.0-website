"use client";

import { useEffect, useRef, useState } from "react";
import { Cta } from "@/components/meridian/Cta";
import { LockScreen, PhoneFrame } from "@/components/meridian/PhoneFrame";
import { SectionLabel } from "@/components/meridian/SectionLabel";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const figures = [
  { value: "90%", label: "Of original power retained" },
  { value: "15–20", label: "Years of service left" },
  { value: "60–70%", label: "Below new-system cost" },
];

const steps = [
  {
    index: "01",
    tag: "Source",
    meta: "Marseille · week 1",
    title: "Panels recovered and inspected in Europe.",
    body: "We source pre-loved photovoltaic panels from across Europe and test every one. A large portion still produce up to 90% of their original power, with 15 to 20 years of service left.",
    card: {
      stamp: "Intake",
      title: "Panel lot 0912",
      meta: "Marseille · 412 units",
      value: "0.91",
      scale: "/ 1.00",
      gauge: 91,
      readout: "Output tested",
      primary: "Approve lot",
      secondary: "Hold · inspect",
    },
  },
  {
    index: "02",
    tag: "Structure",
    meta: "Local currency · week 3",
    title: "Capital arranged in local currency.",
    body: "Blended finance vehicles carry the project, so communities and operators are never exposed to hard-currency debt they cannot service.",
    card: {
      stamp: "Mandate",
      title: "Drawdown request",
      meta: "Tranche B · local currency",
      value: "0.62",
      scale: "/ 1.00",
      gauge: 62,
      readout: "Facility drawn",
      primary: "Approve",
      secondary: "Review terms",
    },
  },
  {
    index: "03",
    tag: "Deploy",
    meta: "Tamale · week 9",
    title: "Installed alongside ADA on the ground.",
    body: "Our partner ADA handles community engagement and installation, so the system lands where it is needed and keeps running after handover.",
    card: {
      stamp: "Commission",
      title: "Array live",
      meta: "Tamale · 48 kWp",
      value: "1.00",
      scale: "/ 1.00",
      gauge: 100,
      readout: "Commissioned",
      primary: "Sign off",
      secondary: "Schedule visit",
    },
  },
  {
    index: "04",
    tag: "Sustain",
    meta: "France · 15-year record",
    title: "Every panel traceable for its whole life.",
    body: "Lifecycle documentation, European inspection standards, and logistics managed from our central base in France — so the record outlives the install.",
    card: {
      stamp: "Trace",
      title: "Lifecycle sealed",
      meta: "Lot 0912 · 15 yr horizon",
      value: "1.00",
      scale: "/ 1.00",
      gauge: 100,
      readout: "Records signed",
      primary: "Archive",
      secondary: "Export ledger",
    },
  },
];

/** What leaves our hands with every lot, regardless of size. */
const shipsWith = [
  "Per-panel inspection certificate",
  "Flash-test output report",
  "Lifecycle and provenance record",
  "Installation and handover plan",
];

function NotificationCard({ card }: { card: (typeof steps)[number]["card"] }) {
  return (
    <div className="border border-rule bg-paper p-2.5">
      <div className="flex items-center justify-between gap-2">
        <span className="mono-micro text-ink-faint">Green PowerHouse</span>
        <span className="mono-micro border border-rule px-1 text-ink">
          {card.stamp}
        </span>
      </div>
      <p className="mt-2 text-[0.8125rem] font-medium leading-tight text-ink">
        {card.title}
      </p>
      <p className="mono-micro mt-1 text-ink-faint">{card.meta}</p>

      <div className="mt-3 flex items-baseline gap-1">
        <span className="mono-num text-lg font-medium text-ink">
          {card.value}
        </span>
        <span className="mono-micro text-ink-faint">{card.scale}</span>
      </div>
      <div className="mt-1.5 h-1 bg-paper-alt">
        <div
          className="h-full bg-accent transition-[width] duration-700"
          style={{ width: `${card.gauge}%` }}
        />
      </div>
      <p className="mono-micro mt-1.5 text-ink-faint">{card.readout}</p>

      <div className="mt-3 grid grid-cols-2 gap-1.5">
        <span className="mono-micro border border-ink bg-ink px-2 py-1.5 text-center text-ink-invert">
          {card.primary}
        </span>
        <span className="mono-micro border border-rule px-2 py-1.5 text-center text-ink-muted">
          {card.secondary}
        </span>
      </div>
    </div>
  );
}

export function FieldShift() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const nodes = stepRefs.current.filter(Boolean) as HTMLLIElement[];
    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const index = nodes.indexOf(visible.target as HTMLLIElement);
        if (index !== -1) setActive(index);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const step = steps[active];

  return (
    <section id="solar" className="border-b border-rule py-section">
      <Container>
        <SectionLabel
          left="Desk 02 · Solar"
          center="Second life, first-life impact"
          right="Field shift · 07:20 GMT"
        />

        <h2 className="display text-display mt-10 max-w-3xl">
          Panel to power, <em>in one season.</em>
        </h2>

        <p className="mt-7 max-w-2xl text-body text-ink-muted">
          A large portion of the European panels we recover still produce up to
          ninety percent of their original power, with fifteen to twenty years of
          service left in them. Communities pay a fraction of new-system cost and
          redirect the savings to water, education, and healthcare. This is not
          salvage — it is the product.
        </p>

        <ul className="mt-12 grid gap-px border-t border-rule sm:grid-cols-3">
          {figures.map((figure) => (
            <li key={figure.label} className="border-b border-rule py-7 sm:pr-8">
              <p className="mono-num text-[clamp(2.25rem,5vw,3.5rem)] font-medium leading-none tracking-[-0.04em] text-ink">
                {figure.value}
              </p>
              <p className="mono-label mt-3 text-ink-faint">{figure.label}</p>
            </li>
          ))}
        </ul>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <ol className="border-t border-rule">
            {steps.map((item, i) => (
              <li
                key={item.index}
                ref={(node) => {
                  stepRefs.current[i] = node;
                }}
                className={cn(
                  "border-b border-l-2 border-b-rule py-10 pl-5 transition-all duration-500",
                  i === active
                    ? "border-l-accent opacity-100"
                    : "border-l-transparent opacity-45",
                )}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <p className="mono-label text-ink-faint">
                    {item.index} · {item.tag}
                  </p>
                  <p className="mono-label text-ink-faint">{item.meta}</p>
                </div>
                <h3 className="text-h2 mt-3 text-ink">{item.title}</h3>
                <p className="mt-4 max-w-lg text-body text-ink-muted">
                  {item.body}
                </p>
              </li>
            ))}
          </ol>

          <div className="lg:sticky lg:top-24 lg:self-start">
            <PhoneFrame>
              <LockScreen time="07:20" battery="100%">
                <NotificationCard card={step.card} />
              </LockScreen>
            </PhoneFrame>

            <div className="mt-6 flex items-baseline justify-between gap-4 border-t border-rule pt-3">
              <span className="mono-label text-ink-faint">
                Now showing · {step.tag}
              </span>
              <span className="mono-label text-ink">
                Step {active + 1} / {steps.length}
              </span>
            </div>

            <div className="mt-10 border-t border-rule pt-6">
              <p className="mono-label text-ink-faint">Ships with every lot</p>
              <ul className="mt-4">
                {shipsWith.map((item) => (
                  <li
                    key={item}
                    className="border-b border-rule py-2.5 text-body-sm text-ink"
                  >
                    <span className="text-ink-faint">· </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-3">
          <Cta href="/solar-panels">See the solar programme</Cta>
          <Cta href="/contact-us" variant="secondary">
            Request a site assessment
          </Cta>
        </div>
      </Container>
    </section>
  );
}
