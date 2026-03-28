import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Notes",
    template: "%s | Notes",
  },
  description: "Catatan belajar dan tulisan pribadi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body
        className={`${geist.className} min-h-screen bg-background text-foreground`}
      >
        <Navbar />
        <main className="container mx-auto px-4 py-10 max-w-3xl">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
