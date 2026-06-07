"use client";

import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ExternalLink, Calendar01Icon } from "@hugeicons/core-free-icons";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

// Experience items
const experiences = [
  {
    role: "Software Engineering Intern",
    company: "Byte Edu",
    period: "May 2025 – Present",
    description: "Contributed to scalable backend systems and software solutions. Collaborated with cross-functional teams to design and optimize application features, while improving system performance, reliability, and maintainability through efficient coding practices."
  },
  {
    role: "Research Intern",
    company: "IIT Delhi",
    period: "Dec 2025 – Feb 2026",
    description: "Worked on a specialized project focused on image compression techniques for arthroscopic surgery in medical devices. Implemented and tested solutions using Raspberry Pi 5, optimizing performance for real-time medical applications."
  },
  {
    role: "Vice Chair",
    company: "IEEE IAS, MITS Student Branch Chapter",
    period: "June 2025 – Present",
    description: "Led technical initiatives, workshops, and events to enhance student engagement. Coordinated with faculty and industry professionals for seamless execution of activities, while strengthening the overall technical culture and participation within the student branch."
  }
];

// Education items
const education = {
  degree: "B.Tech in Computer Science and Design",
  institution: "Madhav Institute of Technology & Science, Gwalior",
  period: "Sept 2024 – March 2028",
  gpa: "7.7 GPA",
  details: "Focusing on systems, software engineering, and database systems. Finalist at Smart India Hackathon internal round."
};

// Skill groups
const skillGroups = [
  {
    category: "Programming Languages",
    skills: ["Java", "Python", "C", "JavaScript"]
  },
  {
    category: "Backend Development",
    skills: ["Spring Boot", "Spring MVC", "Spring Security", "REST APIs", "Hibernate ORM", "JPA", "MySQL"]
  },
  {
    category: "Authentication & Security",
    skills: ["JWT (JSON Web Tokens)", "OAuth 2.0", "Spring Security"]
  },
  {
    category: "Testing",
    skills: ["JUnit 5", "Unit Testing", "Integration Testing"]
  },
  {
    category: "AI Engineering (Spring AI)",
    skills: ["Spring AI", "RAG (Retrieval Augmented Generation)", "Vector Databases", "Embeddings", "Prompt Engineering", "LLM Integrations", "OpenAI API", "AI Pipelines"]
  },
  {
    category: "Databases",
    skills: ["MySQL", "Vector Databases"]
  },
  {
    category: "DevOps & Deployment",
    skills: ["Docker", "CI/CD", "Linux", "Spring Boot Deployment"]
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Postman", "Wireshark"]
  },
  {
    category: "Embedded Systems & Hardware",
    skills: ["Raspberry Pi", "Arduino", "ESP32", "MQTT", "HTTP", "WebSocket", "I2C", "UART"]
  }
];

