import type { Metadata } from "next";
import { Fraunces, Inter, Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const kufi = Noto_Kufi_Arabic({
  variable: "--font-kufi",
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "Kira Decoration — Décor Studio, Cairo",
  description:
    "Kira Decoration — event & interior décor studio based in Cairo. Explore our work and get in touch across Instagram, WhatsApp, TikTok and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${kufi.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
