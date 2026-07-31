import { Marquee } from "@/components/motion/Marquee";

/** Oversized wordmark band that scrolls beneath the announcement strip. */
export function BrandTicker() {
  return (
    <div className="border-b border-rule bg-paper py-2">
      <Marquee speed={38}>
        {Array.from({ length: 6 }).map((_, i) => (
          <span
            key={i}
            className="display flex items-baseline whitespace-nowrap pr-8 text-[clamp(1.5rem,4vw,2.75rem)] text-ink-faint"
          >
            Green PowerHouse
            <span className="mono-label pl-1 align-super text-[0.5em]">®</span>
          </span>
        ))}
      </Marquee>
    </div>
  );
}
