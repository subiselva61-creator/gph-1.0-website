"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import ScrollFloat from "@/components/react-bits/ScrollFloat";
import { Container } from "@/components/ui/Container";
import { caseStudies } from "@/lib/case-studies";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type CaseStudyCarouselProps = {
  title?: string;
  className?: string;
};

export function CaseStudyCarousel({
  title = "Impact in Practice",
  className,
}: CaseStudyCarouselProps) {
  const [index, setIndex] = useState(0);
  const total = caseStudies.length;
  const slide = caseStudies[index];

  const imageRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  // Clip-path circle reveal + copy fade on each slide change (valeran.eu testimonials).
  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const image = imageRef.current;
      const copy = copyRef.current;

      if (image) {
        gsap.fromTo(
          image,
          { clipPath: "circle(0% at 50% 50%)" },
          {
            clipPath: "circle(75% at 50% 50%)",
            duration: 1,
            ease: "power3.inOut",
          },
        );
      }
      if (copy) {
        gsap.fromTo(
          copy.children,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: "power3.out",
          },
        );
      }
    },
    { dependencies: [index] },
  );

  return (
    <section className={cn("relative py-section", className)}>
      <Container>
        <div className="flex items-end justify-between gap-8">
          <ScrollFloat
            as="h2"
            containerClassName="font-display text-h2 font-normal text-ink"
            textClassName="font-display text-h2 font-normal text-ink"
          >
            {title}
          </ScrollFloat>
          <div className="flex items-center gap-5">
            <p className="text-[0.875rem] tabular-nums tracking-[0.08em] text-ink-muted">
              {index + 1} / {total}
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous case study"
                className="glass focus-ring flex h-10 w-10 items-center justify-center rounded-full text-ink transition hover:border-accent hover:text-accent"
              >
                ←
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next case study"
                className="glass focus-ring flex h-10 w-10 items-center justify-center rounded-full text-ink transition hover:border-accent hover:text-accent"
              >
                →
              </button>
            </div>
          </div>
        </div>

        <div className="mt-14 grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <div
            ref={copyRef}
            className="glass-panel px-7 py-8 lg:col-span-6 lg:px-9 lg:py-10"
          >
            <h3 className="font-display text-h3 font-normal text-ink">
              {slide.title}
            </h3>
            <p className="mt-6 font-display text-body italic text-ink-muted">
              {slide.problem}
            </p>
            <p className="mt-4 font-display text-body italic text-ink">
              {slide.resolution}
            </p>
            <div className="mt-8 flex flex-wrap gap-6 text-body-sm text-ink-muted">
              <p>
                <span className="text-eyebrow text-[0.7rem] text-ink-muted">
                  Location
                </span>
                <br />
                {slide.location}
              </p>
              <p>
                <span className="text-eyebrow text-[0.7rem] text-ink-muted">
                  Sector
                </span>
                <br />
                {slide.sector}
              </p>
            </div>
            <blockquote className="mt-10 border-l border-glass-border pl-5">
              <p className="text-body-sm text-ink-muted">
                &ldquo;{slide.quote}&rdquo;
              </p>
              <footer className="mt-3 text-[0.8125rem] text-ink">
                {slide.attribution}
                <span className="text-ink-muted"> — {slide.role}</span>
              </footer>
            </blockquote>
          </div>

          <div
            ref={imageRef}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-glass-border lg:col-span-6"
          >
            <Image
              key={slide.id}
              src={slide.image}
              alt={slide.title}
              fill
              className="img-warm object-cover"
              sizes="(min-width: 1024px) 40vw, 90vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
