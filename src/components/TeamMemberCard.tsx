import { getInitials } from "@/lib/utils";
import type { TeamMember } from "@/lib/team-data";
import { cn } from "@/lib/utils";

type TeamMemberCardProps = {
  member: TeamMember;
  className?: string;
};

export function TeamMemberCard({ member, className }: TeamMemberCardProps) {
  return (
    <article className={cn("border-t border-glass-border pt-6", className)}>
      <div className="glass mb-5 flex h-16 w-16 items-center justify-center rounded-full text-sm font-medium tracking-[0.06em] text-ink-muted">
        {getInitials(member.name)}
      </div>
      <h3 className="font-display text-h3 font-normal text-ink">
        {member.name}
      </h3>
      <p className="mt-2 text-body-sm text-accent">{member.title}</p>
      {member.bio ? (
        <p className="mt-4 text-body-sm text-ink-muted">{member.bio}</p>
      ) : null}
      <div className="mt-4 flex gap-4">
        {member.linkedIn ? (
          <a
            href={member.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring link-underline text-[0.75rem] tracking-[0.06em] text-ink-muted hover:text-ink"
          >
            LinkedIn
          </a>
        ) : null}
        {member.twitter ? (
          <a
            href={member.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring link-underline text-[0.75rem] tracking-[0.06em] text-ink-muted hover:text-ink"
          >
            X
          </a>
        ) : null}
      </div>
    </article>
  );
}
