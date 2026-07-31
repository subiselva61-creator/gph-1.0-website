import { SectionLabel } from "@/components/meridian/SectionLabel";
import { Container } from "@/components/ui/Container";

/**
 * Relationships are described rather than quoted — nothing here is attributed
 * to a named organisation that has not said it.
 */
const partners = [
  {
    wordmark: "ADA",
    full: "Action for Development of Africa",
    since: "est 2023",
    relationship:
      "Community engagement and installation across West Africa.",
  },
  {
    wordmark: "IDC",
    full: "Industrial Development Corporation",
    since: "est 2024",
    relationship:
      "Agricultural commodity platform and warehouse programme.",
  },
  {
    wordmark: "Dubai",
    full: "Dubai Silicon Oasis",
    since: "est 2023",
    relationship: "Group headquarters and capital structuring desk.",
  },
  {
    wordmark: "France",
    full: "European sourcing base",
    since: "est 2023",
    relationship: "Panel sourcing, inspection, and outbound logistics.",
  },
  {
    wordmark: "Côte d'Ivoire",
    full: "Abidjan export corridor",
    since: "est 2024",
    relationship: "Cashew farmgate network and container export.",
  },
  {
    wordmark: "Ghana",
    full: "Northern deployment region",
    since: "est 2024",
    relationship: "Second-life solar deployment and warehouse intake.",
  },
  {
    wordmark: "Togo",
    full: "Sokodé aggregation belt",
    since: "est 2025",
    relationship: "Soybean and maize aggregation.",
  },
  {
    wordmark: "Benin",
    full: "Parakou trading zone",
    since: "est 2025",
    relationship: "Cocoa shell by-products and regional trading.",
  },
];

export function PartnerWall() {
  return (
    <section className="border-b border-rule py-section">
      <Container>
        <SectionLabel
          left={`${partners.length} partners · since 2023`}
          center="Hover a cell · the wall pays attention back"
          right="Wall · quiet"
        />

        <h2 className="display text-display mt-10 max-w-3xl">
          Trusted by institutions <em>larger than ours.</em>
        </h2>

        <ul className="attentive-wall mt-14 grid grid-cols-2 gap-px border border-rule bg-rule sm:grid-cols-3 lg:grid-cols-4">
          {partners.map((partner) => (
            <li
              key={partner.wordmark}
              tabIndex={0}
              className="focus-ring group relative flex min-h-40 flex-col justify-between bg-paper p-4 outline-none"
            >
              <span className="mono-label text-ink-faint">{partner.since}</span>

              <span className="display text-h3 mt-6 block text-ink">
                {partner.wordmark}
              </span>
              <span className="mono-label mt-1.5 block text-ink-faint">
                {partner.full}
              </span>

              {/* Relationship note rises over the cell on hover or focus */}
              <span className="pointer-events-none absolute inset-0 flex items-end bg-paper p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                <span>
                  <span className="mono-label block text-accent">
                    {partner.wordmark}
                  </span>
                  <span className="mt-2 block text-body-sm text-ink">
                    {partner.relationship}
                  </span>
                </span>
              </span>
            </li>
          ))}
        </ul>

        <p className="mono-label mt-6 text-ink-faint">
          Hover any cell to see the working relationship.
        </p>
      </Container>
    </section>
  );
}
