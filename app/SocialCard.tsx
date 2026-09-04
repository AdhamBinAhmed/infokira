"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import Link from "next/link";

interface Props {
  title: string;
  link: string;
  index: number;
  icon?: ReactNode;
  handle?: string;
}

export default function SocialCard({ title, link, index, icon, handle }: Props) {
  const isInternal = link.startsWith("/");

  const content = (
    <>
      {/* clay fill rising on hover */}
      <span className="pointer-events-none absolute inset-0 origin-bottom scale-y-0 bg-clay transition-transform duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100" />

      {/* top row: index + icon */}
      <span className="relative z-10 flex items-center justify-between">
        <span className="font-display text-sm tabular-nums text-muted transition-colors duration-300 group-hover:text-paper/70">
          {String(index).padStart(2, "0")}
        </span>
        <span className="text-ink transition-colors duration-300 group-hover:text-paper">
          {icon}
        </span>
      </span>

      {/* platform name */}
      <span className="relative z-10 mt-6 block font-display text-2xl leading-none tracking-tight text-ink transition-colors duration-300 group-hover:text-paper sm:text-[1.7rem]">
        {title}
      </span>

      {/* bottom row: handle + arrow */}
      <span className="relative z-10 mt-2 flex items-end justify-between gap-2">
        <span className="truncate text-sm text-muted transition-colors duration-300 group-hover:text-paper/80">
          {handle}
        </span>
        <span className="shrink-0 text-ink opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-paper group-hover:opacity-100 -translate-x-1 rtl:translate-x-1 rtl:group-hover:translate-x-0">
          {isInternal ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="rtl:rotate-180"><path d="m9 18 6-6-6-6" /></svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
          )}
        </span>
      </span>
    </>
  );

  const containerClass =
    "group relative flex flex-col overflow-hidden bg-paper p-5 transition-colors sm:p-6";

  const anim = {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-40px" },
    transition: { duration: 0.5, delay: index * 0.05, ease: "easeOut" as const },
  };

  if (isInternal) {
    return (
      <Link href={link} legacyBehavior passHref>
        <motion.a className={containerClass} {...anim}>
          {content}
        </motion.a>
      </Link>
    );
  }

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={containerClass}
      {...anim}
    >
      {content}
    </motion.a>
  );
}
