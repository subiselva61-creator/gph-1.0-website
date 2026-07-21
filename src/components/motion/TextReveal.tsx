"use client";

import { useRef } from "react";
import { gsap, useGSAP, SplitText, prefersReducedMotion } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type Tag = "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";

type TextRevealProps = {
  children: React.ReactNode;
  as?: Tag;
  className?: string;
  /** "scroll" reveals on scroll into view; "ready" waits for the preloader hand-off. */
  trigger?: "scroll" | "ready";
  delay?: number;
  stagger?: number;
  start?: string;
};

/**
 * SplitText line+char reveal, mirroring valeran.eu:
 *   gsap.from(chars, { yPercent: 110, opacity: 0, stagger: 0.012, ease: "expo.out" })
 */
export function TextReveal({
  children,
  as = "span",
  className,
  trigger = "scroll",
  delay = 0,
  stagger = 0.012,
  start = "top 85%",
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      if (prefersReducedMotion()) {
        gsap.set(el, { opacity: 1 });
        return;
      }

      let split: SplitText | null = null;
      let tween: gsap.core.Tween | null = null;

      const run = () => {
        split = new SplitText(el, {
          type: "lines,chars",
          linesClass: "split-mask",
        });

        gsap.set(el, { opacity: 1 });

        const fromVars: gsap.TweenVars = {
          yPercent: 110,
          opacity: 0,
          duration: 1.4,
          ease: "expo.out",
          stagger,
          delay,
        };

        if (trigger === "scroll") {
          fromVars.scrollTrigger = { trigger: el, start, once: true };
          tween = gsap.from(split.chars, fromVars);
        } else {
          // "ready" — play after the preloader signals (or immediately as fallback).
          gsap.set(split.chars, { yPercent: 110, opacity: 0 });
          const play = () => {
            tween = gsap.to(split!.chars, {
              yPercent: 0,
              opacity: 1,
              duration: 1.4,
              ease: "expo.out",
              stagger,
              delay,
            });
          };
          if (document.documentElement.classList.contains("is-loading")) {
            window.addEventListener("gph:loaded", play, { once: true });
          } else {
            play();
          }
        }
      };

      // Split after fonts settle so line breaks are accurate.
      gsap.set(el, { opacity: 0 });
      if (document.fonts?.status === "loaded") {
        run();
      } else {
        document.fonts?.ready.then(run);
      }

      return () => {
        tween?.kill();
        split?.revert();
      };
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
