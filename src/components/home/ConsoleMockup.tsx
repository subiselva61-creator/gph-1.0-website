import {
  consoleActivity,
  consoleCommodities,
  consoleIntake,
  consoleMargin,
  consoleRegions,
  consoleRevenue,
  consoleStats,
  consoleTransactions,
  consoleWorkspace,
} from "@/lib/home/console";
import { cn } from "@/lib/utils";

const statusTone: Record<string, string> = {
  Cleared: "text-accent border-accent/40 bg-accent-soft",
  "In transit": "text-ink-muted border-rule bg-paper-alt",
  Held: "text-ink border-rule-strong bg-paper-alt",
};

function Panel({
  title,
  meta,
  children,
  className,
}: {
  title: string;
  meta?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("flex flex-col border border-rule bg-paper", className)}>
      <header className="flex items-baseline justify-between gap-3 border-b border-rule px-3 py-2">
        <h3 className="mono-label text-ink">{title}</h3>
        {meta}
      </header>
      <div className="flex-1 p-3">{children}</div>
    </section>
  );
}

function Toggle({ options, active }: { options: string[]; active: string }) {
  return (
    <div className="flex items-center border border-rule">
      {options.map((option) => (
        <span
          key={option}
          className={cn(
            "mono-micro px-1.5 py-0.5",
            option === active
              ? "bg-ink text-ink-invert"
              : "text-ink-faint",
          )}
        >
          {option}
        </span>
      ))}
    </div>
  );
}

function Avatar({ initials }: { initials: string }) {
  return (
    <span className="mono-micro flex size-6 shrink-0 items-center justify-center border border-rule bg-paper-alt text-ink-muted">
      {initials}
    </span>
  );
}

/**
 * The portfolio console under the hero — a full application surface rendered in
 * DOM rather than a screenshot, so it inherits the active theme.
 */
