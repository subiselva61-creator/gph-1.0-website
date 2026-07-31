import { cn } from "@/lib/utils";

type PhoneFrameProps = {
  children: React.ReactNode;
  /** Rendered inside the Dynamic Island pill; widens it when present. */
  island?: React.ReactNode;
  className?: string;
};

export function PhoneFrame({ children, island, className }: PhoneFrameProps) {
  return (
    <div
      className={cn(
        "relative mx-auto w-[16.5rem] rounded-[2.75rem] border border-rule-strong bg-paper p-2.5 shadow-[0_28px_70px_-30px_rgba(0,0,0,0.45)]",
        className,
      )}
    >
      <div className="relative aspect-9/19 overflow-hidden rounded-[2.25rem] bg-paper-alt">
        {/* Dynamic Island */}
        <div
          className={cn(
            "absolute left-1/2 top-2.5 z-20 flex -translate-x-1/2 items-center justify-center rounded-full bg-paper-invert text-ink-invert transition-all duration-500",
            island ? "h-9 w-[13rem] px-3" : "h-6 w-20",
          )}
        >
          {island}
        </div>
        {children}
      </div>
    </div>
  );
}

/** Lock-screen scaffold: status bar, oversized clock, then a notification slot. */
export function LockScreen({
  time,
  date,
  battery = "100%",
  children,
}: {
  time: string;
  date?: string;
  battery?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex h-full flex-col px-3 pb-4 pt-3.5">
      <div className="flex items-center justify-between">
        <span className="mono-micro text-ink-muted">{time}</span>
        <span className="mono-micro text-ink-muted">{battery}</span>
      </div>

      <div className="pt-10 text-center">
        {date && <p className="mono-label text-ink-faint">{date}</p>}
        <p className="mono-num text-[3.25rem] font-light leading-none tracking-[-0.04em] text-ink">
          {time}
        </p>
      </div>

      <div className="mt-auto flex flex-col gap-2">{children}</div>
    </div>
  );
}
