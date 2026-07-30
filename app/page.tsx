"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Shield, Database, BarChart3, ChevronRight, Download, 
  Mail, Phone, MapPin, ExternalLink, Award, BookOpen, Code2 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

// FULL RESUME DATA LOADED
const RESUME_DATA = {
  basics: {
    name: "Darshil Patel",
    label: "Cybersecurity & Data Analyst",
    email: "darshil.patel2001@gmail.com",
    phone: "+1-571-276-3616",
    location: "Arlington, Virginia, USA",
    summary: "Master's student in Cybersecurity at George Washington University with a background in IT and hands-on experience across security, data, and business analysis. Expert in spotting network anomalies and building clean dashboards that translate messy information into stakeholder decisions.",
  },
  skills: {
    "Security Tools": ["Wireshark", "Metasploit", "Burpsuite", "Nmap"],
    "Data & Analysis": ["Python", "SQL", "Tableau", "OpenCV", "Matplotlib", "Excel"],
    "Business Analysis": ["Requirement Gathering", "UML Modeling", "ERD", "SDLC"],
    "Programming": ["Java", "C", "Linux", "JavaScript", "HTML/CSS", "PHP"],
    "Dev Tools": ["Docker", "Git", "VS Code", "IntelliJ", "MySQL", "MongoDB"]
  },
  experience: [
    {
      company: "Community Dreams Foundation",
      role: "Cybersecurity Analyst",
      dates: "August 2026 - Present",
      bullets: [
        "Identified vulnerabilities, implementing security controls, and conducting periodic audits to safeguard organizational assets.",
        "Defined access privileges and control structures aligned with NIST SP 800-53 frameworks while monitoring systems for abnormalities and reporting violations.",
        "Prepared performance reports and communicating system status to stakeholders, driving proactive security improvements for mission-driven, client-facing initiatives."
      ]
    },
    {
      company: "Gujarat Technological University - IDEA Lab",
      role: "AI/ML Intern",
      dates: "Jan 2024 – Apr 2024",
      bullets: [
        "Gathered software requirements and designed UI mockups for a Windows-based Photo Gallery using JavaFX.",
        "Leveraged Python and OpenCV for image processing, using TensorFlow and Keras to optimize models.",
        "Built facial recognition systems from scratch achieving high accuracy metrics."
      ]
    },
    {
      company: "WeTheDevelopers",
      role: "Software Application Development Intern",
      dates: "July 2023 – Aug 2023",
      bullets: [
        "Developed UI prototypes for Windows software applying OOP principles in Java.",
        "Engineered backend storage using MySQL and JDBC, reducing disk volume and enhancing performance.",
        "Engineered a database layer that cut query response time by ~25% through structured indexing."
      ]
    }
  ],
  projects: [
    {
      title: "Facial Emotion Recognition System",
      tech: "Python, OpenCV, TensorFlow, Keras",
      bullets: [
        "Integrated custom-built deep learning networks to evaluate accuracy metrics.",
        "Applied Adam Optimizer in Google Colab GPU environment to refine model weights."
      ]
    },
    {
      title: "Photo Gallery Album",
      tech: "Java, JavaFX, MySQL, JDBC",
      bullets: [
        "Prepared detailed SDLC documentation including functional/non-functional requirements.",
        "Optimized disk usage and structural efficiency via integrated MySQL database."
      ]
    }
  ],
  education: [
    {
      school: "The George Washington University",
      degree: "MS in Cybersecurity",
      date: "May 2026",
      gpa: "3.6/4.0"
    },
    {
      school: "New LJ Institute of Engineering and Technology",
      degree: "B.Tech in Information Technology",
      date: "June 2024",
      gpa: "3.4/4.0"
    }
  ],
  certifications: [
    "Security+ (Sec+) – CompTIA",
    "Certified in Cybersecurity (CC) – ISC2",
    "Foundations of Cybersecurity – Google"
  ]
};

