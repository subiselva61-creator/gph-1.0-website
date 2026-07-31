import Link from "next/link";
import { SplitWordmark } from "@/components/meridian/SplitWordmark";
import { SubscribeField } from "@/components/meridian/SubscribeField";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";

const columns = [
  {
    heading: "product",
    links: [
      { href: "/our-proposal", label: "Green Hydrogen" },
      { href: "/solar-panels", label: "Solar Panels" },
      { href: "/agriculture", label: "Agriculture" },
    ],
  },
  {
    heading: "resources",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/market-insights", label: "Market Insights" },
      { href: "/our-team", label: "Our Team" },
    ],
  },
  {
    heading: "contact",
    links: [
      { href: "/contact-us", label: "Talk to an advisor" },
      { href: `mailto:${siteConfig.email}`, label: "Email us", external: true },
      { href: siteConfig.phoneHref, label: "Call us", external: true },
    ],
  },
];

const socials = [
  { href: siteConfig.social.linkedin.href, label: "LinkedIn" },
  { href: siteConfig.social.youtube.href, label: "YouTube" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-rule bg-paper">
      <Container>
        {/* Dispatch header strip */}
        <div className="flex flex-col gap-1.5 border-b border-rule py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
          <span className="mono-label flex items-center gap-2 text-ink">
            <span aria-hidden className="size-1 rounded-full bg-accent" />
            End of dispatch
          </span>
          <span className="mono-label text-ink-faint sm:text-center">
            Advisory, finance, and delivery in one house
          </span>
          <span className="mono-label text-ink-faint sm:text-right">2026.08</span>
        </div>

        <div className="pb-12 pt-[clamp(2.5rem,6vw,5rem)]">
          <SplitWordmark
            text="Green PowerHouse."
            className="whitespace-nowrap text-center text-[clamp(1.5rem,8.4vw,8.25rem)] leading-[0.86]"
          />

          <p className="mx-auto mt-10 max-w-md text-center text-body text-ink-muted">
            {siteConfig.description}
          </p>

          <div className="mt-10">
            <SubscribeField />
          </div>

          <div className="mt-16 grid gap-10 border-t border-rule pt-10 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.heading}>
                <h3 className="mono-label text-ink-faint">{column.heading}</h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      {"external" in link && link.external ? (
                        <a
                          href={link.href}
                          className="mono-label text-ink transition-colors hover:text-accent"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="mono-label text-ink transition-colors hover:text-accent"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-rule pt-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
            <p className="mono-label text-ink-faint">
              © {year} {siteConfig.name}
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mono-label text-ink-faint transition-colors hover:text-ink sm:text-center"
            >
              {siteConfig.email}
            </a>
            <div className="flex items-center gap-5 sm:justify-end">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mono-label text-ink-faint transition-colors hover:text-ink"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
