"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, prefersReducedMotion, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type FounderPortraitProps = {
  src: string;
  alt: string;
  /** Printed on the chip that floats above the plate. */
  stamp?: string;
  className?: string;
};

/** Degrees of rotation at the far edge of the plate. */
const MAX_TILT = 9;

/**
 * Portrait plate on a 3D parallax rig: the frame tilts toward the pointer, the
 * photograph inside counter-shifts for depth, and the whole plate drifts as the
 * section scrolls. Falls back to a plain framed photo without a fine pointer or
 * under prefers-reduced-motion.
 */
export function FounderPortrait({
  src,
  alt,
  stamp = "Dubai · 2026",
  className,
}: FounderPortraitProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const plateRef = useRef<HTMLDivElement>(null);
  const driftRef = useRef<HTMLDivElement>(null);
  const shiftRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const chipRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      const plate = plateRef.current;
      const drift = driftRef.current;
      const shift = shiftRef.current;
      const glare = glareRef.current;
      const chip = chipRef.current;
      if (!root || !plate || !drift || !shift || !glare || !chip) return;
      if (prefersReducedMotion()) return;

      // The photograph travels slower than its frame on scroll.
      gsap.fromTo(
        drift,
        { yPercent: -5 },
        {
          yPercent: 5,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );

      // Pointer tilt is a fine-pointer affordance only.
      if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        return;
      }

      const ease = "power3.out";
      const rotateX = gsap.quickTo(plate, "rotationX", { duration: 0.7, ease });
      const rotateY = gsap.quickTo(plate, "rotationY", { duration: 0.7, ease });
      const shiftX = gsap.quickTo(shift, "xPercent", { duration: 0.9, ease });
      const shiftY = gsap.quickTo(shift, "yPercent", { duration: 0.9, ease });
      const glareX = gsap.quickTo(glare, "xPercent", { duration: 0.6, ease });
      const glareY = gsap.quickTo(glare, "yPercent", { duration: 0.6, ease });
      const chipZ = gsap.quickTo(chip, "z", { duration: 0.7, ease });

      const onMove = (event: PointerEvent) => {
        const rect = root.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width - 0.5;
        const py = (event.clientY - rect.top) / rect.height - 0.5;

        rotateY(px * MAX_TILT * 2);
        rotateX(-py * MAX_TILT * 2);
        shiftX(-px * 6);
        shiftY(-py * 6);
        glareX(px * 70);
        glareY(py * 70);
        chipZ(34);
        gsap.to(glare, { opacity: 1, duration: 0.4, overwrite: "auto" });
      };

      const onLeave = () => {
        rotateX(0);
        rotateY(0);
        shiftX(0);
        shiftY(0);
        glareX(0);
        glareY(0);
        chipZ(0);
        gsap.to(glare, { opacity: 0, duration: 0.5, overwrite: "auto" });
      };

      root.addEventListener("pointermove", onMove);
      root.addEventListener("pointerleave", onLeave);

      return () => {
        root.removeEventListener("pointermove", onMove);
        root.removeEventListener("pointerleave", onLeave);
      };
    },
    { scope: rootRef },
  );

  return (
    <div ref={rootRef} className={cn("[perspective:1200px]", className)}>
      <div
        ref={plateRef}
        className="relative aspect-4/5 [transform-style:preserve-3d]"
      >
        {/* overflow-hidden lives inside the 3D context, never on it */}
        <div className="hatch absolute inset-0 overflow-hidden border border-rule bg-paper-invert">
          <div ref={driftRef} className="absolute inset-[-8%]">
            <div ref={shiftRef} className="absolute inset-0">
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 1024px) 70vw, 20rem"
                className="img-graded scale-[1.04] object-cover object-center"
              />
            </div>
          </div>

          <div
            ref={glareRef}
            aria-hidden
            className="pointer-events-none absolute inset-[-30%] opacity-0"
            style={{
              background:
                "radial-gradient(closest-side, rgba(255,255,255,0.18), transparent 72%)",
            }}
          />
        </div>

        <span
          ref={chipRef}
          className="mono-micro absolute bottom-3 left-3 border border-rule bg-paper px-2 py-1 text-ink"
        >
          {stamp}
        </span>
      </div>
    </div>
  );
}
