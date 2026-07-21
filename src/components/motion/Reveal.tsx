"use client";

import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type Tag = "div" | "section" | "ul" | "li" | "figure" | "span";

type RevealProps = {
  children: React.ReactNode;
  as?: Tag;
  className?: string;
  /** When set, staggers the element's direct children instead of the element itself. */
  stagger?: number;
  y?: number;
  blur?: number;
  duration?: number;
  delay?: number;
  start?: string;
};

/**
 * Scroll reveal mirroring valeran.eu's directional-list reveal:
 *   opacity 0 -> 1, filter blur(8px) -> 0, y 10 -> 0, stagger 0.18, power3.out
 */
export function Reveal({
  children,
  as = "div",
  className,
  stagger,
  y = 12,
  blur = 8,
  duration = 1.2,
  delay = 0,
  start = "top 80%",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      if (prefersReducedMotion()) return;

      const targets =
        stagger !== undefined ? Array.from(el.children) : el;

      gsap.from(targets as gsap.TweenTarget, {
        opacity: 0,
        filter: `blur(${blur}px)`,
        y,
        duration,
        delay,
        ease: "power3.out",
        stagger: stagger ?? 0,
        scrollTrigger: { trigger: el, start, once: true },
      });
    },
    { scope: ref },
  );

  const Tag = as as React.ElementType;
  return (
    <Tag ref={ref} className={cn(className)}>
      {children}
    </Tag>
  );
}
