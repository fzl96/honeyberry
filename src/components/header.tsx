import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 mx-auto flex w-full max-w-[800px] items-center justify-between bg-black/0 px-8 py-2 backdrop-blur-lg md:px-0">
      <Link href="/">
        <h1 className={cn("font-pacifico scroll-m-20 text-2xl tracking-tight")}>
          Honeyberry
        </h1>
      </Link>
      <nav className="flex items-center gap-3">
        <NavLinks />
        <ModeToggle />
      </nav>
    </header>
  );
}
