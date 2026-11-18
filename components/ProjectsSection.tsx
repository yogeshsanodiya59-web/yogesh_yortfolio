import { HugeiconsIcon } from "@hugeicons/react";
import { Github01Icon, ExternalLink, LockIcon } from "@hugeicons/core-free-icons";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { TechIcons } from "./icons/TechIcons";
import { cn } from "@/lib/utils";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "RideMatch Engine",
    type: "distributed systems",
    description: "A backend-focused distributed system that demonstrates how modern ride-hailing platforms assign nearby drivers within seconds. Instead of recreating an entire ride-booking application, this project focuses on solving the driver matching problem using scalable backend technologies and event-driven architecture. Uses Redis GEO for high-performance geospatial queries and Apache Kafka for asynchronous communication between microservices, enabling fast, loosely coupled driver assignment upon creating ride requests.",
    image: "/projects/ridematch-engine.png",
    technologies: [
      { name: "Java", icon: "", url: "https://www.java.com", iconKey: "Java" },
      { name: "Spring Boot", icon: "", url: "https://spring.io/projects/spring-boot", iconKey: "SpringBoot" },
      { name: "Apache Kafka", icon: "", url: "https://kafka.apache.org", iconKey: "Kafka" },
      { name: "Redis", icon: "", url: "https://redis.io", iconKey: "Redis" },
    ],
    github: "https://github.com/yogeshsanodiya59-web/RideMatch-Engine",
    githubPrivate: false,
    live: null,
    livePrivate: true,
  },
  {
    id: 2,
    title: "RTI Generator",
    type: "web app",
    description: "A web-based application that enables users to generate professionally structured Right to Information (RTI) applications by inputting their concerns. Integrated OpenAI API to dynamically generate accurate and well-formatted RTI drafts in both English and Hindi, ensuring accessibility and ease of use. Designed a seamless user interface for input collection and automated document generation.",
    image: "/projects/rti-generator.png",
    technologies: [
      { name: "Spring Boot", icon: "", url: "https://spring.io/projects/spring-boot", iconKey: "SpringBoot" },
      { name: "HTML", icon: "", url: "https://developer.mozilla.org/en-US/docs/Web/HTML", iconKey: "Html" },
      { name: "CSS", icon: "", url: "https://developer.mozilla.org/en-US/docs/Web/CSS", iconKey: "Css" },
      { name: "OpenAI API", icon: "", url: "https://openai.com/api", iconKey: "OpenAI" },
    ],
    github: "https://github.com/yogeshsanodiya59-web/RTI-Generator",
    githubPrivate: false,
    live: null,
    livePrivate: true,
  },
  {
    id: 3,
    title: "Retina AI",
    type: "deep learning",
    description: "An AI-powered clinical decision support tool that assists doctors in detecting diabetic retinopathy from retinal scans. Implemented image preprocessing and classification using EfficientNet-B3, trained on the APTOS 2019 dataset with a 5-class severity classification approach. Integrated model inference to generate heatmaps on retinal images for better interpretability.",
    image: "/projects/retina-ai.png",
    technologies: [
      { name: "Python", icon: "", url: "https://python.org", iconKey: "Python" },
      { name: "TensorFlow", icon: "", url: "https://tensorflow.org", iconKey: "TensorFlow" },
      { name: "PyTorch", icon: "", url: "https://pytorch.org", iconKey: "PyTorch" },
      { name: "OpenCV", icon: "", url: "https://opencv.org", iconKey: "OpenCV" },
    ],
    github: "https://github.com/yogeshsanodiya59-web/Retina-AI",
    githubPrivate: false,
    live: null,
    livePrivate: true,
  },
  {
    id: 4,
    title: "Adversarial-Aware ML Pipeline",
    type: "research",
    description: "An end-to-end ML pipeline for network anomaly detection including dataset cleaning, preprocessing, and feature extraction. Engineered a modular pipeline integrating classical machine learning and deep learning approaches. Experimented with GAN-based synthetic traffic generation and autoencoder-based anomaly scoring. Presented as a research-oriented project tied to the accepted paper at eNergetics 2025.",
    image: "/projects/ml-pipeline.png",
    technologies: [
      { name: "Python", icon: "", url: "https://python.org", iconKey: "Python" },
      { name: "TensorFlow", icon: "", url: "https://tensorflow.org", iconKey: "TensorFlow" },
      { name: "PyTorch", icon: "", url: "https://pytorch.org", iconKey: "PyTorch" },
    ],
    github: "https://github.com/yogeshsanodiya59-web/adversarial-ml-pipeline",
    githubPrivate: false,
    live: null,
    livePrivate: true,
  },
];



type ProjectsSectionProps = {
  showHeader?: boolean;
  showAllLink?: boolean;
  sectionClassName?: string;
};

