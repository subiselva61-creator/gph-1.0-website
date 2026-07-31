import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

type PullQuoteProps = {
  children: React.ReactNode;
  attribution?: string;
  /** Filing stamp printed above the quote. */
  stamp?: string;
  className?: string;
};

export function PullQuote({
  children,
  attribution,
  stamp = "Note · filed",
  className,
}: PullQuoteProps) {
  return (
    <section className={cn("border-b border-rule py-section-tight", className)}>
      <Container>
        <figure className="border-l-2 border-accent pl-6 sm:pl-10">
          <p className="mono-label text-ink-faint">{stamp}</p>
          <blockquote className="serif-em mt-5 max-w-3xl text-[clamp(1.5rem,3.2vw,2.375rem)] leading-[1.2] text-ink">
            {children}
          </blockquote>
          {attribution && (
            <figcaption className="mono-label mt-6 text-ink-faint">
              {attribution}
            </figcaption>
          )}
        </figure>
      </Container>
    </section>
  );
}
