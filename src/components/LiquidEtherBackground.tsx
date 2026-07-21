"use client";

import { Component, type ErrorInfo, type ReactNode, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

const LiquidEther = dynamic(
  () => import("@/components/react-bits/LiquidEther"),
  { ssr: false },
);

const etherColors = ["#27ffe3", "#0feb6e", "#97cfa3"];

class EtherErrorBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("[LiquidEther] failed to render", error, info);
  }

  render() {
    if (this.state.failed) return null;
    return this.props.children;
  }
}

/**
 * Fixed full-viewport backdrop. Fluid motion runs on the home page only;
 * other routes keep a quiet dark base so photo heroes stay clean.
 */
export function LiquidEtherBackground() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [motionOk, setMotionOk] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    setMotionOk(!reduce.matches);
    const onChange = () => setMotionOk(!reduce.matches);
    reduce.addEventListener("change", onChange);
    return () => reduce.removeEventListener("change", onChange);
  }, []);

  const showFluid = isHome && motionOk;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={{ backgroundColor: "#05080a" }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: isHome
            ? `
              radial-gradient(ellipse 80% 60% at 12% 88%, rgba(15, 235, 110, 0.07) 0%, transparent 55%),
              radial-gradient(ellipse 60% 45% at 88% 12%, rgba(39, 255, 227, 0.05) 0%, transparent 50%),
              #05080a
            `
            : "#05080a",
        }}
      />

      {isHome ? (
        <div className="ether-atmosphere absolute inset-0">
          <span className="ether-orb ether-orb--a" />
          <span className="ether-orb ether-orb--b" />
        </div>
      ) : null}

      {showFluid ? (
        <EtherErrorBoundary>
          <div className="absolute inset-0 opacity-55">
            <LiquidEther
              colors={etherColors}
              mouseForce={20}
              cursorSize={55}
              isViscous={false}
              viscous={30}
              iterationsViscous={32}
              iterationsPoisson={32}
              resolution={0.5}
              isBounce={false}
              autoDemo
              autoSpeed={0.5}
              autoIntensity={2.2}
              takeoverDuration={0.25}
              autoResumeDelay={1600}
              autoRampDuration={0.6}
              pauseAutoOnHover={false}
            />
          </div>
        </EtherErrorBoundary>
      ) : null}

      {isHome ? (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,8,10,0.55)_100%)]" />
      ) : null}
    </div>
  );
}
