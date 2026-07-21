export type LedgerColumn = {
  key: string;
  label: string;
  align?: "left" | "right";
  numeric?: boolean;
};

export type LedgerRow = Record<string, string | number | boolean | undefined> & {
  highlight?: boolean;
};

export type LedgerTableData = {
  columns: LedgerColumn[];
  rows: LedgerRow[];
  note?: string;
  caption?: string;
  mobileMode?: "stack" | "scroll";
};

const twoCol = (
  left: string,
  right: string,
  leftNumeric = false,
  rightNumeric = true,
): LedgerColumn[] => [
  { key: "a", label: left, numeric: leftNumeric },
  { key: "b", label: right, align: "right", numeric: rightNumeric },
];

export const seasonalCalendar: LedgerTableData = {
  caption: "Seasonal Calendar",
  columns: twoCol("Commodity", "Season", false, false),
  rows: [
    { a: "Cashew", b: "January – June" },
    { a: "Soybeans", b: "July – November" },
    { a: "Maize", b: "August – December" },
    { a: "Cocoa shell & by-products", b: "Year-round" },
  ],
};

export const capitalDeployment: LedgerTableData = {
  caption: "Capital Deployment",
  columns: twoCol("Capital Allocation", "Amount"),
  rows: [
    { a: "Cashew trading working capital", b: "$1.75M" },
    { a: "Multi-commodity expansion", b: "$1.00M" },
    { a: "Total deployed capital", b: "$2.75M", highlight: true },
  ],
};

export const commodityPortfolio: LedgerTableData = {
  caption: "2026 Commodity Portfolio",
  columns: [
    { key: "commodity", label: "Commodity" },
    { key: "role", label: "Strategic Role" },
    { key: "margin", label: "Margin Range", align: "right", numeric: true },
  ],
  rows: [
    { commodity: "Cashew", role: "Core export product", margin: "8–12%" },
    {
      commodity: "Soybeans",
      role: "Regional trading + export",
      margin: "7–10%",
    },
    {
      commodity: "Maize",
      role: "Domestic and regional market",
      margin: "6–9%",
    },
    {
      commodity: "Cocoa shell",
      role: "Processing by-product",
      margin: "10–15%",
    },
  ],
};

export const revenueProfitability: LedgerTableData = {
  caption: "2026 Revenue & Profitability",
  columns: twoCol("Metric", "Value"),
  rows: [
    { a: "Annual trading volume", b: "~$20.7M" },
    { a: "Average trading margin", b: "~8%" },
    { a: "Operating profit", b: "~$1.65M" },
    { a: "Return on capital", b: "~60%" },
  ],
  note: "This performance exceeds the target of 54% profitability relative to deployed capital before cost of capital.",
};

export const costOfCapital: LedgerTableData = {
  caption: "Cost of Capital",
  columns: twoCol("Capital", "Annual Cost"),
  rows: [
    { a: "$1M @ 20%", b: "$200K" },
    { a: "$1M @ 30%", b: "$300K" },
    { a: "Total annual capital cost", b: "$500K", highlight: true },
  ],
};

export const netProfitAfterCapital: LedgerTableData = {
  caption: "Net Profit After Capital Cost",
  columns: twoCol("Metric", "Amount"),
  rows: [
    { a: "Operating profit", b: "$1.65M" },
    { a: "Capital cost", b: "$0.50M" },
    { a: "Net distributable profit", b: "$1.15M", highlight: true },
  ],
};

export const shareholder2028: LedgerTableData = {
  caption: "2028 Example Scenario",
  columns: twoCol("Category", "Amount"),
  rows: [
    { a: "Baseline profit pool", b: "$1,156,000" },
    { a: "Growth profit", b: "$1,844,000" },
  ],
  note: "Baseline distribution (5 partners): $231K each. Growth distribution (3 partners): $614K each.",
};

export const shareholderResult: LedgerTableData = {
  caption: "Result",
  columns: twoCol("Partner type", "Total income"),
  rows: [
    { a: "Growth partners", b: "~$845K" },
    { a: "Baseline partners", b: "~$231K" },
  ],
};

export const mediumTermScaling: LedgerTableData = {
  caption: "Medium-Term Scaling Potential",
  columns: [
    { key: "year", label: "Year", numeric: true },
    { key: "revenue", label: "Revenue", align: "right", numeric: true },
    { key: "profit", label: "Profit", align: "right", numeric: true },
  ],
  rows: [
    { year: "2026", revenue: "$20M", profit: "$1.6M" },
    { year: "2027", revenue: "$35M", profit: "$3M" },
    { year: "2028", revenue: "$50M", profit: "$5M" },
    { year: "2030", revenue: "$100M+", profit: "$10M+" },
  ],
};

