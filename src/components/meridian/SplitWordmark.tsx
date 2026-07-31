"use client";

import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type SplitWordmarkProps = {
  text: string;
  className?: string;
};

/**
 * Oversized wordmark whose characters gather into place on scroll — each one
 * arrives from the right and below, staggered, so later letters trail behind.
 * Characters are split during render so the text is present without JS.
 */
export function SplitWordmark({ text, className }: SplitWordmarkProps) {
  const ref = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || prefersReducedMotion()) return;

      const chars = el.querySelectorAll<HTMLElement>("[data-char]");
      if (chars.length === 0) return;

      gsap.from(chars, {
        xPercent: 130,
        yPercent: 34,
        scale: 1.18,
        opacity: 0,
        transformOrigin: "left bottom",
        duration: 1.25,
        ease: "power3.out",
        stagger: 0.05,
        scrollTrigger: { trigger: el, start: "top 95%", once: true },
      });
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
            <span data-char className="inline-block">
              &nbsp;
            </span>
          )}
        </span>
      ))}
    </p>
  );
}
