import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";

interface ViewAllProps {
  href: string;
}

export function ViewAll({ href }: ViewAllProps) {
  return (
    <Link
      href={href}
      passHref
      className={cn(
        buttonVariants({ variant: "secondary" }),
        "w-full font-normal transition-all duration-200 hover:brightness-125",
      )}
    >
      View all <Icons.arrowRight className="ml-2 h-4 w-4 text-icon" />
    </Link>
  );
}
