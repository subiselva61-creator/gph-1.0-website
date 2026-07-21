import Link from "next/link";
import { Magnetic } from "@/components/motion/Magnetic";
import { CharFlipText } from "@/components/motion/CharFlipText";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "lg" | "sm";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  external?: boolean;
  /** Magnetic hover follow (valeran.eu .cta_primary). Defaults on for primary. */
  magnetic?: boolean;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-ink text-background-solid border border-ink hover:bg-accent hover:border-accent hover:text-background-solid",
  secondary:
    "glass text-ink border-glass-border hover:border-accent/50 hover:bg-glass-strong",
  ghost: "text-ink-muted hover:text-ink border border-transparent",
};

const sizes: Record<ButtonSize, string> = {
  sm: "min-h-9 px-4 text-sm",
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-12 px-7 text-[15px]",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  onClick,
  disabled,
  external,
  magnetic,
}: ButtonProps) {
  const classes = cn(
    "group focus-ring relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-medium tracking-[0.02em] transition-colors duration-300 disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className,
  );

  const content =
    typeof children === "string" ? <CharFlipText text={children} /> : children;

  let el: React.ReactElement<Record<string, unknown>>;
  if (href) {
    el = external ? (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    ) : (
      <Link href={href} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  } else {
    el = (
      <button type={type} className={classes} onClick={onClick} disabled={disabled}>
        {content}
      </button>
    );
  }

  const useMagnetic = magnetic ?? variant === "primary";
  return useMagnetic ? <Magnetic>{el}</Magnetic> : el;
}
