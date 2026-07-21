"use client";

import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

type AnimatedShapeProps = {
  variant?: "top" | "bottom";
  className?: string;
};

const PATHS = {
  top: {
    fill: "M0 120 C180 40 320 160 480 90 C640 20 780 140 1000 60 L1000 180 L0 180 Z",
    stroke:
      "M0 140 C220 70 380 150 560 100 C740 50 860 130 1000 85",
  },
  bottom: {
    fill: "M0 0 L1000 0 L1000 40 C820 120 680 20 520 90 C360 160 220 50 0 110 Z",
    stroke: "M0 90 C180 30 340 130 520 70 C700 10 860 100 1000 45",
  },
} as const;

/**
 * Decorative wave shape with a scroll-drawn stroke and a slow float,
 * echoing valeran.eu's animated abstract forms (their WebGL shape,
 * approximated here with lightweight SVG animation).
 */
export function AnimatedShape({ variant = "top", className }: AnimatedShapeProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const strokeRef = useRef<SVGPathElement>(null);
  const paths = PATHS[variant];

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const svg = svgRef.current;
      const stroke = strokeRef.current;
      if (!svg || !stroke) return;

      const len = stroke.getTotalLength();
      gsap.set(stroke, { strokeDasharray: len, strokeDashoffset: len });
      gsap.to(stroke, {
        strokeDashoffset: 0,
        duration: 1.8,
        ease: "power2.inOut",
        scrollTrigger: { trigger: svg, start: "top 90%", once: true },
      });

      gsap.to(svg, {
        y: variant === "top" ? 10 : -10,
        duration: 6,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    },
    { scope: svgRef },
  );

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 1000 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path d={paths.fill} fill="currentColor" opacity="0.14" />
      <path
        ref={strokeRef}
        d={paths.stroke}
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.35"
      />
    </svg>
  );
}
