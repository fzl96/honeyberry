import Image from "next/image";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site-config";
import { Icons } from "@/components/icons";
import { ToolTipWrapper } from "@/components/tooltip-wrapper";
import { LinkButtons } from "@/components/home/link-buttons";


export default function Home() {
  return (
    <main className="mx-auto mt-12 max-w-[540px]">
      <div className="flex flex-col items-center gap-5">
        <div className="h-20 w-20 overflow-hidden rounded-full duration-500 animate-in fade-in slide-in-from-bottom-2">
          <Image
            src="/Furina-9.png"
            width={540}
            height={540}
            alt="furina"
            className="scale-125"
          />
        </div>
        <div className="space-y-7 text-center">
          <div className="space-y-1">
            <h1
              className={cn(
                "scroll-m-20 text-2xl font-semibold tracking-tight duration-700 animate-in fade-in slide-in-from-bottom-2",
                // pacifico.className
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
          <div className="flex translate-y-3 animate-reveal-from-bottom items-center justify-center gap-5 opacity-0 delay-500 duration-300">
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
      </div>
    </main>
  );
}
