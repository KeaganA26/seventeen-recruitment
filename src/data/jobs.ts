export type JobCategory =
  | "Teaching"
  | "Teaching Support"
  | "SEN"
  | "Leadership"
  | "Early Years"
  | "School Operations";

export type Job = {
  id: string;
  slug: string;
  title: string;
  location: string;
  region: string;
  category: JobCategory;
  type: string;
  rate: string;
  date: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  expect: string[];
  positions: number;
  featured: boolean;
  new: boolean;
};

export const sampleJobs: Job[] = [
  {
    id: "job-001",
    slug: "primary-teacher-barnet",
    title: "Primary Teacher",
    location: "Barnet, London",
    region: "Greater London",
    category: "Teaching",
    type: "Permanent",
    rate: "£34,000–£44,000 per annum",
    date: "12 Nov 2026",
    description:
      "A welcoming primary school in Barnet is looking for a classroom teacher to join a supportive team. You will plan and teach across the primary curriculum, know your class well and work closely with teaching assistants and parents.",
    requirements: [
      "Qualified Teacher Status, or equivalent, and the right to work in the UK",
      "Experience teaching in a primary or early key stage setting",
      "A calm, organised classroom presence",
      "Commitment to safeguarding and inclusive practice",
    ],
    responsibilities: [
      "Plan, teach and assess lessons that match the needs of the class",
      "Build positive relationships with pupils, families and colleagues",
      "Contribute to the wider life of the school",
      "Keep records that support progress and handover",
    ],
    expect: [
      "A structured induction and a mentor in the first term",
      "A school that values collaboration over isolated classrooms",
      "A permanent post with a clear line manager",
    ],
    positions: 1,
    featured: true,
    new: true,
  },
  {
    id: "job-002",
    slug: "teaching-assistant-harrow",
    title: "Teaching Assistant",
    location: "Harrow, London",
    region: "Greater London",
    category: "Teaching Support",
    type: "Permanent",
    rate: "£22,000–£26,000 per annum",
    date: "10 Nov 2026",
    description:
      "Support learning in a Harrow primary school, working alongside class teachers with small groups, interventions and the day-to-day rhythm of the classroom.",
    requirements: [
      "Experience supporting children in a school, nursery or similar setting",
      "Patient communication and reliable attendance",
      "Willingness to follow teacher direction and school routines",
      "A current or in-progress DBS check is an advantage",
    ],
    responsibilities: [
      "Support pupils in class, in groups and one to one",
      "Prepare resources and help keep the classroom organised",
      "Feed back observations to the class teacher",
      "Support playtime, transitions and school routines",
    ],
    expect: [
      "Term-time working with a named class teacher",
      "Training on the school’s behaviour and safeguarding approach",
      "A permanent support role within a larger inclusion team",
    ],
    positions: 2,
    featured: true,
    new: true,
  },
  {
    id: "job-003",
    slug: "sen-teaching-assistant-brent",
    title: "SEN Teaching Assistant",
    location: "Brent, London",
    region: "Greater London",
    category: "SEN",
    type: "Permanent",
    rate: "£24,000–£29,000 per annum",
    date: "6 Nov 2026",
    description:
      "A Brent school needs an SEN teaching assistant to support pupils with additional needs in mainstream classes. You will follow agreed strategies, help pupils access learning and work closely with the SENCO and class teachers.",
    requirements: [
      "Experience supporting pupils with SEN, or a strong desire to develop in this area",
      "Calm, consistent communication",
      "Comfortable following education, health and care plan targets",
      "Understanding of confidentiality and safeguarding",
    ],
    responsibilities: [
      "Support named pupils in lessons and around the school day",
      "Use agreed strategies for communication, sensory needs and behaviour",
      "Record progress against targets and share it with the SENCO",
      "Help pupils take part in class alongside their peers",
    ],
    expect: [
      "A briefing on each pupil’s support plan before you start",
      "Regular check-ins with the SENCO",
      "A school that treats inclusion as everyone’s job",
    ],
    positions: 2,
    featured: true,
    new: false,
  },
  {
    id: "job-004",
    slug: "secondary-english-teacher-manchester",
    title: "Secondary English Teacher",
    location: "Manchester",
    region: "North West",
    category: "Teaching",
    type: "Permanent",
    rate: "£36,000–£48,000 per annum",
    date: "4 Nov 2026",
    description:
      "Teach English in a Manchester secondary school with a clear curriculum and a department that plans together. The role covers key stages 3 and 4, with the chance to contribute to enrichment.",
    requirements: [
      "Qualified Teacher Status and a relevant degree",
      "Experience teaching English at key stage 3 or 4",
      "Confident behaviour management and high expectations",
      "Willingness to contribute to the department’s shared planning",
    ],
    responsibilities: [
      "Teach English across the agreed timetable",
      "Assess work in line with the department policy",
      "Communicate with families about progress and concerns",
      "Take part in departmental meetings and development",
    ],
    expect: [
      "A supportive head of department and shared resources",
      "A permanent contract on the school’s pay scale",
      "A timetable shared before you accept the post",
    ],
    positions: 1,
    featured: true,
    new: false,
  },
  {
    id: "job-005",
    slug: "cover-supervisor-birmingham",
    title: "Cover Supervisor",
    location: "Birmingham",
    region: "Midlands",
    category: "Teaching Support",
    type: "Long-term supply",
    rate: "£120–£150 per day",
    date: "1 Nov 2026",
    description:
      "Supervise classes in a Birmingham secondary school when teachers are absent, using set work and keeping the lesson purposeful. This long-term supply post suits someone reliable, organised and comfortable leading a room.",
    requirements: [
      "Experience in a school, or transferable experience working with young people",
      "Confident presence and clear instructions",
      "Able to follow cover work without becoming the subject teacher",
      "Available across the school week for an agreed period",
    ],
    responsibilities: [
      "Collect cover work and set the class up for the lesson",
      "Supervise behaviour and seek support when needed",
      "Leave a short note for the class teacher",
      "Support duties as part of the cover team",
    ],
    expect: [
      "A daily briefing from the cover manager",
      "Set work provided for each lesson",
      "A long-term booking with agreed days",
    ],
    positions: 1,
    featured: true,
    new: false,
  },
  {
    id: "job-006",
    slug: "early-years-practitioner-bristol",
    title: "Early Years Practitioner",
    location: "Bristol",
    region: "South West",
    category: "Early Years",
    type: "Permanent",
    rate: "£24,000–£28,000 per annum",
    date: "28 Oct 2026",
    description:
      "Join an early years team in Bristol supporting nursery and reception children through play, routines and the early years foundation stage. You will work with a room leader and contribute to observations and parent communication.",
    requirements: [
      "A level 3 early years qualification, or equivalent experience",
      "Warm, professional relationships with children and families",
      "Understanding of the early years foundation stage",
      "Reliable and happy to work as part of a small team",
    ],
    responsibilities: [
      "Plan and support play-based learning",
      "Complete observations and contribute to assessments",
      "Maintain a safe, welcoming environment",
      "Share progress with parents and carers",
    ],
    expect: [
      "A key-person approach and a supportive room leader",
      "Paid planning time in line with the setting’s policy",
      "A permanent early years role",
    ],
    positions: 1,
    featured: true,
    new: false,
  },
  {
    id: "job-007",
    slug: "deputy-headteacher-hertfordshire",
    title: "Deputy Headteacher",
    location: "Hertfordshire",
    region: "South East",
    category: "Leadership",
    type: "Permanent",
    rate: "£58,000–£72,000 per annum",
    date: "20 Oct 2026",
    description:
      "A Hertfordshire primary school is appointing a deputy headteacher to lead teaching and learning alongside the head. You will coach staff, keep standards high and be a visible, trusted presence for families.",
    requirements: [
      "Qualified Teacher Status and substantial primary leadership experience",
      "A track record of improving teaching or a phase",
      "Sound judgement on safeguarding and staffing",
      "The ability to lead people without losing the classroom perspective",
    ],
    responsibilities: [
      "Lead teaching and learning across the school",
      "Line-manage staff and support their development",
      "Deputise for the headteacher when required",
      "Contribute to the school’s strategic plan",
    ],
    expect: [
      "A confidential conversation about the school’s current priorities",
      "A leadership team that meets regularly",
      "A permanent leadership post",
    ],
    positions: 1,
    featured: false,
    new: false,
  },
  {
    id: "job-008",
    slug: "school-administrator-leeds",
    title: "School Office Administrator",
    location: "Leeds",
    region: "Yorkshire",
    category: "School Operations",
    type: "Contract",
    rate: "£26,000–£30,000 per annum",
    date: "15 Oct 2026",
    description:
      "Keep a Leeds school office running smoothly on a fixed-term contract. You will be the first point of contact for families, support attendance processes and help the leadership team with day-to-day administration.",
    requirements: [
      "Strong administration experience, ideally in a school or busy public-facing office",
      "Accurate written English and confident phone manner",
      "Discreet handling of personal information",
      "Comfortable with school information systems after training",
    ],
    responsibilities: [
      "Welcome visitors and answer calls and emails",
      "Support attendance, trips and routine parent communication",
      "Prepare documents for the leadership team",
      "Keep office records accurate and up to date",
    ],
    expect: [
      "A handover from the current office team",
      "Training on the school’s systems",
      "A fixed-term contract with a clear end date",
    ],
    positions: 1,
    featured: false,
    new: false,
  },
];

export async function getJobs() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return sampleJobs;
  const { loadJobs } = await import("@/sanity/load-jobs");
  return loadJobs();
}

export async function getJobTypes() {
  const { jobTypes } = await import("@/data/site");
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return [...jobTypes];
  const { loadJobTypes } = await import("@/sanity/load-jobs");
  const types = await loadJobTypes();
  return types.length > 0 ? types : [...jobTypes];
}

export async function getJobBySlug(slug: string) {
  const jobs = await getJobs();
  return jobs.find((job) => job.slug === slug);
}

export async function getFeaturedJobs() {
  const jobs = await getJobs();
  return jobs.filter((job) => job.featured).slice(0, 6);
}

export async function getRelatedJobs(slug: string, limit = 3) {
  const jobs = await getJobs();
  const current = jobs.find((job) => job.slug === slug);
  if (!current) return jobs.slice(0, limit);
  return jobs
    .filter((job) => job.slug !== slug && job.category === current.category)
    .concat(jobs.filter((job) => job.slug !== slug))
    .filter((job, index, list) => list.findIndex((item) => item.id === job.id) === index)
    .slice(0, limit);
}
