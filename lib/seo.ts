import type { Metadata } from "next";

export const baseMetadata: Metadata = {
  metadataBase: new URL("https://yogeshsanodiya.dev"),
  title: {
    default: "Yogesh Sanodiya | Spring Boot Backend Developer",
    template: "%s | Yogesh Sanodiya",
  },
  description:
    "Portfolio of Yogesh Sanodiya — a Spring Boot Backend Developer focused on scalable systems, AI-powered applications, microservices architecture, and modern backend engineering.",
  keywords: [
    "Spring Boot developer",
    "backend developer",
    "AI/ML enthusiast",
    "Java developer",
    "system-oriented engineer",
    "Linux",
    "Raspberry Pi",
    "networking",
    "REST API",
    "MITS Gwalior",
  ],
  authors: [{ name: "Yogesh Sanodiya", url: "https://yogeshsanodiya.dev" }],
  creator: "Yogesh Sanodiya",
  publisher: "Yogesh Sanodiya",
  category: "Backend Developer",
  alternates: {
    canonical: "https://yogeshsanodiya.dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Yogesh Sanodiya | Spring Boot Backend Developer",
    description:
      "Spring Boot Backend Developer focused on scalable systems, AI-powered applications, microservices architecture, and modern backend engineering.",
    url: "https://yogeshsanodiya.dev",
    siteName: "Yogesh Sanodiya",
    images: [
      {
        url: "https://yogeshsanodiya.dev/og.png",
        width: 1200,
        height: 630,
        alt: "Yogesh Sanodiya – Spring Boot Backend Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yogesh Sanodiya | Spring Boot Backend Developer",
    description:
      "Spring Boot Backend Developer focused on scalable systems, AI-powered applications, microservices architecture, and modern backend engineering.",
    images: ["https://yogeshsanodiya.dev/og.png"],
  },
};
