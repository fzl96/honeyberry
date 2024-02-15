"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm-icon"
      type="button"
      onClick={() => {
        resolvedTheme === "dark" ? setTheme("light") : setTheme("dark");
      }}
    >
      <SunIcon className="md-5 absolute h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 md:h-4 md:w-4" />
      <MoonIcon className="absolute h-5 w-5 rotate-90  scale-0 transition-all dark:rotate-0 dark:scale-100 md:h-4 md:w-4" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
