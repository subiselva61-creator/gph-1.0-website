"use client";

import ScrollFloat from "@/components/react-bits/ScrollFloat";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  children: React.ReactNode;
  as?: "h2" | "h3";
  className?: string;
};

/**
 * Standard editorial section heading with ScrollFloat character reveal.
 */
export function SectionHeading({
  children,
  as = "h2",
  className,
}: SectionHeadingProps) {
  const typeClass =
    as === "h2"
      ? "font-display text-h2 font-normal text-ink"
      : "font-display text-h3 font-normal text-ink";

  if (typeof children === "string") {
    return (
      <ScrollFloat
        as={as}
        containerClassName={cn(typeClass, className)}
        textClassName={typeClass}
        stagger={0.02}
        ease="power2.out"
        animationDuration={1}
      >
        {children}
      </ScrollFloat>
    );
  }

  const Tag = as;
  return <Tag className={cn(typeClass, className)}>{children}</Tag>;
}
