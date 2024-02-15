import { buttonVariants, Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

export function LinkButtons() {
  return (
    <div className="mt-4 flex w-full flex-col gap-4 px-10 md:flex-row md:items-center md:justify-center md:gap-5">
      <div className="delay-600 -translate-y-3 animate-reveal-from-bottom opacity-0 duration-500 md:hidden">
        <Link href="/contact" className={cn(buttonVariants())}>
          Contact me
          <span>
            <Mail className="ml-2 h-4 w-4" />
          </span>
        </Link>
      </div>
      <div className="delay-400 hidden -translate-x-3 animate-reveal-from-left opacity-0 duration-500 md:block">
        <Link href="/contact" className={cn(buttonVariants())}>
          Contact me
          <span>
            <Mail className="ml-2 h-4 w-4" />
          </span>
        </Link>
      </div>
      <Button
        variant="secondary"
        className="-translate-y-3 animate-reveal-from-bottom opacity-0 delay-700 duration-500 md:hidden"
      >
        Download CV{" "}
        <span>
          <Copy className="ml-2 h-4 w-4" />
        </span>
      </Button>
      <Button
        variant="secondary"
        className="delay-400 hidden translate-x-4 animate-reveal-from-right opacity-0 duration-500 md:flex"
      >
        Download CV{" "}
        <span>
          <Copy className="ml-2 h-4 w-4" />
        </span>
      </Button>
    </div>
  );
}
