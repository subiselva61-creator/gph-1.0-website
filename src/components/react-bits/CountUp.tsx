"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface CountUpProps {
  to: number;
  from?: number;
  duration?: number;
  className?: string;
  separator?: string;
  suffix?: string;
  prefix?: string;
}

export default function CountUp({
  to,
  from = 0,
  duration = 1.6,
  className = "",
  separator = ",",
  suffix = "",
  prefix = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const proxy = useRef({ value: from });

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const format = (n: number) => {
        const rounded = Math.round(n);
        const formatted = separator
          ? rounded.toLocaleString("en-US")
          : String(rounded);
        return `${prefix}${formatted}${suffix}`;
      };

      el.textContent = format(from);

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        el.textContent = format(to);
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        proxy.current.value = from;
        gsap.to(proxy.current, {
          value: to,
          duration,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            once: true,
          },
          onUpdate: () => {
            el.textContent = format(proxy.current.value);
          },
        });
      });

      return () => mm.revert();
    },
    { dependencies: [to, from, duration, separator, suffix, prefix] },
  );

  return (
    <span ref={ref} className={cn("tabular-nums", className)} aria-label={`${prefix}${to}${suffix}`} />
  );
}
