"use client";

import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import ScrollFloat from "@/components/react-bits/ScrollFloat";
import ShinyText from "@/components/react-bits/ShinyText";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

type AdvisorCloseCTAProps = {
  label?: string;
  ctaLabel?: string;
  href?: string;
  className?: string;
  showShape?: boolean;
};

export function AdvisorCloseCTA({
  label = "Your advisor",
  ctaLabel = "Schedule a discussion",
  href = "/contact-us",
  className,
}: AdvisorCloseCTAProps) {
  return (
    <section className={cn("relative py-section", className)}>
      <Container className="relative text-center">
        <div className="glass-panel mx-auto max-w-2xl px-8 py-12">
          <Reveal as="div">
            <p className="text-eyebrow text-ink-muted">
              <ShinyText text={label} speed={2.5} className="text-eyebrow" />
            </p>
          </Reveal>
          <Link
            href={href}
            className="focus-ring group mt-6 inline-flex items-center gap-3 font-display text-h3 font-normal text-ink transition-colors hover:text-accent"
          >
            <ScrollFloat
              as="span"
              containerClassName="font-display text-h3 font-normal text-ink"
              textClassName="font-display text-h3 font-normal text-ink"
              stagger={0.025}
            >
              {ctaLabel}
            </ScrollFloat>
            <span
              aria-hidden
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-glass-border transition group-hover:border-accent group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
