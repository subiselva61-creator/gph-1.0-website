import Link from "next/link";
import { cn } from "@/lib/utils";

type CtaProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
};

const variants = {
  primary: "btn-pill",
  secondary: "btn-pill-ghost",
} as const;

export function Cta({
  href,
  children,
  variant = "primary",
  external,
  className,
}: CtaProps) {
  const classes = cn(
    "focus-ring h-11 px-7 text-[0.9375rem]",
    variants[variant],
    className,
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