export default function PortfolioPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen text-white selection:bg-blue-500/30">
      <AnimatePresence>
        {loading && <SplashScreen />}
      </AnimatePresence>

      {!loading && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="container mx-auto px-6 py-12"
        >
          {/* HERO SECTION */}
          <section className="min-h-[90vh] flex flex-col justify-center relative">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-mono mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span>SYSTEM READY: DARSHIL_PATEL_PORTFOLIO</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent">
                {RESUME_DATA.basics.name.toUpperCase()}
              </h1>
              
              <p className="max-w-2xl text-xl text-gray-400 mb-10 leading-relaxed">
                {RESUME_DATA.basics.summary}
              </p>

              <div className="flex flex-wrap gap-5">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 text-lg"
                  onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Experience <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="rounded-full px-8 h-14 text-lg border-white/10 hover:bg-white/5 backdrop-blur-sm"
                  onClick={() => window.print()}
                >
                  Download CV <Download className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </motion.div>
          </section>

          {/* IMPACT STRIP */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
            <ImpactCard icon={<Shield />} title="97% Recognition" detail="Facial emotion accuracy" />
            <ImpactCard icon={<Database />} title="-30% Disk Usage" detail="Optimized storage logic" />
            <ImpactCard icon={<Award />} title="CompTIA Sec+" detail="Certified Practitioner" />
          </section>

          {/* EXPERIENCE SECTION */}
          <section id="experience" className="mb-32">
            <SectionHeader number="01" title="Professional Journey" />
            <Accordion type="single" collapsible className="w-full space-y-4">
              {RESUME_DATA.experience.map((exp, index) => (
                <AccordionItem key={index} value={`exp-${index}`} className="border border-white/10 bg-white/5 rounded-2xl overflow-hidden backdrop-blur-md">
                  <AccordionTrigger className="hover:no-underline px-8 py-8">
                    <div className="flex flex-col items-start text-left">
                      <span className="text-blue-400 font-mono text-sm mb-2">{exp.dates}</span>
                      <h4 className="text-2xl font-bold">{exp.role}</h4>
                      <p className="text-gray-400">{exp.company}</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-8 text-gray-400 text-lg">
                    <ul className="space-y-4 pt-4 border-t border-white/10">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-500 mr-4 mt-1.5">/</span> {bullet}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* SKILLS SECTION */}
          <section className="mb-32">
            <SectionHeader number="02" title="Technical Arsenal" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(RESUME_DATA.skills).map(([category, items]) => (
                <Card key={category} className="bg-white/5 border-white/10 backdrop-blur-xl">
                  <CardContent className="p-8">
                    <h4 className="text-blue-400 font-mono text-sm uppercase tracking-widest mb-6">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {items.map(skill => (
                        <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm hover:border-blue-500/50 transition-colors">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* CONTACT FOOTER */}
          <footer className="border-t border-white/10 pt-20 pb-10">
            <div className="flex flex-col md:flex-row justify-between items-start gap-10">
              <div>
                <h2 className="text-4xl font-bold mb-6">Let's Secure the Future.</h2>
                <p className="text-gray-400 max-w-sm mb-8">Currently seeking Cybersecurity or Data Analyst roles where I can contribute from day one.</p>
                <div className="space-y-4">
                  <ContactLink icon={<Mail />} text={RESUME_DATA.basics.email} />
                  <ContactLink icon={<Phone />} text={RESUME_DATA.basics.phone} />
                  <ContactLink icon={<MapPin />} text={RESUME_DATA.basics.location} />
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-mono text-gray-500">© 2024 DARSHIL PATEL</p>
                <p className="text-sm font-mono text-gray-500 mt-2">BUILT WITH NEXT.JS + TAILWIND</p>
              </div>
            </div>
          </footer>
        </motion.div>
      )}
    </div>
  );
}

// SUPPORTING COMPONENTS
function SplashScreen() {
  return (
    <motion.div 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#020204]"
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-5xl font-black tracking-tighter text-white mb-8"
      >
        DP<span className="text-blue-600">.</span>
      </motion.div>
      <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-blue-600"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}

function SectionHeader({ number, title }: { number: string, title: string }) {
  return (
    <div className="flex items-center space-x-6 mb-12">
      <span className="text-blue-500 font-mono text-xl">{number}.</span>
      <h3 className="text-4xl font-bold">{title}</h3>
      <div className="h-[1px] flex-grow bg-white/10" />
    </div>
  );
}

function ImpactCard({ icon, title, detail }: any) {
  return (
    <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm group hover:border-blue-500/50 transition-all">
      <div className="text-blue-500 mb-4 group-hover:scale-110 transition-transform">{icon}</div>
      <h4 className="text-2xl font-bold mb-1">{title}</h4>
      <p className="text-gray-500 text-sm">{detail}</p>
    </div>
  );
}

function ContactLink({ icon, text }: any) {
  return (
    <div className="flex items-center space-x-4 text-gray-400 hover:text-white transition-colors cursor-pointer">
      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
        {React.cloneElement(icon, { size: 18 })}
      </div>
      <span>{text}</span>
    </div>
  );
}
