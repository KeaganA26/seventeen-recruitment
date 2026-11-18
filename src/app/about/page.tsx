import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { images } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Recruitment built around people, relationships and a clear understanding of schools and education settings.",
};

const paragraphs = [
  "At Seventeen Recruitment, we specialise in connecting exceptional teachers, support staff and school leaders with the right schools, trusts and nurseries.",
  "We understand that great recruitment is about more than matching a CV to a job description. It's about understanding people, recognising potential and building relationships that work for both the setting and the candidate.",
  "We take a tailored, relationship-led approach. We work closely with schools to understand their teams, culture and the class or role they need to fill, while helping professionals find opportunities that match their phase, subject and ambitions.",
  "From classroom teaching, teaching assistance and SEN support to early years, leadership and school operations, we connect the right people with the right opportunities.",
  "Whether you're a school looking for someone who will settle well, or a professional ready for your next move, we're here to make the process straightforward, personal and effective.",
  "We recruit for permanent, supply and contract roles, so schools can cover a vacancy properly and candidates can find work that fits.",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="About Seventeen Recruitment"
        description="Recruitment built around people, relationships and a real understanding of schools."
        image={{
          src: images.about,
          alt: "A classroom with pupils and their teacher",
        }}
      />

      <section className="container-page py-16 md:py-20">
        <div className="grid max-w-3xl gap-5 text-base leading-8 text-muted-foreground">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="bg-brand-ink">
        <div className="container-page py-20 md:py-24">
          <p className="text-xs font-semibold tracking-[0.22em] text-brand-gold uppercase">
            Seventeen Recruitment
          </p>
          <p className="font-heading mt-4 max-w-3xl text-3xl font-extrabold text-white md:text-5xl">
            It&apos;s all about people. The right connections make all the
            difference.
          </p>
        </div>
      </section>
    </>
  );
}
