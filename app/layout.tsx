import "./globals.css";

export const metadata = {
  title: "Kira Decorations",
  description: "Creative designs for your space",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}