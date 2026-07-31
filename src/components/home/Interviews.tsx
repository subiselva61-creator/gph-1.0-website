import Image from "next/image";
import { SectionLabel } from "@/components/meridian/SectionLabel";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { caseStudies } from "@/lib/case-studies";

const filedMonths = ["2026.03", "2026.02", "2026.04", "2026.01", "2026.05"];

type InterviewsProps = {
  heading?: React.ReactNode;
  issue?: string;
};

export function Interviews({
  heading = (
    <>
      Brighter, <em>according to the communities who will live with it.</em>
    </>
  ),
  issue = "Issue 01 · Spring 2026",
}: InterviewsProps = {}) {
  const total = String(caseStudies.length).padStart(2, "0");

  return (
    <section className="border-b border-rule bg-paper-alt py-section">
      <Container>
        <SectionLabel
          left={`${caseStudies.length} interviews · 2026`}
          center="Photographs by the community · used with permission"
          right={issue}
        />

        <h2 className="display text-display mt-10 max-w-4xl">{heading}</h2>

        <Reveal
          as="ul"
          stagger={0.1}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {caseStudies.map((study, i) => {
            const number = String(i + 1).padStart(2, "0");
            return (
              <li key={study.id} className="flex flex-col border border-rule bg-paper">
                <div className="flex items-baseline justify-between gap-3 border-b border-rule px-3 py-2">
                  <span className="mono-label text-ink">№ {number}</span>
                  <span className="mono-label text-ink-faint">B&amp;W · 35mm</span>
                </div>

                <figure className="flex flex-1 flex-col">
                  <div className="relative aspect-4/5 overflow-hidden bg-paper-alt">
                    <Image
                      src={study.image}
                      alt={`Portrait of ${study.attribution}, ${study.role}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="img-bw object-cover object-top"
                    />
                  </div>

                  <blockquote className="flex flex-1 flex-col px-4 pb-4 pt-5">
                    <span
                      aria-hidden
                      className="serif-em block text-3xl leading-none text-ink-faint"
                    >
                      &ldquo;
                    </span>
                    <p className="mt-2 flex-1 text-body-sm text-ink">
                      {study.quote}
                    </p>
                    <figcaption className="mt-5 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                      <span className="text-body-sm font-medium text-ink">
                        {study.attribution}
                      </span>
                      <span className="mono-label text-ink-faint">·</span>
                      <span className="mono-label text-ink-faint">
                        {study.role}
                      </span>
                      <span className="mono-label text-ink-faint">·</span>
                      <span className="mono-label text-ink-faint">
                        {study.sector}
                      </span>
                    </figcaption>
                  </blockquote>
                </figure>

                <div className="flex items-baseline justify-between gap-3 border-t border-rule px-3 py-2">
                  <span className="mono-label text-ink-faint">
                    Filed · {study.location} · {filedMonths[i]}
                  </span>
                  <span className="mono-label text-ink-faint">
                    frame {number}/{total}
                  </span>
                </div>
              </li>
            );
          })}
        </Reveal>
      </Container>
    </section>
  );
}
