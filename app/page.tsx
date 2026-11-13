"use client";

import { Download, ArrowUpRight, GitFork, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

/* ────────────────────────────────────────────────────────────────────────
 * CONTENT CONFIG
 * ────────────────────────────────────────────────────────────────────────
 * Everything rendered below reads from the arrays/objects in this block.
 * To tailor the portfolio for a specific job application before an
 * interview:
 *   1. Reorder PROJECTS — put the 1-2 most relevant builds first; the grid
 *      renders in array order on every screen size.
 *   2. Swap HERO.tag / HERO.subhead to lean into the role's domain
 *      (security, data, AI, or software) without touching any JSX below.
 *   3. Reorder SKILL_GROUPS the same way — first group gets the most
 *      visual weight.
 *   4. STATS and EXPERIENCE rarely need to change, but can be trimmed.
 * ──────────────────────────────────────────────────────────────────────── */

const HERO = {
  tag: "Security — AI — Data — Software",
  name: ["DARSHIL", "PATEL"],
  subhead:
    "Security-minded analyst. AI-literate builder. I ship software that holds up when someone actually audits it — two hackathon wins and a production fintech app to prove it.",
  location: "Arlington, VA",
};

const CODE_CARD = {
  role: "Security / AI / Data / SWE",
  gpa: "3.5",
  certs: ["Security+", "ISC2 CC"],
  shipped: 6,
  status: "open to offers",
};

const STATS = [
  { value: "3.5", label: "GPA, MS Cybersecurity", color: "accent" },
  { value: "6", label: "Tools shipped to production", color: "lime" },
  { value: "2", label: "Hackathon builds", color: "accent" },
  { value: "2", label: "Active certifications", color: "lime" },
] as const;

const EXPERIENCE = [
  {
    role: "Cybersecurity Analyst (Volunteer)",
    org: "Community Dreams Foundation",
    period: "Jul 2026 – Present",
    description:
      "Monitor and triage security findings for nonprofit infrastructure; built a GRC risk dashboard mapping live CVEs and SLA breaches to NIST CSF 2.0 and ISO 27001 controls.",
  },
  {
    role: "HR & Documentation Volunteer",
    org: "Community Dreams Foundation",
    period: "2026 – Present",
    description:
      "Prepare employment and status documentation for volunteers and alumni — cross-functional work outside of a pure technical track.",
  },
  {
    role: "AIML Intern",
    org: "Gujarat Technological University — IDEA Lab",
    period: "Jan 2024 – Apr 2024",
    description:
      "Monitored performance logs and system data to identify anomalies, ensuring reliability and integrity across production systems; maintained structured database records with strict data integrity controls, generating analytical reports to support operational decision-making.",
  },
  {
    role: "Software Application Development Intern",
    org: "WeTheDevelopers",
    period: "Jul 2023 – Aug 2023",
    description:
      "Identified and resolved system inconsistencies through code reviews and log-based performance analysis prior to deployment; analyzed datasets to identify anomalies and performance trends, documenting findings for cross-functional stakeholders.",
  },
] as const;

const PROJECTS = [
  {
    title: "SpecPilot",
    tag: "Agentic QA Hackathon",
    tagColor: "accent",
    description:
      "Autonomous QA agent that reads a product spec, drives a real browser through normal, negative, and boundary scenarios, and reports pass/fail with cited evidence and reproduction steps.",
    href: "https://github.com/pateldarshil8/specpilot",
  },
  {
    title: "AegisReview",
    tag: "CDF CyberSec Hackathon",
    tagColor: "lime",
    description:
      "AI-powered security code review that finds vulnerabilities with Claude, verifies every finding against the real source, and writes a fix-ready report with severity and remediation.",
    href: "https://github.com/pateldarshil8/AegisReview",
  },
  {
    title: "PocketBook",
    tag: "React · Supabase · Plaid",
    tagColor: "accent",
    description:
      "A personal finance app linking every bank and card through Plaid into one dashboard, with AES-256-GCM encryption and row-level security end to end.",
    href: "https://github.com/pateldarshil8/PocketBookV2",
  },
  {
    title: "GRC Risk Dashboard",
    tag: "Python · Streamlit",
    tagColor: "lime",
    description:
      "A live dashboard tracking CVEs, MTTR, and SLA breaches, mapped to NIST CSF 2.0 and ISO 27001 controls.",
    href: "https://github.com/pateldarshil8",
  },
] as const;

const SKILL_GROUPS = [
  {
    label: "SECURITY & GRC",
    color: "accent",
    items: "NIST SP 800-53 · NIST CSF 2.0 · ISO 27001 · Active Directory · Wireshark · Metasploit",
  },
  {
    label: "AI & DATA",
    color: "lime",
    items: "Python · Claude API · SQL · Power BI · Tableau · Pandas",
  },
  {
    label: "ENGINEERING",
    color: "accent",
    items: "TypeScript · React · Next.js · Supabase · Git · Docker",
  },
  {
    label: "BUSINESS ANALYSIS",
    color: "lime",
    items: "Requirement Gathering · UML Modeling · SDLC · Stakeholder Reporting",
  },
] as const;

const EDUCATION = [
  {
    degree: "MS in Cybersecurity",
    school: "The George Washington University",
    period: "May 2026 · GPA 3.5",
  },
  {
    degree: "BTech in Information Technology",
    school: "New LJ Institute of Engineering and Technology",
    period: "GPA 3.4",
  },
];

const CERTIFICATIONS = [
  {
    name: "CompTIA Security+",
    date: "Active",
    href: "https://www.credly.com/badges/176154db-b65a-4e4f-a352-4210c693a97e/public_url",
  },
  {
    name: "ISC2 Certified in Cybersecurity (CC)",
    date: "Active",
    href: "https://www.credly.com/badges/f44b4878-12c0-4cef-a0bd-be81db6fec82/public_url",
  },
];

const CONTACT = {
  email: "darshil.patel2001@gmail.com",
  phone: "+1-571-276-3616",
  location: "Arlington, VA",
  github: "https://github.com/pateldarshil8",
};

/* ──────────────────────────────────────────────────────────────────────── */

function dot(color: "accent" | "lime") {
  return color === "accent" ? "bg-[#6D5BFF]" : "bg-[#C6FF5C]";
}
function textColor(color: "accent" | "lime") {
  return color === "accent" ? "text-[#6D5BFF]" : "text-[#C6FF5C]";
}
function borderColor(color: "accent" | "lime") {
  return color === "accent" ? "border-[#6D5BFF]" : "border-[#C6FF5C]";
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="font-[family-name:var(--font-display)] text-[13px] font-medium tracking-[0.16em] uppercase text-[#C6FF5C]"
    >
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <main className="relative z-10 w-full bg-[#0A0A0D] font-[family-name:var(--font-body)] text-[#F2F2F5]">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-24 px-5 pb-28 pt-8 sm:px-8 lg:gap-28 lg:px-14 lg:pb-36 lg:pt-10">
        {/* NAV */}
        <nav className="flex items-center justify-between">
          <span className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-wide">
            DP /
          </span>
          <div className="flex items-center gap-5 text-sm text-[#B4B4BC] sm:gap-8">
            <a href="#work" className="hidden transition hover:opacity-75 sm:inline">
              Work
            </a>
            <a href="#stack" className="hidden transition hover:opacity-75 sm:inline">
              Stack
            </a>
            <a href="#contact" className="hidden transition hover:opacity-75 sm:inline">
              Contact
            </a>
            <Button
              asChild
              className="rounded-md bg-[#6D5BFF] px-4 py-2 h-auto text-sm font-semibold text-[#0A0A0D] hover:bg-[#6D5BFF]/90"
            >
              <a href="/resume.pdf" download="Darshil-Patel-Resume.pdf">
                Résumé
              </a>
            </Button>
          </div>
        </nav>

        {/* HERO */}
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div className="flex flex-col gap-7">
            <SectionLabel>{HERO.tag}</SectionLabel>
            <h1 className="font-[family-name:var(--font-display)] text-[13vw] font-semibold leading-[0.98] tracking-tight sm:text-[64px] lg:text-[76px]">
              {HERO.name[0]}
              <br />
              <span className="[-webkit-text-stroke:2px_#6D5BFF] text-[#0A0A0D]">
                {HERO.name[1]}
              </span>
            </h1>
            <p className="max-w-[560px] text-base leading-relaxed text-[#C7C7CF] sm:text-lg lg:max-w-[520px]">
              {HERO.subhead}
            </p>
            <div className="mt-1 flex flex-wrap items-center gap-4">
              <Button
                asChild
                className="h-auto rounded-md bg-[#6D5BFF] px-7 py-3.5 text-[15px] font-semibold text-[#0A0A0D] hover:bg-[#6D5BFF]/90"
              >
                <a href="#work">See the work</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-auto rounded-md border-[#3A3A42] px-7 py-3.5 text-[15px] font-semibold text-[#F2F2F5] hover:bg-white/5"
              >
                <a href="/resume.pdf" download="Darshil-Patel-Resume.pdf">
                  Download résumé <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Code card — desktop only, matches approved "Bold Signal — Desktop" concept */}
          <div className="hidden rounded-[14px] border border-[#2A2A30] bg-[#111114] p-7 font-[family-name:var(--font-mono)] text-[13px] leading-[1.9] text-[#B4B4BC] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] lg:block">
            <div className="mb-4 flex gap-2">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#FF5C7A]" />
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#FFB020]" />
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#C6FF5C]" />
            </div>
            <div>
              <span className="text-[#6D5BFF]">const</span> candidate = {"{"}
            </div>
            <div className="pl-5">
              role: <span className="text-[#C6FF5C]">&quot;{CODE_CARD.role}&quot;</span>,
            </div>
            <div className="pl-5">
              gpa: <span className="text-[#C6FF5C]">{CODE_CARD.gpa}</span>,
            </div>
            <div className="pl-5">
              certs: [
              {CODE_CARD.certs.map((c, i) => (
                <span key={c}>
                  <span className="text-[#C6FF5C]">&quot;{c}&quot;</span>
                  {i < CODE_CARD.certs.length - 1 ? ", " : ""}
                </span>
              ))}
              ],
            </div>
            <div className="pl-5">
              shipped: <span className="text-[#C6FF5C]">{CODE_CARD.shipped}</span>,
            </div>
            <div className="pl-5">
              status: <span className="text-[#6D5BFF]">&quot;{CODE_CARD.status}&quot;</span>
            </div>
            <div>{"}"};</div>
          </div>
        </div>

        {/* STAT STRIP */}
        <div className="grid grid-cols-2 border-y border-[#2A2A30] sm:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`px-2 py-7 sm:px-6 sm:py-9 ${
                i < STATS.length - 1 ? "sm:border-r sm:border-[#2A2A30]" : ""
              } ${i % 2 === 0 ? "border-r border-[#2A2A30] sm:border-r" : ""}`}
            >
              <p
                className={`font-[family-name:var(--font-display)] text-[36px] font-semibold sm:text-[44px] ${textColor(
                  s.color
                )}`}
              >
                {s.value}
              </p>
              <p className="mt-2 text-[13px] text-[#9A9AA2]">{s.label}</p>
            </div>
          ))}
        </div>

        {/* EXPERIENCE */}
        <div className="flex flex-col gap-8">
          <h2 className="font-[family-name:var(--font-display)] text-[28px] font-semibold sm:text-[32px]">
            Experience
          </h2>
          <div className="flex flex-col">
            {EXPERIENCE.map((item) => (
              <div
                key={item.role}
                className="flex flex-col gap-2 border-t border-[#2A2A30] py-6 sm:flex-row sm:gap-8"
              >
                <div className="flex-none sm:w-[260px]">
                  <h3 className="text-[17px] font-semibold">{item.role}</h3>
                  <p className="mt-1 text-[12px] uppercase tracking-wide text-[#6D5BFF]">
                    {item.org} · {item.period}
                  </p>
                </div>
                <p className="flex-1 text-[15px] leading-relaxed text-[#B4B4BC]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SELECTED WORK */}
        <div id="work" className="flex flex-col gap-8">
          <div className="flex items-baseline justify-between">
            <h2 className="font-[family-name:var(--font-display)] text-[28px] font-semibold sm:text-[32px] lg:text-[38px]">
              Selected Work
            </h2>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-1 border-b border-[#3A3A42] text-sm text-[#B4B4BC] transition hover:opacity-75 sm:flex"
            >
              View all projects <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROJECTS.map((p) => (
              <a
                key={p.title}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className={`group flex min-h-[200px] flex-col gap-3.5 rounded-sm border-l-[3px] bg-[#141417] p-6 transition hover:bg-[#1A1A1E] ${borderColor(
                  p.tagColor
                )}`}
              >
                <p className={`text-[12px] uppercase tracking-wide ${textColor(p.tagColor)}`}>
                  {p.tag}
                </p>
                <h3 className="flex items-center gap-1.5 text-[19px] font-semibold">
                  {p.title}
                  <ArrowUpRight className="h-4 w-4 text-[#9A9AA2] opacity-0 transition group-hover:opacity-100" />
                </h3>
                <p className="text-[13.5px] leading-relaxed text-[#B4B4BC]">{p.description}</p>
              </a>
            ))}
          </div>
        </div>

        {/* STACK */}
        <div id="stack" className="flex flex-col gap-8">
          <h2 className="font-[family-name:var(--font-display)] text-[28px] font-semibold sm:text-[32px] lg:text-[38px]">
            Stack
          </h2>
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {SKILL_GROUPS.map((group) => (
              <div
                key={group.label}
                className={`flex flex-col gap-3 border-t-2 pt-4 ${borderColor(group.color)}`}
              >
                <span className={`text-[13px] font-semibold ${textColor(group.color)}`}>
                  {group.label}
                </span>
                <span className="text-[14px] leading-[1.8] text-[#D4D4DA]">{group.items}</span>
              </div>
            ))}
          </div>
        </div>

        {/* EDUCATION & CERTIFICATIONS */}
        <div className="flex flex-col gap-8">
          <h2 className="font-[family-name:var(--font-display)] text-[28px] font-semibold sm:text-[32px]">
            Education &amp; Licensure
          </h2>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-5 rounded-[10px] border border-[#2A2A30] bg-[#111114] p-6">
              <span className="text-[13px] font-semibold tracking-wide text-[#6D5BFF]">
                EDUCATION
              </span>
              {EDUCATION.map((e) => (
                <div key={e.degree}>
                  <p className="text-[15px] font-semibold">{e.degree}</p>
                  <p className="mt-1 text-[13.5px] text-[#B4B4BC]">{e.school}</p>
                  <p className="mt-0.5 text-[12.5px] text-[#9A9AA2]">{e.period}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-5 rounded-[10px] border border-[#2A2A30] bg-[#111114] p-6">
              <span className="text-[13px] font-semibold tracking-wide text-[#C6FF5C]">
                CERTIFICATIONS
              </span>
              {CERTIFICATIONS.map((c) => (
                <a
                  key={c.name}
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-4 transition hover:opacity-80"
                >
                  <p className="flex items-center gap-1.5 text-[15px] font-semibold">
                    {c.name}
                    <ArrowUpRight className="h-3.5 w-3.5 text-[#9A9AA2] opacity-0 transition group-hover:opacity-100" />
                  </p>
                  <p className="text-[12.5px] text-[#9A9AA2]">{c.date}</p>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* CONTACT */}
        <div
          id="contact"
          className="flex flex-col gap-8 border-t border-[#2A2A30] pt-14 sm:flex-row sm:items-center sm:justify-between sm:gap-10"
        >
          <h2 className="font-[family-name:var(--font-display)] max-w-[480px] text-[28px] font-semibold sm:text-[32px] lg:text-[38px]">
            Let&apos;s build something that holds up.
          </h2>
          <div className="flex flex-col gap-3 text-[15px] text-[#D4D4DA] sm:items-end">
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-2 text-[#6D5BFF] transition hover:opacity-75"
            >
              <Mail className="h-4 w-4" /> {CONTACT.email}
            </a>
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-[#9A9AA2]" /> {CONTACT.phone}
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#9A9AA2]" /> {CONTACT.location}
            </span>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-[#6D5BFF] transition hover:opacity-75"
            >
              <GitFork className="h-4 w-4" /> GitHub <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <p className="pt-4 text-center text-[12.5px] text-[#6A6A72]">
          © 2026 Darshil Patel. Built with Next.js &amp; Tailwind.
        </p>
      </div>
    </main>
  );
}
