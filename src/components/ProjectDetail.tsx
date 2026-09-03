"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-ink/60 backdrop-blur-none flex items-start justify-end"
        onClick={onClose}
        aria-modal="true"
        role="dialog"
        aria-label={`${project.title} project details`}
      >
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 30, stiffness: 300 }}
          className="bg-paper border-l-2 border-ink h-full w-full max-w-2xl overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-paper border-b-2 border-ink px-8 py-5 flex items-start justify-between z-10">
            <div>
              <p className="label-upper text-ink-muted mb-1">{project.number} / SYSTEM DETAIL</p>
              <h2 className="font-display font-bold text-xl uppercase tracking-tight text-ink">
                {project.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="border-2 border-ink p-1.5 hover:bg-ink hover:text-paper transition-colors focus-visible:outline-accent"
              aria-label="Close project detail"
            >
              <X size={18} />
            </button>
          </div>

          {/* Content */}
          <div className="px-8 py-8 space-y-10">

            {/* Category + metrics */}
            <div>
              <p className="label-upper text-accent mb-4">{project.category}</p>
              <div className="flex flex-wrap gap-3">
                {project.metrics.map((m) => (
                  <div key={m.label} className="border-2 border-ink px-4 py-3">
                    <p className="font-display font-bold text-2xl text-ink">{m.value}</p>
                    <p className="label-upper text-ink-muted">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Problem */}
            <div>
              <h3 className="label-upper text-ink-muted mb-3">PROBLEM</h3>
              <p className="font-body text-ink leading-relaxed">{project.problem}</p>
            </div>

            {/* Approach */}
            <div>
              <h3 className="label-upper text-ink-muted mb-3">APPROACH</h3>
              <p className="font-body text-ink leading-relaxed">{project.approach}</p>
            </div>

            {/* Architecture */}
            <div>
              <h3 className="label-upper text-ink-muted mb-4">ARCHITECTURE</h3>
              <div className="border-2 border-ink p-5">
                <div className="flex flex-col items-start gap-0">
                  {project.architecture.map((step, i) => (
                    <div key={step.label} className="w-full">
                      <div className="flex items-start gap-3 py-2">
                        <span className="font-mono text-xs text-ink-faint w-4 mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                        <div>
                          <p className="font-mono text-sm font-medium text-ink uppercase tracking-wide">{step.label}</p>
                          {step.sublabel && (
                            <p className="label-upper text-ink-muted mt-0.5">{step.sublabel}</p>
                          )}
                        </div>
                      </div>
                      {i < project.architecture.length - 1 && (
                        <div className="ml-7 w-px h-4 bg-ink opacity-30" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Implementation */}
            <div>
              <h3 className="label-upper text-ink-muted mb-3">IMPLEMENTATION</h3>
              <ul className="space-y-2">
                {project.implementation.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-ink">
                    <span className="text-accent font-mono mt-0.5">→</span>
                    <span className="font-body leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Results */}
            <div>
              <h3 className="label-upper text-ink-muted mb-3">RESULTS</h3>
              <ul className="space-y-2">
                {project.results.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-ink">
                    <span className="text-accent font-mono mt-0.5">✓</span>
                    <span className="font-body leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Lessons */}
            <div>
              <h3 className="label-upper text-ink-muted mb-3">LESSONS</h3>
              <ul className="space-y-2">
                {project.lessons.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-ink">
                    <span className="text-ink-faint font-mono mt-0.5">◦</span>
                    <span className="font-body leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stack */}
            <div>
              <h3 className="label-upper text-ink-muted mb-3">TECHNOLOGY</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="skill-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* GitHub */}
            {project.github && (
              <div>
                <a
                  href={project.github}
                  className="btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} on GitHub (opens in new tab)`}
                >
                  VIEW ON GITHUB ↗
                </a>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
