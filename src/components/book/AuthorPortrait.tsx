"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { book } from "@/lib/book";
import { gsap, prefersReducedMotion, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type AuthorPortraitProps = {
  src?: string;
  className?: string;
};

const MAX_TILT = 6;

/**
 * Author cutout plate — fixed charcoal ground, soft bottom dissolve into the
 * hatch, pointer tilt + scroll drift. Still under prefers-reduced-motion.
 */
export function AuthorPortrait({
  src = book.authorSrc,
  className,
}: AuthorPortraitProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const plateRef = useRef<HTMLDivElement>(null);
  const subjectRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useGSAP(
    () => {
      const root = rootRef.current;
      const plate = plateRef.current;
      const subject = subjectRef.current;
      const glare = glareRef.current;
      const glow = glowRef.current;
      if (!root || !plate || !subject || !glare || !glow) return;
      if (prefersReducedMotion()) return;

      gsap.fromTo(
        plate,
        { y: 22, opacity: 0.55 },
        {
          y: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top 88%",
            end: "top 42%",
            scrub: true,
          },
        },
      );

      gsap.fromTo(
        subject,
        { yPercent: 2.5 },
        {
          yPercent: -1.5,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );

      gsap.fromTo(
        glow,
        { opacity: 0.28, scale: 0.94 },
        {
          opacity: 0.55,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top 80%",
            end: "center center",
            scrub: true,
          },
        },
      );

      if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        return;
      }

      const ease = "power3.out";
      const rotateX = gsap.quickTo(plate, "rotationX", { duration: 0.7, ease });
      const rotateY = gsap.quickTo(plate, "rotationY", { duration: 0.7, ease });
      const shiftX = gsap.quickTo(subject, "xPercent", { duration: 0.9, ease });
      const shiftY = gsap.quickTo(subject, "yPercent", { duration: 0.9, ease });
      const glareX = gsap.quickTo(glare, "xPercent", { duration: 0.6, ease });
      const glareY = gsap.quickTo(glare, "yPercent", { duration: 0.6, ease });

      const onMove = (event: PointerEvent) => {
        const rect = root.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width - 0.5;
        const py = (event.clientY - rect.top) / rect.height - 0.5;

        rotateY(px * MAX_TILT * 2);
        rotateX(-py * MAX_TILT * 2);
        shiftX(-px * 3);
        shiftY(-py * 3);
        glareX(px * 50);
        glareY(py * 50);
        gsap.to(glare, { opacity: 1, duration: 0.35, overwrite: "auto" });
        gsap.to(glow, { opacity: 0.7, duration: 0.4, overwrite: "auto" });
      };

      const onLeave = () => {
        rotateX(0);
        rotateY(0);
        shiftX(0);
        shiftY(0);
        glareX(0);
        glareY(0);
        gsap.to(glare, { opacity: 0, duration: 0.45, overwrite: "auto" });
        gsap.to(glow, { opacity: 0.45, duration: 0.5, overwrite: "auto" });
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
        className="relative aspect-square w-full [transform-style:preserve-3d]"
      >
        <div className="absolute inset-0 overflow-hidden border border-white/12 bg-[#0c0e0c]">
          {/* Quiet hatch — kept faint so it doesn't fight the cutout */}
          <div
            aria-hidden
            className="hatch pointer-events-none absolute inset-0 opacity-40"
          />

          {/* Soft accent bloom behind the torso */}
          <div
            ref={glowRef}
            aria-hidden
            className="pointer-events-none absolute inset-[-10%] opacity-40"
            style={{
              background:
                "radial-gradient(ellipse 58% 48% at 50% 58%, color-mix(in oklab, var(--accent) 42%, transparent), transparent 70%)",
            }}
          />

          {!failed ? (
            <div
              ref={subjectRef}
              className="absolute inset-0"
              style={{
                // Soft dissolve only in the last stretch — keeps the torso readable
                maskImage:
                  "linear-gradient(to bottom, #000 0%, #000 82%, rgba(0,0,0,0.55) 93%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, #000 0%, #000 82%, rgba(0,0,0,0.55) 93%, transparent 100%)",
              }}
            >
              <Image
                src={src}
                alt={`Portrait of ${book.author.name}`}
                fill
                sizes="(max-width: 768px) 85vw, 22rem"
                className="object-contain object-[center_90%] scale-[1.08]"
                onError={() => setFailed(true)}
              />
            </div>
          ) : (
            <div
              role="img"
              aria-label={`Portrait placeholder for ${book.author.name}`}
              className="absolute inset-0 flex flex-col justify-end bg-[#161a18] p-5"
            >
              <p className="mono-label text-white/40">Author · plate</p>
              <p className="display mt-3 text-h3 text-white">{book.author.name}</p>
            </div>
          )}

          {/* Light bottom vignette — seats the cutout without a black bar */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[22%]"
            style={{
              background:
                "linear-gradient(to top, rgba(12,14,12,0.75) 0%, rgba(12,14,12,0.25) 45%, transparent 100%)",
            }}
          />

          <div
            ref={glareRef}
            aria-hidden
            className="pointer-events-none absolute inset-[-30%] opacity-0"
            style={{
              background:
                "radial-gradient(closest-side, rgba(255,255,255,0.12), transparent 72%)",
            }}
          />
        </div>

        <span className="mono-micro absolute bottom-3 left-3 z-10 border border-rule bg-paper px-2 py-1 text-ink">
          Author · 2026
        </span>
      </div>
    </div>
  );
}
