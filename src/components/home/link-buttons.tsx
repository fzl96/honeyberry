import { buttonVariants, Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

export function LinkButtons() {
  return (
    <div className="mt-4 flex w-full flex-col gap-4 px-10 md:flex-row md:items-center md:justify-center md:gap-5">
      <div className="translate-x-4 animate-reveal-from-left opacity-0 delay-500 duration-500">
        <Link href="/contact" className={cn(buttonVariants())}>
          Contact me
          <span>
            <Mail className="ml-2 h-4 w-4" />
          </span>
        </Link>
      </div>
      <Button
        variant="secondary"
        className="-translate-x-4 animate-reveal-from-right opacity-0 delay-500 duration-500"
      >
        Download CV{" "}
        <span>
          <Copy className="ml-2 h-4 w-4" />
        </span>
      </Button>
    </div>
  );
}
