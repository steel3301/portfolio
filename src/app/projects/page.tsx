import SkillsGrid from "@/components/SkillsGrid";
import ProjectsSection from "@/components/ProjectsSection";

export const metadata = {
  title: "Projects — Kaustubh Warme",
  description:
    "Explore projects, machine learning systems, architectures, and technical skills grid.",
};

export default function ProjectsPage() {
  return (
    <>
      {/* 1. Skills Grid on top */}
      <SkillsGrid />

      {/* 2. Projects Section with Categorized Sticky Keyword Filter */}
      <ProjectsSection />
    </>
  );
}
