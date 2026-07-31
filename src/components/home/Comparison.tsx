import { SectionLabel } from "@/components/meridian/SectionLabel";
import { Container } from "@/components/ui/Container";

const rows = [
  {
    index: "01",
    category: "Cost",
    ours: "Second-life panels at 60–70% less.",
    theirs: "New-system pricing, or nothing at all.",
  },
  {
    index: "02",
    category: "Sourcing",
    ours: "Inspected in Europe, traced per panel.",
    theirs: "Unverified stock, no lifecycle record.",
  },
  {
    index: "03",
    category: "Financing",
    ours: "Blended vehicles in local currency.",
    theirs: "Hard-currency debt the project cannot service.",
  },
  {
    index: "04",
    category: "Traceability",
    ours: "Every panel and every lot documented.",
    theirs: "A packing list, if you are lucky.",
  },
  {
    index: "05",
    category: "Community",
    ours: "Delivered with ADA already on the ground.",
    theirs: "Equipment dropped at the port.",
  },
  {
    index: "06",
    category: "Timeline",
    ours: "One season from lot to live array.",
    theirs: "Two years of feasibility studies.",
  },
  {
    index: "07",
    category: "Lifecycle",
    ours: "Fifteen to twenty years, then recovered again.",
    theirs: "Landfill at the end of first life.",
  },
];

export function Comparison() {
  return (
    <section className="border-b border-rule bg-paper-alt py-section">
      <Container>
        <SectionLabel
          left="7 categories · head-to-head"
          center="Cost, sourcing, financing, lifecycle · and more"
          right="Updated · 2026.04"
        />

        {/* Desktop ledger */}
        <div className="mt-12 hidden lg:block">
          <div className="grid grid-cols-[6rem_1fr_1fr] items-end gap-6 border-b border-rule pb-5">
            <span />
            <div>
              <p className="mono-label text-ink-faint">Us</p>
              <p className="display text-h2 mt-2">Green PowerHouse.</p>
            </div>
            <div>
              <p className="mono-label text-ink-faint">Them</p>
              <p className="display text-h2 mt-2 text-ink-faint">
                <em>Conventional.</em>
              </p>
            </div>
          </div>

          <dl>
            {rows.map((row) => (
              <div
                key={row.index}
                className="grid grid-cols-[6rem_1fr_1fr] items-baseline gap-6 border-b border-rule py-6 transition-colors hover:bg-paper-alt"
              >
                <dt className="flex items-baseline gap-2">
                  <span className="mono-label text-ink-faint">{row.index}</span>
                  <span className="mono-label text-ink">{row.category}</span>
                </dt>
                <dd className="text-h3 text-ink">{row.ours}</dd>
                <dd className="text-h3 text-ink-faint">{row.theirs}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Stacked mobile ledger */}
        <div className="mt-10 lg:hidden">
          <ul className="border-t border-rule">
            {rows.map((row) => (
              <li key={row.index} className="border-b border-rule py-6">
                <p className="flex items-baseline gap-2">
                  <span className="mono-label text-ink-faint">{row.index}</span>
                  <span className="mono-label text-ink">{row.category}</span>
                </p>

                <div className="mt-4 grid gap-4">
                  <div>
                    <p className="mono-label text-accent">Green PowerHouse</p>
                    <p className="mt-1.5 text-body text-ink">{row.ours}</p>
                  </div>
                  <div>
                    <p className="mono-label text-ink-faint">Conventional</p>
                    <p className="mt-1.5 text-body text-ink-faint">
                      {row.theirs}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
