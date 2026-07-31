import { DataTable } from "@/components/DataTable";
import { Cta } from "@/components/meridian/Cta";
import { SectionLabel } from "@/components/meridian/SectionLabel";
import { Container } from "@/components/ui/Container";
import type { LedgerTableData } from "@/lib/agriculture/tables";

const figures = [
  { value: "$1.75M", label: "Cashew working capital, 2026" },
  { value: "20 t", label: "Per export container" },
  { value: "4", label: "Origins under contract" },
];

const origins = [
  {
    country: "Côte d'Ivoire",
    belt: "Abidjan · Bouaké",
    window: "Jan – May",
    note: "Farmgate network and the container export desk.",
  },
  {
    country: "Ghana",
    belt: "Northern region",
    window: "Feb – Jun",
    note: "Warehouse intake shared with the solar deployment base.",
  },
  {
    country: "Togo",
    belt: "Sokodé belt",
    window: "Feb – Jun",
    note: "Aggregation alongside soybean and maize volumes.",
  },
  {
    country: "Benin",
    belt: "Parakou zone",
    window: "Mar – Jun",
    note: "Regional trading and cocoa shell by-products.",
  },
];

const specification: LedgerTableData = {
  caption: "Raw cashew nut specification",
  columns: [
    { key: "spec", label: "Specification" },
    { key: "standard", label: "Contract standard", align: "right" },
  ],
  rows: [
    { spec: "Outturn", standard: "46 – 52 lbs / 80 kg" },
    { spec: "Nut count", standard: "180 – 210 per kg" },
    { spec: "Moisture", standard: "8% maximum" },
    { spec: "Defective rate", standard: "12% maximum" },
    { spec: "Foreign matter", standard: "1% maximum" },
    { spec: "Packing", standard: "80 kg jute · 20 t / container" },
  ],
  note: "Every intake is graded before payment. Lots outside spec are rejected at the warehouse door, not at the port.",
};

const movementTape: LedgerTableData = {
  caption: "2026 cashew movement tape",
  columns: [
    { key: "month", label: "Month" },
    { key: "origin", label: "Origin" },
    { key: "tonnes", label: "Tonnes", align: "right", numeric: true },
    { key: "grade", label: "Grade" },
    { key: "buyer", label: "Buyer" },
    { key: "status", label: "Status" },
  ],
  rows: [
    {
      month: "Jan",
      origin: "Abidjan",
      tonnes: "180",
      grade: "W240",
      buyer: "Europe",
      status: "Cleared",
    },
    {
      month: "Feb",
      origin: "Abidjan",
      tonnes: "240",
      grade: "W240",
      buyer: "Europe",
      status: "Cleared",
    },
    {
      month: "Mar",
      origin: "Bouaké",
      tonnes: "320",
      grade: "W210",
      buyer: "Europe",
      status: "Cleared",
    },
    {
      month: "Apr",
      origin: "Sokodé",
      tonnes: "280",
      grade: "W240",
      buyer: "West Africa",
      status: "In transit",
    },
    {
      month: "May",
      origin: "Parakou",
      tonnes: "260",
      grade: "W320",
      buyer: "Europe",
      status: "In transit",
    },
    {
      month: "Jun",
      origin: "Tamale",
      tonnes: "210",
      grade: "W240",
      buyer: "Europe",
      status: "Contracted",
    },
    {
      month: "Season",
      origin: "Four origins",
      tonnes: "1,490",
      grade: "—",
      buyer: "—",
      status: "Booked",
      highlight: true,
    },
  ],
  note: "Volumes are indicative of the 2026 programme and subject to mandate.",
};

export function CashewDesk() {
  return (
    <section
      id="cashew"
      className="border-b border-rule bg-paper-alt py-section"
    >
      <Container>
        <SectionLabel
          left="Desk 03 · Cashew"
          center="Farmgate to container"
          right="Season · Jan – Jun"
        />

        <h2 className="display text-display mt-10 max-w-4xl">
          Raw cashew nuts, <em>graded before they move.</em>
        </h2>

        <p className="mt-7 max-w-2xl text-body text-ink-muted">
          Most cashew leaves West Africa unpriced: a farmer sells at whatever the
          buyer at the gate is offering that morning, and the quality argument
          happens later, at someone else&apos;s port. We grade on intake, pay
          against the grade, and ship the record with the container.
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

        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="mono-label text-ink-faint">Origins · 4 under contract</p>
            <h3 className="display text-h2 mt-3">
              Where the <em>season</em> starts.
            </h3>

            <ul className="mt-8 border-t border-rule">
              {origins.map((origin) => (
                <li
                  key={origin.country}
                  className="border-b border-rule py-5 transition-colors hover:bg-paper"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <span className="text-h3 text-ink">{origin.country}</span>
                    <span className="mono-label text-ink-faint">
                      {origin.window}
                    </span>
                  </div>
                  <p className="mono-label mt-2 text-ink-faint">{origin.belt}</p>
                  <p className="mt-2 text-body-sm text-ink-muted">
                    {origin.note}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mono-label text-ink-faint">Grade sheet · contract</p>
            <h3 className="display text-h2 mt-3">
              What <em>passes</em> the door.
            </h3>
            <DataTable
              className="mt-8"
              data={specification}
              reference="RCN / 01"
            />
          </div>
        </div>

        <DataTable
          className="mt-12"
          data={movementTape}
          reference="TAPE / 01"
        />

        <div className="mt-14 flex flex-wrap items-center gap-3">
          <Cta href="/contact-us">Request a sample lot</Cta>
          <Cta href="/agriculture" variant="secondary">
            See the agriculture programme
          </Cta>
        </div>
      </Container>
    </section>
  );
}
