"use client";

import ScrollReveal from "@/components/react-bits/ScrollReveal";
import { cn } from "@/lib/utils";

type PullQuoteProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "bold";
};

export function PullQuote({ children, className }: PullQuoteProps) {
  const quoteClass = cn(
    "font-display text-h2 font-normal italic leading-snug text-ink",
    className,
  );

  if (typeof children === "string") {
    return (
      <ScrollReveal
        as="blockquote"
        enableBlur
        baseOpacity={0.15}
        baseRotation={2}
        blurStrength={6}
        containerClassName={quoteClass}
        textClassName={quoteClass}
      >
        {children}
      </ScrollReveal>
    );
  }

  return <blockquote className={quoteClass}>{children}</blockquote>;
}
