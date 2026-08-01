import type { Metadata } from "next";
import { CloseCTA } from "@/components/meridian/CloseCTA";
import { PageHero } from "@/components/meridian/PageHero";
import { SectionLabel } from "@/components/meridian/SectionLabel";
import { SheetSection } from "@/components/meridian/SheetSection";
import { PortraitPlate } from "@/components/PortraitPlate";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { images } from "@/lib/images";
import { ceoMember, teamMembers } from "@/lib/team-data";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the Green PowerHouse team — leadership spanning green hydrogen finance, European solar sourcing, and Global South partnerships.",
};

export default function OurTeamPage() {
  return (
    <>
      <PageHero
        sheet="GPH / 06"
        sheetOf="1 / 2"
        title={
          <>
            Our <em>team.</em>
          </>
        }
        lines={[
          "The people behind Green PowerHouse",
          "Aligning finance, circular solar, and on-ground partnerships for sustainable development",
        ]}
        imageSrc={images.heroTeam}
        imageAlt="Collaborative team environment"
      />

      <SheetSection
        reference="GPH / 06.1"
        stamp="Plate 01 · leadership"
        title={
          <>
            Leadership, <em>on the record.</em>
          </>
        }
      >
        <div className="mt-10 grid gap-10 border-t border-rule pt-10 lg:grid-cols-[21rem_1fr] lg:gap-16">
          <PortraitPlate
            src={images.founderPortrait}
            backdropSrc={images.founderPortraitBackdrop}
            alt={`Portrait of ${ceoMember.name}, ${ceoMember.title}`}
            stamp="№ 00 · Dubai"
            className="w-full max-w-84"
          />

          <Reveal>
            <p className="mono-label text-ink-faint">№ 00 · Plate · 35mm</p>
            <h3 className="display text-h2 mt-4 text-ink">{ceoMember.name}</h3>
            <p className="mono-label mt-3 text-accent">{ceoMember.title}</p>
            {ceoMember.bio && (
              <p className="mt-6 max-w-2xl text-body text-ink-muted">
                {ceoMember.bio}
              </p>
            )}
            <p className="mono-label mt-8 border-t border-rule pt-3 text-ink-faint">
              Filed · Dubai · 2026.01
            </p>
          </Reveal>
        </div>
      </SheetSection>

      <section className="border-b border-rule bg-paper-alt py-section">
        <Container>
          <SectionLabel
            left={`${teamMembers.length} plates · contact sheet`}
            center="Initials in place of portraits"
            right="Sheet 2 / 2"
          />

          <h2 className="display text-display mt-10 max-w-3xl">
            The house, <em>frame by frame.</em>
          </h2>

          <Reveal
            as="div"
            stagger={0.06}
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {teamMembers.map((member, i) => (
              <TeamMemberCard
                key={member.id}
                member={member}
                index={i + 1}
                total={teamMembers.length}
              />
            ))}
          </Reveal>
        </Container>
      </section>

      <CloseCTA />
    </>
  );
}
