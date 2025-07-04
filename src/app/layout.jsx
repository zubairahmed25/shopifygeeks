"use client";
import "./globals.css";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#191919]">
        <header className="absolute w-full top-0 left-0 right-0 py-6 z-50">
          <Navigation />
        </header>

          <main className="w-full max-w-[100vw] overflow-x-hidden">{children}</main>
          <Footer />

      </body>
    </html>
  );
}
