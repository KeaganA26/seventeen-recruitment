import Link from "next/link";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  light = false,
  compact = false,
}: {
  className?: string;
  light?: boolean;
  compact?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-3 rounded-md", className)}
      aria-label={`${site.name} home`}
    >
      <span
        className={cn(
          "grid place-items-center rounded-xl bg-brand-coral font-heading font-extrabold text-white",
          compact ? "size-10 text-base" : "size-12 text-lg",
          light && "bg-white text-brand-ink",
        )}
      >
        17
      </span>
      <span className="leading-tight">
        <span
          className={cn(
            "block font-heading text-base font-bold tracking-tight",
            light ? "text-white" : "text-brand-ink",
          )}
        >
          Seventeen
        </span>
        <span
          className={cn(
            "block text-[0.65rem] font-semibold tracking-[0.18em] uppercase",
            light ? "text-white/70" : "text-muted-foreground",
          )}
        >
          Recruitment
        </span>
      </span>
    </Link>
  );
}
