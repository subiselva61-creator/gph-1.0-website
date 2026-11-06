"use client";

import { useEffect, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import {
  book,
  DEFAULT_REGION_CODE,
  getRegion,
  isBookRegionCode,
  resolveRegionFromLocale,
  STORAGE_KEY_BOOK_REGION,
  type BookRegionCode,
} from "@/lib/book";
import { cn } from "@/lib/utils";

type BuyBoxProps = {
  variant?: "full" | "compact";
  /** Analytics location tag, e.g. "book-page", "home-recommended". */
  location: string;
  /** Server-derived region (Vercel geo), applied before locale if no stored choice. */
  initialRegion?: BookRegionCode;
  className?: string;
  id?: string;
};

function readStoredRegion(): BookRegionCode | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY_BOOK_REGION);
    if (raw && isBookRegionCode(raw)) return raw;
  } catch {
    /* private mode / blocked storage */
  }
  return null;
}

function writeStoredRegion(code: BookRegionCode) {
  try {
    window.localStorage.setItem(STORAGE_KEY_BOOK_REGION, code);
  } catch {
    /* ignore */
  }
}

export function BuyBox({
  variant = "full",
  location,
  initialRegion = DEFAULT_REGION_CODE,
  className,
  id,
}: BuyBoxProps) {
  const [regionCode, setRegionCode] = useState<BookRegionCode>(initialRegion);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = readStoredRegion();
    if (stored) {
      setRegionCode(stored);
    } else if (!initialRegion || initialRegion === DEFAULT_REGION_CODE) {
      const fromLocale = resolveRegionFromLocale(navigator.language);
      setRegionCode(fromLocale);
    }
    setReady(true);
  }, [initialRegion]);

  const region = getRegion(regionCode);
  const others = book.regions.filter((r) => r.code !== region.code);

  function selectRegion(next: BookRegionCode) {
    if (next === regionCode) return;
    trackEvent("book_region_change", {
      from: regionCode,
      to: next,
      location,
    });
    setRegionCode(next);
    writeStoredRegion(next);
  }

  function onBuyClick() {
    trackEvent("book_cta_click", { location, region: region.code });
  }

  return (
    <div
      id={id}
      className={cn(
        "border border-rule bg-paper",
        variant === "compact" ? "p-5 sm:p-6" : "p-6 sm:p-8",
        className,
      )}
      data-ready={ready ? "true" : "false"}
    >
      {variant === "full" && (
        <p className="mono-label text-ink-faint">Purchase · regional retailer</p>
      )}

      <div className={cn(variant === "full" ? "mt-5" : "mt-0")}>
        <label className="sr-only" htmlFor={`book-region-${location}`}>
          Choose your region
        </label>

        {/* Mobile: native select */}
        <select
          id={`book-region-${location}`}
          className={cn(
            "focus-ring mono-label w-full border border-rule bg-paper-raised px-4 py-3 text-ink md:hidden",
          )}
          value={region.code}
          onChange={(e) => {
            const value = e.target.value;
            if (isBookRegionCode(value)) selectRegion(value);
          }}
        >
          {book.regions.map((r) => (
            <option key={r.code} value={r.code}>
              {r.flag} {r.label}
              {r.currencyHint ? ` (${r.currencyHint})` : ""}
            </option>
          ))}
        </select>

        {/* Desktop: segmented control */}
        <div
          role="radiogroup"
          aria-label="Choose your region"
          className="hidden flex-wrap gap-px border border-rule bg-rule md:flex"
        >
          {book.regions.map((r) => {
            const selected = r.code === region.code;
            return (
              <button
                key={r.code}
                type="button"
                role="radio"
                aria-checked={selected}
                className={cn(
                  "focus-ring mono-label flex-1 px-3 py-2.5 transition-colors",
                  selected
                    ? "bg-paper text-ink"
                    : "bg-paper-alt text-ink-muted hover:bg-paper hover:text-ink",
                )}
                onClick={() => selectRegion(r.code)}
              >
                <span aria-hidden className="mr-1.5">
                  {r.flag}
                </span>
                {r.label}
              </button>
            );
          })}
        </div>
      </div>

      <a
        href={region.url}
        target="_blank"
        rel="noopener noreferrer sponsored"
        onClick={onBuyClick}
        className={cn(
          "btn-pill focus-ring mt-5 inline-flex h-12 w-full items-center justify-center px-7 text-[0.9375rem] sm:w-auto",
        )}
      >
        Buy now — {region.label}
      </a>

      <p className="mono-label mt-3 text-ink-faint">
        You’ll be taken to the retailer to complete your purchase.
      </p>

      <p className="mt-5 text-body-sm text-ink-muted">
        <span className="mono-label text-ink-faint">Also available in: </span>
        {others.map((r, i) => (
          <span key={r.code}>
            <a
              href={r.url}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="focus-ring link-underline text-ink"
              onClick={() => {
                trackEvent("book_cta_click", {
                  location: `${location}-also`,
                  region: r.code,
                });
              }}
            >
              {r.label}
            </a>
            {i < others.length - 1 ? (
              <span className="text-ink-faint"> · </span>
            ) : null}
          </span>
        ))}
      </p>
    </div>
  );
}
