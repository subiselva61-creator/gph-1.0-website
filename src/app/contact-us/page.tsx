import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/motion/Reveal";
import ShinyText from "@/components/react-bits/ShinyText";
import { ValeranHero } from "@/components/ValeranHero";
import { Container } from "@/components/ui/Container";
import { images } from "@/lib/images";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Green PowerHouse — Dubai Silicon Oasis. Discuss partnership and green hydrogen investment pathways.",
};

export default function ContactPage() {
  return (
    <>
      <ValeranHero
        compact
        title="Talk to our team"
        subtitle="Schedule a discussion about green hydrogen finance, circular solar, or agricultural infrastructure across the Global South."
        imageSrc={images.heroContact}
        imageAlt="Quiet office interior"
      />

      <section className="py-section pb-section">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <p className="text-eyebrow text-ink-muted">
                <ShinyText text="Reach us" speed={2.5} className="text-eyebrow" />
              </p>
              <ul className="mt-8 space-y-6">
                <li className="flex gap-3 text-body-sm text-ink-muted">
                  <MapPin
                    className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                    aria-hidden
                  />
                  <address className="not-italic leading-relaxed">
                    {siteConfig.address}
                  </address>
                </li>
                <li>
                  <a
                    href={siteConfig.phoneHref}
                    className="focus-ring inline-flex items-center gap-3 rounded-sm text-body-sm text-ink-muted transition hover:text-ink"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                    {siteConfig.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="focus-ring inline-flex items-center gap-3 rounded-sm text-body-sm text-ink-muted transition hover:text-ink"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                    {siteConfig.email}
                  </a>
                </li>
              </ul>
            </Reveal>

            <Reveal className="min-w-0 lg:col-span-8">
              <div className="glass-panel px-6 py-8 sm:px-8 sm:py-10">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
