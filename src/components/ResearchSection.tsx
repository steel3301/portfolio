"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { research, type ResearchProject } from "@/data/research";

function ResearchCard({ item, index }: { item: ResearchProject; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.15 }}
      className="border-2 border-ink grid grid-cols-1 lg:grid-cols-12"
      aria-label={item.title}
    >
      {/* Left info */}
      <div className="lg:col-span-7 p-8 lg:p-10 border-b-2 lg:border-b-0 lg:border-r-2 border-ink flex flex-col gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="label-upper text-accent">{item.subtitle}</span>
            <span className="label-upper text-ink-faint">· {item.type}</span>
          </div>
          <h3
            className="font-display font-bold text-ink uppercase tracking-tight leading-tight"
            style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)" }}
          >
            {item.title}
          </h3>
          <p className="label-upper text-ink-muted mt-1">{item.institution}</p>
        </div>

        <p className="font-body text-ink-muted leading-relaxed text-sm">{item.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {item.technologies.map((tech) => (
            <span key={tech} className="skill-tag">{tech}</span>
          ))}
        </div>
      </div>

      {/* Right: metrics / pipeline */}
      <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col gap-6">
        {/* Metrics */}
        {item.metrics && item.metrics.length > 0 && (
          <div>
            <p className="label-upper text-ink-muted mb-4">METRICS</p>
            <div className="grid grid-cols-2 gap-3">
              {item.metrics.map((m) => (
                <div key={m.label} className="border-2 border-ink p-4">
                  <p className="font-display font-bold text-ink" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>
                    {m.value}
                  </p>
                  <p className="label-upper text-ink-muted mt-1">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pipeline */}
        {item.pipeline && (
          <div>
            <p className="label-upper text-ink-muted mb-3">PIPELINE</p>
            <div className="flex flex-col items-start">
              {item.pipeline.map((step, i) => (
                <div key={step.label} className="flex flex-col items-start">
                  <div className="flex items-center gap-2 py-1">
                    <div className="w-1.5 h-1.5 bg-ink rounded-full flex-shrink-0" />
                    <span className="font-mono text-[0.65rem] uppercase tracking-wide text-ink">{step.label}</span>
                    {step.sublabel && (
                      <span className="label-upper text-ink-faint hidden md:inline">— {step.sublabel}</span>
                    )}
                  </div>
                  {i < (item.pipeline?.length ?? 0) - 1 && (
                    <div className="ml-[0.1875rem] w-px h-3 bg-ink opacity-30" />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Internship note */}
        {item.type === "INTERNSHIP" && !item.metrics && (
          <div className="border-2 border-ink p-4">
            <p className="label-upper text-ink-muted mb-1">FOCUS</p>
            <p className="font-mono text-xs text-ink leading-relaxed">
              Materials data analysis<br />
              Python visualization pipelines<br />
              Scientific computing
            </p>
          </div>
        )}
      </div>
    </motion.article>
  );
}

export default function ResearchSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="research" className="border-b-2 border-ink" aria-labelledby="research-heading">
      <div className="max-w-[1400px] mx-auto">

        {/* Header */}
        <div ref={ref} className="px-6 md:px-10 py-12 md:py-16 border-b-2 border-ink">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <p className="label-upper text-ink-muted mb-3">06 / RESEARCH</p>
            <h2 id="research-heading" className="heading-section text-ink">
              RESEARCH /<br />EXPERIMENTS
            </h2>
          </motion.div>
        </div>

        {/* Research cards */}
        <div className="px-6 md:px-10 py-10 space-y-6">
          {research.map((item, i) => (
            <ResearchCard key={item.id} item={item} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
