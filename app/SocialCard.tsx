"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import Link from "next/link";

interface Props {
  title: string;
  link: string;
  index: number;
  icon?: ReactNode;
  color?: string;
  description?: string;
}

export default function SocialCard({ title, link, index, icon, color, description }: Props) {
  const isInternal = link.startsWith("/");
  
  const content = (
    <>
      {/* Subtle background glow effect on hover */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r ${color || 'from-white to-gray-500'}`} />

      <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${color || 'from-gray-700 to-gray-900'} shadow-inner text-white z-10`}>
        {icon}
      </div>
      
      <div className="flex flex-col flex-1 text-left z-10">
        <span className="font-semibold text-white tracking-wide">{title}</span>
        {description && <span className="text-sm text-gray-400">{description}</span>}
      </div>

      <div className="text-gray-500 group-hover:text-white transition-colors z-10">
        {!isInternal ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        )}
      </div>
    </>
  );

  const containerClass = `group flex items-center gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl overflow-hidden relative transition-all duration-300 hover:bg-white/10 hover:border-white/20`;

  if (isInternal) {
    return (
      <Link href={link} passHref legacyBehavior>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
          whileHover={{ scale: 1.02, y: -4 }}
          whileTap={{ scale: 0.98 }}
          className={containerClass}
        >
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      className={containerClass}
    >
      {content}
    </motion.a>
  );
}
