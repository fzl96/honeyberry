import { cn } from "@/lib/utils";
import Image from "next/image";

interface ExperienceEducationCardProps {
  title: string;
  location: string;
  date: string;
  description: string;
}

export function ExperienceEducationCard({
  title,
  location,
  date,
  description,
}: ExperienceEducationCardProps) {
  return (
    <div className="rounded-xl border border-card-border bg-card p-4 shadow-sm">
      <div className="space-y-2">
        <div className="space-y-[0.1rem]">
          <p className="text-sm font-medium tracking-tight text-foreground-soft">
            {title}
          </p>
          <p className="text font-medium">{location}</p>
          <p className="text-sm text-foreground-soft">{date}</p>
        </div>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}
