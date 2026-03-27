"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const links = [
  { label: "Beranda", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Tentang", href: "/about" },
];

function HamburgerIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <line x1="2" y1="4.5" x2="16" y2="4.5" />
      <line x1="2" y1="9" x2="16" y2="9" />
      <line x1="2" y1="13.5" x2="16" y2="13.5" />
    </svg>
  );
}

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden" // hanya muncul di layar < md (768px)
          aria-label="Buka menu navigasi"
        >
          <HamburgerIcon />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-64 p-0">
        <SheetHeader className="px-6 py-5 border-b">
          <SheetTitle className="text-left text-base font-semibold">
            Blog Pribadi
          </SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col px-3 py-4 gap-1">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)} // tutup menu setelah klik
                className={cn(
                  "flex items-center px-3 py-2.5 rounded-md text-sm",
                  "transition-colors",
                  isActive
                    ? "bg-accent text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent",
                )}
              >
                {link.label}
                {isActive && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-foreground" />
                )}
              </a>
            );
          })}
        </nav>

        <Separator />

        <div className="px-6 py-4">
          <p className="text-xs text-muted-foreground">
            Dibuat dengan Next.js & shadcn/ui
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
