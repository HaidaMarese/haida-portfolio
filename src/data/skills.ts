export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming Languages",
    skills: ["Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Frontend Development",
    skills: ["React", "Next.js", "HTML", "CSS", "Material UI"],
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express.js", "Flask", "REST APIs"],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      "Machine Learning",
      "Scikit-learn",
      "Pandas",
      "LLMs",
      "RAG",
      "Embeddings",
      "FAISS",
    ],
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB", "Firebase", "Firestore"],
  },
  {
    title: "Cloud & Deployment",
    skills: ["Microsoft Azure", "Vercel", "Render", "Netlify"],
  },
  {
    title: "Enterprise & Networking",
    skills: ["ServiceNow", "Linux", "TCP/IP", "DNS", "Load Balancing"],
  },
  {
    title: "Development Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Jupyter Notebook"],
  },
];