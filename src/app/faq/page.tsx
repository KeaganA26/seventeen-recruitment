import type { Metadata } from "next";
import { FAQ } from "@/components/FAQ";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about hiring and finding roles with Seventeen Recruitment.",
};

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="Help"
        title="Frequently Asked Questions"
        description="How we work with schools and candidates across the education sector."
      />
      <section className="container-page max-w-4xl py-12 md:py-16">
        <FAQ />
      </section>
    </>
  );
}
