/**
 * Figures for the homepage console mockup.
 * Every number traces back to src/lib/agriculture/tables.ts — the 2026 plan.
 */

export const consoleWorkspace = {
  label: "gph · portfolio",
  plan: "Mandate",
  planDetail: "2026 · Q3",
  sidebar: [
    { icon: "◫", label: "Dashboard" },
    { icon: "⊞", label: "Projects" },
    { icon: "⊡", label: "Farmers" },
    { icon: "◇", label: "Reports" },
    { icon: "⚙", label: "Settings" },
  ],
  tabs: ["Overview", "Pipeline", "Commodities", "Warehouses", "Settings"],
};

export const consoleStats = [
  {
    label: "Trading volume",
    value: "$20.7M",
    delta: "+8% blended margin",
    positive: true,
  },
  {
    label: "Operating profit",
    value: "$1.66M",
    delta: "+58% return on capital",
    positive: true,
  },
  {
    label: "Tonnes handled",
    value: "2,150",
    delta: "across 4 commodities",
    positive: true,
  },
  {
    label: "Cost of capital",
    value: "$0.50M",
    delta: "−$1.16M net distributable",
    positive: false,
  },
];

/** Monthly revenue in USD millions — monthlyCashFlow totals. */
export const consoleRevenue = [
  { month: "Jan", value: 1.1 },
  { month: "Feb", value: 1.42 },
  { month: "Mar", value: 1.65 },
  { month: "Apr", value: 1.75 },
  { month: "May", value: 1.9 },
  { month: "Jun", value: 1.9 },
  { month: "Jul", value: 1.9 },
  { month: "Aug", value: 2.1 },
  { month: "Sep", value: 2.4 },
  { month: "Oct", value: 2.4 },
  { month: "Nov", value: 2.4 },
  { month: "Dec", value: 1.78 },
];

export const consoleIntake = [
  {
    initials: "BW",
    name: "Bouaké Warehouse",
    detail: "cashew · 20 t",
    amount: "+$31,000",
  },
  {
    initials: "KD",
    name: "Korhogo Depot",
    detail: "soybeans · 18 t",
    amount: "+$24,800",
  },
  {
    initials: "SH",
    name: "Sokodé Hub",
    detail: "maize · 22 t",
    amount: "+$16,500",
  },
  {
    initials: "PS",
    name: "Parakou Store",
    detail: "cocoa shell · 12 t",
    amount: "+$9,400",
  },
  {
    initials: "TD",
    name: "Tamale Depot",
    detail: "cashew · 20 t",
    amount: "+$31,000",
  },
];

export const consoleRegions = [
  { name: "Côte d'Ivoire", share: 42 },
  { name: "Ghana", share: 18 },
  { name: "Togo", share: 14 },
  { name: "Benin", share: 11 },
  { name: "Burkina Faso", share: 8 },
  { name: "Other", share: 7 },
];

export const consoleCommodities = [
  { name: "Cashew", tonnes: "1,000", containers: "50", margin: "8–10%" },
  { name: "Soybeans", tonnes: "600", containers: "30", margin: "7–9%" },
  { name: "Maize", tonnes: "400", containers: "20", margin: "6–8%" },
  { name: "Cocoa shell", tonnes: "150", containers: "8", margin: "10–15%" },
  { name: "Kernel · processed", tonnes: "240", containers: "12", margin: "15–20%" },
];

export const consoleTransactions = [
  {
    ref: "GPH-001",
    buyer: "Rotterdam Trader",
    status: "Cleared",
    terms: "Letter of credit",
    amount: "$31,000",
    date: "2026-01-15",
  },
  {
    ref: "GPH-002",
    buyer: "Hamburg Processor",
    status: "In transit",
    terms: "Cash against docs",
    amount: "$24,800",
    date: "2026-01-14",
  },
  {
    ref: "GPH-003",
    buyer: "Accra Mill",
    status: "Cleared",
    terms: "Bank transfer",
    amount: "$16,500",
    date: "2026-01-13",
  },
  {
    ref: "GPH-004",
    buyer: "Lomé Wholesaler",
    status: "Held",
    terms: "Cash against docs",
    amount: "$9,400",
    date: "2026-01-12",
  },
  {
    ref: "GPH-005",
    buyer: "Antwerp Kernel Co.",
    status: "Cleared",
    terms: "Letter of credit",
    amount: "$41,600",
    date: "2026-01-11",
  },
  {
    ref: "GPH-006",
    buyer: "Marseille Importer",
    status: "Cleared",
    terms: "Bank transfer",
    amount: "$28,500",
    date: "2026-01-10",
  },
  {
    ref: "GPH-007",
    buyer: "Abidjan Crusher",
    status: "In transit",
    terms: "Letter of credit",
    amount: "$19,200",
    date: "2026-01-09",
  },
  {
    ref: "GPH-008",
    buyer: "Casablanca Feed",
    status: "Cleared",
    terms: "Bank transfer",
    amount: "$22,400",
    date: "2026-01-08",
  },
];

export const consoleActivity = [
  {
    initials: "BW",
    text: "Bouaké warehouse cleared 20 t intake",
    time: "2m ago",
  },
  {
    initials: "GP",
    text: 'Container GPH-4412 sailed from Abidjan',
    time: "8m ago",
  },
  {
    initials: "KC",
    text: "Korhogo cooperative onboarded 34 farmers",
    time: "14m ago",
  },
  {
    initials: "TA",
    text: "Solar array commissioned · Tamale",
    time: "22m ago",
  },
  {
    initials: "TR",
    text: "Traceability batch signed · lot 0912",
    time: "31m ago",
  },
  {
    initials: "MD",
    text: "Q3 mandate drawdown approved",
    time: "45m ago",
  },
];

/** Realised margin by weekday, as a share of the 8% target. */
export const consoleMargin = [62, 74, 58, 81, 92, 46, 70];
