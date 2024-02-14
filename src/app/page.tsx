import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { Pacifico } from "next/font/google";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site-config";
import { Icons } from "@/components/icons";
import { ToolTipWrapper } from "@/components/tooltip-wrapper";
import { LinkButtons } from "@/components/home/link-buttons";

const pacifico = Pacifico({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="max-w-[540px] mx-auto mt-12">
      <div className="flex flex-col items-center gap-5">
        <div className="w-20 h-20 overflow-hidden rounded-full animate-in fade-in slide-in-from-bottom-2 duration-500">
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
                "scroll-m-20 text-2xl font-semibold tracking-tight animate-in fade-in slide-in-from-bottom-2 duration-700"
                // pacifico.className
              )}
            >
              Honeyberry
            </h1>
            <div className="h-6 overflow-hidden">
              <h2 className="scroll-m20 text-lg tracking-tight text-foreground-soft opacity-0 translate-y-3 animate-reveal-from-bottom delay-200 duration-300">
                The Hydro Archon of Fontaine
              </h2>
            </div>
          </div>
          <div className="flex items-center justify-center gap-5 translate-y-3 opacity-0 animate-reveal-from-bottom delay-500 duration-300">
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
                    <Icon className="w-6 h-6 text-muted-foreground hover:text-foreground-soft transition-colors duration-200" />
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
