"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import {
  book,
  getRegion,
  resolveClientBookRegion,
  type BookRegion,
} from "@/lib/book";
import { readingNav } from "@/lib/site";
import { cn } from "@/lib/utils";

function isActivePath(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

function useBuyRegion(): BookRegion {
  const [region, setRegion] = useState<BookRegion>(() =>
    getRegion(undefined),
  );

  useEffect(() => {
    setRegion(getRegion(resolveClientBookRegion()));
  }, []);

  return region;
}

function MiniCover({ className }: { className?: string }) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={cn(
        "hatch relative aspect-2/3 w-16 shrink-0 overflow-hidden border border-rule bg-paper-alt",
        className,
      )}
    >
      {!failed ? (
        <Image
          src={book.coverSrc}
          alt=""
          fill
          sizes="4rem"
          className="object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <div
          aria-hidden
          className="absolute inset-0 flex flex-col justify-between bg-paper-raised p-1.5"
        >
          <p className="mono-micro leading-tight text-ink-faint">BOOK</p>
          <p className="mono-micro leading-tight text-accent">2026</p>
        </div>
      )}
    </div>
  );
}

type ReadingDesktopProps = {
  pathname: string;
};

/** Desktop Reading item — mono label + accent "new" dot + compact preview panel. */
export function ReadingDesktop({ pathname }: ReadingDesktopProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLLIElement>(null);
  const panelId = useId();
  const region = useBuyRegion();
  const active = isActivePath(pathname, readingNav.href);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        rootRef.current?.querySelector<HTMLElement>("a,button")?.focus();
      }
    };

    const onPointer = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  function onBuyClick() {
    trackEvent("book_cta_click", {
      location: "nav",
      region: region.code,
    });
  }

  return (
    <li
      ref={rootRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocusCapture={() => setOpen(true)}
      onBlurCapture={(event) => {
        const next = event.relatedTarget as Node | null;
        if (!next || !rootRef.current?.contains(next)) {
          setOpen(false);
        }
      }}
    >
      <Link
        href={readingNav.href}
        aria-expanded={open}
        aria-controls={panelId}
        aria-haspopup="dialog"
        className={cn(
          "focus-ring mono-label inline-flex items-center gap-1.5 py-2 transition-colors",
          active || open ? "text-ink" : "text-ink-muted hover:text-ink",
        )}
      >
        {readingNav.label}
        <span
          aria-hidden
          className="size-1.5 shrink-0 rounded-full bg-accent"
        />
      </Link>

      <div
        id={panelId}
        role="region"
        aria-label={`${book.title} preview`}
        className={cn(
          "absolute left-1/2 top-full z-50 w-[18.5rem] -translate-x-1/2 pt-2",
          "motion-safe:transition-opacity motion-safe:duration-150",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
      >
        <div className="panel p-3 shadow-[0_12px_32px_rgba(17,19,17,0.08)]">
          <div className="flex gap-3">
            <MiniCover />
            <div className="min-w-0 flex-1">
              <p className="text-body-sm font-medium leading-snug text-ink">
                {book.title}
              </p>
              <p className="mt-1 text-[0.75rem] leading-snug text-ink-muted">
                {book.subtitle}
              </p>
              <p className="mono-micro mt-2 text-ink-faint">{book.author.name}</p>
            </div>
          </div>

          <div className="mt-3 flex items-center gap-3 border-t border-rule pt-3">
            <a
              href={region.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onBuyClick}
              className="focus-ring mono-label text-accent transition-colors hover:text-ink"
            >
              Buy the book
            </a>
            <span aria-hidden className="text-ink-faint">
              ·
            </span>
            <Link
              href={readingNav.href}
              className="focus-ring mono-label text-ink-muted transition-colors hover:text-ink"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
}

type ReadingMobileCardProps = {
  onNavigate?: () => void;
};

/** Mobile menu card — cover + title + accent Buy CTA. Not a plain text link. */
export function ReadingMobileCard({ onNavigate }: ReadingMobileCardProps) {
  const region = useBuyRegion();

  function onBuyClick() {
    trackEvent("book_cta_click", {
      location: "nav",
      region: region.code,
    });
    onNavigate?.();
  }

  return (
    <li className="py-3">
      <div className="panel flex gap-3 p-3">
        <Link
          href={readingNav.href}
          onClick={onNavigate}
          className="focus-ring flex min-w-0 flex-1 gap-3"
        >
          <MiniCover className="w-14" />
          <span className="min-w-0 self-center">
            <span className="mono-label flex items-center gap-1.5 text-ink">
              {readingNav.label}
              <span
                aria-hidden
                className="size-1.5 shrink-0 rounded-full bg-accent"
              />
            </span>
            <span className="mt-1 block text-body-sm leading-snug text-ink">
              {book.title}
            </span>
            <span className="mono-micro mt-1 block text-ink-faint">
              {book.author.name}
            </span>
          </span>
        </Link>
      </div>
      <a
        href={region.url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onBuyClick}
        className="btn-pill focus-ring mt-2 inline-flex h-10 w-full items-center justify-center px-5 text-[0.8125rem]"
      >
        Buy the book
      </a>
    </li>
  );
}
