"use client";

import { useState } from "react";
import { PhoneFrame } from "@/components/meridian/PhoneFrame";
import { SectionLabel } from "@/components/meridian/SectionLabel";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const activities = [
  {
    index: "01",
    desk: "Hydro AI",
    label: "Plant update",
    detail: "Duqm · 1.2 GW",
    status: "Live",
    gauge: 100,
    note: "Financial close cleared. Electrolyser order placed.",
  },
  {
    index: "02",
    desk: "Hydro AI",
    label: "AI match",
    detail: "Investor · Project",
    status: "Matched",
    gauge: 94,
    note: "Top ranked capital for Duqm offtake. Three tickets fit the mandate.",
  },
  {
    index: "03",
    desk: "Solar",
    label: "Lot cleared",
    detail: "Marseille · 412 units",
    status: "Cleared",
    gauge: 100,
    note: "Flash-tested at 0.91 of original output. Ready to ship.",
  },
  {
    index: "04",
    desk: "Cashew",
    label: "Container",
    detail: "GPH-4412 · Abidjan",
    status: "In transit",
    gauge: 64,
    note: "20 t of W240 en route. Documents already with the buyer.",
  },
];

export function DynamicIsland() {
  /** Driven by hover and focus only — nothing rotates on its own. */
  const [active, setActive] = useState(0);
  const activity = activities[active];

  return (
    <section className="border-b border-rule py-section">
      <Container>
        <SectionLabel
          left="Live activities · all three products"
          center="Hover a row to switch"
          right="iOS · iPadOS · watchOS"
        />

        <h2 className="display text-display mt-10 max-w-3xl">
          The Island <em>knows which product moved.</em>
        </h2>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <p className="mono-label text-ink-faint">Now showing</p>
            <h3 className="display text-h2 mt-3">
              <em>Three</em> products, <em>one</em> Island.
            </h3>

            <ul className="mt-8 border-t border-rule">
              {activities.map((item, i) => (
                <li key={item.index}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    aria-current={i === active}
                    className={cn(
                      "focus-ring flex w-full items-baseline gap-4 border-b border-rule py-4 text-left transition-colors",
                      i === active ? "bg-paper-alt" : "hover:bg-paper-alt",
                    )}
                  >
                    <span
                      className={cn(
                        "mono-label shrink-0",
                        i === active ? "text-accent" : "text-ink-faint",
                      )}
                    >
                      {item.index}
                    </span>
                    <span className="mono-label hidden w-20 shrink-0 text-ink-faint sm:block">
                      {item.desk}
                    </span>
                    <span className="mono-label w-24 shrink-0 text-ink">
                      {item.label}
                    </span>
                    <span className="min-w-0 flex-1 truncate text-body-sm text-ink-muted">
                      {item.detail}
                    </span>
                    <span
                      className={cn(
                        "mono-micro shrink-0 border px-1.5 py-0.5",
                        i === active
                          ? "border-accent/40 bg-accent-soft text-accent"
                          : "border-rule text-ink-faint",
                      )}
                    >
                      {item.status}
                    </span>
                  </button>
                </li>
              ))}
            </ul>

            <p className="mt-8 max-w-lg text-body text-ink-muted">
              An AI match ranked, a plant reaching financial close, a panel lot
              clearing inspection, a container leaving Abidjan — Green PowerHouse
              surfaces them in the Dynamic Island without unlocking your phone or
              opening an app. Hover a row to bring that product up on the screen.
            </p>
          </div>

          <div>
            <PhoneFrame
              island={
                <span className="flex w-full items-center justify-between gap-2">
                  <span className="mono-micro truncate">{activity.desk}</span>
                  <span className="mono-num text-[0.625rem] opacity-70">
                    {activity.detail}
                  </span>
                  <span className="size-1.5 shrink-0 rounded-full bg-accent" />
                </span>
              }
            >
              <div className="flex h-full flex-col px-3 pb-4 pt-3.5">
                <div className="flex items-center justify-between">
                  <span className="mono-micro text-ink-muted">9:41</span>
                  <span className="mono-micro text-ink-muted">Abidjan 78%</span>
                </div>

                <div className="pt-14 text-center">
                  <p className="mono-label text-ink-faint">Thursday, April 25</p>
                  <p className="mono-num text-[3.25rem] font-light leading-none tracking-[-0.04em] text-ink">
                    9:41
                  </p>
                </div>

                <div className="mt-auto flex flex-col gap-2">
                  <div className="border border-rule bg-paper p-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="mono-micro text-ink-faint">
                        Green PowerHouse
                      </span>
                      <span className="mono-micro text-ink-faint">now</span>
                    </div>
                    <p className="mt-1.5 text-[0.8125rem] leading-tight text-ink">
                      Watching three products. You&apos;ll only see what moves.
                    </p>
                  </div>

                  <div className="border border-rule bg-paper p-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="mono-micro text-ink">
                        {activity.desk} · {activity.label}
                      </span>
                      <span className="mono-micro text-ink-faint">
                        {activity.status}
                      </span>
                    </div>
                    <p className="mt-1.5 text-[0.8125rem] leading-tight text-ink-muted">
                      {activity.note}
                    </p>
                    <div className="mt-2 h-1 bg-paper-alt">
                      <div
                        className="h-full bg-accent transition-[width] duration-700"
                        style={{ width: `${activity.gauge}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </PhoneFrame>
          </div>
        </div>
      </Container>
    </section>
  );
}
