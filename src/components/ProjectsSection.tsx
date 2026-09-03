"use client";

import { useRef, useState, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import { X, Filter, Layers } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import ProjectDetail from "./ProjectDetail";

interface ProjectCardProps {
  project: Project;
  index: number;
  reversed?: boolean;
}

function ArchitecturePipeline({ steps }: { steps: { label: string; sublabel?: string }[] }) {
  return (
    <div className="flex flex-col items-start gap-0 py-2">
      {steps.map((step, i) => (
        <div key={step.label} className="flex flex-col items-start">
          <div className="flex items-center gap-2 py-1">
            <div className="w-1.5 h-1.5 bg-ink rounded-full flex-shrink-0" />
            <span className="font-mono text-[0.65rem] uppercase tracking-wide text-ink">{step.label}</span>
          </div>
          {i < steps.length - 1 && (
            <div className="ml-[0.1875rem] w-px h-3 bg-ink opacity-30" />
          )}
        </div>
      ))}
    </div>
  );
}

function ProjectCard({ project, index, reversed }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [detailOpen, setDetailOpen] = useState(false);

  return (
    <>
      <motion.article
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        className="border-2 border-ink grid grid-cols-1 lg:grid-cols-12 group bg-paper shadow-neo-sm hover:shadow-neo transition-all duration-200"
        aria-label={`Project: ${project.title}`}
      >
        {/* Main content */}
        <div
          className={`lg:col-span-8 border-b-2 lg:border-b-0 ${
            reversed ? "lg:border-l-2 lg:order-last" : "lg:border-r-2"
          } border-ink p-8 lg:p-10 flex flex-col justify-between gap-6`}
        >
          {/* Top row */}
          <div>
            <div className="flex items-center justify-between gap-4 mb-2">
              <span className="label-upper text-accent border border-accent/40 bg-accent/5 px-2.5 py-0.5 font-bold">
                {project.category}
              </span>
            </div>
            <h3
              className="font-display font-bold text-ink uppercase tracking-tight leading-tight mb-3"
              style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)" }}
            >
              {project.title}
            </h3>
            <p className="font-body text-ink-muted leading-relaxed text-sm max-w-xl">
              {project.tagline}
            </p>
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="skill-tag">
                {tech}
              </span>
            ))}
          </div>

          {/* Metrics */}
          <div className="flex flex-wrap gap-4 pt-2 border-t border-ink/10">
            {project.metrics.map((m) => (
              <div key={m.label} className="flex items-center gap-2">
                <span className="font-display font-bold text-accent text-xl">{m.value}</span>
                <span className="label-upper text-ink-muted text-xs">{m.label}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div>
            <button
              onClick={() => setDetailOpen(true)}
              className="btn-secondary group-hover:bg-ink group-hover:text-paper transition-all duration-200"
              aria-label={`View system details for ${project.title}`}
            >
              VIEW SYSTEM →
            </button>
          </div>
        </div>

        {/* Architecture panel */}
        <div
          className={`lg:col-span-4 p-8 flex flex-col gap-4 bg-paper/60 ${
            reversed ? "lg:order-first" : ""
          }`}
        >
          <p className="label-upper text-ink-muted flex items-center gap-1.5">
            <Layers size={13} className="text-accent" /> PIPELINE ARCHITECTURE
          </p>
          <ArchitecturePipeline steps={project.architecture} />
        </div>
      </motion.article>

      {/* Project detail drawer */}
      {detailOpen && (
        <ProjectDetail project={project} onClose={() => setDetailOpen(false)} />
      )}
    </>
  );
}

// Group keywords into categories for the filter sidebar
const KEYWORD_CATEGORIES: Record<string, string[]> = {
  "AI & MACHINE LEARNING": ["Agentic AI", "PyTorch", "LLMs", "RAG", "LangChain", "Deep Learning", "Federated Learning", "Privacy-Preserving AI"],
  "COMPUTER VISION": ["Computer Vision", "YOLOv8", "OpenCV", "DeepSORT", "Real-Time Systems", "Object Detection"],
  "INFRASTRUCTURE & DEPLOYMENT": ["Docker", "AWS", "FastAPI", "WebRTC", "Redis", "Flask", "GitHub Actions"],
};

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSelectedTags([]);
  };

  // Filter projects based on selected tags
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.every(
          (st) =>
            project.technologies.includes(st) ||
            project.category.toLowerCase() === st.toLowerCase()
        );

      return matchesTags;
    });
  }, [selectedTags]);

  return (
    <section id="work" className="border-b-2 border-ink" aria-labelledby="work-heading">
      <div className="max-w-[1400px] mx-auto">
        {/* Section header */}
        <div ref={ref} className="px-6 md:px-10 py-10 md:py-14 border-b-2 border-ink">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <p className="label-upper text-ink-muted mb-2">FEATURED SYSTEMS</p>
            <h2 id="work-heading" className="heading-section text-ink">
              PROJECTS
            </h2>
          </motion.div>
        </div>

        {/* Layout with Sticky Legend Sidebar + Projects Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-ink items-start relative">
          {/* Sticky Keyword Legend Sidebar */}
          <aside className="lg:col-span-4 p-6 md:p-8 bg-paper/70 lg:sticky lg:top-20 self-start max-h-[calc(100vh-6rem)] overflow-y-auto z-10">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between pb-2 border-b-2 border-ink">
                <p className="font-display font-bold text-ink text-sm md:text-base flex items-center gap-2 uppercase tracking-wide">
                  <Filter size={16} className="text-accent" /> KEYWORD LEGEND
                </p>
                {selectedTags.length > 0 && (
                  <button
                    onClick={clearFilters}
                    className="label-upper text-xs text-accent hover:underline flex items-center gap-1 font-bold"
                  >
                    CLEAR ({selectedTags.length}) <X size={12} />
                  </button>
                )}
              </div>

              {/* Categorized Keyword Legend */}
              <div className="space-y-6">
                {Object.entries(KEYWORD_CATEGORIES).map(([category, tags]) => (
                  <div key={category} className="border-t border-ink/20 pt-4 first:border-t-0 first:pt-0">
                    <p className="font-display font-bold text-ink uppercase text-xs md:text-sm tracking-wide mb-3 bg-paper border border-ink px-2.5 py-1.5 shadow-neo-sm inline-block w-full">
                      {category}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {tags.map((keyword) => {
                        const active = selectedTags.includes(keyword);
                        return (
                          <button
                            key={keyword}
                            onClick={() => toggleTag(keyword)}
                            className={`label-upper text-[0.7rem] px-2.5 py-1 border border-ink transition-all duration-150 ${
                              active
                                ? "bg-accent text-paper font-bold shadow-neo-sm border-accent"
                                : "bg-paper text-ink hover:bg-ink hover:text-paper"
                            }`}
                          >
                            {keyword}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Right side Projects List (scrollable) */}
          <main className="lg:col-span-8 p-6 md:p-8 flex flex-col gap-8">
            {filteredProjects.length === 0 ? (
              <div className="border-2 border-ink p-12 text-center bg-paper shadow-neo">
                <p className="font-display font-bold text-ink uppercase text-xl mb-2">
                  NO MATCHING PROJECTS FOUND
                </p>
                <p className="label-upper text-ink-muted mb-6 text-xs">
                  TRY ADJUSTING YOUR KEYWORD FILTERS.
                </p>
                <button onClick={clearFilters} className="btn-primary py-2.5 px-6 text-xs">
                  RESET FILTERS
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-8">
                {filteredProjects.map((project: Project, i: number) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={i}
                    reversed={i % 2 === 1}
                  />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </section>
  );
}
