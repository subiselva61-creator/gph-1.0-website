/**
 * The Manifesto of Hope — recommended reading config.
 * Buy links live here only; never hardcode retailer URLs in components.
 *
 * TODO: Optionally supply /public/book/back.jpg and /public/book/spine.jpg for Book3D.
 * TODO: Optionally fill price, isbn, publisher, pages when confirmed.
 * TODO: Confirm each bit.ly short link resolves to the intended retailer.
 */

export type BookRegionCode = "CA" | "US" | "IN" | "UK" | "AU" | "EU";

export type BookRegion = {
  code: BookRegionCode;
  label: string;
  flag: string;
  url: string;
  currencyHint?: string;
};

export type BookTheme = {
  id: string;
  title: string;
  body: string;
};

export type BookConfig = {
  title: string;
  subtitle: string;
  pitch: string;
  ctaLine: string;
  coreQuestion: string;
  coverSrc: string;
  authorSrc: string;
  author: {
    name: string;
    bio: string;
    linkedin: string;
    roles: string[];
  };
  themes: BookTheme[];
  regions: BookRegion[];
  /** Optional retail metadata — rendered only when filled. */
  price?: string;
  isbn?: string;
  publisher?: string;
  pages?: number;
};

export const DEFAULT_REGION_CODE: BookRegionCode = "US";

export const STORAGE_KEY_BOOK_REGION = "gph-book-region";

export const book: BookConfig = {
  title: "The Manifesto of Hope",
  subtitle: "A New Social Contract for Our Human Family",
  pitch:
    "Move beyond sustainability pledges and work towards meaningful, lasting change.",
  ctaLine: "Begin the conversation on what we can do for our planet.",
  coreQuestion:
    "How can we build a sustainable and equitable future amid the growing challenges of climate change?",
  // Front face for Book3D / BookCover. PNG is a perspective mockup used as the front plate.
  coverSrc: "/book/cover.png",
  authorSrc: "/book/author-satya-v3.png",
  author: {
    name: "Satya Brata Das",
    bio: "Author, journalist and global sustainability expert.",
    linkedin: "https://www.linkedin.com/in/satya-brata-das-853b4212/",
    roles: [
      "Chair of the Energy Transition Committee under IEEE Standards Association’s Planet Positive 2030 initiative",
      "Chair of its Working Group on Environmental Liability",
    ],
  },
  themes: [
    {
      id: "climate-energy",
      title: "Climate action & energy transition",
      body: "A clear-eyed look at climate change and the shift toward renewable energy as the foundation of a fairer future.",
    },
    {
      id: "tech-engineering",
      title: "Technology & engineering",
      body: "How technological innovation and the role of engineering can turn sustainability pledges into lasting change.",
    },
    {
      id: "policy-citizens",
      title: "Policy & citizen leadership",
      body: "The shared work of policy and citizen leadership in building a greener, fairer, more resilient world.",
    },
    {
      id: "global-south",
      title: "The Global South",
      body: "Particular attention to emerging markets — where equity, resilience and climate action must advance together.",
    },
  ],
  regions: [
    {
      code: "CA",
      label: "Canada",
      flag: "🇨🇦",
      url: "https://bit.ly/4x1S5pl",
      currencyHint: "CAD",
    },
    {
      code: "US",
      label: "USA",
      flag: "🇺🇸",
      url: "https://bit.ly/4g6fuP2",
      currencyHint: "USD",
    },
    {
      code: "IN",
      label: "India",
      flag: "🇮🇳",
      url: "https://bit.ly/3S330jj",
      currencyHint: "INR",
    },
    {
      code: "UK",
      label: "UK",
      flag: "🇬🇧",
      url: "https://bit.ly/45rLMzg",
      currencyHint: "GBP",
    },
    {
      code: "AU",
      label: "Australia",
      flag: "🇦🇺",
      url: "https://bit.ly/4xzyrke",
      currencyHint: "AUD",
    },
    {
      code: "EU",
      label: "Europe",
      flag: "🇪🇺",
      url: "https://bit.ly/4g67FsI",
      currencyHint: "EUR",
    },
  ],
};

const REGION_CODES = new Set<string>(book.regions.map((r) => r.code));

