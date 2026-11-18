"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Logo } from "@/components/Logo";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-brand-teal/25 bg-white text-brand-ink transition-all duration-300",
        scrolled ? "shadow-md shadow-brand-ink/10" : "shadow-none"
      )}
    >
      <div className="container-page flex h-20 items-center justify-between gap-4 md:h-24">
        <Logo />

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  active
                    ? "bg-brand-teal text-white"
                    : "text-brand-ink/75 hover:bg-brand-mist hover:text-brand-ink"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/jobs"
            className={cn(
              buttonVariants({ size: "xl" }),
              "bg-brand-coral px-5 text-white hover:bg-brand-coral/90"
            )}
          >
            Browse Jobs
          </Link>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="inline-flex size-11 items-center justify-center rounded-xl border border-brand-teal/30 bg-brand-mist text-brand-ink lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[min(100%,22rem)] bg-white p-0 text-brand-ink">
            <SheetHeader className="border-b border-border p-5">
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              <Logo />
            </SheetHeader>
            <nav className="flex flex-col gap-1 p-4" aria-label="Mobile">
              {navLinks.map((link) => {
                const active =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <SheetClose
                    key={link.href}
                    render={
                      <Link
                        href={link.href}
                        className={cn(
                          "rounded-xl px-4 py-3 text-base font-medium",
                          active
                            ? "bg-brand-teal text-white"
                            : "text-brand-ink/85 hover:bg-brand-mist"
                        )}
                      />
                    }
                  >
                    {link.label}
                  </SheetClose>
                );
              })}
              <SheetClose
                render={
                  <Link
                    href="/jobs"
                    className="mt-3 inline-flex h-12 items-center justify-center rounded-xl bg-brand-coral px-5 text-base font-semibold text-white"
                  />
                }
              >
                Browse Jobs
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
