export interface JobPosition {
  id: string;
  title: string;
  category: "engineering" | "design" | "product" | "operations";
  categoryLabel: string;
  location: string;
  type: string;
  applySubject: string;
}

export const OPEN_ROLES: JobPosition[] = [
  {
    id: "senior-react-engineer",
    title: "Senior React Engineer",
    category: "engineering",
    categoryLabel: "ENGINEERING",
    location: "Remote / Lahore",
    type: "Full-time",
    applySubject: "Senior React Engineer Application",
  },
  {
    id: "fullstack-nodejs-developer",
    title: "Full-stack Node.js Developer",
    category: "engineering",
    categoryLabel: "ENGINEERING",
    location: "Remote",
    type: "Full-time",
    applySubject: "Full-stack Node.js Developer Application",
  },
  {
    id: "ai-ml-engineer",
    title: "AI / ML Engineer (LLMs & RAG)",
    category: "engineering",
    categoryLabel: "ENGINEERING",
    location: "Remote",
    type: "Full-time",
    applySubject: "AI/ML Engineer Application",
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer (AWS, Docker)",
    category: "engineering",
    categoryLabel: "ENGINEERING",
    location: "Remote",
    type: "Full-time",
    applySubject: "DevOps Engineer Application",
  },
  {
    id: "product-designer",
    title: "Product Designer (Figma, systems thinking)",
    category: "design",
    categoryLabel: "DESIGN",
    location: "Remote / Lahore",
    type: "Full-time",
    applySubject: "Product Designer Application",
  },
  {
    id: "bizdev-executive",
    title: "Business Development Executive",
    category: "operations",
    categoryLabel: "OPERATIONS",
    location: "Lahore (Hybrid)",
    type: "Full-time",
    applySubject: "Business Development Executive Application",
  },
];
