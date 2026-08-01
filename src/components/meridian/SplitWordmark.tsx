"use client";

import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type SplitWordmarkProps = {
  text: string;
  className?: string;
};

/**
 * Oversized wordmark whose characters scatter and gather on scroll — each one
 * waits at a random offset, rotation and scale, then converges into place.
 * Characters are split during render so the text is present without JS.
 * Scrolling back out reverses the gather and scatters them again.
 */
export function SplitWordmark({ text, className }: SplitWordmarkProps) {
  const ref = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || prefersReducedMotion()) return;

      const chars = gsap.utils.toArray<HTMLElement>("[data-char]", el);
      if (chars.length === 0) return;

      // Unit offsets, fixed per character so every replay lands identically.
      const scatter = chars.map(() => ({
        x: gsap.utils.random(-1.1, 1.1),
        y: gsap.utils.random(-0.8, 0.8),
        rotate: gsap.utils.random(-40, 40),
        scale: gsap.utils.random(0.6, 1.35),
      }));

      // Scale the scatter to the wordmark itself, not to each glyph's own box,
      // so a full-height "G" and a narrow "." travel the same distance. Read
      // live so a resize refresh rescales instead of using a stale value.
      const spread = () => Math.max(el.getBoundingClientRect().height, 40);

      // Pinned once so the pivot never drifts mid-flight on replay.
      gsap.set(chars, { transformOrigin: "50% 50%" });

      gsap.fromTo(
        chars,
        {
          x: (i: number) => scatter[i].x * spread(),
          y: (i: number) => scatter[i].y * spread(),
          rotate: (i: number) => scatter[i].rotate,
          scale: (i: number) => scatter[i].scale,
          opacity: 0,
        },
        {
          x: 0,
          y: 0,
          rotate: 0,
          scale: 1,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          // `amount` spreads the whole stagger over a fixed window, so the
          // gather takes the same time no matter how long the wordmark is.
          stagger: { amount: 0.55, from: "random" },
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            end: "bottom top",
            // enter / leave / enter-back / leave-back. `play` rather than
            // `restart` so grazing the trigger resumes instead of snapping
            // back to scattered.
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true,
          },
        },
      );
    },
    { scope: ref },
  );

  const words = text.split(" ");

  return (
    <p ref={ref} className={cn("display", className)}>
      <span className="sr-only">{text}</span>
      {words.map((word, w) => (
        <span key={w} className="inline-block whitespace-nowrap" aria-hidden>
          {Array.from(word).map((char, i) => (
            <span
              key={`${w}-${i}`}
              data-char
              className="inline-block will-change-transform"
            >
              {char}
            </span>
          ))}
          {w < words.length - 1 && (
            <span className="inline-block">&nbsp;</span>
          )}
        </span>
      ))}
    </p>
  );
}
