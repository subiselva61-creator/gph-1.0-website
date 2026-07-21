"use client";

import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import ScrollFloat from "@/components/react-bits/ScrollFloat";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export type PillItem = {
  href: string;
  label: string;
  description: string;
};

type PillLinkRowProps = {
  title: string;
  intro: string;
  items: PillItem[];
  className?: string;
  showShape?: boolean;
};

export function PillLinkRow({
  title,
  intro,
  items,
  className,
}: PillLinkRowProps) {
  return (
    <section className={cn("relative py-section", className)}>
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <ScrollFloat
            as="h2"
            containerClassName="font-display text-h2 font-normal text-ink"
            textClassName="font-display text-h2 font-normal text-ink"
          >
            {title}
          </ScrollFloat>
          <Reveal as="div">
            <p className="mt-5 text-body text-ink-muted">{intro}</p>
          </Reveal>
        </div>
        <Reveal
          as="ul"
          stagger={0.12}
          className="mt-14 flex flex-wrap items-stretch justify-center gap-4"
        >
          {items.map((item) => (
            <li key={item.label} className="max-w-xs flex-1 basis-[14rem]">
              <Link
                href={item.href}
                className="glass focus-ring group flex h-full flex-col rounded-full px-7 py-5 transition-colors hover:border-accent/40 hover:bg-glass-strong"
              >
                <span className="text-[0.9375rem] font-medium tracking-[0.02em] text-ink group-hover:text-accent">
                  {item.label}
                </span>
                <span className="mt-1.5 text-body-sm text-ink-muted">
                  {item.description}
                </span>
              </Link>
            </li>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
