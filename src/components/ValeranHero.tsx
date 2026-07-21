"use client";

import Image from "next/image";
import { useRef } from "react";
import BlurText from "@/components/react-bits/BlurText";
import ShinyText from "@/components/react-bits/ShinyText";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type HeroCta = {
  href: string;
  label: string;
};

type ValeranHeroProps = {
  title: string;
  lines?: string[];
  subtitle?: string;
  badge?: string;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
  /** Optional dimmed atmosphere image; liquid ether remains the primary backdrop */
  imageSrc?: string;
  imageAlt?: string;
  compact?: boolean;
  className?: string;
};

export function ValeranHero({
  title,
  lines,
  subtitle,
  badge,
  primaryCta,
  secondaryCta,
  imageSrc,
  imageAlt = "",
  compact = false,
  className,
}: ValeranHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const image = imageRef.current;

      if (section && image && !prefersReducedMotion()) {
        gsap.to(image, {
          yPercent: 10,
          scale: 1.06,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    },
    { scope: sectionRef },
  );

  const centered = !compact;

  return (
    <section
      ref={sectionRef}
      className={cn(
        "relative overflow-hidden",
        compact ? "min-h-[70vh]" : "min-h-[100vh]",
        className,
      )}
    >
      {imageSrc ? (
        <div
          ref={imageRef}
          className="pointer-events-none absolute inset-0 will-change-transform"
        >
          {/* Opaque wash so global fluid/orbs never slash through photo heroes */}
          <div className="absolute inset-0 bg-background-solid" />
          <div className="absolute inset-0 opacity-45">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority
              className="img-warm object-cover"
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-background-solid/60 via-background-solid/35 to-background-solid" />
        </div>
      ) : null}

      <Container
        className={cn(
          "relative flex flex-col",
          centered
            ? "min-h-[100vh] items-center justify-center pb-20 pt-28 text-center"
            : "min-h-[70vh] justify-end pb-20 pt-32",
        )}
      >
        <div className={cn(centered ? "mx-auto max-w-4xl" : "max-w-3xl")}>
          {badge ? (
            <div
              className={cn(
                "mb-6 inline-flex items-center gap-2 rounded-full border border-glass-border bg-glass px-2 py-1 text-body-sm text-ink-muted backdrop-blur-md",
                centered && "mx-auto",
              )}
            >
              <span className="rounded-full bg-ink px-2.5 py-0.5 text-[0.65rem] font-semibold tracking-[0.12em] text-background-solid">
                NEW
              </span>
              <ShinyText
                text={badge}
                speed={2.5}
                className="text-body-sm"
              />
            </div>
          ) : null}

          <BlurText
            as="h1"
            text={title}
            trigger="ready"
            animateBy="words"
            direction="top"
            delay={80}
            stepDuration={0.4}
            className={cn(
              "font-display font-normal text-ink",
              compact ? "text-h1-compact" : "text-hero",
              centered && "justify-center",
            )}
          />

          {lines && lines.length > 0 ? (
            <div
              className={cn("mt-8 space-y-2", centered && "mx-auto max-w-2xl")}
            >
              {lines.map((line) => (
                <BlurText
                  key={line}
                  as="p"
                  text={line}
                  trigger="ready"
                  animateBy="words"
                  direction="bottom"
                  delay={60}
                  stepDuration={0.3}
                  className={cn(
                    "text-body text-ink-muted",
                    centered && "justify-center",
                  )}
                />
              ))}
            </div>
          ) : null}

          {subtitle && !lines ? (
            <BlurText
              as="p"
              text={subtitle}
              trigger="ready"
              animateBy="words"
              direction="bottom"
              delay={50}
              stepDuration={0.3}
              className={cn(
                "prose-measure mt-8 text-body text-ink-muted",
                centered && "mx-auto justify-center",
              )}
            />
          ) : null}

          {primaryCta || secondaryCta ? (
            <div
              className={cn(
                "mt-10 flex flex-wrap items-center gap-3",
                centered && "justify-center",
              )}
            >
              {primaryCta ? (
                <Button href={primaryCta.href} size="lg">
                  {primaryCta.label}
                </Button>
              ) : null}
              {secondaryCta ? (
                <Button href={secondaryCta.href} variant="secondary" size="lg">
                  {secondaryCta.label}
                </Button>
              ) : null}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
