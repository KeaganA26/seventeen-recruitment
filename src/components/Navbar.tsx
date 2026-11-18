"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";
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
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const sync = () => setDark(document.documentElement.classList.contains("dark"));
    sync();
    window.addEventListener("themechange", sync);
    return () => window.removeEventListener("themechange", sync);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-brand-teal/25 bg-white text-brand-ink transition-all duration-300 dark:border-white/10 dark:bg-[#0d2826] dark:text-white",
        scrolled ? "shadow-md shadow-brand-ink/10" : "shadow-none"
      )}
    >
      <div className="container-page flex h-20 items-center justify-between gap-4 md:h-24">
        <Logo light={dark} />

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
                    : "text-brand-ink/75 hover:bg-brand-mist hover:text-brand-ink dark:text-white/75 dark:hover:bg-white/10 dark:hover:text-white"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
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

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="inline-flex size-11 items-center justify-center rounded-xl border border-brand-teal/30 bg-brand-mist text-brand-ink lg:hidden dark:bg-white/10 dark:text-white"
            aria-label="Open menu"
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[min(100%,22rem)] bg-white p-0 text-brand-ink dark:bg-[#0d2826] dark:text-white">
            <SheetHeader className="border-b border-border p-5">
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              <Logo light={dark} />
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
                            : "text-brand-ink/85 hover:bg-brand-mist dark:text-white/85 dark:hover:bg-white/10"
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
      </div>
    </header>
  );
}
