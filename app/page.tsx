"use client";
import "./style.css";
import { useEffect, useState } from "react";

export default function Home() {
  const texts = ["Modern Designs", "Luxury Touch", "Creative Ideas"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="main">

      <div className="bg"></div>

      <section className="card">

        <img src="/logo.png" alt="logo" className="logo" />

        <h1>KiraDecorations</h1>

        <p className="tagline">
          {texts[index]} ✨
        </p>

        <div className="buttons">
          <a href="https://wa.me/+201112801502"> WhatsApp</a>
          <a href="https://www.instagram.com/kira.decoration/"> Instagram</a>
          <a href="https://www.tiktok.com/@kira.decoration4"> TikTok</a>
          <a href="https://www.facebook.com/decorkira"> Facebook</a>
          <a href="https://maps.app.goo.gl/PRAx1nZA2jNb678h7"> Location</a>
        </div>

      </section>

      {/* CTA */}
      <section className="cta">
       <a href="https://wa.me/+201112801502">💬 Contact Us</a>
        <h2>Start your dream design now ✨</h2>

      </section>

    </main>
  );
}