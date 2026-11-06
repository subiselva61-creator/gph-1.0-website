import { headers } from "next/headers";
import { Book3D } from "@/components/book/Book3D";
import { BuyBox } from "@/components/book/BuyBox";
import { Cta } from "@/components/meridian/Cta";
import { SectionLabel } from "@/components/meridian/SectionLabel";
import { Container } from "@/components/ui/Container";
import { book, resolveRegionFromCountry } from "@/lib/book";

async function resolveInitialRegion() {
  const h = await headers();
  const country =
    h.get("x-vercel-ip-country") ??
    h.get("cf-ipcountry") ??
    h.get("x-country-code");
  return resolveRegionFromCountry(country);
}

/**
 * Discreet homepage shelf for The Manifesto of Hope — between testimonials
 * and the closing CTA. Recommended reading only; not a GPH publication.
 */
export async function RecommendedReading() {
  const initialRegion = await resolveInitialRegion();

  return (
    <section className="border-b border-rule py-section">
      <Container>
        <SectionLabel
          left="Recommended reading · 2026"
          center="Not a Green PowerHouse publication"
          right="Book · shelf"
        />

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-[minmax(0,16rem)_1fr] lg:gap-16">
          <div className="relative mx-auto w-fit lg:mx-0">
            <Book3D size="md" />
          </div>

          <div className="min-w-0 max-w-2xl">
            <h2 className="display text-display">
              {book.title}
              <em className="mt-2 block text-[0.72em] font-normal">
                {book.subtitle}
              </em>
            </h2>

            <blockquote className="serif-em mt-7 border-l-2 border-accent pl-5 text-[clamp(1.125rem,2vw,1.375rem)] leading-[1.35] text-ink">
              “{book.coreQuestion}”
            </blockquote>

            <p className="mt-6 text-body text-ink-muted">
              By {book.author.name} — {book.author.bio}
            </p>

            <div className="mt-8">
              <BuyBox
                location="home-recommended"
                variant="compact"
                initialRegion={initialRegion}
              />
            </div>

            <div className="mt-6">
              <Cta href="/book" variant="secondary">
                Learn more
              </Cta>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
