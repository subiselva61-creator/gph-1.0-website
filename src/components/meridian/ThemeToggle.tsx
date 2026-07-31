"use client";

import { cn } from "@/lib/utils";

export const THEME_STORAGE_KEY = "gph-theme";

/** Runs before paint so the stored theme is applied without a flash. */
export const themeInitScript = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t!=="dark"&&t!=="light"){t="light"}document.documentElement.setAttribute("data-theme",t)}catch(e){document.documentElement.setAttribute("data-theme","light")}})();`;

/**
 * Both icons are rendered and CSS reveals the right one from the `data-theme`
 * attribute, so the button holds no state and cannot mismatch on hydration.
 */
export function ThemeToggle({ className }: { className?: string }) {
  function toggle() {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Storage unavailable — the toggle still works for this session.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      className={cn(
        "focus-ring inline-flex size-8 items-center justify-center border border-rule text-ink transition-colors hover:border-rule-strong hover:bg-paper-alt",
        className,
      )}
    >
      <span aria-hidden className="theme-icon-light">
        <SunIcon />
      </span>
      <span aria-hidden className="theme-icon-dark">
        <MoonIcon />
      </span>
    </button>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="size-4">
      <circle cx="8" cy="8" r="3.1" stroke="currentColor" strokeWidth="1.1" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <line
          key={deg}
          x1="8"
          y1="1.4"
          x2="8"
          y2="3"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinecap="round"
          transform={`rotate(${deg} 8 8)`}
        />
      ))}
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="size-4">
      <path
        d="M13 9.8A5.6 5.6 0 0 1 6.2 3a5.6 5.6 0 1 0 6.8 6.8Z"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
    </svg>
  );
}
