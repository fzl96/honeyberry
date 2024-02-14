import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";
import { Pacifico } from "next/font/google";
import Link from "next/link";
import { NavLinks } from "./nav-links";

const pacifico = Pacifico({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export function Header() {
  return (
    <header className="sticky top-0 mx-auto flex w-full max-w-[800px] items-center justify-between bg-black/0 py-2 backdrop-blur-lg">
      <Link href="/">
        <h1
          className={cn(
            pacifico.className,
            "scroll-m-20 text-2xl tracking-tight",
          )}
        >
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
