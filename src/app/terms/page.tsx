import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Placeholder terms and conditions for Seventeen Recruitment. This page requires final legal review before launch.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description="These placeholder terms describe how the demo website is intended to work. They need final legal review before launch."
      />
      <article className="container-page max-w-3xl space-y-8 py-12 leading-7 text-muted-foreground md:py-16">
        <section>
          <h2 className="font-heading text-2xl font-bold text-foreground">
            Using this website
          </h2>
          <p className="mt-3">
            This website is operated by Seventeen Recruitment. Content is
            provided to help candidates find education work and to help schools
            request staff. Job listings shown before a CMS is connected are
            sample data.
          </p>
        </section>
        <section>
          <h2 className="font-heading text-2xl font-bold text-foreground">
            Applications and enquiries
          </h2>
          <p className="mt-3">
            Submitting an application, talent registration or employer enquiry
            does not guarantee placement or staff availability. In production,
            submissions will be reviewed by the recruitment team.
          </p>
        </section>
        <section>
          <h2 className="font-heading text-2xl font-bold text-foreground">
            Accuracy
          </h2>
          <p className="mt-3">
            Rates, dates and role details may change. Confirmed bookings will
            always be communicated directly to successful candidates and
            clients.
          </p>
        </section>
        <p className="rounded-2xl bg-brand-sand/70 p-5 text-sm text-foreground">
          These terms are a placeholder for the customer demo and should be
          replaced with a legally reviewed document before launch.
        </p>
      </article>
    </>
  );
}
