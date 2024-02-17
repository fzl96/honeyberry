"use client";

import { useMenuState } from "@/app/store/menu";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useLockBody } from "@/hooks/use-lock-body";

const links = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  { name: "Projects", url: "/projects" },
  { name: "Contact", url: "/contact" },
];

export function MobileNav() {
  const open = useMenuState((state) => state.open);

  return <AnimatePresence>{open && <MobileNavRender />}</AnimatePresence>;
}

function MobileNavRender() {
  useLockBody();
  const setOpen = useMenuState((state) => state.setOpen);
  const menuVariants = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const linkContainerVariants = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  const linkVariants = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0, 0.55, 0.45, 1],
      },
    },
  };
  return (
    <>
      <motion.div
        variants={menuVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="bg-nav-background text-nav-foreground fixed left-0 top-0 z-[1000] h-[100dvh] w-full origin-top"
      >
        <div className="flex h-full flex-col px-10 py-5">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex justify-between"
          >
            <h1 className="text-xl">Portfolio</h1>
            <p
              className="cursor-pointer text-md"
              onClick={() => setOpen(false)}
            >
              Close
            </p>
          </motion.div>
          <motion.div
            variants={linkContainerVariants}
            initial="initial"
            animate="open"
            exit="initial"
            className="mt-[15rem] flex h-full flex-col items-center justify-center gap-5"
          >
            {links.map((link) => (
              <div className="overflow-hidden" key={link.url}>
                <MobileNavLink
                  href={link.url}
                  title={link.name}
                  setOpen={setOpen}
                />
              </div>
            ))}
            <div className="mt-auto overflow-hidden">
              <motion.div variants={linkVariants}>
                <h1 className="font-pacifico text-lg">Honeyberry</h1>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

function MobileNavLink({
  href,
  title,
  setOpen,
}: {
  href: string;
  title: string;
  setOpen: (open: boolean) => void;
}) {
  const linkVariants = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0, 0.55, 0.45, 1],
      },
    },
  };

  return (
    <motion.div variants={linkVariants}>
      <Link href={href} className="text-4xl" onClick={() => setOpen(false)}>
        {title}
      </Link>
    </motion.div>
  );
}