export default function ResumeSection() {
  const [showIeeeGallery, setShowIeeeGallery] = useState(false);
  const [showIitGallery, setShowIitGallery] = useState(false);

  return (
    <section id="resume" className="border-b">
      <div className="mx-auto h-full max-w-5xl border-x">
        {/* Section Header */}
        <div className="flex grow flex-col justify-center border-b bg-linear-to-br from-muted/40 via-background to-muted/20 px-4 py-16 md:items-center">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Resume</p>
          <h2 className="text-3xl md:text-4xl font-bold">Experience &amp; Education</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            My professional timeline, academic background, and technical skillset
          </p>
        </div>

        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border/60">
          {/* Left Column: Experience & Education */}
          <div className="flex flex-col">
            {/* Experience Sub-section */}
            <div className="p-6 border-b border-border/60">
              <div className="flex items-center gap-2 mb-6">
                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <h3 className="text-xl font-heading font-semibold tracking-wide">Work Experience</h3>
              </div>

              <div className="space-y-8 relative before:absolute before:inset-0 before:left-[11px] before:w-0.5 before:bg-border/60">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="relative pl-8 group">
                    {/* Timeline Node */}
                    <div className="absolute left-[7px] top-1.5 h-2.5 w-2.5 rounded-full border border-primary bg-background transition-colors group-hover:bg-primary" />
                    
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <h4 className="text-base font-semibold text-foreground">{exp.role}</h4>
                        <span className="text-xs text-muted-foreground font-mono inline-flex items-center gap-1">
                          <HugeiconsIcon icon={Calendar01Icon} size={12} />
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-primary mb-2">{exp.company}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                      
                      {exp.company === "IIT Delhi" && (
                        <div className="mt-3">
                          <button
                            onClick={() => setShowIitGallery(!showIitGallery)}
                            className="inline-flex items-center gap-1.5 text-xs text-primary hover:text-primary/80 transition-colors font-medium border border-primary/20 bg-primary/5 px-2.5 py-1.5 rounded-sm cursor-pointer"
                          >
                            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {showIitGallery ? "Hide IIT Delhi Photos" : "View IIT Delhi Photos"}
                          </button>

                          {showIitGallery && (
                            <div className="mt-3 grid grid-cols-3 gap-2 transition-all duration-300">
                              <div className="relative overflow-hidden border border-border/40 rounded-sm h-32">
                                <img
                                  src="/projects/iit-delhi-1.jpg"
                                  alt="IIT Delhi Research Internship"
                                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                              <div className="relative overflow-hidden border border-border/40 rounded-sm h-32">
                                <img
                                  src="/projects/iit-delhi-2.jpg"
                                  alt="IIT Delhi Offer Letter"
                                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                              <div className="relative overflow-hidden border border-border/40 rounded-sm h-32">
                                <img
                                  src="/projects/iit-delhi-3.jpg"
                                  alt="IIT Delhi Lab Work"
                                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      {exp.company === "IEEE IAS, MITS Student Branch Chapter" && (
                        <div className="mt-3">
                          <button
                            onClick={() => setShowIeeeGallery(!showIeeeGallery)}
                            className="inline-flex items-center gap-1.5 text-xs text-primary hover:text-primary/80 transition-colors font-medium border border-primary/20 bg-primary/5 px-2.5 py-1.5 rounded-sm cursor-pointer"
                          >
                            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {showIeeeGallery ? "Hide Event Photos" : "View Event Photos"}
                          </button>

                          {showIeeeGallery && (
                            <div className="mt-3 grid grid-cols-2 gap-2 transition-all duration-300">
                              <div className="relative overflow-hidden border border-border/40 rounded-sm h-32">
                                <img
                                  src="/projects/ieee-workshop.png"
                                  alt="IEEE Technical Workshop"
                                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                              <div className="relative overflow-hidden border border-border/40 rounded-sm h-32">
                                <img
                                  src="/projects/ieee-presentation.png"
                                  alt="IEEE Presentation"
                                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Sub-section */}
            <div className="p-6 grow flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-6">
                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
                <h3 className="text-xl font-heading font-semibold tracking-wide">Education</h3>
              </div>

              <div className="border bg-secondary/20 dark:bg-secondary/5 p-5 hover:bg-secondary/40 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h4 className="text-base font-bold text-foreground">{education.degree}</h4>
                  <span className="text-xs text-muted-foreground font-mono inline-flex items-center gap-1">
                    <HugeiconsIcon icon={Calendar01Icon} size={12} />
                    {education.period}
                  </span>
                </div>
                <p className="text-sm font-medium text-primary mb-1">{education.institution}</p>
                <div className="flex items-center gap-2 my-2">
                  <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20 text-xs py-0.5 px-2">
                    {education.gpa}
                  </Badge>
                  <span className="text-xs text-muted-foreground font-medium">B.Tech Student</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2">{education.details}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Skills & Open Source / Achievements */}
          <div className="flex flex-col">
            {/* Skills Sub-section */}
            <div className="p-6 border-b border-border/60 grow">
              <div className="flex items-center gap-2 mb-6">
                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <h3 className="text-xl font-heading font-semibold tracking-wide">Technical Skills</h3>
              </div>

              <div className="space-y-5">
                {skillGroups.map((group, idx) => (
                  <div key={idx} className="space-y-2">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground">
                      {group.category}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {group.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 text-xs bg-secondary hover:bg-primary/10 hover:text-primary transition-colors border border-border/40 font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements & Open Source Sub-section */}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <h3 className="text-xl font-heading font-semibold tracking-wide">Achievements &amp; Contributions</h3>
              </div>

              <div className="space-y-4">
                {/* LeetCode Achievements */}
                <a
                  href="https://leetcode.com/u/Yogesh_Sanodiya/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 border bg-linear-to-br from-background to-secondary/10 hover:border-primary/40 transition-colors group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                      <svg className="h-4 w-4 fill-amber-500" viewBox="0 0 24 24">
                        <path d="M13.483 0a1.374 1.374 0 00-.961.411L7.11 5.826a1.373 1.373 0 00-.411.962V13.5a1.374 1.374 0 00.411.962l5.412 5.412a1.374 1.374 0 001.923 0l5.412-5.412a1.374 1.374 0 00.411-.962V6.788a1.373 1.373 0 00-.411-.962L14.444.41A1.374 1.374 0 0013.483 0zm0 1.923c.18 0 .36.06.495.195l5.12 5.12a.687.687 0 01.205.495V13.06a.687.687 0 01-.205.495l-5.12 5.12a.687.687 0 01-.99 0l-5.12-5.12a.687.687 0 01-.205-.495V7.733a.687.687 0 01.205-.495l5.12-5.12a.687.687 0 01.495-.195zm-3.08 4.417v1.374h6.16v-1.374h-6.16zm0 2.748v1.374h6.16V9.088h-6.16zm0 2.748v1.374h3.422v-1.374h-3.422z" />
                      </svg>
                      LeetCode Profile
                    </span>
                    <HugeiconsIcon icon={ExternalLink} size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold font-mono text-foreground">100+</span>
                    <span className="text-xs text-muted-foreground">problems solved with consistent focus on algorithms and data structures.</span>
                  </div>
                </a>

                {/* Open Source Box */}
                <div className="p-4 border bg-linear-to-br from-background to-secondary/10">
                  <h4 className="text-sm font-bold text-foreground mb-2 flex items-center gap-2">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Open Source Contributions
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Contributed to open-source repositories under <strong className="text-foreground">ChronaLab</strong> and <strong className="text-foreground">Chronos</strong> organizations, focusing on collaborative development, debugging, and feature improvements. Developed <strong className="text-foreground">RTI Generator</strong> and contributed to <strong className="text-foreground">MediPredict</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Technical Focus, Currently Working On, Career Goals, Currently Building */}
        <div className="grid md:grid-cols-2 border-t border-border/60 divide-y md:divide-y-0 md:divide-x divide-border/60">
          {/* Left Column: Technical Focus & Career Goals */}
          <div className="flex flex-col">
            {/* Technical Focus Sub-section */}
            <div className="p-6 border-b border-border/60">
              <div className="flex items-center gap-2 mb-6">
                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                <h3 className="text-xl font-heading font-semibold tracking-wide">Technical Focus</h3>
              </div>

              <div className="space-y-4">
                {[
                  { title: "Backend Development", desc: "Building scalable backend applications using Spring Boot, Spring Security, JWT Authentication, JPA/Hibernate, MySQL, and RESTful APIs." },
                  { title: "AI Engineering", desc: "Working with Spring AI, RAG architectures, LLM integrations, prompt engineering, vector databases, and AI-powered backend systems." },
                  { title: "Testing & Quality", desc: "Unit Testing and Integration Testing using JUnit 5." },
                  { title: "DevOps & Deployment", desc: "Docker, CI/CD pipelines, Linux environments, and production deployment of Spring Boot applications." },
                  { title: "System & Networking", desc: "Linux, Raspberry Pi, Wireshark, network debugging, and system-level development." }
                ].map((focus, idx) => (
                  <div key={idx} className="space-y-1">
                    <h4 className="text-sm font-semibold text-foreground">{focus.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{focus.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Goals Sub-section */}
            <div className="p-6 grow flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-6">
                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <h3 className="text-xl font-heading font-semibold tracking-wide">Career Goals</h3>
              </div>

              <ul className="space-y-3">
                {[
                  "Become a strong Backend and Distributed Systems Engineer.",
                  "Design and build highly scalable backend architectures.",
                  "Develop AI-powered applications and intelligent backend platforms.",
                  "Work on microservices, event-driven systems, and cloud-native architectures.",
                  "Grow into system design, scalability engineering, and platform development."
                ].map((goal, idx) => (
                  <li key={idx} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                    <span className="text-primary select-none font-bold">→</span>
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Currently Working On & Currently Building */}
          <div className="flex flex-col">
            {/* Currently Working On Sub-section */}
            <div className="p-6 border-b border-border/60 grow">
              <div className="flex items-center gap-2 mb-6">
                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-heading font-semibold tracking-wide">Currently Working On</h3>
              </div>

              <ul className="space-y-3">
                {[
                  "Deepening expertise in Spring Boot and scalable backend architecture.",
                  "Learning and implementing Microservices Architecture.",
                  "Exploring Apache Kafka for event-driven communication.",
                  "Working with Spring AI, RAG pipelines, and Vector Databases.",
                  "Building AI-powered backend systems using LLMs.",
                  "Learning Docker, Kubernetes, and production-grade deployment workflows.",
                  "Improving understanding of distributed systems and scalability patterns."
                ].map((work, idx) => (
                  <li key={idx} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                    <span className="text-primary select-none font-bold">•</span>
                    <span>{work}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Currently Building Sub-section */}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <svg className="h-5 w-5 text-primary animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                <h3 className="text-xl font-heading font-semibold tracking-wide">Currently Building</h3>
              </div>

              <div className="border border-primary/20 bg-primary/5 p-5 rounded-sm">
                <p className="text-sm text-foreground leading-relaxed">
                  Developing an AI-powered highly scalable backend platform leveraging Spring Boot, Microservices Architecture, JWT Authentication, Event-Driven Communication, AI Integrations, and modern deployment practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
