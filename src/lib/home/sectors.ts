export type Sector = {
  /** Anchor target on the homepage. */
  id: string;
  index: string;
  desk: string;
  name: string;
  status: string;
  /** False while the desk is still being built. */
  trading: boolean;
  headline: string;
  blurb: string;
  points: string[];
  /** Where the full programme lives. */
  href: string;
  hrefLabel: string;
};

export const sectors: Sector[] = [
  {
    id: "terminal",
    index: "01",
    desk: "Terminal",
    name: "Green hydrogen terminal",
    status: "In build",
    trading: false,
    headline: "Every plant, and every cheque behind it.",
    blurb:
      "A subscription terminal for the green hydrogen market: the plants, the capital, the trades, and the news, on one screen.",
    points: [
      "Plant and capital registers",
      "Live tracking and trade desk",
      "Plans from $250 a month",
    ],
    href: "/our-proposal",
    hrefLabel: "Green hydrogen programme",
  },
  {
    id: "solar",
    index: "02",
    desk: "Solar",
    name: "Second-life solar panels",
    status: "Trading",
    trading: true,
    headline: "Panels recovered in Europe, powering the Global South.",
    blurb:
      "European photovoltaic panels recovered, inspected, financed, and installed — at a fraction of new-system cost.",
    points: [
      "Up to 90% of original output",
      "Inspected and traced per panel",
      "Installed on the ground with ADA",
    ],
    href: "/solar-panels",
    hrefLabel: "Solar programme",
  },
  {
    id: "cashew",
    index: "03",
    desk: "Cashew",
    name: "Raw cashew nuts",
    status: "Trading",
    trading: true,
    headline: "Graded at the farmgate, sealed at the container.",
    blurb:
      "Raw cashew nuts aggregated across four West African origins, graded to spec, and shipped to European buyers.",
    points: [
      "Four origins · Jan–Jun season",
      "Outturn and moisture graded on intake",
      "20 t per container, fully traced",
    ],
    href: "/agriculture",
    hrefLabel: "Agriculture programme",
  },
];
