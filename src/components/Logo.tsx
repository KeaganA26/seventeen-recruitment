import Image from "next/image";
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
      className={cn("inline-flex shrink-0 rounded-md", className)}
      aria-label={`${site.name} home`}
    >
      <Image
        src="/logo.png"
        alt="Seventeen Recruitment — Education Specialists"
        width={512}
        height={340}
        priority
        className={cn(
          "h-16 w-auto sm:h-[4.75rem]",
          compact && "h-14 sm:h-16",
          light && "brightness-0 invert",
        )}
      />
    </Link>
  );
}
