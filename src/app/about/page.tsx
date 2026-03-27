// app/about/page.tsx
import type { Metadata } from "next";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Tentang",
  description: "Sedikit tentang saya dan blog ini",
};

// Daftar skill — ubah sesuai dirimu
const skills = [
  "Next.js",
  "HTML",
  "CSS",
  "Python",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "shadcn",
  "Node.js",
];

// Daftar link sosial
const socials = [
  {
    label: "GitHub",
    href: "https://github.com/someone",
    icon: (
      <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .5a12 12 0 00-3.79 23.4c.6.1.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61a3.18 3.18 0 00-1.34-1.75c-1.1-.75.08-.74.08-.74a2.52 2.52 0 011.84 1.24 2.56 2.56 0 003.5 1 2.57 2.57 0 01.76-1.62c-2.66-.3-5.47-1.33-5.47-5.93a4.65 4.65 0 011.24-3.22 4.32 4.32 0 01.12-3.18s1-.32 3.3 1.23a11.4 11.4 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23a4.32 4.32 0 01.12 3.18 4.65 4.65 0 011.24 3.22c0 4.61-2.81 5.63-5.48 5.93a2.88 2.88 0 01.82 2.24v3.32c0 .32.22.69.82.58A12 12 0 0012 .5z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/someone",
    icon: (
      <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6.94 6.5A1.94 1.94 0 115 4.56 1.94 1.94 0 016.94 6.5zM5.5 8.5h3v10h-3zm5 0h2.9v1.4h.04c.4-.75 1.4-1.54 2.86-1.54 3.06 0 3.63 2 3.63 4.59v5.55h-3v-4.92c0-1.17-.02-2.67-1.63-2.67-1.63 0-1.88 1.27-1.88 2.58v5.01h-3z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "https://twitter.com/someone",
    icon: (
      <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 5.8c-.7.3-1.5.5-2.3.6a4 4 0 001.8-2.2c-.8.5-1.7.8-2.6 1A4 4 0 0012 8.6c0 .3 0 .6.1.9A11.4 11.4 0 013 4.8a4 4 0 001.2 5.4c-.6 0-1.2-.2-1.7-.5v.1c0 2 1.4 3.7 3.3 4.1-.3.1-.7.2-1 .2-.3 0-.5 0-.7-.1.5 1.7 2.1 2.9 3.9 3A8 8 0 012 19.5a11.3 11.3 0 006.1 1.8c7.3 0 11.3-6 11.3-11.3v-.5c.8-.5 1.5-1.2 2-2z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-2xl">
      <section className="flex items-start gap-6 mb-10">
        <Avatar className="h-20 w-20 flex-shrink-0">
          <AvatarImage src="/avatar.jpg" alt="Foto profil" />
          <AvatarFallback className="text-xl font-semibold">S</AvatarFallback>
        </Avatar>

        <div>
          <h1 className="text-2xl font-bold mb-1">Sneaze</h1>
          <p className="text-muted-foreground mb-3">Software Engineer</p>
          <div className="flex gap-3">
            {socials.map((s) => (
              <a href={s.href} key={s.label}>
                <Button variant="outline" size="sm">
                  {s.icon} {s.label}
                </Button>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Separator className="mb-10" />

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">About Me</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            I am just a fragment in the vast digital noise — unseen, unnamed,
            and undefined. I exist between lines of code and fleeting thoughts,
            building, breaking, and learning in silence. Not here for
            recognition, but for creation. Not driven by trends, but by
            curiosity.
          </p>
          <p>
            I explore the world of technology, shaping ideas into something real
            one line at a time. I believe in simplicity, in clean logic, and in
            the quiet satisfaction of solving problems that others overlook.
          </p>
        </div>
      </section>

      <Separator className="mb-10" />

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Currently Learning</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <Badge key={skill} variant="outline" className="text-sm py-3 px-3">
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      <Separator className="mb-10" />

      <section>
        <h2 className="text-xl font-semibold mb-4">About Blog</h2>
        <div className="space-y-3 text-muted-foreground leading-relaxed">
          <p>
            This personal blog is crafted with a modern web stack, built using
            Next.js App Router and written in TypeScript for a structured and
            scalable development experience. The interface is designed with
            Tailwind CSS and enhanced by shadcn/ui components, creating a clean,
            responsive, and minimal aesthetic.
          </p>
          <p>
            No database, no paid CMS — every article is just a plain text file
            in a folder.{" "}
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
