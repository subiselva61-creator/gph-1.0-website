"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { book } from "@/lib/book";
import { prefersReducedMotion } from "@/lib/gsap";

const messages = [
  {
    id: "book",
    text: `New reading: ${book.title} by ${book.author.name} — Buy the book`,
    href: "/book",
  },
  {
    id: "solar",
    text: "Second-life solar now shipping to West Africa",
    href: "/solar-panels",
  },
] as const;

const ROTATE_MS = 7000;

/**
 * Slim top strip with a slow rotate between the book announcement and the
 * solar programme line. Rotation pauses under prefers-reduced-motion.
 */
export function AnnouncementBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion() || messages.length < 2) return;

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % messages.length);
    }, ROTATE_MS);

    return () => window.clearInterval(id);
  }, []);

  const message = messages[index] ?? messages[0];

  return (
    <div className="border-b border-rule bg-paper-alt">
      <div className="mx-auto flex max-w-[var(--canvas-max)] items-center justify-center gap-3 px-[var(--space-container-x)] py-1.5">
        <p key={message.id} className="mono-label text-center text-ink-faint">
          <Link
            href={message.href}
            className="focus-ring text-ink underline decoration-rule-strong underline-offset-2 transition-colors hover:text-accent"
          >
            {message.text}
          </Link>
        </p>
      </div>
    </div>
  );
}
