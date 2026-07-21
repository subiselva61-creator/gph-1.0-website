"use client";

import { useEffect, useRef } from "react";

/**
 * Lerp-follow square cursor, mirroring valeran.eu:
 *   - eases toward the pointer (factor 0.85)
 *   - grows on links/buttons ([data-cursor])
 *   - enters "drag" mode with a DRAG label over [data-cursor="drag"] regions
 * Hidden on touch devices / reduced-motion (handled in CSS).
 */
export function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cur = ref.current;
    if (!cur) return;
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let cx = mx;
    let cy = my;
    let raf = 0;
    let activated = false;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (!activated) {
        activated = true;
        cur.classList.add("is-active");
        document.documentElement.classList.add("has-custom-cursor");
      }
    };

    const loop = () => {
      cx += (mx - cx) * 0.2;
      cy += (my - cy) * 0.2;
      cur.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    const enterHover = () => cur.classList.add("hovered");
    const leaveHover = () => cur.classList.remove("hovered");
    const enterDrag = () => cur.classList.add("drag-mode");
    const leaveDrag = () => cur.classList.remove("drag-mode");

    const bind = () => {
      document
        .querySelectorAll<HTMLElement>("a, button, [data-cursor]")
        .forEach((el) => {
          const isDrag = el.getAttribute("data-cursor") === "drag";
          el.addEventListener("mouseenter", isDrag ? enterDrag : enterHover);
          el.addEventListener("mouseleave", isDrag ? leaveDrag : leaveHover);
        });
    };

    bind();
    const observer = new MutationObserver(() => bind());
    observer.observe(document.body, { childList: true, subtree: true });

    document.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMove);
      observer.disconnect();
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <div ref={ref} className="cursor-square" aria-hidden>
      <span className="c-drag">Drag</span>
    </div>
  );
}
