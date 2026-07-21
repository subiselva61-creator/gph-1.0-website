import type { Metadata } from "next";
import { AdvisorCloseCTA } from "@/components/AdvisorCloseCTA";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/motion/SectionHeading";
import ShinyText from "@/components/react-bits/ShinyText";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import { ValeranHero } from "@/components/ValeranHero";
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
      <ValeranHero
        compact
        title="Our Team"
        subtitle="The people behind Green PowerHouse — aligning finance, circular solar, and on-ground partnerships for sustainable development."
        imageSrc={images.heroTeam}
        imageAlt="Collaborative team environment"
      />

      <section className="py-section">
        <Container>
          <p className="text-eyebrow text-ink-muted">
            <ShinyText text="Leadership" speed={2.5} className="text-eyebrow" />
          </p>
          <div className="mt-10 max-w-2xl">
            <SectionHeading>{ceoMember.name}</SectionHeading>
            <Reveal>
              <p className="mt-2 text-body text-accent">{ceoMember.title}</p>
              {ceoMember.bio ? (
                <p className="mt-6 text-body text-ink-muted">{ceoMember.bio}</p>
              ) : null}
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-section pb-section">
        <Container>
          <p className="text-eyebrow text-ink-muted">
            <ShinyText text="Team" speed={2.5} className="text-eyebrow" />
          </p>
          <Reveal
            as="div"
            stagger={0.08}
            className="mt-12 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3"
          >
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </Reveal>
        </Container>
      </section>

      <AdvisorCloseCTA />
    </>
  );
}
