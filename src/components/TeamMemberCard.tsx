import type { TeamMember } from "@/lib/team-data";
import { cn, getInitials } from "@/lib/utils";

type TeamMemberCardProps = {
  member: TeamMember;
  index?: number;
  total?: number;
  filedFrom?: string;
  className?: string;
};

/**
 * Contact-sheet frame. No photography exists for the team, so the plate holds a
 * hatched initials mark in place of a 35mm portrait.
 */
export function TeamMemberCard({
  member,
  index,
  total,
  filedFrom = "Dubai",
  className,
}: TeamMemberCardProps) {
  const number = index != null ? String(index).padStart(2, "0") : null;
  const totalLabel = total != null ? String(total).padStart(2, "0") : null;

  return (
    <article
      className={cn("flex flex-col border border-rule bg-paper", className)}
    >
      <div className="flex items-baseline justify-between gap-3 border-b border-rule px-3 py-2">
        <span className="mono-label text-ink">{number ? `№ ${number}` : "№"}</span>
        <span className="mono-label text-ink-faint">Plate · 35mm</span>
      </div>

      <div className="hatch relative flex aspect-4/5 items-center justify-center border-b border-rule">
        <span className="display text-[clamp(2.5rem,5vw,3.5rem)] text-ink">
          {getInitials(member.name)}
        </span>
      </div>

      <div className="flex flex-1 flex-col px-4 pb-4 pt-5">
        <h3 className="text-h3 text-ink">{member.name}</h3>
        <p className="mono-label mt-2 text-accent">{member.title}</p>
        {member.bio && (
          <p className="mt-4 flex-1 text-body-sm text-ink-muted">{member.bio}</p>
        )}

        {(member.linkedIn || member.twitter) && (
          <div className="mt-5 flex gap-5">
            {member.linkedIn && (
              <a
                href={member.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring mono-label text-ink-muted transition-colors hover:text-ink"
              >
                LinkedIn
              </a>
            )}
            {member.twitter && (
              <a
                href={member.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring mono-label text-ink-muted transition-colors hover:text-ink"
              >
                X
              </a>
            )}
          </div>
        )}
      </div>

      <div className="flex items-baseline justify-between gap-3 border-t border-rule px-3 py-2">
        <span className="mono-label text-ink-faint">Filed · {filedFrom}</span>
        {number && totalLabel && (
          <span className="mono-label text-ink-faint">
            frame {number}/{totalLabel}
          </span>
        )}
      </div>
    </article>
  );
}
