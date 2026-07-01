"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaInstagram, FaGithub, FaPhoneAlt, FaGlobe, FaWhatsapp, FaTelegramPlane, FaFolderOpen, FaFacebook, FaMap, FaTiktok, FaLanguage } from "react-icons/fa";
import SocialCard from "./SocialCard";

export default function Home() {
  const [lang, setLang] = useState<"en" | "ar">("en");

  // Load language preference if needed or just default to en
  useEffect(() => {
    const saved = localStorage.getItem("kira-lang") as "en" | "ar";
    if (saved) setLang(saved);
  }, []);

  const toggleLang = () => {
    const newLang = lang === "en" ? "ar" : "en";
    setLang(newLang);
    localStorage.setItem("kira-lang", newLang);
  };

  const isAr = lang === "ar";

  const t = {
    title: isAr ? "كيرا للديكور" : "Kira decoration",
    contact: isAr ? "تواصل معنا" : "contact us",
    instagram: isAr ? "انستجرام" : "Instagram",
    instaDesc: isAr ? "ديكورات كيرا" : "Kira decorations",
    website: isAr ? "الموقع" : "Website",
    webDesc: isAr ? "زوروا موقعنا الرسمي" : "Visit our official website",
    works: isAr ? "أعمالنا" : "Our Works",
    worksDesc: isAr ? "شاهد أحدث مشاريعنا" : "See our latest projects",
    facebook: isAr ? "فيسبوك" : "Facebook",
    fbDesc: isAr ? "تابعنا على فيسبوك" : "follow us on facebook",
    whatsapp: isAr ? "واتساب" : "WhatsApp",
    waDesc: isAr ? "دعنا نتحدث" : "Let's chat",
    tiktok: isAr ? "تيك توك" : "Tiktok",
    ttDesc: isAr ? "تابعنا على تيك توك" : "follow us on TikTok",
    call: isAr ? "اتصل بنا" : "Call Me",
    callDesc: isAr ? "+20 111 280 1502" : "+20 111 280 1502",
    location: isAr ? "الموقع" : "Location",
    locDesc: isAr ? "ابحث عنا في الخريطة" : "find us on map",
    footer: isAr ? `© ${new Date().getFullYear()} MegaDevs. جميع الحقوق محفوظة.` : `© ${new Date().getFullYear()} MegaDevs. All rights reserved.`,
  };

  return (
    <main dir={isAr ? "rtl" : "ltr"} className="relative min-h-screen flex flex-col items-center justify-center text-white px-4 py-12 overflow-hidden selection:bg-purple-500/30">
      
      {/* Language Toggle Button */}
      <button 
        onClick={toggleLang}
        className="absolute top-6 right-6 z-50 flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full transition-colors backdrop-blur-md"
      >
        <FaLanguage size={20} />
        <span className="font-semibold text-sm">{isAr ? "English" : "العربية"}</span>
      </button>

      {/* Dynamic Background Effects */}
      <div className="fixed inset-0 -z-10 bg-slate-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-0 -translate-y-12 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 translate-y-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
      </div>

      <div className="w-full max-w-md mx-auto z-10">
        {/* Profile Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-10 flex flex-col items-center"
        >
          <div className="relative group mb-6">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-32 h-32 rounded-full p-1 bg-slate-900 overflow-hidden ring-1 ring-white/10">
              <Image
                src="/bg1.jpg"
                alt="Kira decoration"
                fill
                className="object-cover rounded-full"
                priority
              />
            </div>
          </div>

          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70"
          >
            {t.title}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-slate-400 mt-2 font-medium"
          >
            {t.contact}
          </motion.p>
        </motion.div>

        {/* Links Section */}
        <div className="w-full space-y-4">
          <SocialCard
            index={1}
            title={t.instagram}
            description={t.instaDesc}
            link="https://www.instagram.com/kira.decoration?igsh=eGVtZ2N5andpM2J1"
            icon={<FaInstagram size={24} />}
            color="from-pink-500 to-purple-500"
          />

          <SocialCard
            index={2}
            title={t.website}
            description={t.webDesc}
            link="https://kiradecoration.vercel.app"
            icon={<FaGlobe size={24} />}
            color="from-cyan-500 to-blue-600"
          />

          <SocialCard
            index={3}
            title={t.works}
            description={t.worksDesc}
            link="/works"
            icon={<FaFolderOpen size={24} />}
            color="from-amber-500 to-orange-600"
          />

          <SocialCard
            index={4}
            title={t.facebook}
            description={t.fbDesc}
            link="https://www.facebook.com/decorkira"
            icon={<FaFacebook size={24} />}
            color="from-slate-700 to-slate-900"
          />

          <SocialCard
            index={5}
            title={t.whatsapp}
            description={t.waDesc}
            link="https://wa.me/201112801502"
            icon={<FaWhatsapp size={24} />}
            color="from-emerald-500 to-green-600"
          />

          <SocialCard
            index={6}
            title={t.tiktok}
            description={t.ttDesc}
            link="https://www.tiktok.com/@kira.decoration4"
            icon={<FaTiktok size={24} />}
            color="from-indigo-500 to-blue-700"
          />

          <div className="pt-2">
            <SocialCard
              index={7}
              title={t.call}
              description={t.callDesc}
              link="tel:01112801502"
              icon={<FaPhoneAlt size={24} />}
              color="from-slate-600 to-slate-800"
            />
          </div>
          <div className="pt-2">
            <SocialCard
              index={8}
              title={t.location}
              description={t.locDesc}
              link="https://maps.app.goo.gl/PRAx1nZA2jNb678h7?g_st=aw"
              icon={<FaMap size={24} />}
              color="from-slate-600 to-slate-800"
            />
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 text-center text-slate-500 text-sm"
        >
          <p>{t.footer}</p>
        </motion.div>
      </div>
    </main>
  );
}
