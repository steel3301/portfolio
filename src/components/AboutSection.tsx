"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const coursework = [
  "ML",
  "DEEP LEARNING",
  "DISTRIBUTED SYSTEMS",
  "CLOUD COMPUTING",
  "DATABASES",
  "ALGORITHMS",
  "COMPUTER NETWORKS",
];

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="border-b-2 border-ink" aria-labelledby="about-heading">
      <div className="max-w-[1400px] mx-auto">

        {/* Header */}
        <div className="px-6 md:px-10 py-12 md:py-16 border-b-2 border-ink">
          <p className="label-upper text-ink-muted mb-3">07 / ABOUT</p>
          <h2 id="about-heading" className="heading-section text-ink sr-only">About</h2>
        </div>

        {/* Main about content */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-12"
        >
          {/* Left: statement */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 px-6 md:px-10 py-12 md:border-r-2 border-ink"
          >
            {/* Editorial statement */}
            <p
              className="font-display font-bold text-ink uppercase leading-tight tracking-tight mb-8"
              style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)" }}
            >
              I&rsquo;M INTERESTED IN THE SPACE BETWEEN RESEARCH AND REAL SYSTEMS.
            </p>

            <div className="space-y-4 text-sm leading-relaxed text-ink-muted max-w-lg font-body">
              <p>
                I build AI systems across the full stack — from LLM agent orchestration and RAG pipelines to 
                federated learning infrastructure and computer vision research. My work focuses on 
                making ML systems that are production-grade rather than prototype-grade.
              </p>
              <p>
                I&rsquo;m particularly focused on agentic AI — systems where multiple models reason, retrieve, 
                and act in coordination. I care about how these systems fail, how they scale, and how 
                decisions are made explainable to humans downstream.
              </p>
              <p>
                Currently looking for AI/ML engineering roles where I can contribute to systems that 
                push the boundary between research and deployment.
              </p>
            </div>
          </motion.div>

          {/* Right: education block */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-5 px-6 md:px-10 py-12 flex flex-col gap-8"
          >
            {/* Education */}
            <div>
              <p className="label-upper text-ink-muted mb-4">EDUCATION</p>
              <div className="border-2 border-ink p-6 space-y-3">
                <div>
                  <p className="font-display font-bold text-ink uppercase tracking-tight text-lg">
                    B.Tech — Computer Science
                  </p>
                  <p className="label-upper text-ink-muted mt-1">
                    Vishwakarma Institute of Information Technology
                  </p>
                  <p className="label-upper text-ink-faint">Pune, India · Expected 2027</p>
                </div>
                <div className="border-t-2 border-ink pt-3 flex items-center gap-4">
                  <div>
                    <p className="font-display font-bold text-accent text-2xl">8.4</p>
                    <p className="label-upper text-ink-muted">CGPA / 10</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Coursework tags */}
            <div>
              <p className="label-upper text-ink-muted mb-3">COURSEWORK</p>
              <div className="flex flex-wrap gap-2">
                {coursework.map((course) => (
                  <span key={course} className="skill-tag">{course}</span>
                ))}
              </div>
            </div>

            {/* Research interest */}
            <div className="border-2 border-ink p-5">
              <p className="label-upper text-ink-muted mb-2">RESEARCH INTEREST</p>
              <p className="font-mono text-xs text-ink leading-relaxed">
                Agentic AI · Retrieval Augmented Generation<br />
                Federated Learning · Computer Vision<br />
                ML Infrastructure · Cloud-native Systems
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
