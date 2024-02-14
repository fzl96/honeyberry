"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const links: { name: string; url: string }[] = [
  { name: "About", url: "#" },
  { name: "Projects", url: "/projects" },
  { name: "Contact", url: "/contact" },
];

export function NavLinks() {
  const pathname = usePathname();
  const [selectedTab, setSelectedTab] = useState<string | null>(null);
  return (
    <ul className="flex items-center" onMouseLeave={() => setSelectedTab(null)}>
      {links.map((link) => (
        <li
          key={link.name}
          className="mr-4 relative px-2 py-1"
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
              className="bg-secondary absolute inset-0 rounded"
            />
          )}

          <Link href={link.url} className="relative py-2 z-10">
            {link.url === pathname && (
              <motion.div
                className="border-b-2 border-foreground absolute inset-0"
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
