"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaPhoneAlt,
  FaGlobe,
  FaWhatsapp,
  FaFacebook,
  FaMapMarkerAlt,
  FaTiktok,
} from "react-icons/fa";
import type { MediaItem } from "./lib/works";

export default function HomeClient({
  featured,
  totalCount,
}: {
  featured: MediaItem[];
  totalCount: number;
}) {
  const [lang, setLang] = useState<"en" | "ar">("en");

  useEffect(() => {
    const saved = localStorage.getItem("kira-lang") as "en" | "ar" | null;
    if (saved) setLang(saved);
  }, []);

  const toggleLang = () => {
    const next = lang === "en" ? "ar" : "en";
    setLang(next);
    localStorage.setItem("kira-lang", next);
  };

  const isAr = lang === "ar";

  const t = {
    kicker: isAr ? "استوديو ديكور · القاهرة" : "Décor Studio · Cairo",
    est: isAr ? "تأسس ٢٠٢٤" : "Est. 2024",
    name1: isAr ? "كيرا" : "Kira",
    name2: isAr ? "للديكور" : "Decoration",
    lead: isAr
      ? "نصمّم مساحات وحفلات لا تُنسى — من الفكرة إلى آخر تفصيلة."
      : "We design unforgettable spaces & events — from the first idea to the final detail.",
    contactUs: isAr ? "تواصل معنا" : "Get in touch",
    selectedWork: isAr ? "أعمال مختارة" : "Selected Work",
    viewAll: isAr ? "عرض الكل" : "View all",
    connect: isAr ? "تواصل" : "Connect",
    projects: isAr ? "مشروع" : "projects",
    footer: isAr
      ? `© ${new Date().getFullYear()} كيرا للديكور. صُنع بواسطة MegaDevs.`
      : `© ${new Date().getFullYear()} Kira Decoration. Built by MegaDevs.`,
  };

  const links = [
    {
      title: isAr ? "انستجرام" : "Instagram",
      handle: "@kira.decoration",
      link: "https://www.instagram.com/kira.decoration?igsh=eGVtZ2N5andpM2J1",
      icon: <FaInstagram size={22} />,
    },
    {
      title: isAr ? "واتساب" : "WhatsApp",
      handle: "+20 111 280 1502",
      link: "https://wa.me/201112801502",
      icon: <FaWhatsapp size={22} />,
    },
    {
      title: isAr ? "الموقع" : "Website",
      handle: "kiradecoration.vercel.app",
      link: "https://kiradecoration.vercel.app",
      icon: <FaGlobe size={22} />,
    },
    {
      title: isAr ? "فيسبوك" : "Facebook",
      handle: "/decorkira",
      link: "https://www.facebook.com/decorkira",
      icon: <FaFacebook size={22} />,
    },
    {
      title: isAr ? "تيك توك" : "TikTok",
      handle: "@kira.decoration4",
      link: "https://www.tiktok.com/@kira.decoration4",
      icon: <FaTiktok size={22} />,
    },
    {
      title: isAr ? "اتصل بنا" : "Call",
      handle: "+20 111 280 1502",
      link: "tel:01112801502",
      icon: <FaPhoneAlt size={20} />,
    },
    {
      title: isAr ? "الموقع على الخريطة" : "Location",
      handle: isAr ? "القاهرة، مصر" : "Cairo, Egypt",
      link: "https://maps.app.goo.gl/PRAx1nZA2jNb678h7?g_st=aw",
      icon: <FaMapMarkerAlt size={20} />,
    },
  ];

  return (
    <main
      dir={isAr ? "rtl" : "ltr"}
      className="relative min-h-screen text-ink"
    >
      {/* ── Masthead ─────────────────────────────── */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <span className="font-display text-xs uppercase tracking-[0.22em] text-ink-soft sm:text-sm">
          {t.kicker}
        </span>
        <button
          onClick={toggleLang}
          className="rounded-full border border-line px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-ink transition-colors hover:bg-ink hover:text-paper"
        >
          {isAr ? "EN" : "ع"}
        </button>
      </header>

      <div className="border-t border-line" />

      {/* ── Hero ─────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-5 pt-8 sm:px-8 sm:pt-14">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          {/* Wordmark */}
          <div>
            <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted">
              <span>{t.est}</span>
              <span className="h-px w-8 bg-line" />
              <span>{totalCount}+ {t.projects}</span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="font-display font-light leading-[0.86] tracking-tight"
            >
              <span className="block text-[clamp(3.5rem,15vw,10rem)]">
                {t.name1}
              </span>
              <span className="block text-[clamp(3.5rem,15vw,10rem)] italic text-clay">
                {t.name2}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mt-6 max-w-md text-base leading-relaxed text-ink-soft sm:text-lg"
            >
              {t.lead}
            </motion.p>

            <motion.a
              href="#connect"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="group mt-7 inline-flex items-center gap-2 border-b-2 border-ink pb-1 font-display text-lg text-ink transition-colors hover:border-clay hover:text-clay"
            >
              {t.contactUs}
              <span className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180">
                →
              </span>
            </motion.a>
          </div>

          {/* Portrait */}
          <motion.figure
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-paper-2">
              <Image
                src="/bg1.jpg"
                alt="Kira Decoration"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <figcaption className="mt-2 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-muted">
              <span>{isAr ? "الاستوديو" : "The Studio"}</span>
              <span>№ 01</span>
            </figcaption>
          </motion.figure>
        </div>
      </section>

      {/* ── Connect (full-bleed clay band) ───────── */}
      <section id="connect" className="mt-16 bg-clay text-paper sm:mt-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Statement */}
          <div className="flex flex-col">
            <span className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-paper/70">
              {t.connect}
              <span className="h-px w-8 bg-paper/40" />
            </span>
            <h2 className="font-display text-[clamp(2.4rem,6vw,4rem)] font-light leading-[0.95] tracking-tight">
              {isAr ? "لنصنع شيئًا " : "Let's create something "}
              <span className="italic">{isAr ? "جميلًا معًا" : "beautiful together"}</span>.
            </h2>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-paper/85">
              {isAr
                ? "راسلنا على أي منصة تفضّلها — نردّ عادةً خلال ساعات."
                : "Reach out on whichever platform you prefer — we usually reply within hours."}
            </p>
            <div className="mt-8 hidden items-center gap-3 text-xs uppercase tracking-[0.18em] text-paper/70 lg:flex">
              <span>{isAr ? "القاهرة، مصر" : "Cairo, Egypt"}</span>
              <span className="h-px w-6 bg-paper/40" />
              <span>{t.est}</span>
            </div>
          </div>

          {/* Directory rows */}
          <ul className="lg:pt-2">
            {links.map((l, i) => (
              <motion.li
                key={l.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.05, ease: "easeOut" }}
              >
                <a
                  href={l.link}
                  target={l.link.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 border-t border-paper/25 py-4 sm:gap-4 sm:py-5"
                >
                  <span className="w-6 font-display text-sm tabular-nums text-paper/55">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="shrink-0 text-paper/85 transition-transform duration-300 group-hover:scale-110">
                    {l.icon}
                  </span>
                  <span className="font-display text-2xl leading-none tracking-tight transition-transform duration-300 group-hover:translate-x-1 sm:text-[1.9rem] rtl:group-hover:-translate-x-1">
                    {l.title}
                  </span>
                  <span className="mx-1 hidden h-px flex-1 self-center border-b border-dotted border-paper/40 opacity-70 transition-opacity duration-300 group-hover:opacity-100 sm:block" />
                  <span className="hidden shrink-0 text-sm text-paper/70 sm:inline">
                    {l.handle}
                  </span>
                  <span className="ms-auto shrink-0 text-paper/60 transition-all duration-300 group-hover:translate-x-1 group-hover:text-paper sm:ms-0 rtl:group-hover:-translate-x-1">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                  </span>
                </a>
              </motion.li>
            ))}
            <li className="border-t border-paper/25" />
          </ul>
        </div>
      </section>

      {/* ── Selected Work ────────────────────────── */}
      {featured.length > 0 && (
        <section className="mx-auto mt-16 max-w-6xl px-5 sm:mt-24 sm:px-8">
          <div className="flex items-end justify-between border-t border-ink pt-3">
            <h2 className="font-display text-2xl italic sm:text-3xl">
              {t.selectedWork}
            </h2>
            <Link
              href="/works"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-widest text-ink-soft transition-colors hover:text-clay"
            >
              {t.viewAll}
              <span className="transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1">
                →
              </span>
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:grid-rows-2">
            {featured.map((item, i) => (
              <Link
                key={item.id}
                href="/works"
                className={`group relative overflow-hidden bg-paper-2 ${
                  i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto" : "aspect-square"
                }`}
              >
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
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
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                )}
                <span className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/10" />
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ── Footer ───────────────────────────────── */}
      <footer className="mx-auto mt-16 flex max-w-6xl flex-col items-center gap-2 px-5 py-10 text-center sm:mt-24 sm:px-8">
        <span className="font-display text-xl italic text-ink">
          {t.name1} {t.name2}
        </span>
        <p className="text-xs uppercase tracking-[0.18em] text-muted">
          {t.footer}
        </p>
      </footer>
    </main>
  );
}
