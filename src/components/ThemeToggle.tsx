"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function applyTheme(dark: boolean) {
  document.documentElement.classList.toggle("dark", dark);
  document.documentElement.style.colorScheme = dark ? "dark" : "light";
  localStorage.setItem("theme", dark ? "dark" : "light");
  window.dispatchEvent(new Event("themechange"));
}

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const sync = () => setDark(document.documentElement.classList.contains("dark"));
    sync();
    window.addEventListener("themechange", sync);
    return () => window.removeEventListener("themechange", sync);
  }, []);

  return (
    <button
      type="button"
      onClick={() => {
        const next = !document.documentElement.classList.contains("dark");
        applyTheme(next);
        setDark(next);
      }}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={dark}
      className="inline-flex size-11 items-center justify-center rounded-xl border border-brand-teal/30 bg-brand-mist text-brand-ink transition-colors hover:bg-brand-sand dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
    >
      {dark ? <Sun className="size-5" /> : <Moon className="size-5" />}
    </button>
  );
}
