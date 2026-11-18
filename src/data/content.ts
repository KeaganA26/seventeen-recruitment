import {
  GraduationCap,
  BookOpen,
  Users,
  HeartHandshake,
  Baby,
  ClipboardCheck,
  School,
  Shield,
  Briefcase,
  Library,
  CalendarRange,
  Layers,
  Compass,
  BadgeCheck,
  MessagesSquare,
} from "lucide-react";

export const staffCategories = [
  {
    title: "Primary Teachers",
    description: "Classroom teachers for key stages 1 and 2, including ECT and experienced hires.",
    icon: GraduationCap,
  },
  {
    title: "Secondary Teachers",
    description: "Subject specialists across the secondary curriculum, from core subjects to options.",
    icon: BookOpen,
  },
  {
    title: "Teaching Assistants",
    description: "Classroom support, interventions and one-to-one roles in mainstream settings.",
    icon: Users,
  },
  {
    title: "SEN Support",
    description: "LSAs, SEN teaching assistants and specialist support for pupils with additional needs.",
    icon: HeartHandshake,
  },
  {
    title: "Early Years",
    description: "Practitioners, room leaders and nursery teachers for schools and early years settings.",
    icon: Baby,
  },
  {
    title: "Cover Supervisors",
    description: "Reliable cover for planned and short-notice absence across the school day.",
    icon: ClipboardCheck,
  },
  {
    title: "School Leadership",
    description: "Heads of department, assistant heads, deputies and other leadership appointments.",
    icon: School,
  },
  {
    title: "Safeguarding",
    description: "Pastoral, DSL support and roles where safeguarding practice is central.",
    icon: Shield,
  },
  {
    title: "School Operations",
    description: "Office, administration, exams and the teams that keep a school running.",
    icon: Library,
  },
  {
    title: "Supply Staff",
    description: "Day-to-day and long-term supply for schools that need trusted cover quickly.",
    icon: Briefcase,
  },
] as const;

export const candidateBenefits = [
  {
    title: "Specialists in education",
    description: "We focus on schools and education settings, so we understand your phase, subject and experience.",
  },
  {
    title: "Permanent, supply and contract",
    description: "From your next permanent post to supply and fixed-term cover that fits around you.",
  },
  {
    title: "A personal approach",
    description: "We take the time to understand your goals, strengths and the kind of school you want next.",
  },
  {
    title: "Opportunities that fit",
    description: "We only put you forward for roles that genuinely match your experience and ambitions.",
  },
  {
    title: "Honest advice",
    description: "Open, straightforward guidance on roles, salaries and the education market.",
  },
  {
    title: "Support at every step",
    description: "From the first conversation through interviews, offers and your start date.",
  },
] as const;

export const employerSolutions = [
  {
    title: "Permanent Recruitment",
    description:
      "Find the right people to strengthen your staff team for the long term. We take the time to understand your school, trust and requirements, then introduce professionals who can make a lasting impact.",
    icon: Briefcase,
  },
  {
    title: "Supply & Contract Cover",
    description:
      "Access experienced teachers and support staff when you need cover. From day-to-day supply and long-term absence to maternity cover and fixed-term posts, we help you keep learning on track.",
    icon: CalendarRange,
  },
  {
    title: "Flexible Staffing",
    description:
      "Every school has a different timetable and a different pressure point. We work with you to fill changing workloads, new classes and roles that do not fit a standard advert.",
    icon: Layers,
  },
] as const;

export const whyWorkWithUs = [
  {
    title: "Education Sector Knowledge",
    description:
      "We understand schools, the roles within them and the experience needed to succeed in the classroom and around it. That insight helps us introduce people who fit the brief and the setting.",
    icon: Compass,
  },
  {
    title: "People First, Always",
    description:
      "The best recruitment starts with relationships. By getting to know your school and your priorities, we make hiring more personal and more considered.",
    icon: HeartHandshake,
  },
  {
    title: "Quality Over Quantity",
    description:
      "Your time matters. We focus on relevant, carefully selected candidates rather than sending CVs that do not fit the role.",
    icon: BadgeCheck,
  },
  {
    title: "Straightforward & Responsive",
    description:
      "Recruitment does not need to be complicated. We keep communication clear, stay proactive and are easy to work with from the first conversation.",
    icon: MessagesSquare,
  },
] as const;

export const roleGroups = [
  {
    title: "Teaching & Classroom Support",
    roles: [
      "Primary & Secondary Teachers",
      "Early Career & Experienced Teachers",
      "Teaching Assistants & HLTAs",
      "Cover Supervisors",
      "Early Years Practitioners & Nursery Teachers",
      "Supply Teachers for day-to-day and long-term cover",
    ],
  },
  {
    title: "SEN, Leadership & School Teams",
    roles: [
      "SEN Teaching Assistants & LSAs",
      "SENCOs & Specialist Support Staff",
      "Heads of Department & Subject Leads",
      "Assistant, Deputy & Headteacher appointments",
      "Pastoral, Safeguarding & Inclusion Roles",
      "School Administration & Operations",
    ],
  },
] as const;

export const faqs = [
  {
    question: "What do you specialise in?",
    answer:
      "We specialise in education recruitment, connecting schools, trusts, nurseries and other education settings with teachers, teaching assistants, SEN staff, early years practitioners, leaders and school support teams. We work with mainstream schools, specialist settings and multi-academy trusts.",
  },
  {
    question: "Do you recruit for permanent and supply roles?",
    answer:
      "Yes. We support permanent appointments, fixed-term and maternity cover, long-term supply and day-to-day supply. Tell us whether you are hiring or looking for work, and we will talk through what is realistic for the role and the timescale.",
  },
  {
    question: "How do I get started if I am looking to hire?",
    answer:
      "Get in touch and tell us about your school or trust, the role you need to fill and when you need someone in place. We will discuss the brief, answer questions and agree the next steps.",
  },
  {
    question: "How do I register as a candidate?",
    answer:
      "Browse the latest vacancies and apply for roles that match your experience, or send us your CV and a short note about the phase, subject or support role you want. We will keep your details for relevant opportunities, subject to your consent.",
  },
  {
    question: "What if I cannot find a suitable job on the website?",
    answer:
      "Not every vacancy is advertised, and the list changes as schools confirm new needs. If nothing fits today, join the talent network with your CV and preferences. We will consider you when a matching role comes in.",
  },
  {
    question: "How do you match candidates with schools?",
    answer:
      "We look beyond job titles. We talk to candidates about phase, subject, setting, safeguarding experience and what they want next, and we talk to schools about the class, the team and the culture. The aim is a relevant introduction for both sides.",
  },
  {
    question: "How quickly can you fill a vacancy?",
    answer:
      "Supply cover can sometimes be arranged quickly when a suitable candidate is available. Permanent and leadership appointments usually need a longer search and an interview process. We agree priorities with you and keep you updated.",
  },
  {
    question: "Which locations do you recruit in?",
    answer:
      "We support education recruitment across the UK, with each search shaped by the school’s location and the candidate’s travel preferences. Contact us to talk about your area, whether you are hiring or looking for your next role.",
  },
] as const;
