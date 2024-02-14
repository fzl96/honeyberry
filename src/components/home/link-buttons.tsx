import { buttonVariants, Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

export function LinkButtons() {
  return (
    <div className="flex md:flex-row flex-col md:items-center md:gap-5 gap-4 mt-4 w-full md:justify-center px-10">
      <div className="opacity-0 translate-x-4 animate-reveal-from-left delay-500 duration-500">
        <Link href="/contact" className={cn(buttonVariants())}>
          Contact me
          <span>
            <Mail className="w-4 h-4 ml-2" />
          </span>
        </Link>
      </div>
      <Button
        variant="secondary"
        className="opacity-0 -translate-x-4 animate-reveal-from-right delay-500 duration-500"
      >
        Download CV{" "}
        <span>
          <Copy className="w-4 h-4 ml-2" />
        </span>
      </Button>
    </div>
  );
}
