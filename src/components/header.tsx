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
    <header className="top-0 w-full flex justify-between py-2 items-center mx-auto max-w-[800px] sticky bg-black/0 backdrop-blur-lg">
      <Link href="/">
        <h1
          className={cn(
            pacifico.className,
            "scroll-m-20 tracking-tight text-2xl"
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
