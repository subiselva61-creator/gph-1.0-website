import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/meridian/PageHero";
import { SheetSection } from "@/components/meridian/SheetSection";
import { Reveal } from "@/components/motion/Reveal";
import { images } from "@/lib/images";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Green PowerHouse — Dubai Silicon Oasis. Discuss partnership and green hydrogen investment pathways.",
};

const details = [
  { label: "Registered office", value: siteConfig.address, href: null },
  { label: "Telephone", value: siteConfig.phone, href: siteConfig.phoneHref },
  { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  {
    label: "LinkedIn",
    value: siteConfig.social.linkedin.handle,
    href: siteConfig.social.linkedin.href,
  },
  {
    label: "YouTube",
    value: siteConfig.social.youtube.handle,
    href: siteConfig.social.youtube.href,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        sheet="GPH / 07"
        title={
          <>
            Talk to <em>our team.</em>
          </>
        }
        lines={[
          "Green hydrogen finance, circular solar, or agricultural infrastructure",
          "Schedule a discussion about the Global South",
        ]}
        imageSrc={images.heroContact}
        imageAlt="Quiet office interior"
      />

      <SheetSection
        reference="GPH / 07.1"
        stamp="Reply within two working days"
        title={
          <>
            Send the brief, <em>we will read it.</em>
          </>
        }
      >
        <div className="mt-12 grid gap-10 border-t border-rule pt-10 lg:grid-cols-[20rem_1fr] lg:gap-16">
          <Reveal>
            <p className="mono-label text-ink-faint">Reach us</p>
            <dl className="mt-6 border-t border-rule">
              {details.map((detail) => (
                <div key={detail.label} className="border-b border-rule py-4">
                  <dt className="mono-label text-ink-faint">{detail.label}</dt>
                  <dd className="mt-2 text-body-sm text-ink">
                    {detail.href ? (
                      <a
                        href={detail.href}
                        target={
                          detail.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          detail.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="link-underline transition-colors hover:text-accent"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <span className="not-italic">{detail.value}</span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal className="min-w-0">
            <ContactForm />
          </Reveal>
        </div>
      </SheetSection>
    </>
  );
}
