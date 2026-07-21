"use client";

import { cn } from "@/lib/utils";

/**
 * Per-character text flip, mirroring valeran.eu's [data-button-animate-chars].
 * Each char stacks a duplicate below and slides up on hover of the parent
 * `.group`, with a staggered transition-delay. Relies on `.char-flip` CSS.
 */
export function CharFlipText({
  text,
  className,
  step = 0.018,
}: {
  text: string;
  className?: string;
  step?: number;
}) {
  const chars = [...text];

  return (
    <span className={cn("relative inline-flex", className)} aria-label={text}>
      {chars.map((char, i) => {
        const display = char === " " ? "\u00A0" : char;
        return (
          <span key={`${char}-${i}`} className="char-flip" aria-hidden>
            <span
              className="char-flip__inner group-hover:-translate-y-full"
              style={{ transitionDelay: `${i * step}s`, position: "relative" }}
            >
              <span>{display}</span>
              <span>{display}</span>
            </span>
          </span>
        );
      })}
    </span>
  );
}
