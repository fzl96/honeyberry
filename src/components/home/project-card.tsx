import Image from "next/image";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { ToolTipWrapper } from "../tooltip-wrapper";

interface ProjectCardProps {
  title: string;
  href: string;
  image: string;
}

export function ProjectCard({ title, href, image }: ProjectCardProps) {
  return (
    <Link href={href}>
      <div className="rounded-xl border border-card-border bg-card px-2 pb-2 shadow-sm transition-colors duration-300 hover:bg-card-hover">
        <div className="my-2 flex items-center gap-2">
          <ToolTipWrapper content="Visit link" side="bottom">
            <Icons.link className="h-5 w-5 text-muted-foreground transition-colors duration-200 hover:text-foreground-soft" />
          </ToolTipWrapper>
          <ToolTipWrapper content="Github repo" side="bottom">
            <Icons.github className="h-5 w-5 text-muted-foreground transition-colors duration-200 hover:text-foreground-soft" />
          </ToolTipWrapper>
          <p className="text-md font-medium tracking-tight md:text-base">
            {title}
          </p>
        </div>
        <div className="relative aspect-video">
          <Image
            src={image}
            alt={title}
            fill
            className="rounded-lg object-cover"
            sizes="33vw"
          />
        </div>
      </div>
    </Link>
  );
}
