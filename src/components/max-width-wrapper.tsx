import React from "react";
import { cn } from "@/lib/utils";

export function MaxWidthWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <main
      className={cn(
        "mx-auto mt-12 min-h-screen max-w-[540px] md:text-lg",
        className,
      )}
    >
      {children}
    </main>
  );
}
