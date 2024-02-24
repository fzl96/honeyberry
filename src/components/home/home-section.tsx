import { cn } from "@/lib/utils";

interface HomeSectionProps extends React.HTMLAttributes<HTMLDivElement> {
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
  ...props
}: HomeSectionProps) {
  return (
    <div
      {...props}
      className={cn(
        "container grid gap-3 md:grid-cols-5 md:gap-10",
        containerClassName,
      )}
    >
      <p className="text-base font-semibold leading-7 md:text-right md:text-md">
        {title}
      </p>
      <div className={cn(contentContainerClassName, "col-span-4")}>
        {children}
      </div>
    </div>
  );
}
