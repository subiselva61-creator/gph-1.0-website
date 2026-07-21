export type TeamMember = {
  id: string;
  name: string;
  title: string;
  bio?: string;
  photoUrl?: string;
  linkedIn?: string;
  twitter?: string;
  group?: string;
};

export const ceoMember: TeamMember = {
  id: "stephan-pouyat",
  name: "Stephan Pouyat",
  title: "CEO of Green Powerhouse",
  bio: "Founder and chief executive guiding Green Powerhouse's vision across green hydrogen finance, circular solar, and sustainable development in the Global South.",
};

export const teamMembers: TeamMember[] = [
  {
    id: "subitchan-selva",
    name: "Subitchan Selva",
    title: "Head of Media Production",
    bio: "Leads visual storytelling and digital content for Green Powerhouse — shaping how we communicate our mission in green hydrogen, circular solar, and sustainable finance to investors and partners worldwide.",
  },
  {
    id: "sudip-chatterjee",
    name: "Sudip Chatterjee",
    title: "Lead for Capital Markets and Sustainable Development",
    bio: "Structures capital markets activity and sustainable finance pathways that connect international investors with high-impact renewable energy projects across emerging markets.",
    linkedIn: "https://www.linkedin.com/in/sudipchatterjeebelgium",
  },
  {
    id: "stephanie-lermusiaux",
    name: "Stephanie Lermusiaux",
    title: "Strategic Advisor to the Chairman",
    bio: "Provides strategic counsel to the chairman on governance, partnerships, and long-term positioning — helping align board-level decisions with Green Powerhouse's growth in green energy finance.",
  },
  {
    id: "izabela-trestka",
    name: "Izabela Trestka",
    title: "Acting CEO (Europe)",
    bio: "Professional in finance and renewable energy with leadership experience across European markets and sustainable investment.",
    linkedIn: "https://www.linkedin.com/in/izabela-trestka-rouch-43549884",
  },
  {
    id: "bernard-mulenda",
    name: "Bernard K. Mulenda",
    title: "Acting CEO (Africa)",
    bio: "Senior executive with over 23 years of experience in corporate leadership, strategy, and sustainable development across Africa.",
    twitter: "https://twitter.com/Bernardkmul",
  },
  {
    id: "michel-giannini",
    name: "Michel Giannini",
    title: "Acting Head of Operations (Europe)",
    bio: "Oversees day-to-day European operations — from panel sourcing and logistics to partner coordination — ensuring second-life solar deployments run efficiently and on schedule.",
  },
  {
    id: "eunice-liquiran",
    name: "Eunice Liquiran",
    title: "Executive Assistant",
    bio: "Executive assistant with experience in administrative management and organizational coordination, supporting operations and executive scheduling.",
  },
  {
    id: "laure-cangini",
    name: "Laure Cangini",
    title: "General Manager",
    bio: "Manages cross-functional operations and internal processes, keeping teams aligned on delivery timelines, partner commitments, and the day-to-day execution of Green Powerhouse programmes.",
  },
  {
    id: "alexis",
    name: "Alexis",
    title: "Team Member",
    bio: "Contributes to project delivery and partner support across Green Powerhouse initiatives, helping turn strategy into on-the-ground progress for communities and investors.",
  },
  {
    id: "suresh",
    name: "Suresh",
    title: "Team Member",
    bio: "Supports operational and technical workstreams across the organisation, assisting with project coordination and the reliable rollout of renewable energy solutions.",
  },
];
