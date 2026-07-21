import Link from "next/link";
import { BracketLink } from "@/components/BracketLink";
import { Logo } from "@/components/Logo";
import { footerLinks, siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden px-4 pb-8 pt-8">
      <div
        className="glass-panel relative mx-auto w-full max-w-[var(--canvas-max)] py-16 shadow-[0_16px_48px_rgba(0,0,0,0.28)]"
        style={{ paddingInline: "var(--space-container-x)" }}
      >
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo size="lg" />
            <p className="prose-measure mt-6 text-body-sm text-ink-muted">
              {siteConfig.description}
            </p>
            <p className="mt-6 text-body-sm text-ink-muted/80">
              {siteConfig.address}
            </p>
          </div>

          <div className="flex flex-col gap-3 lg:col-span-7 lg:items-end">
            {footerLinks.map((link) => (
              <BracketLink key={link.href} href={link.href}>
                {link.label}
              </BracketLink>
            ))}
            <BracketLink href={siteConfig.social.linkedin.href} external>
              LinkedIn
            </BracketLink>
            <BracketLink href={siteConfig.social.youtube.href} external>
              YouTube
            </BracketLink>
          </div>
        </div>

        <div className="mt-16 border-t border-glass-border pt-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[0.75rem] tracking-[0.06em] text-ink-muted">
              Copyright ©{year} {siteConfig.name}
            </p>
            <p className="text-[0.75rem] tracking-[0.06em] text-ink-muted">
              <Link
                href={`mailto:${siteConfig.email}`}
                className="focus-ring rounded-sm hover:text-ink"
              >
                {siteConfig.email}
              </Link>
              {" · "}
              <a
                href={siteConfig.phoneHref}
                className="focus-ring rounded-sm hover:text-ink"
              >
                {siteConfig.phone}
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
