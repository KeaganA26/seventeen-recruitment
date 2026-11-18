export const site = {
  name: "Seventeen Recruitment",
  shortName: "17",
  tagline: "Education Recruitment Specialists",
  description:
    "Connecting exceptional teachers, support staff and school leaders with schools, trusts and nurseries across the UK. We specialise in permanent, supply and contract recruitment for the education sector.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://seventeen-recruitment.vercel.app",
  email: "hello@seventeenrecruitment.co.uk",
  hours: "Monday to Friday, 09:00 – 17:30 GMT",
  location: "London, United Kingdom",
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    tiktok: "https://tiktok.com",
  },
} as const;

/* DEMO STATS — replace with live figures later */
export const stats = [
  { value: 500, suffix: "+", label: "Candidates" },
  { value: 100, suffix: "+", label: "Schools Supported" },
  { value: 50, suffix: "+", label: "Clients" },
  { value: 1000, suffix: "+", label: "Placements" },
] as const;

export const regions = [
  "Greater London",
  "South East",
  "South West",
  "Midlands",
  "North West",
  "Yorkshire",
  "North East",
  "Scotland",
  "Wales",
  "Northern Ireland",
] as const;

export const jobCategories = [
  "Teaching",
  "Teaching Support",
  "SEN",
  "Leadership",
  "Early Years",
  "School Operations",
] as const;

export const jobTypes = [
  "Permanent",
  "Supply",
  "Long-term supply",
  "Fixed-term",
  "Contract",
  "Maternity cover",
] as const;

export const preferredRoles = [
  "Primary Teacher",
  "Secondary Teacher",
  "Teaching Assistant",
  "SEN Teaching Assistant",
  "HLTA",
  "Cover Supervisor",
  "Early Years Practitioner",
  "SENCO",
  "School Administrator",
  "Head of Department",
] as const;

export const availabilityOptions = [
  "Available immediately",
  "Notice period",
  "Term time only",
  "Day-to-day supply",
  "Long-term supply",
  "Permanent roles",
] as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Meet the Team" },
  { href: "/jobs", label: "Find Jobs" },
  { href: "/employers", label: "For Schools" },
  { href: "/contact", label: "Contact" },
] as const;

export const images = {
  hero: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=2000&q=80",
  staff:
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1600&q=80",
  hospitality:
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80",
  activation:
    "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1600&q=80",
  team: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=80",
  venue:
    "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1600&q=80",
  crowd:
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1600&q=80",
  bartender:
    "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1600&q=80",
  about:
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1800&q=80",
  employers:
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80",
} as const;
