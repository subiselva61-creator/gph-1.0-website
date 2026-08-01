"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, prefersReducedMotion, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type PortraitPlateProps = {
  /** Cut-out subject with a transparent surround — the sharp foreground layer. */
  src: string;
  alt: string;
  /** Same frame, uncut. Blurred and set behind the subject for depth. */
  backdropSrc?: string;
  /** Printed on the chip that floats above the plate. */
  stamp?: string;
  /** Rendered width at the largest breakpoint, for image sizing. */
  sizes?: string;
  className?: string;
};

/** Degrees of rotation at the far edge of the plate. */
const MAX_TILT = 9;

/**
 * Portrait plate built from two registered layers of the same photograph: a
 * blurred backdrop and the cut-out subject in front. The subject travels
 * further than the backdrop on both pointer tilt and scroll, so the gap between
 * them reads as depth. Degrades to a still framed photo without a fine pointer
 * or under prefers-reduced-motion.
 */
export function PortraitPlate({
  src,
  alt,
  backdropSrc,
  stamp = "Dubai · 2026",
  sizes = "(max-width: 1024px) 70vw, 20rem",
  className,
}: PortraitPlateProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const plateRef = useRef<HTMLDivElement>(null);
  const backDriftRef = useRef<HTMLDivElement>(null);
  const backShiftRef = useRef<HTMLDivElement>(null);
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

      const backDrift = backDriftRef.current;
      const backShift = backShiftRef.current;

      // On scroll the subject rises faster than the ground behind it.
      const scrollTrigger = {
        trigger: root,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      } as const;

      gsap.fromTo(
        drift,
        { yPercent: -6 },
        { yPercent: 6, ease: "none", scrollTrigger },
      );

      if (backDrift) {
        gsap.fromTo(
          backDrift,
          { yPercent: -2.5 },
          { yPercent: 2.5, ease: "none", scrollTrigger },
        );
      }

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

      const backX = backShift
        ? gsap.quickTo(backShift, "xPercent", { duration: 1.1, ease })
        : null;
      const backY = backShift
        ? gsap.quickTo(backShift, "yPercent", { duration: 1.1, ease })
        : null;

      const onMove = (event: PointerEvent) => {
        const rect = root.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width - 0.5;
        const py = (event.clientY - rect.top) / rect.height - 0.5;

        rotateY(px * MAX_TILT * 2);
        rotateX(-py * MAX_TILT * 2);
        // Subject leads, backdrop lags — the separation is the depth cue.
        shiftX(-px * 7);
        shiftY(-py * 7);
        backX?.(-px * 2.5);
        backY?.(-py * 2.5);
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
        backX?.(0);
        backY?.(0);
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
          {backdropSrc && (
            <>
              {/* Oversized so the blur never bleeds a soft edge into the frame */}
              <div ref={backDriftRef} className="absolute inset-[-14%]">
                <div ref={backShiftRef} className="absolute inset-0">
                  <Image
                    src={backdropSrc}
                    alt=""
                    aria-hidden
                    fill
                    sizes={sizes}
                    className="scale-[0.98] object-cover object-center blur-[9px] saturate-[0.9]"
                  />
                </div>
              </div>
              {/* Scrim: settles the backdrop so the sharp subject reads first */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-paper-invert/40"
              />
            </>
          )}

          <div ref={driftRef} className="absolute inset-[-8%]">
            <div ref={shiftRef} className="absolute inset-0">
              <Image
                src={src}
                alt={alt}
                fill
                sizes={sizes}
                className="img-graded scale-[1.10] object-cover object-center"
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
