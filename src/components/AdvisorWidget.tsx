import Image from "next/image";
import { BracketLink } from "@/components/BracketLink";
import { images } from "@/lib/images";

export function AdvisorWidget() {
  return (
    <aside
      className="pointer-events-none fixed bottom-5 right-5 z-[60] hidden lg:block"
      aria-label="Contact your advisor"
    >
      <div className="glass pointer-events-auto flex items-center gap-2.5 rounded-xl px-2.5 py-2 shadow-[0_8px_28px_rgba(0,0,0,0.28)]">
        <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full border border-glass-border">
          <Image
            src={images.advisor}
            alt="Green PowerHouse advisor"
            fill
            className="img-warm object-cover"
            sizes="32px"
          />
        </div>
        <div className="flex flex-col gap-1 pr-0.5">
          <div>
            <p className="text-[0.65rem] font-medium leading-tight text-ink">
              Contact your advisor
            </p>
            <p className="text-[0.6rem] leading-tight text-ink-muted">
              Green PowerHouse Team
            </p>
          </div>
          <BracketLink
            href="/contact-us"
            className="rounded-full border border-glass-border bg-glass-strong px-2 py-0.5 text-[0.6rem] hover:border-accent/50"
          >
            Book a call
          </BracketLink>
        </div>
      </div>
    </aside>
  );
}