const COUNTRY_TO_REGION: Record<string, BookRegionCode> = {
  CA: "CA",
  US: "US",
  IN: "IN",
  GB: "UK",
  UK: "UK",
  AU: "AU",
  // Common European ISO codes → Europe retailer
  AT: "EU",
  BE: "EU",
  BG: "EU",
  HR: "EU",
  CY: "EU",
  CZ: "EU",
  DK: "EU",
  EE: "EU",
  FI: "EU",
  FR: "EU",
  DE: "EU",
  GR: "EU",
  HU: "EU",
  IE: "EU",
  IT: "EU",
  LV: "EU",
  LT: "EU",
  LU: "EU",
  MT: "EU",
  NL: "EU",
  PL: "EU",
  PT: "EU",
  RO: "EU",
  SK: "EU",
  SI: "EU",
  ES: "EU",
  SE: "EU",
  CH: "EU",
  NO: "EU",
  IS: "EU",
};

export function getRegion(code: string | null | undefined): BookRegion {
  const match = book.regions.find((r) => r.code === code);
  return match ?? book.regions.find((r) => r.code === DEFAULT_REGION_CODE)!;
}

export function isBookRegionCode(value: string): value is BookRegionCode {
  return REGION_CODES.has(value);
}

/**
 * Client-only: BuyBox's preselected region (stored preference, else locale, else default).
 * Safe to call in effects / event handlers — not during SSR.
 */
export function resolveClientBookRegion(): BookRegionCode {
  if (typeof window === "undefined") return DEFAULT_REGION_CODE;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY_BOOK_REGION);
    if (raw && isBookRegionCode(raw)) return raw;
  } catch {
    /* private mode / blocked storage */
  }
  return resolveRegionFromLocale(navigator.language);
}

/** Map a browser locale (e.g. en-CA, fr-FR) to a book region. */
export function resolveRegionFromLocale(
  language: string | null | undefined,
): BookRegionCode {
  if (!language) return DEFAULT_REGION_CODE;
  const normalized = language.trim().replace("_", "-");
  const parts = normalized.split("-");
  const regionTag = (parts[1] ?? parts[0] ?? "").toUpperCase();

  if (regionTag === "CA" || normalized.toLowerCase().endsWith("-ca")) {
    return "CA";
  }
  if (
    regionTag === "US" ||
    normalized.toLowerCase() === "en-us" ||
    normalized.toLowerCase() === "en"
  ) {
    return "US";
  }
  if (regionTag === "IN" || normalized.toLowerCase().endsWith("-in")) {
    return "IN";
  }
  if (
    regionTag === "GB" ||
    regionTag === "UK" ||
    normalized.toLowerCase().endsWith("-gb")
  ) {
    return "UK";
  }
  if (regionTag === "AU" || normalized.toLowerCase().endsWith("-au")) {
    return "AU";
  }

  const fromCountry = COUNTRY_TO_REGION[regionTag];
  if (fromCountry) return fromCountry;

  return DEFAULT_REGION_CODE;
}

/** Map a Vercel / CDN country code (ISO 3166-1 alpha-2) to a book region. */
export function resolveRegionFromCountry(
  country: string | null | undefined,
): BookRegionCode {
  if (!country) return DEFAULT_REGION_CODE;
  const code = country.trim().toUpperCase();
  return COUNTRY_TO_REGION[code] ?? DEFAULT_REGION_CODE;
}

export function buildBookJsonLd(canonicalUrl: string) {
  const author = {
    "@type": "Person" as const,
    name: book.author.name,
    sameAs: book.author.linkedin,
  };

  const base: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: book.title,
    alternateName: book.subtitle,
    description: book.coreQuestion,
    inLanguage: "en",
    image: book.coverSrc.startsWith("http")
      ? book.coverSrc
      : new URL(book.coverSrc, canonicalUrl).toString(),
    url: canonicalUrl,
    author,
  };

  if (book.isbn) base.isbn = book.isbn;
  if (book.publisher) {
    base.publisher = { "@type": "Organization", name: book.publisher };
  }
  if (book.pages) base.numberOfPages = book.pages;
  if (book.price) {
    const defaultRegion = getRegion(DEFAULT_REGION_CODE);
    base.offers = {
      "@type": "Offer",
      url: defaultRegion.url,
      price: book.price,
      priceCurrency: defaultRegion.currencyHint ?? "USD",
      availability: "https://schema.org/InStock",
    };
  }

  return base;
}