export const profitComparisonByModel: LedgerTableData = {
  caption: "Profit Comparison by Model",
  columns: twoCol("Model", "Margin Potential"),
  rows: [
    { a: "Raw cashew export", b: "5–12%" },
    { a: "Kernel processing", b: "20–40%" },
    { a: "Branded retail", b: "40–60%" },
  ],
};

export const investmentPriorities2026: LedgerTableData = {
  caption: "Investment Priorities",
  columns: [
    { key: "category", label: "Category" },
    {
      key: "allocation",
      label: "Allocation (USD)",
      align: "right",
      numeric: true,
    },
    { key: "purpose", label: "Purpose" },
  ],
  rows: [
    {
      category: "Working Capital – Cashew",
      allocation: "$1,200,000",
      purpose: "Purchase raw cashew, soybeans, maize",
    },
    {
      category: "Human Resources",
      allocation: "$150,000",
      purpose: "Recruit 3–5 traders, QC, warehouse supervisors",
    },
    {
      category: "Warehouse Activation",
      allocation: "$100,000",
      purpose: "Activate 2–3 franchise warehouses",
    },
    {
      category: "Transport Leasing",
      allocation: "$100,000",
      purpose: "Short-term truck rental",
    },
    {
      category: "Total 2026 Capital Deployment",
      allocation: "$2,750,000",
      purpose: "",
      highlight: true,
    },
  ],
};

export const targetCommodityVolumes: LedgerTableData = {
  caption: "Target Commodity Volumes",
  columns: [
    { key: "commodity", label: "Commodity" },
    { key: "tonnes", label: "Tonnes", align: "right", numeric: true },
    { key: "revenue", label: "Revenue (USD)", align: "right", numeric: true },
    { key: "margin", label: "Target Margin", align: "right", numeric: true },
  ],
  rows: [
    {
      commodity: "Cashew",
      tonnes: "1,000",
      revenue: "$10,000,000",
      margin: "8–10%",
    },
    {
      commodity: "Soybeans",
      tonnes: "600",
      revenue: "$5,000,000",
      margin: "7–9%",
    },
    {
      commodity: "Maize",
      tonnes: "400",
      revenue: "$3,000,000",
      margin: "6–8%",
    },
    {
      commodity: "Cocoa shell",
      tonnes: "200",
      revenue: "$2,000,000",
      margin: "10–12%",
    },
    {
      commodity: "Total",
      tonnes: "2,200",
      revenue: "$20,000,000",
      margin: "~8% blended",
      highlight: true,
    },
  ],
};

export const expectedFinancials2026: LedgerTableData = {
  caption: "Expected Financials (2026)",
  columns: twoCol("Metric", "Value (USD)"),
  rows: [
    { a: "Revenue", b: "$20,000,000" },
    { a: "Blended Operating Margin", b: "8%" },
    { a: "Operating Profit", b: "$1,600,000" },
    { a: "Cost of Capital", b: "$500,000" },
    { a: "Net Profit", b: "$1,100,000" },
    { a: "Return on Capital (pre-capital cost)", b: "58%" },
  ],
};

