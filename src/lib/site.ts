export const siteConfig = {
  name: "Green PowerHouse",
  shortName: "GPH",
  url: "https://gph.energy",
  email: "info@gph.energy",
  phone: "+971 54 564 5640",
  phoneHref: "tel:+971545645640",
  address: "Dubai Silicon Oasis, DDP, Building A1, Dubai, United Arab Emirates",
  description:
    "Green PowerHouse is a premier financial market infrastructure company matching international investors with high-impact green hydrogen and renewable energy projects in the Global South.",
  social: {
    youtube: {
      label: "YouTube",
      handle: "@GreenPowerHouse-z5x",
      href: "https://www.youtube.com/@GreenPowerHouse-z5x",
    },
    linkedin: {
      label: "LinkedIn",
      handle: "GREEN POWERHOUSE",
      href: "https://www.linkedin.com/company/greenpowerhouse",
    },
  },
} as const;

export type NavLink = {
  href: string;
  label: string;
};

export type NavGroup = {
  label: string;
  children: NavLink[];
};

export type NavEntry = NavLink | NavGroup;

export function isNavGroup(item: NavEntry): item is NavGroup {
  return Array.isArray((item as NavGroup).children);
}

/** Flat page registry — footer sitemap, metadata */
export const sitePages: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/our-proposal", label: "Green Hydrogen" },
  { href: "/solar-panels", label: "Solar Panels" },
  { href: "/agriculture", label: "Agriculture" },
  { href: "/market-insights", label: "Market Insights" },
  { href: "/our-team", label: "Our Team" },
  { href: "/contact-us", label: "Contact" },
];

/** Primary nav — flat links + dropdown groups */
export const navGroups: NavEntry[] = [
  { href: "/", label: "Home" },
  {
    label: "About Us",
    children: [
      { href: "/our-proposal", label: "Our Proposal" },
      { href: "/market-insights", label: "Market Insights" },
      { href: "/our-team", label: "Our Team" },
    ],
  },
  {
    label: "Our Products",
    children: [
      { href: "/#terminal", label: "Hydrogen Terminal" },
      { href: "/solar-panels", label: "Solar" },
      { href: "/agriculture", label: "Agriculture" },
      { href: "/#plans", label: "Plans & Pricing" },
    ],
  },
  { href: "/contact-us", label: "Contact" },
];

export const footerLinks: NavLink[] = [
  { href: "/our-proposal", label: "Green Hydrogen" },
  { href: "/solar-panels", label: "Solar Panels" },
  { href: "/agriculture", label: "Agriculture" },
  { href: "/about", label: "About Us" },
  { href: "/market-insights", label: "Market Insights" },
  { href: "/our-team", label: "Our Team" },
  { href: "/contact-us", label: "Contact" },
];

export function getPageNavItem(pathname: string) {
  return sitePages.find((item) => item.href === pathname) ?? sitePages[0];
}
