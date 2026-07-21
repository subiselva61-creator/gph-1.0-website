import Link from "next/link";
import { cn } from "@/lib/utils";

type BracketLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
};

export function BracketLink({
  href,
  children,
  className,
  external,
}: BracketLinkProps) {
  const classes = cn(
    "focus-ring inline-flex items-center gap-1 rounded-sm text-nav font-medium tracking-[0.08em] text-ink transition-colors hover:text-accent",
    className,
  );

  const label = (
    <>
      <span aria-hidden>[</span>
      <span className="px-1.5">{children}</span>
      <span aria-hidden>]</span>
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {label}
    </Link>
  );
}
