import Image from "next/image";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site-config";
import { Icons } from "@/components/icons";
import { ToolTipWrapper } from "@/components/tooltip-wrapper";
import { LinkButtons } from "@/components/home/link-buttons";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { HomeSection } from "@/components/home/home-section";
import { ProjectCard } from "@/components/home/project-card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Homepage | Honeyberry",
};

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col items-center gap-5">
        <div className="h-20 w-20 overflow-hidden rounded-full duration-500 animate-in fade-in slide-in-from-bottom-2">
          <Image
            src="/Furina-9.png"
            width={540}
            height={540}
            alt="furina"
            sizes="33vw"
            className="scale-125"
          />
        </div>
        <div className="space-y-7 text-center">
          <div className="space-y-1">
            <h1
              className={cn(
                "scroll-m-20 text-2xl font-semibold tracking-tight duration-700 animate-in fade-in slide-in-from-bottom-2",
              )}
            >
              Furina de Fontaine
            </h1>
            <div className="relative z-10 h-6 overflow-hidden">
              <h2 className="scroll-m20 translate-y-3 animate-reveal-from-bottom text-lg tracking-tight text-foreground-soft opacity-0 delay-200 duration-300">
                The Hydro Archon of Fontaine
              </h2>
            </div>
          </div>
          <div className="flex translate-y-3 animate-reveal-from-bottom items-center justify-center gap-5 opacity-0 duration-300 delay-400">
            {siteConfig.links.map((link) => {
              const Icon = Icons[link.icon || "arrowRight"];
              return (
                <ToolTipWrapper
                  key={link.name}
                  content={link.name}
                  className="border-none"
                  side="bottom"
                >
                  <a href={link.url} target="_blank">
                    <Icon className="h-6 w-6 text-muted-foreground transition-colors duration-200 hover:text-foreground-soft" />
                  </a>
                </ToolTipWrapper>
              );
            })}
          </div>
        </div>
        <LinkButtons />
        <div className="translate-y-3 animate-reveal-from-bottom opacity-0 duration-300 delay-800 md:delay-700">
          <HomeSection title="About" containerClassName="md:mt-12 mt-8">
            <p className="text-md leading-6 text-foreground-soft [&:not(:first-child)]:mt-5">
              Furina de Fontaine is the{" "}
              <span className="hover:text-blue-400">Hydro Archon</span> of
              Fontaine.
            </p>
            <p className="text-md leading-6 text-foreground-soft [&:not(:first-child)]:mt-5">
              Introduced as the flamboyant and overconfident Hydro Archon,
              Furina&apos;s theatrics are eventually revealed to be a public
              persona which she later discards in favor of living a relatively
              humbler life as an actress and artistic consultant.
            </p>
            <p className="text-md leading-6 text-foreground-soft [&:not(:first-child)]:mt-5">
              Furina lives for the thrill of the courtroom, often speaking in a
              manner peppered with bravado and drama.
            </p>
          </HomeSection>
          <HomeSection title="Projects" containerClassName="mt-5">
            <ProjectCard
              title="Furina de Fontaine"
              href="/furina"
              image="/name-card.png"
            />
          </HomeSection>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
