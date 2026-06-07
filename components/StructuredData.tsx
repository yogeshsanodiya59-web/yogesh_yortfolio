export function PersonSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Yogesh Sanodiya",
    alternateName: ["Yogesh", "yogeshsanodiya"],
    url: "https://yogeshsanodiya.dev",
    image: "https://yogeshsanodiya.dev/profile.jpg",
    description:
      "Spring Boot Backend Developer focused on scalable systems, AI-powered applications, microservices architecture, and modern backend engineering.",
    jobTitle: "Spring Boot Backend Developer",
    nationality: {
      "@type": "Country",
      name: "India",
    },
    educationalLevel: "B.Tech in Computer Science and Design",
    knowsAbout: [
      "Spring Boot",
      "Backend Development",
      "Artificial Intelligence",
      "Machine Learning",
      "Java",
      "Linux",
      "Networking",
      "REST APIs",
      "Raspberry Pi",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Madhav Institute of Technology & Science, Gwalior",
    },
    sameAs: [
      "https://github.com/yogeshsanodiya",
      "https://www.linkedin.com/in/yogeshsanodiya",
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