export const monthlyCashFlow: LedgerTableData = {
  caption: "Monthly Cash Flow / Revenue Plan",
  mobileMode: "scroll",
  columns: [
    { key: "month", label: "Month" },
    { key: "cashew", label: "Cashew", align: "right", numeric: true },
    { key: "soybeans", label: "Soybeans", align: "right", numeric: true },
    { key: "maize", label: "Maize", align: "right", numeric: true },
    { key: "cocoa", label: "Cocoa Shell", align: "right", numeric: true },
    { key: "total", label: "Total Revenue", align: "right", numeric: true },
    { key: "margin", label: "Margin %", align: "right", numeric: true },
    { key: "profit", label: "Profit", align: "right", numeric: true },
  ],
  rows: [
    {
      month: "Jan",
      cashew: "1,000,000",
      soybeans: "–",
      maize: "–",
      cocoa: "100,000",
      total: "1,100,000",
      margin: "8%",
      profit: "88,000",
    },
    {
      month: "Feb",
      cashew: "1,300,000",
      soybeans: "–",
      maize: "–",
      cocoa: "120,000",
      total: "1,420,000",
      margin: "8%",
      profit: "113,600",
    },
    {
      month: "Mar",
      cashew: "1,500,000",
      soybeans: "–",
      maize: "–",
      cocoa: "150,000",
      total: "1,650,000",
      margin: "8%",
      profit: "132,000",
    },
    {
      month: "Apr",
      cashew: "1,600,000",
      soybeans: "–",
      maize: "–",
      cocoa: "150,000",
      total: "1,750,000",
      margin: "8%",
      profit: "140,000",
    },
    {
      month: "May",
      cashew: "1,700,000",
      soybeans: "–",
      maize: "–",
      cocoa: "200,000",
      total: "1,900,000",
      margin: "8%",
      profit: "152,000",
    },
    {
      month: "Jun",
      cashew: "1,500,000",
      soybeans: "200,000",
      maize: "–",
      cocoa: "200,000",
      total: "1,900,000",
      margin: "8%",
      profit: "152,000",
    },
    {
      month: "Jul",
      cashew: "800,000",
      soybeans: "600,000",
      maize: "300,000",
      cocoa: "200,000",
      total: "1,900,000",
      margin: "8%",
      profit: "152,000",
    },
    {
      month: "Aug",
      cashew: "400,000",
      soybeans: "900,000",
      maize: "600,000",
      cocoa: "200,000",
      total: "2,100,000",
      margin: "8%",
      profit: "168,000",
    },
    {
      month: "Sep",
      cashew: "200,000",
      soybeans: "1,200,000",
      maize: "800,000",
      cocoa: "200,000",
      total: "2,400,000",
      margin: "8%",
      profit: "192,000",
    },
    {
      month: "Oct",
      cashew: "–",
      soybeans: "1,300,000",
      maize: "900,000",
      cocoa: "200,000",
      total: "2,400,000",
      margin: "8%",
      profit: "192,000",
    },
    {
      month: "Nov",
      cashew: "–",
      soybeans: "1,200,000",
      maize: "1,000,000",
      cocoa: "200,000",
      total: "2,400,000",
      margin: "8%",
      profit: "192,000",
    },
    {
      month: "Dec",
      cashew: "–",
      soybeans: "800,000",
      maize: "800,000",
      cocoa: "180,000",
      total: "1,780,000",
      margin: "8%",
      profit: "142,400",
    },
  ],
  note: "Total 2026 Revenue: 20,700,000 USD. Total Operating Profit: 1,656,000 USD. After capital cost (~500K USD): Net distributable profit ~1,156,000 USD.",
};

export const processingInvestment: LedgerTableData = {
  caption: "Phase 3 — Processing Investment",
  columns: twoCol("Item", "Range"),
  rows: [
    { a: "Small processing unit", b: "$800k – $1.2M" },
    { a: "Employees required", b: "30–50 workers" },
    { a: "Annual operating cost", b: "$300k – $500k" },
  ],
};

export const financialForecast2728: LedgerTableData = {
  caption: "Financial Forecast 2027–2028",
  columns: [
    { key: "year", label: "Year", numeric: true },
    {
      key: "revenue",
      label: "Revenue (USD)",
      align: "right",
      numeric: true,
    },
    {
      key: "profit",
      label: "Net Profit (USD)",
      align: "right",
      numeric: true,
    },
  ],
  rows: [
    { year: "2027", revenue: "2M – 3M", profit: "300K – 500K" },
    { year: "2028", revenue: "4M – 6M", profit: "800K – 1.2M" },
  ],
};

export const costPerContainer: LedgerTableData = {
  caption: "Cost Per Container",
  columns: twoCol("Line Item", "Amount"),
  rows: [
    { a: "Purchase (Farmgate)", b: "$21,000" },
    { a: "Aggregation", b: "$300" },
    { a: "Transport", b: "$1,300" },
    { a: "Preparation", b: "$800" },
    { a: "Export compliance", b: "$1,600" },
    { a: "Port handling", b: "$1,200" },
    { a: "Freight", b: "$2,300" },
    { a: "Total cost", b: "$28,500", highlight: true },
  ],
  note: "to be monitored by Izabela",
};

export const containerRevenueProfit: LedgerTableData = {
  caption: "Revenue & Profit",
  columns: twoCol("Metric", "Amount"),
  rows: [
    { a: "Revenue (20 tons × $1,550)", b: "$31,000" },
    { a: "Total cost", b: "$28,500" },
    { a: "Profit per container", b: "$2,500" },
    { a: "Margin", b: "~8%" },
  ],
};

