import {
  consoleIntake,
  consoleRegions,
  consoleRevenue,
  consoleStats,
  consoleWorkspace,
} from "@/lib/home/console";
import { cn } from "@/lib/utils";

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
      <header className="flex items-baseline justify-between gap-3 border-b border-rule px-2.5 py-1.5">
        <h3 className="mono-label text-ink">{title}</h3>
        {meta}
      </header>
      <div className="flex-1 p-2.5">{children}</div>
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
    <span className="mono-micro flex size-5 shrink-0 items-center justify-center border border-rule bg-paper-alt text-ink-muted">
      {initials}
    </span>
  );
}

/**
 * Compact Hydro AI preview for the hero — top of the console only, so the
 * first viewport stays short.
 */
export function ConsoleMockup() {
  const revenueMax = Math.max(...consoleRevenue.map((m) => m.value));
  const intake = consoleIntake.slice(0, 3);
  const regions = consoleRegions.slice(0, 4);

  return (
    <div className="overflow-hidden border border-rule bg-paper-alt shadow-[0_24px_80px_-32px_rgba(0,0,0,0.35)]">
      {/* Window chrome */}
      <div className="flex items-center justify-between gap-4 border-b border-rule bg-paper px-3 py-1.5">
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
        <aside className="hidden w-40 shrink-0 flex-col justify-between border-r border-rule bg-paper px-2.5 py-2.5 lg:flex">
          <div>
            <div className="flex items-center gap-2 pb-3">
              <span className="mono-micro flex size-5 items-center justify-center border border-rule text-ink">
                G
              </span>
              <span className="mono-label text-ink">Hydro AI</span>
            </div>
            <nav className="flex flex-col gap-0.5">
              {consoleWorkspace.sidebar.map((item, i) => (
                <span
                  key={item.label}
                  className={cn(
                    "mono-label flex items-center gap-2 px-2 py-1",
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
          <div className="flex items-center gap-1 overflow-x-auto border-b border-rule bg-paper px-2.5 scrollbar-hide">
            {consoleWorkspace.tabs.map((tab, i) => (
              <span
                key={tab}
                className={cn(
                  "mono-label whitespace-nowrap border-b-2 px-2 py-2",
                  i === 0
                    ? "border-ink text-ink"
                    : "border-transparent text-ink-faint",
                )}
              >
                {tab}
              </span>
            ))}
          </div>

          <div className="grid gap-1.5 p-1.5 sm:gap-2 sm:p-2">
            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-1.5 sm:gap-2 lg:grid-cols-4">
              {consoleStats.map((stat) => (
                <div key={stat.label} className="border border-rule bg-paper p-2.5">
                  <p className="mono-label text-ink-faint">{stat.label}</p>
                  <p className="mono-num mt-1.5 text-[clamp(1rem,1.8vw,1.25rem)] font-medium text-ink">
                    {stat.value}
                  </p>
                  <p
                    className={cn(
                      "mono-micro mt-0.5",
                      stat.positive ? "text-accent" : "text-ink-faint",
                    )}
                  >
                    {stat.delta}
                  </p>
                </div>
              ))}
            </div>

            {/* Revenue chart + recent intake */}
            <div className="grid gap-1.5 sm:gap-2 lg:grid-cols-3">
              <Panel
                title="Revenue · 2026"
                className="lg:col-span-2"
                meta={<Toggle options={["Monthly", "Weekly"]} active="Monthly" />}
              >
                <div className="flex items-baseline gap-3">
                  <span className="mono-num text-base font-medium text-ink">
                    $20.7M
                  </span>
                  <span className="mono-micro text-accent">+58% RoC</span>
                </div>
                <div className="mt-2.5 flex h-16 items-end gap-1 sm:h-[4.5rem] sm:gap-1.5">
                  {consoleRevenue.map((month) => (
                    <div
                      key={month.month}
                      className="flex min-w-0 flex-1 flex-col items-center gap-1"
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
                  <span className="mono-micro text-ink-faint">3 today</span>
                }
              >
                <ul className="flex flex-col gap-2">
                  {intake.map((row) => (
                    <li key={row.name} className="flex items-center gap-2">
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

            {/* Throughput + sourcing regions */}
            <div className="grid gap-1.5 sm:gap-2 lg:grid-cols-2">
              <Panel
                title="Throughput · last 30d"
                meta={<Toggle options={["24h", "7d", "30d"]} active="30d" />}
              >
                <div className="flex items-baseline gap-2">
                  <span className="mono-num text-base font-medium text-ink">
                    2,150
                  </span>
                  <span className="mono-micro text-ink-faint">tonnes</span>
                </div>
                <div className="mt-2.5 flex h-10 items-end gap-[3px]">
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
                <ul className="flex flex-col gap-1.5">
                  {regions.map((region) => (
                    <li key={region.name} className="flex items-center gap-3">
                      <span className="w-24 shrink-0 truncate text-[0.8125rem] text-ink-muted">
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
          </div>
        </div>
      </div>
    </div>
  );
}
