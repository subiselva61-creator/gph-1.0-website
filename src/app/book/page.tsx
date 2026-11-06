import type { Metadata } from "next";
import { headers } from "next/headers";
import { AuthorPortrait } from "@/components/book/AuthorPortrait";
import { Book3D } from "@/components/book/Book3D";
import { BookStickyBuy } from "@/components/book/BookStickyBuy";
import { BuyBox } from "@/components/book/BuyBox";
import { Cta } from "@/components/meridian/Cta";
import { NumberedSheet } from "@/components/meridian/NumberedSheet";
import { SheetSection } from "@/components/meridian/SheetSection";
import { PullQuote } from "@/components/PullQuote";
import { Container } from "@/components/ui/Container";
import {
  book,
  buildBookJsonLd,
  resolveRegionFromCountry,
  type BookRegionCode,
} from "@/lib/book";
import { siteConfig } from "@/lib/site";

const canonical = `${siteConfig.url}/book`;

export const metadata: Metadata = {
  title: {
    absolute: `${book.title} by ${book.author.name} | ${siteConfig.name}`,
  },
  description: book.coreQuestion,
  alternates: { canonical },
  openGraph: {
    title: `${book.title} by ${book.author.name}`,
    description: book.coreQuestion,
    url: canonical,
    images: [
      {
        url: book.coverSrc,
        alt: `Cover of ${book.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${book.title} by ${book.author.name}`,
    description: book.coreQuestion,
    images: [book.coverSrc],
  },
};

async function resolveInitialRegion(): Promise<BookRegionCode> {
  const h = await headers();
  const country =
    h.get("x-vercel-ip-country") ??
    h.get("cf-ipcountry") ??
    h.get("x-country-code");
  return resolveRegionFromCountry(country);
}

export default async function BookPage() {
  const initialRegion = await resolveInitialRegion();
  const jsonLd = buildBookJsonLd(canonical);

  const optionalMeta = [
    book.publisher ? { label: "Publisher", value: book.publisher } : null,
    book.isbn ? { label: "ISBN", value: book.isbn } : null,
    book.pages ? { label: "Pages", value: String(book.pages) } : null,
    book.price ? { label: "Price", value: book.price } : null,
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Hero */}
      <section className="blueprint-grid border-b border-rule">
        <Container className="w-full">
          <div className="py-[clamp(2.5rem,5vw,5rem)]">
            <div className="grid items-center gap-10 md:grid-cols-[auto_minmax(0,1fr)] md:gap-14 lg:gap-20 xl:gap-24">
              <Book3D
                size="lg"
                priority
                className="mx-auto w-fit md:mx-0 md:ml-6 lg:ml-10 xl:ml-14"
              />

              <div className="mx-auto flex min-w-0 max-w-md flex-col text-center md:mx-0 md:max-w-xl md:text-left lg:max-w-2xl">
                <p className="mono-label text-ink-faint">Recommended reading</p>

                <div className="mt-6 md:mt-8">
                  <h1 className="display text-display leading-[1.05]">
                    {book.title}
                  </h1>
                  <p className="serif-em mt-5 text-[clamp(1.125rem,2.2vw,1.5rem)] leading-[1.35] text-ink md:mt-6">
                    {book.subtitle}
                  </p>
                </div>

                <p className="mono-label mt-6 text-ink-muted md:mt-7">
                  By {book.author.name}
                </p>

                <p className="mt-8 max-w-md text-body leading-relaxed text-ink-muted md:mt-10 md:max-w-lg">
                  {book.pitch}
                </p>

                {optionalMeta.length > 0 && (
                  <dl className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 border-t border-rule pt-5 md:justify-start">
                    {optionalMeta.map((item) => (
                      <div
                        key={item.label}
                        className="flex items-baseline gap-2"
                      >
                        <dt className="mono-label text-ink-faint">
                          {item.label}
                        </dt>
                        <dd className="mono-num text-[0.75rem] text-ink">
                          {item.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                )}

                <div className="mt-10 flex flex-wrap items-center justify-center gap-4 md:mt-12 md:justify-start">
                  <Cta href="#buy">Buy the book</Cta>
                  <Cta href="#author" variant="secondary">
                    Read about the author
                  </Cta>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. BuyBox */}
      <section className="border-b border-rule bg-paper-alt py-section">
        <Container>
          <div className="mx-auto max-w-2xl">
            <BuyBox
              id="buy"
              location="book-page"
              variant="full"
              initialRegion={initialRegion}
            />
          </div>
        </Container>
      </section>

      {/* 3. Core question */}
      <PullQuote stamp="The question at the heart of the book">
        “{book.coreQuestion}”
      </PullQuote>

      {/* 4. Themes */}
      <SheetSection
        reference="BOOK / 01"
        stamp="Inside the volume"
        title={
          <>
            What you’ll find <em>inside.</em>
          </>
        }
      >
        <NumberedSheet
          className="mt-10"
          items={book.themes.map((theme) => ({
            title: theme.title,
            body: theme.body,
          }))}
        />
      </SheetSection>

      {/* 5. Author */}
      <SheetSection
        id="author"
        reference="BOOK / 02"
        stamp="Author"
        alt
        title={
          <>
            About <em>the author.</em>
          </>
        }
      >
        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-14">
          <AuthorPortrait className="mx-auto w-full max-w-xs lg:mx-0 lg:max-w-none" />
          <div className="min-w-0">
            <p className="mono-label text-accent">On the record</p>
            <h3 className="display text-h2 mt-3">{book.author.name}</h3>
            <p className="mt-5 max-w-2xl text-body text-ink-muted">
              {book.author.bio}
            </p>
            <ul className="mt-8 border-t border-rule">
              {book.author.roles.map((role) => (
                <li
                  key={role}
                  className="border-b border-rule py-3 text-body-sm text-ink"
                >
                  <span className="text-ink-faint">· </span>
                  {role}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Cta href={book.author.linkedin} external variant="secondary">
                LinkedIn profile
              </Cta>
            </div>
          </div>
        </div>
      </SheetSection>

      {/* 6. Why GPH */}
      <SheetSection
        reference="BOOK / 03"
        stamp="A recommended read"
        title={
          <>
            Why GPH is <em>sharing this.</em>
          </>
        }
      >
        <div className="mt-8 max-w-2xl space-y-5 text-body text-ink-muted">
          <p>
            Green PowerHouse works across green hydrogen, solar and agriculture
            in emerging markets. We recommend {book.title} as a companion to
            that work — not as a publication of ours.
          </p>
          <p>
            Das writes about climate action, renewable energy, engineering,
            policy and citizen leadership, with particular attention to the
            Global South. It is a book we believe belongs in the conversation
            with the institutions and investors we advise.
          </p>
        </div>
      </SheetSection>

      {/* 7. Closing CTA */}
      <section className="border-b border-rule py-section">
        <Container>
          <p className="mono-label text-ink-faint">Close · buy</p>
          <h2 className="display text-display mt-6 max-w-3xl">
            {book.ctaLine}
          </h2>
          <div className="mx-auto mt-10 max-w-2xl">
            <BuyBox
              location="book-page-close"
              variant="compact"
              initialRegion={initialRegion}
            />
          </div>
        </Container>
      </section>

      <BookStickyBuy observeId="buy" initialRegion={initialRegion} />
    </>
  );
}
