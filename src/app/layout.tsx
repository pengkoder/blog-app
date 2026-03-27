import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Blog Pribadi",
    template: "%s | Blog Pribadi",
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
        <footer className="border-t mt-20 py-8 text-center text-sm text-muted-foreground">
          Dibuat dengan Next.js & shadcn/ui
        </footer>
      </body>
    </html>
  );
}