export const processingProfitModel: LedgerTableData = {
  caption: "Cashew Processing Profit Model",
  columns: twoCol("Metric", "Value"),
  rows: [
    { a: "Processing yield", b: "22–25% (avg 24%)" },
    { a: "Kernel price", b: "$6,500/ton ($6.50/kg)" },
    { a: "Revenue per ton raw nuts", b: "$1,560" },
    { a: "Raw nut cost", b: "$1,050" },
    { a: "Processing cost", b: "$300" },
    { a: "Total cost", b: "$1,350" },
    { a: "Profit per ton", b: "$210" },
    { a: "Margin", b: "15–20% (good factories: 25–30%)" },
  ],
};

export const cashFlowTimeline: LedgerTableData = {
  caption: "Cash Flow Timeline",
  columns: [
    { key: "month", label: "Month" },
    { key: "tons", label: "Purchase (tons)", align: "right", numeric: true },
    { key: "cash", label: "Cash Needed", align: "right", numeric: true },
    { key: "note", label: "Note" },
  ],
  rows: [
    {
      month: "Month 1",
      tons: "200",
      cash: "$210,000",
      note: "to be monitored by Raj – should be the double",
    },
    {
      month: "Month 2",
      tons: "300",
      cash: "$315,000",
      note: "to be monitored by Raj – should be the double",
    },
    {
      month: "Month 3",
      tons: "300",
      cash: "$315,000",
      note: "to be monitored by Raj – should be the double",
    },
    {
      month: "Month 4",
      tons: "200",
      cash: "$210,000",
      note: "to be monitored by Raj – should be the double",
    },
    {
      month: "Total seasonal working capital",
      tons: "",
      cash: "≈ $1.05M",
      note: "",
      highlight: true,
    },
  ],
  note: "Working Capital Requirement: We need approximately $1.2M – $1.4M liquidity. Those are way too low estimation – we need to reach 2500-3000 tons during that period - to be managed by Julius",
};

export const growthStages: LedgerTableData = {
  caption: "Growth Stages — How Big Traders Scale to $10M",
  columns: [
    { key: "stage", label: "Stage" },
    { key: "volume", label: "Volume", align: "right", numeric: true },
    { key: "revenue", label: "Revenue", align: "right", numeric: true },
    { key: "note", label: "Note" },
  ],
  rows: [
    {
      stage: "Stage 1 – Trading only",
      volume: "1,000 tons",
      revenue: "$1.5M",
      note: "not aggressive enough",
    },
    {
      stage: "Stage 2 – Regional sourcing",
      volume: "3,000 tons",
      revenue: "$4M–$5M",
      note: "good target for 2026",
    },
    {
      stage: "Stage 3 – Processing added",
      volume: "5,000 tons",
      revenue: "$8M–$10M",
      note: "",
    },
  ],
};

export const factoryInvestment: LedgerTableData = {
  caption: "Total Factory Investment",
  columns: twoCol("Component", "Cost"),
  rows: [
    { a: "Land", b: "$150k – $400k" },
    { a: "Buildings", b: "$350k – $600k" },
    { a: "Machinery", b: "$400k – $900k" },
    { a: "Installation", b: "$100k" },
    { a: "Utilities setup", b: "$50k" },
    { a: "Total", b: "$1.05M – $2.05M", highlight: true },
  ],
};

export const factoryOperatingCost: LedgerTableData = {
  caption: "Operating Cost Per Year",
  columns: twoCol("Item", "Cost"),
  rows: [
    { a: "Labor", b: "$200k – $350k" },
    { a: "Electricity", b: "$60k – $120k" },
    { a: "Maintenance", b: "$40k – $80k" },
    { a: "Packaging", b: "$70k – $120k" },
    { a: "Total", b: "$400k – $650k", highlight: true },
  ],
};

export const factoryRevenueExample: LedgerTableData = {
  caption: "Factory Revenue Example (4,000 ton capacity)",
  columns: twoCol("Metric", "Value"),
  rows: [
    { a: "Kernel output (24% yield)", b: "960 tons" },
    { a: "Kernel price", b: "$6,500/ton" },
    { a: "Revenue", b: "$6.24M" },
    { a: "Raw nut cost", b: "$4.2M" },
    { a: "Processing costs", b: "$500k" },
    { a: "Total cost", b: "$4.7M" },
    { a: "Gross profit", b: "$1.54M" },
  ],
};

