/**
 * The advisory and principal-investment profile of the house — the material
 * that sits above the three operating desks on the homepage.
 */

export const firmProfile = {
  eyebrow: "International strategic advisory & investment group",
  lead: "We advise and invest alongside a small number of governments, institutions and private clients on matters of strategic consequence. Our work speaks through outcomes, not disclosures.",
  mission:
    "To originate and accelerate transformational initiatives capable of creating long-term economic and investment value — combining strategic advisory with principal investment.",
  vision:
    "To be the discreet, trusted counsel institutions turn to at the moments that matter most — and a principal investor prepared to stand behind its own convictions.",
} as const;

export const principles = [
  { index: "01", name: "Independence" },
  { index: "02", name: "Integrity" },
  { index: "03", name: "Discretion" },
  { index: "04", name: "Long-term partnership" },
] as const;

export type StandingBlock = {
  kicker: string;
  title: string;
  body: string;
};

export const standingBlocks: StandingBlock[] = [
  {
    kicker: "Difference",
    title: "What makes us different",
    body: "We apply the same principles to our own businesses that we recommend to clients — we build, invest and execute, not just advise.",
  },
  {
    kicker: "Scope",
    title: "Our experience",
    body: "Corporate strategy, M&A, industrial development, financial market infrastructure, energy and organisational transformation.",
  },
  {
    kicker: "Method",
    title: "How we work",
    body: "Executive advisory, private capital and hands-on execution — engaged from strategic assessment through implementation.",
  },
  {
    kicker: "Standard",
    title: "Our principles",
    body: "Independence, integrity, discretion and long-term partnership, applied to our own ventures as to every client engagement.",
  },
];

export type Discipline = {
  /** Anchor target on the homepage. */
  id: string;
  index: string;
  tag: string;
  name: string;
  body: [string, string];
  quote: string;
  cite: string;
};

export const disciplines: Discipline[] = [
  {
    id: "corporate-strategy",
    index: "01",
    tag: "Advisory",
    name: "Corporate strategy",
    body: [
      "We advise where decisions carry consequence — helping boards, executive committees and sovereign institutions navigate complexity with clarity and conviction. Our counsel is sought at the moments that will define an institution's next decade, not its next quarter.",
      "Much of this work is never disclosed. It exists in closed rooms, at inflection points, where judgement matters more than process — and where the value of advice is measured by what it prevents as much as by what it achieves.",
    ],
    quote:
      "Their perspective changed the trajectory of a decision that would have taken us years to reach alone.",
    cite: "Chairman · European industrial group",
  },
  {
    id: "mergers-acquisitions",
    index: "02",
    tag: "Transactions",
    name: "Mergers & acquisitions",
    body: [
      "We identify, structure and execute transactions before they become visible to the market — often originating the opportunity itself rather than responding to a process already in motion.",
      "From first assessment through post-transaction integration, we remain present at every stage, protecting value at the points where it is most exposed and most easily lost.",
    ],
    quote:
      "They operated with a level of discretion and precision we rarely encounter in this market.",
    cite: "Managing partner · Private investment group",
  },
  {
    id: "private-capital",
    index: "03",
    tag: "Capital",
    name: "Private capital deployment",
    body: [
      "We do not simply recommend where capital should go — we deploy our own alongside our clients, sharing the risk, the timeline and the outcome. This is capital committed with conviction, in ventures we have chosen to build ourselves.",
      "It is a distinction few advisory firms are structured to offer, and one that shapes every recommendation we make: we do not advise on decisions we would not make with our own capital.",
    ],
    quote:
      "Few advisers are also willing to invest their own capital. That alignment changes the nature of the conversation entirely.",
    cite: "Founder · Family office",
  },
  {
    id: "industrial-transformation",
    index: "04",
    tag: "Execution",
    name: "Industrial transformation",
    body: [
      "We design and deliver transformation at scale, for organisations operating in complex, capital-intensive environments — where the cost of hesitation is measured in decades, not quarters.",
      "Our role continues long after the strategy is approved: through execution, resistance, and the slower, harder work of making change stick inside an institution.",
    ],
    quote: "They stayed engaged well beyond the point most advisers disappear.",
    cite: "Chief executive officer · Multinational industrial group",
  },
];

export const founder = {
  name: "Stephan Pouyat",
  role: "Founder & Chief Executive",
  body: [
    "Over more than three decades, Stephan Pouyat has built an international executive career spanning corporate strategy, business transformation, strategic acquisitions, infrastructure investment and private capital deployment.",
    "He develops businesses and deploys his own capital into long-term opportunities — an ownership perspective that shapes how the house advises, invests and builds.",
  ],
  stats: [
    { value: "30+", label: "Years of executive experience" },
    { value: "€3.2T", label: "In assets under custody led" },
    { value: "850+", label: "Professionals led across 50+ markets" },
  ],
  record: [
    "Led the strategic acquisition and integration of MFEX within Euroclear",
    "Created Global Reach — 12 new capital market links across Asia, the Middle East and Latin America",
    "Designed the Euroclear group-wide restructuring programme (2004–2005)",
  ],
  quote:
    "Real influence rarely needs to be visible. We measure our work by what it achieves — not by what it publicises.",
} as const;
