import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "article";
};

export function Container({
  children,
  className,
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag
      className={cn("mx-auto w-full min-w-0 max-w-[var(--canvas-max)]", className)}
      style={{ paddingInline: "var(--space-container-x)" }}
    >
      {children}
    </Tag>
  );
}
