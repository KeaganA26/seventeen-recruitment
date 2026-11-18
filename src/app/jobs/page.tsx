import type { Metadata } from "next";
import { JobsExplorer } from "@/components/JobsExplorer";
import { PageHero } from "@/components/PageHero";
import { getJobTypes, getJobs } from "@/data/jobs";

export const metadata: Metadata = {
  title: "Find Jobs",
  description:
    "Explore the latest teaching, support and school roles, from permanent posts to supply and contract cover.",
};

const intro = [
  "Looking for your next role in a school or education setting? You're in the right place.",
  "At Seventeen Recruitment, we connect teachers, support staff and school leaders with opportunities that match their phase, subject and experience. From classroom roles and SEN support to early years, leadership and school operations, we'll help you find a post that fits.",
  "Whether you want a permanent position, long-term supply or a fixed-term contract, explore the latest vacancies and see where your next role could be.",
];

export default async function JobsPage() {
  const [jobs, jobTypes] = await Promise.all([getJobs(), getJobTypes()]);

  return (
    <>
      <PageHero
        eyebrow="Find jobs"
        title="Find Your Next Opportunity"
        description="Explore the latest education roles, from permanent posts to supply and contract cover. Find your next role with Seventeen Recruitment."
      />
      <section className="container-page max-w-3xl pt-12 md:pt-16">
        <div className="grid gap-5 text-base leading-8 text-muted-foreground">
          {intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>
      <section className="container-page py-12 md:py-16">
        <JobsExplorer jobs={jobs} jobTypes={jobTypes} />
      </section>
    </>
  );
}
