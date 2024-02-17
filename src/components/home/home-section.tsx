import { cn } from "@/lib/utils";

interface HomeSectionProps {
  title: string;
  children: React.ReactNode;
  containerClassName?: string;
  contentContainerClassName?: string;
}

export function HomeSection({
  title,
  children,
  containerClassName,
  contentContainerClassName,
}: HomeSectionProps) {
  return (
    <section className={cn("container space-y-2", containerClassName)}>
      <p className="font-semibold leading-7">{title}</p>
      <div className={cn(contentContainerClassName)}>{children}</div>
    </section>
  );
}
