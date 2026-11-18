import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { TalentForm } from "@/components/TalentForm";
import { FAQ } from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Join the Talent Network",
  description:
    "Register with Seventeen Recruitment and we'll consider you for teaching, support and school roles that match your experience.",
};

export default function JoinPage() {
  return (
    <>
      <PageHero
        eyebrow="Candidates"
        title="Join the talent network"
        description="Tell us about your experience and the kind of school role you want. We'll keep you in mind for matching vacancies."
      />
      <section className="container-page grid gap-12 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:py-16">
        <div>
          <h2 className="font-heading text-2xl font-bold">Register your interest</h2>
          <p className="mt-3 text-base leading-7 text-muted-foreground">
            Share your CV and the phase, subject or support role you want. We
            use it to match you with schools, trusts and nurseries.
          </p>
          <ul className="mt-6 space-y-3 text-sm leading-6 text-foreground/80">
            <li>Primary and secondary teachers</li>
            <li>Teaching assistants, HLTAs and cover supervisors</li>
            <li>SEN support and early years practitioners</li>
            <li>Leadership and school office roles</li>
          </ul>
          <p className="mt-6 text-sm leading-6 text-muted-foreground">
            Your registration is sent to the recruitment team. A CV stays private
            and is only available to staff reviewing applications.
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-brand-paper p-5 shadow-sm md:p-8">
          <TalentForm />
        </div>
      </section>
      <section className="container-page pb-16">
        <h2 className="font-heading mb-6 text-2xl font-bold">Common questions</h2>
        <FAQ />
      </section>
    </>
  );
}
