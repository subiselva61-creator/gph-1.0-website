"use client";

import Image from "next/image";
import { useState } from "react";
import { book } from "@/lib/book";
import { cn } from "@/lib/utils";

type BookCoverProps = {
  /** Override the default cover path from config. */
  src?: string;
  /** Visual size of the plate. */
  size?: "sm" | "md" | "lg";
  className?: string;
  priority?: boolean;
};

const sizes = {
  sm: "w-36",
  md: "w-48 sm:w-56",
  lg: "w-52 sm:w-64",
} as const;

/**
 * Book cover with next/image when the asset loads, otherwise a Meridian CSS
 * fallback plate. Drop the real file at /public/book/cover.jpg when ready.
 */
export function BookCover({
  src = book.coverSrc,
  size = "md",
  className,
  priority,
}: BookCoverProps) {
  const [failed, setFailed] = useState(false);

  return (
    <figure
      className={cn(
        "hatch relative aspect-2/3 overflow-hidden border border-rule bg-paper-alt",
        sizes[size],
        className,
      )}
    >
      {!failed ? (
        <Image
          src={src}
          alt={`Cover of ${book.title} by ${book.author.name}`}
          fill
          priority={priority}
          sizes="(max-width: 640px) 13rem, 16rem"
          className="object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <FallbackCover />
      )}
    </figure>
  );
}

function FallbackCover() {
  return (
    <div
      aria-hidden={false}
      role="img"
      aria-label={`Cover placeholder for ${book.title}`}
      className="absolute inset-0 flex flex-col justify-between bg-paper-raised p-5 sm:p-6"
    >
      <div>
        <p className="mono-label text-ink-faint">BOOK · 2026</p>
        <p className="display mt-4 text-[clamp(1.125rem,2.4vw,1.5rem)] leading-[1.15] text-ink">
          {book.title}
        </p>
        <p className="serif-em mt-3 text-body-sm text-ink-muted">
          {book.subtitle}
        </p>
      </div>
      <p className="mono-label text-accent">{book.author.name}</p>
      {/* TODO: Replace this CSS fallback by adding /public/book/cover.jpg */}
    </div>
  );
}
