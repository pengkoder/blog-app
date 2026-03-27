// components/layout/Navbar.tsx
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";

const links = [
  { label: "Beranda", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Tentang", href: "/about" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 max-w-3xl flex h-14 items-center">
        <a href="/" className="font-semibold text-base mr-6">
          Blog Pribadi
        </a>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-1">
            {links.map((link) => (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink
                  href={link.href}
                  className={cn(
                    "px-3 py-2 text-sm rounded-md text-muted-foreground",
                    "hover:text-foreground hover:bg-accent transition-colors",
                  )}
                >
                  {link.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Hamburger menu — hanya muncul di mobile, didorong ke kanan */}
        <div className="ml-auto md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
