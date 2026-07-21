import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  wordmarkClassName?: string;
  size?: "xs" | "sm" | "md" | "lg";
  href?: string | null;
  priority?: boolean;
};

const sizes = {
  xs: { mark: 28, text: "text-sm" },
  sm: { mark: 32, text: "text-sm" },
  md: { mark: 40, text: "text-base" },
  lg: { mark: 52, text: "text-lg" },
} as const;

export function Logo({
  className,
  showWordmark = true,
  wordmarkClassName,
  size = "md",
  href = "/",
  priority = false,
}: LogoProps) {
  const dim = sizes[size];

  const content = (
    <>
      <span
        className="relative shrink-0"
        style={{ width: dim.mark, height: dim.mark }}
      >
        <Image
          src="/logo.png"
          alt={siteConfig.name}
          width={dim.mark}
          height={dim.mark}
          className="h-full w-full object-contain brightness-110"
          priority={priority}
          sizes={`${dim.mark}px`}
        />
      </span>
      {showWordmark ? (
        <span
          className={cn(
            "font-display font-bold uppercase tracking-[0.06em] text-ink",
            dim.text,
            wordmarkClassName,
          )}
        >
          {siteConfig.name}
        </span>
      ) : null}
    </>
  );

  if (href === null) {
    return (
      <span className={cn("inline-flex items-center gap-2.5", className)}>
        {content}
      </span>
    );
  }

  return (
    <Link
      href={href}
      className={cn(
        "focus-ring group relative z-50 inline-flex items-center gap-2.5 rounded-sm",
        className,
      )}
      aria-label={`${siteConfig.name} home`}
    >
      {content}
    </Link>
  );
}
