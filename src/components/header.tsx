import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import { NavLinks } from "@/components/nav-links";
import { MobileNavToggle } from "@/components/mobile-nav-toggle";
import { MobileNav } from "@/components/mobile-nav";

export function Header() {
  return (
    <>
      <header className="sticky top-0 mx-auto flex w-full max-w-[800px] items-center justify-between bg-black/0 px-8 py-2 backdrop-blur-lg md:px-0">
        <Link href="/">
          <h1
            className={cn("scroll-m-20 font-pacifico text-2xl tracking-tight")}
          >
            Honeyberry
          </h1>
        </Link>
        <nav className="flex items-center gap-3 md:gap-0">
          <div className="hidden md:block">
            <NavLinks />
          </div>
          <div className="md:hidden">
            <MobileNavToggle />
          </div>
          <ModeToggle />
        </nav>
      </header>
      <MobileNav />
    </>
  );
}
