export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime?: string;
  author: string;
  image: string;
  tags: string[];
  mediumUrl?: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "research-publication",
    title: "Sanitization-Driven, Adversarial-Informed Framework for Network Anomaly Detection",
    excerpt:
      "Accepted at eNergetics 2025 (Virtual), Nov 24–25, 2025. Co-authors: Yogesh Sanodiya, Pratik Chouragadey, Soumyajit Ghosh. A research paper presenting a novel framework for robust network anomaly detection using adversarial-informed sanitization techniques.",
    date: "2025-11-24",
    author: "Yogesh Sanodiya",
    image: "/projects/ml-pipeline.png",
    tags: ["Research", "Machine Learning", "Network Security", "Deep Learning"],
  },
];
