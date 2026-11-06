"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { book } from "@/lib/book";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type Book3DProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
  priority?: boolean;
  /** Subtle hover float / pointer tilt on desktop. Default true. */
  interactive?: boolean;
};

/**
 * Intrinsic pixel size of public/book/cover.png (perspective mockup with alpha).
 * The asset already depicts a 3D book — we do not wrap it in a CSS cuboid.
 */
const INTRINSIC = { width: 568, height: 890 } as const;

const sizes = {
  sm: { className: "w-40", sizes: "10rem" },
  md: { className: "w-52 sm:w-60", sizes: "(max-width: 640px) 13rem, 15rem" },
  lg: { className: "w-64 sm:w-72 lg:w-80", sizes: "(max-width: 640px) 16rem, 20rem" },
} as const;

const COVER_ALT = "The Manifesto of Hope by Satya Brata Das, book cover";

/** Follows PNG alpha — rim + depth without a rectangular box. */
const COVER_DEPTH =
  "[filter:drop-shadow(0_0_0.6px_rgba(255,255,255,0.45))_drop-shadow(0_0_1.5px_rgba(255,255,255,0.18))_drop-shadow(10px_22px_28px_rgba(0,0,0,0.38))_drop-shadow(0_36px_48px_rgba(0,0,0,0.28))]";

/**
 * Phone / tablet (&lt; lg): plain static PNG.
 * Desktop (lg+): soft shadow + light interactive tilt via GSAP.
 */
export function Book3D({
  size = "md",
  className,
  priority,
  interactive = true,
}: Book3DProps) {
  const dims = sizes[size];

  return (
    <div className={cn("relative", className)}>
      <div className="lg:hidden">
        <StaticCover
          className={dims.className}
          sizes={dims.sizes}
          priority={priority}
        />
      </div>
      <div className="hidden lg:block">
        <InteractiveCover
          className={dims.className}
          sizes={dims.sizes}
          priority={priority}
          interactive={interactive}
        />
      </div>
    </div>
  );
}

function StaticCover({
  className,
  sizes: imgSizes,
  priority,
}: {
  className?: string;
  sizes: string;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={cn("relative mx-auto", className)}>
      {!failed ? (
        <Image
          src={book.coverSrc}
          alt={COVER_ALT}
          width={INTRINSIC.width}
          height={INTRINSIC.height}
          priority={priority}
          sizes={imgSizes}
          className={cn("h-auto w-full object-contain", COVER_DEPTH)}
          onError={() => setFailed(true)}
        />
      ) : (
        <CoverFallback />
      )}
    </div>
  );
}

function InteractiveCover({
  className,
  sizes: imgSizes,
  priority,
  interactive,
}: {
  className?: string;
  sizes: string;
  priority?: boolean;
  interactive: boolean;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);
  const reduceRef = useRef(false);
  const [failed, setFailed] = useState(false);

  const resetPose = useCallback((immediate = false) => {
    const stage = stageRef.current;
    const shadow = shadowRef.current;
    if (!stage || !shadow) return;

    const vars = {
      rotateY: 0,
      rotateX: 0,
      y: 0,
      scale: 1,
      transformPerspective: 900,
    };
    const shadowVars = { x: 0, scaleX: 1, opacity: 0.35 };

    if (immediate || reduceRef.current) {
      gsap.set(stage, vars);
      gsap.set(shadow, shadowVars);
      return;
    }

    gsap.to(stage, { ...vars, duration: 0.7, ease: "power3.out", overwrite: "auto" });
    gsap.to(shadow, {
      ...shadowVars,
      duration: 0.7,
      ease: "power3.out",
      overwrite: "auto",
    });
  }, []);

  const liftPose = useCallback(() => {
    if (reduceRef.current || !interactive) return;
    const stage = stageRef.current;
    const shadow = shadowRef.current;
    if (!stage || !shadow) return;

    gsap.to(stage, {
      y: -10,
      scale: 1.03,
      rotateY: -4,
      rotateX: 2,
      duration: 0.55,
      ease: "power3.out",
      overwrite: "auto",
    });
    gsap.to(shadow, {
      scaleX: 0.88,
      opacity: 0.22,
      duration: 0.55,
      ease: "power3.out",
      overwrite: "auto",
    });
  }, [interactive]);

  useEffect(() => {
    reduceRef.current = prefersReducedMotion();
    resetPose(true);
  }, [resetPose]);

  useEffect(() => {
    if (!interactive || reduceRef.current) return;
    const root = rootRef.current;
    const stage = stageRef.current;
    const shadow = shadowRef.current;
    if (!root || !stage || !shadow) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const onMove = (event: PointerEvent) => {
      const rect = root.getBoundingClientRect();
      const nx = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = ((event.clientY - rect.top) / rect.height) * 2 - 1;
      gsap.to(stage, {
        rotateY: nx * -8,
        rotateX: ny * 5,
        y: -8,
        scale: 1.03,
        duration: 0.35,
        ease: "power2.out",
        overwrite: "auto",
      });
      gsap.to(shadow, {
        x: nx * -10,
        scaleX: 0.86,
        opacity: 0.2,
        duration: 0.35,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    root.addEventListener("pointermove", onMove);
    return () => root.removeEventListener("pointermove", onMove);
  }, [interactive]);

  return (
    <div
      ref={rootRef}
      tabIndex={interactive ? 0 : undefined}
      role="img"
      aria-label={COVER_ALT}
      onMouseEnter={liftPose}
      onMouseLeave={() => resetPose()}
      onFocus={liftPose}
      onBlur={() => resetPose()}
      className={cn(
        "relative mx-auto select-none outline-none",
        interactive &&
          "cursor-default focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-paper",
        className,
      )}
      style={{ perspective: "900px" }}
    >
      <div
        ref={shadowRef}
        aria-hidden
        className="pointer-events-none absolute inset-x-[10%] bottom-[1%] h-[10%] rounded-[50%] bg-ink/55"
        style={{ filter: "blur(20px)", opacity: 0.4 }}
      />

      <div
        ref={stageRef}
        className="relative will-change-transform"
        style={{ transformStyle: "preserve-3d" }}
      >
        {!failed ? (
          <Image
            src={book.coverSrc}
            alt={COVER_ALT}
            width={INTRINSIC.width}
            height={INTRINSIC.height}
            priority={priority}
            sizes={imgSizes}
            className={cn("h-auto w-full object-contain", COVER_DEPTH)}
            onError={() => setFailed(true)}
          />
        ) : (
          <CoverFallback />
        )}
      </div>
    </div>
  );
}

function CoverFallback() {
  return (
    <div className="flex aspect-2/3 flex-col justify-between border border-rule bg-paper-raised p-5">
      <div>
        <p className="mono-label text-ink-faint">BOOK · 2026</p>
        <p className="display mt-4 text-[clamp(1rem,2vw,1.35rem)] leading-[1.15] text-ink">
          {book.title}
        </p>
        <p className="serif-em mt-3 text-body-sm text-ink-muted">
          {book.subtitle}
        </p>
      </div>
      <p className="mono-label text-accent">{book.author.name}</p>
    </div>
  );
}
