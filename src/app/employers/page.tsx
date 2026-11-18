import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { EmployerForm } from "@/components/EmployerForm";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { buttonVariants } from "@/components/ui/button";
import {
  employerSolutions,
  roleGroups,
  whyWorkWithUs,
} from "@/data/content";
import { images } from "@/data/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "For Employers",
  description:
    "Specialist education recruitment for schools, trusts and nurseries. Permanent, supply and contract staff who fit the role.",
};

const story = [
  "At Seventeen Recruitment, we connect schools, trusts and nurseries with the people who make a difference in the classroom and around it.",
  "Finding the right person can change a class, a department or a whole term. We take the time to understand the setting, the pupils and the pressures of the role before we introduce anyone.",
  "Whether you need supply cover, a fixed-term appointment or someone to join the team permanently, we'll help you find a fit that works for the school and the candidate.",
  "Quality over quantity is at the heart of what we do. We learn your brief and your team first. Rather than sending endless CVs, we focus on relevant introductions that save time and give you confidence.",
  "We're proactive, approachable and straightforward to work with. Successful recruitment is built on honest communication, strong relationships and a clear understanding of what both schools and candidates need.",
  "Our goal is to become a recruitment partner you can call whenever a role opens up.",
];

export default function EmployersPage() {
  return (
    <>
      <PageHero
        eyebrow="For employers"
        title="Find the Right People for Your School"
        description="Specialist recruitment for schools, trusts and nurseries. We connect you with permanent, supply and contract staff who fit the role."
        image={{
          src: images.employers,
          alt: "A school leadership team in discussion",
        }}
      />

      <section className="container-page py-16 md:py-20">
        <div className="max-w-3xl">
          <SectionHeading title="Recruitment That Works for Your School" />
          <div className="mt-6 grid gap-5 text-base leading-8 text-muted-foreground">
            {story.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-sand/40">
        <div className="container-page py-16 md:py-20">
          <SectionHeading title="Our recruitment solutions" />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {employerSolutions.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-border bg-brand-paper p-6"
                >
                  <span className="grid size-11 place-items-center rounded-xl bg-brand-ink text-brand-gold">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-heading mt-4 text-xl font-bold">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <SectionHeading title="A More Personal Approach to Recruitment" />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {whyWorkWithUs.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="rounded-2xl border border-border bg-brand-paper p-6"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-brand-ink text-brand-gold">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="font-heading mt-4 text-xl font-bold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-brand-ink text-white">
        <div className="container-page py-16 md:py-20">
          <SectionHeading
            light
            eyebrow="Roles we recruit"
            title="Connecting You With the Right People"
            description="We recruit across teaching, support, SEN, early years, leadership and school operations, matching the experience you need to the role you have open."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {roleGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="font-heading text-xl font-bold">{group.title}</h3>
                <ul className="mt-5 grid gap-3">
                  {group.roles.map((role) => (
                    <li key={role} className="flex gap-3 text-sm leading-6">
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-brand-gold"
                        aria-hidden="true"
                      />
                      <span className="text-white/80">{role}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-7 text-white/70 md:text-base">
            Whether you&apos;re building your permanent team or covering a
            class for a term, we&apos;ll work with you to find people whose
            experience aligns with the role.
          </p>
        </div>
      </section>

      <section className="container-page grid gap-12 py-16 lg:grid-cols-[0.9fr_1.1fr] md:py-20">
        <div>
          <SectionHeading
            eyebrow="For schools"
            title="Tell us what you need"
            description="Share the role, the start date and the setting. The request goes straight to the recruitment team."
          />
        </div>
        <div className="rounded-2xl border border-border bg-brand-paper p-5 shadow-sm md:p-8">
          <EmployerForm />
        </div>
      </section>

      <section className="bg-brand-coral">
        <div className="container-page flex flex-col items-start justify-between gap-8 py-16 md:flex-row md:items-center md:py-20">
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl font-extrabold text-white md:text-4xl">
              Let&apos;s Find Your Next Great Hire
            </h2>
            <p className="mt-4 text-base leading-7 text-white/85 md:text-lg">
              Whether you need a permanent appointment, supply cover or a
              fixed-term post, we&apos;d love to hear from you.
            </p>
            <p className="mt-3 text-base leading-7 text-white/85">
              Tell us what you need, and let&apos;s start a conversation about
              finding the right people for your school.
            </p>
          </div>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "xl" }),
              "bg-brand-ink text-white hover:bg-black"
            )}
          >
            Discuss Your Recruitment Needs
          </Link>
        </div>
      </section>
    </>
  );
}
