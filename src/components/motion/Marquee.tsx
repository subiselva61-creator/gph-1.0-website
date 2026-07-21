"use client";

import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { cn } from "@/lib/utils";

/**
 * Seamless marquee (valeran.eu sector tags). Renders the content twice and
 * translates the track by -50% on a linear loop.
 */
export function Marquee({
  children,
  speed = 40,
  className,
}: {
  children: React.ReactNode;
  /** Seconds for one full loop. */
  speed?: number;
  className?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const track = trackRef.current;
      if (!track || prefersReducedMotion()) return;
      gsap.to(track, {
        xPercent: -50,
        ease: "none",
        duration: speed,
        repeat: -1,
      });
    },
    { scope: trackRef, dependencies: [speed] },
  );

  return (
    <div className={cn("overflow-hidden", className)}>
      <div ref={trackRef} className="marquee">
        <div className="marquee__group">{children}</div>
        <div className="marquee__group" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
