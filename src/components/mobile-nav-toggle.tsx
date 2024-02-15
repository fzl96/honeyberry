"use client";

import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useMenuState } from "@/app/store/menu";

export function MobileNavToggle() {
  const setOpen = useMenuState((state) => state.setOpen);

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        variant="ghost"
        size="sm"
        className="text-base"
      >
        Menu
      </Button>
    </>
  );
}
