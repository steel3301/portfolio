import michelinLogo from "@/assets/icons/michelin.svg";
import imexLogo from "@/assets/icons/imex.svg";
import walnutLogo from "@/assets/icons/walnut.svg";

export type ExperienceEntry = {
  id: string;
  year: string;
  company: string;
  role: string;
  location: string;
  duration: string;
  highlights: string[];
  technologies: string[];
  logo: any;
  isCurrent?: boolean;
};

export const experience: ExperienceEntry[] = [
  {
    id: "michelin",
    year: "2026",
    company: "MICHELIN",
    role: "DATA & AI INTERN — DOTI / DAI TEAM",
    location: "Pune, India",
    duration: "August 2026 — Present",
    logo: michelinLogo,
    isCurrent: true,
    highlights: [
      "Working as part of the DOTI / DAI (Data & Artificial Intelligence) team",
      "Developing and deploying data-driven solution pipelines and machine learning algorithms",
      "Collaborating on enterprise AI initiatives to streamline operations and predictive modeling",
    ],
    technologies: ["Python", "Machine Learning", "Data Engineering", "AI Pipelines", "PyTorch"],
  },
  {
    id: "imexshwetej",
    year: "2026",
    company: "IMEXSHWETEJ GLOBAL LLP",
    role: "EXECUTIVE — OPERATIONS & TECHNOLOGY",
    location: "Pune, India",
    duration: "Jan 2026 — May 2026",
    logo: imexLogo,
    highlights: [
      "Led technical operations and eCommerce platform development",
      "Built React and PHP-based storefront with Cashfree payment integration",
      "Implemented CI/CD pipelines via GitHub Actions with Docker and AWS deployment",
      "Built Python automation workflows for operational reporting and data processing",
      "Managed Redis caching layer for performance optimization",
    ],
    technologies: ["React", "PHP", "Docker", "AWS", "GitHub Actions", "Python", "Redis", "Cashfree"],
  },
  {
    id: "walnut-school",
    year: "2025",
    company: "WALNUT SCHOOL",
    role: "DIGITAL ACADEMIC EXECUTIVE",
    location: "Pune, India",
    duration: "September 2025 — December 2025",
    logo: walnutLogo,
    highlights: [
      "Managed digital academic content and systems for 2,000+ students",
      "Developed internal React + Flask dashboards for academic tracking",
      "Automated Python reporting pipelines, reducing manual effort by 40%",
      "Maintained data integrity and reporting workflows across academic departments",
    ],
    technologies: ["React", "Flask", "Python", "Data Automation"],
  },
];
