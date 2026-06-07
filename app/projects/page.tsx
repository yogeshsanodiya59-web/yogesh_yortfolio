import type { Metadata } from "next";
import { baseMetadata } from "@/lib/seo";
import ProjectsSection from "@/components/ProjectsSection";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Projects",
  description: "Selected projects and experiments by Yogesh Sanodiya.",
  alternates: {
    canonical: "https://yogeshsanodiya.dev/projects",
  },
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Projects | Yogesh Sanodiya",
    description: "Selected projects and experiments by Yogesh Sanodiya.",
    url: "https://yogeshsanodiya.dev/projects",
    type: "website",
  },
  twitter: {
    ...baseMetadata.twitter,
    title: "Projects | Yogesh Sanodiya",
    description: "Selected projects and experiments by Yogesh Sanodiya.",
  },
};

export default function ProjectsPage() {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-5xl border-x">
          <div className="px-4 py-14 bg-linear-to-br from-muted/40 via-background to-muted/20">
            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Projects</p>
            <h1 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">
              What I&apos;m Building
            </h1>
            <p className="mt-3 text-muted-foreground text-base">
              Real-world projects, experiments, and systems I&apos;m actively working on.
            </p>
          </div>
        </div>
      </section>

      <ProjectsSection showHeader={false} showAllLink={false} sectionClassName="pt-0" />
      <div className="section-connector" />
    </div>
  );
}