export default function ProjectsSection({
  showHeader = true,
  showAllLink = true,
  sectionClassName,
}: ProjectsSectionProps) {
  return (
    <section id="projects" className={cn(sectionClassName)}>
      <div className="mx-auto h-full max-w-5xl border-x">
        {showHeader && (
          <>
            <div className="flex grow flex-col justify-center border-b bg-linear-to-br from-muted/40 via-background to-muted/20 px-4 py-16 md:items-center">
              <h2 className="text-3xl md:text-4xl font-bold">What I&apos;m Building</h2>
              <p className="mb-5 text-base text-muted-foreground">
                Real-world projects with real impact
              </p>
            </div>

            <BorderSeparator />
          </>
        )}

        <div className="grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={cn(
                "flex flex-col justify-between border-b",
                index === projects.length - 1 && "border-b-0"
              )}
            >
                <div className="flex items-center justify-between gap-3 border-b bg-secondary/50 p-4 dark:bg-secondary/20">
                  <a
                    href={project.live || project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-foreground hover:text-primary"
                  >
                    <HugeiconsIcon
                      icon={ExternalLink}
                      size={18}
                      className="text-muted-foreground transition-transform rotate-0 group-hover:-rotate-45"
                    />
                    <h3 className="font-heading font-medium text-lg tracking-wider">
                      {project.title}
                    </h3>
                  </a>
                  <Badge variant="secondary" className="rounded-full capitalize bg-border/40">
                    {project.type}
                  </Badge>
                </div>

                <div className="flex flex-col md:flex-row md:items-stretch">
                  <div className="relative overflow-hidden md:w-96 md:shrink-0 border-b md:border-b-0 md:border-r border-border/60">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={520}
                      height={320}
                      className="h-64 w-full object-cover md:absolute md:inset-0 md:h-full md:w-full"
                      sizes="(min-width: 768px) 384px, 100vw"
                    />
                  </div>

                  <div className="flex flex-col justify-between gap-4">
                    <p className="text-muted-foreground leading-relaxed text-base p-4">
                      {project.description}
                    </p>
                    <div className="border-t">
                      <div className="flex">
                        <a
                          href={project.githubPrivate ? undefined : project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={
                            project.githubPrivate
                              ? `${project.title} GitHub repository is private`
                              : `View ${project.title} on GitHub`
                          }
                          className={cn(
                            "flex items-center gap-2 w-full h-full bg-background text-sm font-medium transition-colors py-2 border-r pl-4",
                            project.githubPrivate
                              ? "cursor-not-allowed opacity-60"
                              : "hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary"
                          )}
                          tabIndex={project.githubPrivate ? -1 : 0}
                          aria-disabled={project.githubPrivate}
                        >
                          <HugeiconsIcon icon={project.githubPrivate ? LockIcon : Github01Icon} size={16} />
                          {project.githubPrivate ? "Private" : "GitHub"}
                        </a>

                        <a
                          href={!project.live || project.livePrivate ? undefined : project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={
                            !project.live || project.livePrivate
                              ? `${project.title} live site is private or unavailable`
                              : `View ${project.title} live site`
                          }
                          className={cn(
                            "flex items-center gap-2 w-full h-full bg-background text-sm font-medium transition-colors py-2 pl-4",
                            !project.live || project.livePrivate
                              ? "cursor-not-allowed opacity-60"
                              : "hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary"
                          )}
                          tabIndex={!project.live || project.livePrivate ? -1 : 0}
                          aria-disabled={!project.live || project.livePrivate}
                        >
                          <HugeiconsIcon icon={!project.live || project.livePrivate ? LockIcon : ExternalLink} size={16} />
                          {!project.live || project.livePrivate ? "Private" : "Live Site"}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t">
                  <div className="flex w-full max-w-none flex-wrap items-center gap-x-3 gap-y-2 divide-x divide-border/60 px-3 stripe-bg-10">
                    {project.technologies.map((tech) => {
                      if (tech.iconKey && TechIcons[tech.iconKey as keyof typeof TechIcons]) {
                        const IconComponent = TechIcons[tech.iconKey as keyof typeof TechIcons];
                        return (
                          <a
                            key={tech.name}
                            href={tech.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-9 w-9 items-center justify-center border-l border-r border-muted/50 bg-background px-2 transition-colors hover:bg-accent"
                            title={tech.name}
                          >
                            <IconComponent className="h-5 w-5" />
                          </a>
                        );
                      }
                    })}
                  </div>
                </div>
            </div>
          ))}
        </div>

        {showAllLink && (
          <div className="border-t px-4 py-6">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              View all projects
              <HugeiconsIcon icon={ExternalLink} size={14} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

function BorderSeparator({ className }: React.ComponentProps<"div">) {
  return (
    <div className={cn("relative inset-x-0 h-px w-full border-b", className)} />
  );
}
