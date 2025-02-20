"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export const links: { name: string; url: string }[] = [
  { name: "About", url: "/about" },
  { name: "Projects", url: "/projects" },
  { name: "Contact", url: "/#contact" },
];

export function NavLinks() {
  const pathname = usePathname();
  const [selectedTab, setSelectedTab] = useState<string | null>(null);
  return (
    <ul
      className="mr-2 flex items-center gap-3"
      onMouseLeave={() => setSelectedTab(null)}
    >
      {links.map((link) => (
        <li
          key={link.name}
          className="relative px-2 py-1"
          onMouseEnter={() => setSelectedTab(link.name)}
        >
          {selectedTab === link.name && (
            <motion.div
              transition={{
                // type: "spring",
                // bounce: 0.25,
                duration: 0.3,
              }}
              layoutId="underline"
              className="absolute inset-0 rounded bg-secondary"
            />
          )}

          <Link href={link.url} className="relative z-10 py-2 text-sm">
            {link.url === pathname && (
              <motion.div
                className="absolute inset-0 border-b-2 border-foreground"
                layoutId="active-underline"
              />
            )}

            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