export function ConsoleMockup() {
  const revenueMax = Math.max(...consoleRevenue.map((m) => m.value));

  return (
    <div className="overflow-hidden border border-rule bg-paper-alt shadow-[0_24px_80px_-32px_rgba(0,0,0,0.35)]">
      {/* Window chrome */}
      <div className="flex items-center justify-between gap-4 border-b border-rule bg-paper px-3 py-2">
        <div className="flex items-center gap-2">
          <span className="flex gap-1" aria-hidden>
            <span className="size-2 rounded-full border border-rule-strong" />
            <span className="size-2 rounded-full border border-rule-strong" />
            <span className="size-2 rounded-full border border-rule-strong" />
          </span>
          <span className="mono-label text-ink-faint">
            {consoleWorkspace.label}
          </span>
        </div>
        <span className="mono-micro border border-rule px-1.5 py-0.5 text-ink-faint">
          ⌘K
        </span>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden w-44 shrink-0 flex-col justify-between border-r border-rule bg-paper px-3 py-3 lg:flex">
          <div>
            <div className="flex items-center gap-2 pb-4">
              <span className="mono-micro flex size-5 items-center justify-center border border-rule text-ink">
                G
              </span>
              <span className="mono-label text-ink">Green PowerHouse</span>
            </div>
            <nav className="flex flex-col gap-0.5">
              {consoleWorkspace.sidebar.map((item, i) => (
                <span
                  key={item.label}
                  className={cn(
                    "mono-label flex items-center gap-2 px-2 py-1.5",
                    i === 0 ? "bg-paper-alt text-ink" : "text-ink-faint",
                  )}
                >
                  <span aria-hidden className="text-[0.7rem]">
                    {item.icon}
                  </span>
                  {item.label}
                </span>
              ))}
            </nav>
          </div>
          <div className="border border-rule p-2">
            <p className="mono-micro text-ink-faint">Plan</p>
            <p className="mono-label mt-1 text-ink">
              {consoleWorkspace.plan}
              <span className="text-ink-faint"> · {consoleWorkspace.planDetail}</span>
            </p>
          </div>
        </aside>

        {/* Content */}
        <div className="min-w-0 flex-1">
          {/* Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto border-b border-rule bg-paper px-3 scrollbar-hide">
            {consoleWorkspace.tabs.map((tab, i) => (
              <span
                key={tab}
                className={cn(
                  "mono-label whitespace-nowrap border-b-2 px-2 py-2.5",
                  i === 0
                    ? "border-ink text-ink"
                    : "border-transparent text-ink-faint",
                )}
              >
                {tab}
              </span>
            ))}
          </div>

          <div className="grid gap-2 p-2 sm:gap-2.5 sm:p-2.5">
            {/* 1 — Stat cards */}
            <div className="grid grid-cols-2 gap-2 sm:gap-2.5 lg:grid-cols-4">
              {consoleStats.map((stat) => (
                <div key={stat.label} className="border border-rule bg-paper p-3">
                  <p className="mono-label text-ink-faint">{stat.label}</p>
                  <p className="mono-num mt-2 text-[clamp(1.1rem,2vw,1.5rem)] font-medium text-ink">
                    {stat.value}
                  </p>
                  <p
                    className={cn(
                      "mono-micro mt-1",
                      stat.positive ? "text-accent" : "text-ink-faint",
                    )}
                  >
                    {stat.delta}
                  </p>
                </div>
              ))}
            </div>

            {/* 2 — Revenue chart + recent intake */}
            <div className="grid gap-2 sm:gap-2.5 lg:grid-cols-3">
              <Panel
                title="Revenue · 2026"
                className="lg:col-span-2"
                meta={<Toggle options={["Monthly", "Weekly"]} active="Monthly" />}
              >
                <div className="flex items-baseline gap-3">
                  <span className="mono-num text-lg font-medium text-ink">
                    $20.7M
                  </span>
                  <span className="mono-micro text-accent">+58% RoC</span>
                </div>
                <div className="mt-4 flex h-32 items-end gap-1 sm:gap-1.5">
                  {consoleRevenue.map((month) => (
                    <div
                      key={month.month}
                      className="flex min-w-0 flex-1 flex-col items-center gap-1.5"
                    >
                      <div className="flex w-full flex-1 items-end">
                        <div
                          className="w-full bg-ink/85"
                          style={{
                            height: `${(month.value / revenueMax) * 100}%`,
                          }}
                        />
                      </div>
                      <span className="mono-micro truncate text-ink-faint">
                        {month.month}
                      </span>
                    </div>
                  ))}
                </div>
              </Panel>

              <Panel
                title="Recent intake"
                meta={
                  <span className="mono-micro text-ink-faint">5 today</span>
                }
              >
                <ul className="flex flex-col gap-2.5">
                  {consoleIntake.map((row) => (
                    <li key={row.name} className="flex items-center gap-2.5">
                      <Avatar initials={row.initials} />
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-[0.8125rem] text-ink">
                          {row.name}
                        </span>
                        <span className="mono-micro block truncate text-ink-faint">
                          {row.detail}
                        </span>
                      </span>
                      <span className="mono-num shrink-0 text-[0.75rem] text-ink">
                        {row.amount}
                      </span>
                    </li>
                  ))}
                </ul>
              </Panel>
            </div>

            {/* 3 — Throughput + sourcing regions */}
            <div className="grid gap-2 sm:gap-2.5 lg:grid-cols-2">
              <Panel
                title="Throughput · last 30d"
                meta={<Toggle options={["24h", "7d", "30d"]} active="30d" />}
              >
                <div className="flex items-baseline gap-2">
                  <span className="mono-num text-lg font-medium text-ink">
                    2,150
                  </span>
                  <span className="mono-micro text-ink-faint">tonnes</span>
                </div>
                <div className="mt-4 flex h-16 items-end gap-[3px]">
                  {[38, 52, 44, 61, 58, 72, 66, 79, 84, 71, 88, 92, 76, 83].map(
                    (h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-accent/70"
                        style={{ height: `${h}%` }}
                      />
                    ),
                  )}
                </div>
              </Panel>

              <Panel
                title="Sourcing regions"
                meta={
                  <span className="mono-micro text-ink-faint">by volume</span>
                }
              >
                <ul className="flex flex-col gap-2">
                  {consoleRegions.map((region) => (
                    <li key={region.name} className="flex items-center gap-3">
                      <span className="w-28 shrink-0 truncate text-[0.8125rem] text-ink-muted">
                        {region.name}
                      </span>
                      <span className="h-1 min-w-0 flex-1 bg-paper-alt">
                        <span
                          className="block h-full bg-ink/70"
                          style={{ width: `${region.share}%` }}
                        />
                      </span>
                      <span className="mono-num w-8 shrink-0 text-right text-[0.75rem] text-ink">
                        {region.share}%
                      </span>
                    </li>
                  ))}
                </ul>
              </Panel>
            </div>

            {/* 4 — Top commodities */}
            <Panel
              title="Top commodities"
              meta={
                <span className="mono-micro text-ink-faint">Last 30 days</span>
              }
            >
              <div className="overflow-x-auto">
                <table className="w-full min-w-[24rem] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-rule">
                      <th className="mono-micro pb-2 pr-3 text-ink-faint">
                        Commodity
                      </th>
                      <th className="mono-micro pb-2 pr-3 text-right text-ink-faint">
                        Tonnes
                      </th>
                      <th className="mono-micro pb-2 pr-3 text-right text-ink-faint">
                        Containers
                      </th>
                      <th className="mono-micro pb-2 text-right text-ink-faint">
                        Margin
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {consoleCommodities.map((row) => (
                      <tr key={row.name} className="border-b border-rule last:border-0">
                        <td className="py-2 pr-3 text-[0.8125rem] text-ink">
                          {row.name}
                        </td>
                        <td className="mono-num py-2 pr-3 text-right text-[0.75rem] text-ink-muted">
                          {row.tonnes}
                        </td>
                        <td className="mono-num py-2 pr-3 text-right text-[0.75rem] text-ink-muted">
                          {row.containers}
                        </td>
                        <td className="mono-num py-2 text-right text-[0.75rem] text-ink-muted">
                          {row.margin}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Panel>

            {/* 5 — Transactions */}
            <Panel
              title="Recent shipments"
              meta={
                <span className="mono-micro text-ink-faint">8 records</span>
              }
            >
              <div className="overflow-x-auto">
                <table className="w-full min-w-[38rem] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-rule">
                      {["Ref", "Buyer", "Status", "Terms", "Amount", "Date"].map(
                        (head, i) => (
                          <th
                            key={head}
                            className={cn(
                              "mono-micro pb-2 pr-3 text-ink-faint",
                              i >= 4 && "text-right",
                            )}
                          >
                            {head}
                          </th>
                        ),
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {consoleTransactions.map((row) => (
                      <tr key={row.ref} className="border-b border-rule last:border-0">
                        <td className="mono-num py-2 pr-3 text-[0.75rem] text-ink">
                          {row.ref}
                        </td>
                        <td className="py-2 pr-3 text-[0.8125rem] text-ink-muted">
                          {row.buyer}
                        </td>
                        <td className="py-2 pr-3">
                          <span
                            className={cn(
                              "mono-micro border px-1.5 py-0.5",
                              statusTone[row.status],
                            )}
                          >
                            {row.status}
                          </span>
                        </td>
                        <td className="py-2 pr-3 text-[0.8125rem] text-ink-muted">
                          {row.terms}
                        </td>
                        <td className="mono-num py-2 pr-3 text-right text-[0.75rem] text-ink">
                          {row.amount}
                        </td>
                        <td className="mono-num py-2 text-right text-[0.75rem] text-ink-faint">
                          {row.date}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Panel>

            {/* 6 — Activity feed + realised margin + warehouse uptime */}
            <div className="grid gap-2 sm:gap-2.5 lg:grid-cols-3">
              <Panel
                title="Activity feed"
                className="lg:col-span-2"
                meta={<span className="mono-micro text-ink-faint">live</span>}
              >
                <ul className="flex flex-col gap-2.5">
                  {consoleActivity.map((row) => (
                    <li key={row.text} className="flex items-center gap-2.5">
                      <Avatar initials={row.initials} />
                      <span className="min-w-0 flex-1 truncate text-[0.8125rem] text-ink-muted">
                        {row.text}
                      </span>
                      <span className="mono-micro shrink-0 text-ink-faint">
                        {row.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </Panel>

              <div className="grid gap-2 sm:gap-2.5">
                <Panel title="Margin realised">
                  <div className="flex items-baseline gap-2">
                    <span className="mono-num text-lg font-medium text-ink">
                      8.0%
                    </span>
                    <span className="mono-micro text-accent">
                      +0.4% wk
                    </span>
                  </div>
                  <div className="mt-3 flex h-12 items-end gap-1.5">
                    {consoleMargin.map((h, i) => (
                      <div
                        key={i}
                        className="flex flex-1 flex-col items-center gap-1"
                      >
                        <div className="flex w-full flex-1 items-end">
                          <div
                            className="w-full bg-ink/70"
                            style={{ height: `${h}%` }}
                          />
                        </div>
                        <span className="mono-micro text-ink-faint">
                          {["M", "T", "W", "T", "F", "S", "S"][i]}
                        </span>
                      </div>
                    ))}
                  </div>
                </Panel>

                <Panel title="Warehouse uptime">
                  <div className="flex items-baseline gap-2">
                    <span className="mono-num text-lg font-medium text-ink">
                      99.4%
                    </span>
                    <span className="mono-micro text-ink-faint">last 90 days</span>
                  </div>
                  <div className="mt-3 flex gap-px">
                    {Array.from({ length: 90 }).map((_, i) => (
                      <span
                        key={i}
                        className={cn(
                          "h-6 flex-1",
                          i === 23 || i === 58 || i === 71
                            ? "bg-ink/25"
                            : "bg-accent/60",
                        )}
                      />
                    ))}
                  </div>
                  <div className="mt-2 flex justify-between">
                    <span className="mono-micro text-ink-faint">90d ago</span>
                    <span className="mono-micro text-ink-faint">Today</span>
                  </div>
                </Panel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