export const farmersNeeded: LedgerTableData = {
  caption: "Farmers Needed for Scaling",
  columns: twoCol("Target Volume", "Farmers Needed"),
  rows: [
    { a: "1,000 tons", b: "2,500 farmers" },
    { a: "3,000 tons", b: "7,500 farmers" },
    { a: "5,000 tons", b: "12,500 farmers" },
  ],
};

export const ghanaHarvestCalendar: LedgerTableData = {
  caption: "Ghana Harvest Calendar",
  columns: twoCol("Commodity", "Season", false, false),
  rows: [
    { a: "Cashew", b: "January – June" },
    { a: "Soybeans", b: "September – November" },
    { a: "Maize", b: "June – August" },
    { a: "Cocoa shell", b: "Year-round (processing byproduct)" },
  ],
};

export const commodityMargins: LedgerTableData = {
  caption: "Commodity Margin Estimates",
  columns: twoCol("Commodity", "Margin"),
  rows: [
    { a: "Cashew trading", b: "5–12%" },
    { a: "Soybean trading", b: "6–10%" },
    { a: "Maize trading", b: "4–8%" },
    { a: "Cocoa shell export", b: "10–18%" },
  ],
};

export const multiCommodityRevenue: LedgerTableData = {
  caption: "Multi-Commodity Revenue Example",
  columns: [
    { key: "commodity", label: "Commodity" },
    { key: "volume", label: "Volume", align: "right", numeric: true },
    { key: "revenue", label: "Revenue", align: "right", numeric: true },
  ],
  rows: [
    { commodity: "Cashew", volume: "1,200 tons", revenue: "$1.8M" },
    { commodity: "Soybeans", volume: "2,000 tons", revenue: "$1.2M" },
    { commodity: "Maize", volume: "3,000 tons", revenue: "$900k" },
    { commodity: "Cocoa shell", volume: "4,000 tons", revenue: "$800k" },
    {
      commodity: "Total revenue",
      volume: "",
      revenue: "$4.7M",
      highlight: true,
    },
  ],
  note: "this should be our target – monitored by Izabela",
};

export const warehouseEconomics: LedgerTableData = {
  caption: "Warehouse Franchise Economics",
  columns: twoCol("Item", "Cost"),
  rows: [
    { a: "Construction/acquisition", b: "$40,000 – $120,000" },
    { a: "Equipment", b: "$10,000 – $25,000" },
    {
      a: "Total investment per warehouse",
      b: "$50,000 – $145,000",
      highlight: true,
    },
  ],
  note: "Supply capacity: 300–800 tons/year",
};

export const franchiseIncentives: LedgerTableData = {
  caption: "Franchise Operator Incentives",
  columns: twoCol("Metric", "Value"),
  rows: [
    { a: "Commission", b: "$15 – $30 per ton" },
    {
      a: "Example (500 tons/year)",
      b: "$7,500 – $15,000 annual operator income",
    },
  ],
};

export const farmerFinancingModel: LedgerTableData = {
  caption: "Example Financial Model",
  columns: twoCol("Metric", "Value"),
  rows: [
    { a: "Financing per farmer", b: "$100 – $250/season" },
    { a: "Example network", b: "2,500 farmers" },
    { a: "Total financing requirement", b: "$250,000 – $500,000/year" },
    { a: "Secures supply of", b: "~1,000 tons/year" },
  ],
};

export const softwareInvestment: LedgerTableData = {
  caption: "Estimated Software Development Investment",
  columns: [
    { key: "phase", label: "Phase" },
    { key: "features", label: "Features" },
    { key: "cost", label: "Cost", align: "right", numeric: true },
    { key: "timeline", label: "Timeline", align: "right", numeric: true },
  ],
  rows: [
    {
      phase: "Phase 1: MVP",
      features:
        "Farmer registration, inventory tracking, basic logistics, trading dashboard",
      cost: "$150,000 – $300,000",
      timeline: "4–6 months",
    },
    {
      phase: "Phase 2: Integrated Platform",
      features:
        "Mobile apps, digital payments, logistics marketplace, analytics",
      cost: "$300,000 – $600,000",
      timeline: "6–12 months",
    },
    {
      phase: "Phase 3: Full Marketplace",
      features:
        "Buyer interface, forecasting, automated logistics, digital financing",
      cost: "$500,000 – $1,200,000",
      timeline: "12–24 months",
    },
    {
      phase: "Total platform investment",
      features: "",
      cost: "$1M – $2M",
      timeline: "",
      highlight: true,
    },
  ],
};
