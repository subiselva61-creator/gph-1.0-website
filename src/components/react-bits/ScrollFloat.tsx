"use client";

import React, {
  useMemo,
  useRef,
  ReactNode,
  RefObject,
  createElement,
  type ElementType,
} from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { cn } from "@/lib/utils";

interface ScrollFloatProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement | null>;
  containerClassName?: string;
  textClassName?: string;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
  /** Outer wrapper element (default h2). */
  as?: ElementType;
}

const ScrollFloat: React.FC<ScrollFloatProps> = ({
  children,
  scrollContainerRef,
  containerClassName = "",
  textClassName = "",
  animationDuration = 1,
  ease = "power2.out",
  scrollStart = "top bottom-=10%",
  scrollEnd = "center center",
  stagger = 0.02,
  as: Tag = "h2",
}) => {
  const containerRef = useRef<HTMLElement>(null);

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    return text.split("").map((char, index) => (
      <span className="inline-block char" key={index}>
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  }, [children]);

  useGSAP(
    () => {
      const el = containerRef.current;
      if (!el || prefersReducedMotion()) return;
      if (typeof children !== "string") return;

      const scroller =
        scrollContainerRef?.current != null
          ? scrollContainerRef.current
          : window;

      const charElements = el.querySelectorAll(".char");

      gsap.fromTo(
        charElements,
        {
          willChange: "opacity, transform",
          opacity: 0,
          yPercent: 120,
          scaleY: 2.3,
          scaleX: 0.7,
          transformOrigin: "50% 0%",
        },
        {
          duration: animationDuration,
          ease,
          opacity: 1,
          yPercent: 0,
          scaleY: 1,
          scaleX: 1,
          stagger,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: scrollStart,
            end: scrollEnd,
            scrub: true,
          },
        },
      );
    },
    {
      scope: containerRef,
      dependencies: [
        scrollContainerRef,
        animationDuration,
        ease,
        scrollStart,
        scrollEnd,
        stagger,
        children,
      ],
    },
  );

  return createElement(
    Tag,
    {
      ref: containerRef,
      className: cn("overflow-hidden", containerClassName),
    },
    typeof children === "string" ? (
      <span className={cn("inline-block", textClassName)}>{splitText}</span>
    ) : (
      children
    ),
  );
};

export default ScrollFloat;
