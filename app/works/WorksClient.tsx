"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import ThemeToggle from "../ThemeToggle";
import type { MediaItem } from "../lib/works";

export default function WorksClient({ items }: { items: MediaItem[] }) {
  const [selected, setSelected] = useState<MediaItem | null>(null);
  const [lang, setLang] = useState<"en" | "ar">("en");

  useEffect(() => {
    const saved = localStorage.getItem("kira-lang") as "en" | "ar" | null;
    if (saved) setLang(saved);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  const toggleLang = () => {
    const next = lang === "en" ? "ar" : "en";
    setLang(next);
    localStorage.setItem("kira-lang", next);
  };

  const isAr = lang === "ar";

  const t = {
    kicker: isAr ? "استوديو ديكور · القاهرة" : "Décor Studio · Cairo",
    back: isAr ? "رجوع" : "Back",
    index: isAr ? "الأرشيف" : "The Archive",
    ourWorks1: isAr ? "أعمالنا" : "Our",
    ourWorks2: isAr ? "المختارة" : "Works",
    count: isAr ? "عمل" : "pieces",
    empty: isAr ? "لا توجد وسائط بعد." : "No media found yet.",
  };

  return (
    <main dir={isAr ? "rtl" : "ltr"} className="relative min-h-screen text-ink">
      {/* Masthead */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 font-display text-sm text-ink transition-colors hover:text-clay"
        >
          <span className="transition-transform group-hover:-translate-x-1 rtl:rotate-180 rtl:group-hover:translate-x-1">
            ←
          </span>
          {t.back}
        </Link>
        <span className="hidden font-display text-xs uppercase tracking-[0.22em] text-ink-soft sm:inline sm:text-sm">
          {t.kicker}
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleLang}
            className="rounded-full border border-line px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            {isAr ? "EN" : "ع"}
          </button>
          <ThemeToggle />
        </div>
      </header>

      <div className="border-t border-line" />

      {/* Title */}
      <section className="mx-auto max-w-6xl px-5 pt-10 sm:px-8 sm:pt-16">
        <div className="mb-3 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted">
          <span>{t.index}</span>
          <span className="h-px w-8 bg-line" />
          <span>
            {items.length} {t.count}
          </span>
        </div>
        <h1 className="font-display font-light leading-[0.9] tracking-tight text-[clamp(3rem,12vw,8rem)]">
          {t.ourWorks1} <span className="italic text-clay">{t.ourWorks2}</span>
        </h1>
      </section>

      {/* Gallery */}
      <section className="mx-auto mt-12 max-w-6xl px-5 pb-20 sm:px-8">
        {items.length === 0 ? (
          <p className="border-t border-line py-20 text-center text-lg text-muted">
            {t.empty}
          </p>
        ) : (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.04 } },
            }}
            className="columns-2 gap-3 sm:gap-4 md:columns-3 lg:columns-4 [&>*]:mb-3 sm:[&>*]:mb-4"
          >
            {items.map((item, i) => (
              <motion.button
                key={item.id}
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: { opacity: 1, y: 0 },
                }}
                onClick={() => setSelected(item)}
                className="group relative block w-full overflow-hidden bg-paper-2 text-start"
              >
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                )}
                <span className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-ink/70 via-ink/5 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="font-display text-sm text-paper">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute right-5 top-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white hover:text-black"
              onClick={(e) => {
                e.stopPropagation();
                setSelected(null);
              }}
              aria-label="Close"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 26, stiffness: 300 }}
              className="relative flex max-h-[90vh] w-full max-w-5xl items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {selected.type === "video" ? (
                <video
                  src={selected.src}
                  className="max-h-[90vh] max-w-full object-contain"
                  controls
                  autoPlay
                  playsInline
                />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={selected.src}
                  alt={selected.title}
                  className="max-h-[90vh] max-w-full object-contain"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
