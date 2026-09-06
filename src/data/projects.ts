export type Project = {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  live?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "AI Study Assistant",
    description:
      "A retrieval-augmented learning assistant that lets users upload study materials and ask questions grounded in their documents.",
    technologies: ["Python", "Flask", "React", "FAISS", "Embeddings"],
    github: "https://github.com/HaidaMarese/ai-study-assistant",
    live: "https://ai-study-assistant-lac.vercel.app/",
  },
  {
    title: "IT Help Desk Ticket System",
    description:
      "A full-stack IT help desk application where employees can create and track support tickets while technicians manage and resolve requests.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/HaidaMarese/help-desk-ticket-system",
    live: "https://help-desk-ticket-system-puce.vercel.app/",
  },
  {
    title: "AI Job Market ML Project",
    description:
      "A supervised machine learning project that predicts whether demand for a job will increase or decrease between 2024 and 2030.",
    technologies: ["Python", "Scikit-learn", "Pandas"],
    github: "https://github.com/HaidaMarese/ai-job-market-ml-project",
  },
  {
    title: "Financial Portfolio Data Model",
    description:
      "A financial portfolio data model featuring Advisor, Client, Portfolio, and Security entities with JPA relationships.",
    technologies: ["Java", "Spring Boot", "JPA", "IntelliJ IDEA", "ERD"],
    github: "https://github.com/HaidaMarese/wells-fargo-task-2",
  },
  {
    title: "Trade Reconciliation System",
    description:
      "A financial application that compares internal and external transactions to identify matches, amount differences, and missing records.",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "H2",
      "Maven",
      "AWS",
    ],
    github:
      "https://github.com/HaidaMarese/trade-reconciliation-system",
    live:
      "http://trade-reconciliation-haida.us-east-1.elasticbeanstalk.com",
  },
];