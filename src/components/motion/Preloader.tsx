"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

/**
 * Load sequence mirroring valeran.eu:
 *   scroll-lock -> logo blur-in/out -> release scroll -> dispatch "gph:loaded"
 *   (nav slide-in + hero SplitText reveal listen for that signal).
 */
export function Preloader() {
  const rootRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const releasedRef = useRef(false);

  const release = () => {
    if (releasedRef.current) return;
    releasedRef.current = true;
    document.documentElement.classList.remove("is-loading");
    window.dispatchEvent(new Event("gph:loaded"));
  };

  // Hard failsafe — never leave the site stuck behind the preloader.
  useEffect(() => {
    const timer = window.setTimeout(() => {
      const root = rootRef.current;
      if (root) {
        root.style.display = "none";
      }
      release();
    }, 4000);
    return () => window.clearTimeout(timer);
  }, []);

  useGSAP(
    () => {
      const root = rootRef.current;
      const logo = logoRef.current;
      if (!root || !logo) return;

      if (prefersReducedMotion()) {
        gsap.set(root, { display: "none" });
        release();
        return;
      }

      document.documentElement.classList.add("is-loading");

      const tl = gsap.timeline();
      tl.fromTo(
        logo,
        { opacity: 0, filter: "blur(10px)", y: 8 },
        { opacity: 1, filter: "blur(0px)", y: 0, duration: 1.1, ease: "expo.out" },
        0.2,
      )
        .to(
          logo,
          {
            opacity: 0,
            filter: "blur(8px)",
            y: -10,
            duration: 0.9,
            ease: "expo.in",
          },
          "+=0.5",
        )
        .to(root, { autoAlpha: 0, duration: 0.5, ease: "power2.out" }, "-=0.2")
        .add(() => {
          gsap.set(root, { display: "none" });
          release();
        });
    },
    { scope: rootRef },
  );

  return (
    <div ref={rootRef} className="preloader">
      <div ref={logoRef} className="preloader__logo relative aspect-square w-20">
        <Image
          src="/logo.png"
          alt="Green PowerHouse"
          fill
          priority
          className="object-contain"
          sizes="88px"
        />
      </div>
    </div>
  );
}
