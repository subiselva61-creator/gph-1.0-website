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

type BookStickyBuyProps = {
  /** Element id of the primary BuyBox — sticky bar hides while this is in view. */
  observeId?: string;
  initialRegion?: BookRegionCode;
};

/**
 * Mobile-only sticky buy bar on /book. Hidden while the main BuyBox is visible.
 */
export function BookStickyBuy({
  observeId = "buy",
  initialRegion = DEFAULT_REGION_CODE,
}: BookStickyBuyProps) {
  const [visible, setVisible] = useState(false);
  const [regionCode, setRegionCode] = useState<BookRegionCode>(initialRegion);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY_BOOK_REGION);
      if (stored && isBookRegionCode(stored)) {
        setRegionCode(stored);
      } else {
        setRegionCode(resolveRegionFromLocale(navigator.language));
      }
    } catch {
      setRegionCode(resolveRegionFromLocale(navigator.language));
    }
  }, []);

  useEffect(() => {
    const target = document.getElementById(observeId);
    if (!target || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry?.isIntersecting);
      },
      { root: null, threshold: 0.15 },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [observeId]);

  const region = getRegion(regionCode);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-rule bg-paper/95 p-3 backdrop-blur-sm md:hidden",
        "transition-transform duration-300 ease-out motion-reduce:transition-none",
        visible ? "translate-y-0" : "pointer-events-none translate-y-full",
      )}
      aria-hidden={!visible}
    >
      <a
        href={region.url}
        target="_blank"
        rel="noopener noreferrer sponsored"
        tabIndex={visible ? 0 : -1}
        onClick={() =>
          trackEvent("book_cta_click", {
            location: "book-sticky",
            region: region.code,
          })
        }
        className="btn-pill focus-ring flex h-11 w-full items-center justify-center px-6 text-[0.875rem]"
      >
        Buy the book — {book.title}
      </a>
    </div>
  );
}
