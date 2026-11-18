import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
      <p className="text-xs font-semibold tracking-[0.22em] text-brand-coral uppercase">
        404
      </p>
      <h1 className="font-heading mt-4 max-w-xl text-4xl font-extrabold md:text-5xl">
        This page is not on the site.
      </h1>
      <p className="mt-4 max-w-md text-base leading-7 text-muted-foreground">
        The link may be out of date. Head back home or browse the current
        education vacancies.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className={cn(
            buttonVariants({ size: "xl" }),
            "bg-brand-coral text-white hover:bg-brand-coral/90"
          )}
        >
          Back Home
        </Link>
        <Link
          href="/jobs"
          className={cn(buttonVariants({ size: "xl", variant: "outline" }))}
        >
          Browse Jobs
        </Link>
      </div>
    </section>
  );
}
