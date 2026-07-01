"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaArrowLeft, FaTimes, FaLanguage } from "react-icons/fa";
import { useState, useEffect } from "react";

type MediaItem = {
  id: string;
  src: string;
  type: 'image' | 'video';
  title: string;
};

export default function WorksClient({ items }: { items: MediaItem[] }) {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
  const [lang, setLang] = useState<"en" | "ar">("en");

  // Load language preference
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
    ourWorks: isAr ? "أعمالنا" : "Our Works",
    noMedia: isAr ? "لم يتم العثور على وسائط في مجلد public/works." : "No media found in public/works directory.",
  };

  return (
    <main dir={isAr ? "rtl" : "ltr"} className="relative min-h-screen bg-slate-950 text-white px-4 py-12 selection:bg-purple-500/30 overflow-x-hidden">
      
      {/* Language Toggle Button */}
      <button 
        onClick={toggleLang}
        className="absolute top-6 right-6 z-50 flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full transition-colors backdrop-blur-md"
      >
        <FaLanguage size={20} />
        <span className="font-semibold text-sm">{isAr ? "English" : "العربية"}</span>
      </button>

      {/* Background Effects */}
      <div className="fixed inset-0 -z-10 bg-slate-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-0 -translate-y-12 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto z-10 mt-12 md:mt-0">
        <div className="flex items-center gap-4 mb-10">
          <Link href="/">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors cursor-pointer ${isAr ? 'rotate-180' : ''}`}
            >
              <FaArrowLeft size={20} />
            </motion.div>
          </Link>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70"
          >
            {t.ourWorks}
          </motion.h1>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-slate-400">{t.noMedia}</p>
          </div>
        ) : (
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.05
                }
              }
            }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
          >
            {items.map((item) => (
              <motion.div
                key={item.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="group relative aspect-square overflow-hidden rounded-2xl bg-white/5 border border-white/10 cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                {item.type === 'video' ? (
                  <video
                    src={item.src}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 pointer-events-none">
                  <span className="font-semibold text-white truncate text-sm">{item.title}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50 p-3 bg-white/10 rounded-full hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedItem(null);
              }}
            >
              <FaTimes size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-6xl w-full max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedItem.type === 'video' ? (
                <video
                  src={selectedItem.src}
                  className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain bg-black/50"
                  controls
                  autoPlay
                  playsInline
                />
              ) : (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
