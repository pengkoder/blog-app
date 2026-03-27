// app/about/page.tsx
import type { Metadata } from "next";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const metadata: Metadata = {
  title: "Tentang",
  description: "Sedikit tentang saya dan blog ini",
};

// Daftar skill — ubah sesuai dirimu
const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "shadcn/ui",
  "Node.js",
];

// Daftar link sosial
const socials = [
  { label: "GitHub", href: "https://github.com/usernamemu" },
  { label: "LinkedIn", href: "https://linkedin.com/in/usernamemu" },
  { label: "Twitter", href: "https://twitter.com/usernamemu" },
];

export default function AboutPage() {
  return (
    <div className="max-w-2xl">
      <section className="flex items-start gap-6 mb-10">
        <Avatar className="h-20 w-20 flex-shrink-0">
          <AvatarImage src="/avatar.jpg" alt="Foto profil" />
          <AvatarFallback className="text-xl font-semibold">NK</AvatarFallback>
        </Avatar>

        <div>
          <h1 className="text-2xl font-bold mb-1">Nama Kamu</h1>
          <p className="text-muted-foreground mb-3">
            Pelajar Next.js · Pembangun hal-hal kecil yang (semoga) berguna
          </p>
          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <Separator className="mb-10" />

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Sedikit tentang saya</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Saya mulai belajar web development karena ingin bisa membangun
            sesuatu dari nol — bukan hanya menggunakan produk orang lain.
            Next.js adalah framework pertama yang benar-benar saya pelajari
            secara serius.
          </p>
          <p>
            Blog ini adalah tempat saya mencatat apa yang saya pelajari. Tulisan
            di sini bukan tutorial resmi — hanya catatan jujur dari seseorang
            yang juga masih belajar.
          </p>
        </div>
      </section>

      <Separator className="mb-10" />

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Sedang dipelajari</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge
              key={skill}
              variant="secondary"
              className="text-sm py-1 px-3"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      <Separator className="mb-10" />

      <section>
        <h2 className="text-xl font-semibold mb-4">Tentang blog ini</h2>
        <div className="space-y-3 text-muted-foreground leading-relaxed">
          <p>
            Blog ini dibangun dengan Next.js App Router, ditulis dalam
            TypeScript, didesain dengan Tailwind CSS dan shadcn/ui, dan artikel
            disimpan sebagai file MDX lokal.
          </p>
          <p>
            Tidak ada database, tidak ada CMS berbayar — semua artikel adalah
            file teks biasa di folder{" "}
            <code
              className="text-foreground
            bg-muted px-1.5 py-0.5 rounded text-sm"
            >
              content/blog/
            </code>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
