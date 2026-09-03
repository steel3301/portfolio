"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experience, type ExperienceEntry } from "@/data/experience";

function ExperienceCard({ entry, index }: { entry: ExperienceEntry; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="grid grid-cols-1 md:grid-cols-12 border-b-2 border-ink last:border-b-0 bg-paper"
      aria-label={`${entry.role} at ${entry.company}`}
    >
      {/* Left Column — Large Company Logo (NO PADDING) & Duration */}
      <div className="md:col-span-4 p-6 md:p-8 border-b-2 md:border-b-0 md:border-r-2 border-ink flex flex-col items-start justify-between gap-6 bg-paper/60">
        {entry.logo && (
          <div className="w-28 h-28 md:w-32 md:h-32 border-2 border-ink bg-white p-0 overflow-hidden flex items-center justify-center shadow-neo-sm">
            <Image
              src={entry.logo}
              alt={`${entry.company} logo`}
              width={128}
              height={128}
              className="w-full h-full object-contain p-0"
            />
          </div>
        )}
        <div>
          <p className="font-display font-bold text-ink text-xl uppercase tracking-tight">
            {entry.company}
          </p>
          <p className="label-upper text-accent text-xs font-bold mt-1">{entry.duration}</p>
          <p className="label-upper text-ink-muted text-xs mt-0.5">{entry.location}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="md:col-span-8 p-6 md:p-10 flex flex-col justify-between gap-6">
        <div>
          <h3
            className="font-display font-bold text-ink uppercase tracking-tight mb-4"
            style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)" }}
          >
            {entry.role}
          </h3>
          <ul className="space-y-2.5 mb-6">
            {entry.highlights.map((hl) => (
              <li key={hl} className="flex gap-3 text-sm">
                <span className="text-accent font-mono mt-0.5 flex-shrink-0 font-bold">→</span>
                <span className="font-body text-ink-muted leading-relaxed">{hl}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="border-t border-ink/20 pt-4">
          <p className="label-upper text-ink-muted text-xs mb-2">TECHNOLOGIES & STACK</p>
          <div className="flex flex-wrap gap-1.5">
            {entry.technologies.map((tech) => (
              <span key={tech} className="skill-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const currentRole = experience.find((e) => e.isCurrent);
  const pastRoles = experience.filter((e) => !e.isCurrent);

  return (
    <section id="experience" className="border-b-2 border-ink" aria-labelledby="experience-heading">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div ref={ref} className="px-6 md:px-10 py-10 md:py-14 border-b-2 border-ink">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <p className="label-upper text-ink-muted mb-2">WORK HISTORY & ROLES</p>
            <h2 id="experience-heading" className="heading-section text-ink">
              EXPERIENCE
            </h2>
          </motion.div>
        </div>

        {/* CURRENT ROLE HERO BANNER (MICHELIN) */}
        {currentRole && (
          <div className="border-b-2 border-ink bg-paper">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Left Logo Showcase */}
              <div className="lg:col-span-4 p-8 md:p-10 border-b-2 lg:border-b-0 lg:border-r-2 border-ink flex flex-col items-start justify-between gap-6 bg-paper/80">
                <div className="w-32 h-32 md:w-40 md:h-40 border-2 border-ink bg-white p-0 overflow-hidden flex items-center justify-center shadow-neo">
                  <Image
                    src={currentRole.logo}
                    alt={`${currentRole.company} logo`}
                    width={160}
                    height={160}
                    className="w-full h-full object-contain p-0"
                  />
                </div>
                <div>
                  <span className="inline-block bg-accent text-paper font-mono text-xs px-3 py-1 font-bold border border-ink uppercase tracking-wider mb-2 shadow-neo-sm">
                    ⚡ CURRENT ROLE
                  </span>
                  <h3 className="font-display font-bold text-ink uppercase text-3xl tracking-tight">
                    {currentRole.company}
                  </h3>
                  <p className="label-upper text-accent font-bold text-sm mt-1">{currentRole.duration}</p>
                  <p className="label-upper text-ink-muted text-xs mt-0.5">{currentRole.location}</p>
                </div>
              </div>

              {/* Right Role Details with generous padding */}
              <div className="lg:col-span-8 p-8 md:p-12 flex flex-col justify-between gap-6">
                <div>
                  <p className="label-upper text-accent mb-3 font-bold text-sm border-b border-ink/20 pb-2">
                    {currentRole.role}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {currentRole.highlights.map((hl) => (
                      <li key={hl} className="flex gap-3 text-base">
                        <span className="text-accent font-mono mt-0.5 flex-shrink-0 font-bold text-lg">→</span>
                        <span className="font-body text-ink leading-relaxed">{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-ink/20 pt-4">
                  <p className="label-upper text-ink-muted text-xs mb-2">STACK & TECHNOLOGIES</p>
                  <div className="flex flex-wrap gap-2">
                    {currentRole.technologies.map((tech) => (
                      <span key={tech} className="skill-tag font-bold border-ink bg-paper shadow-neo-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PAST ROLES TIMELINE */}
        <div>
          <div className="px-6 md:px-10 py-4 bg-paper/80 border-b-2 border-ink">
            <p className="label-upper text-ink-muted text-xs font-bold">PREVIOUS POSITIONS</p>
          </div>
          {pastRoles.map((entry, i) => (
            <ExperienceCard key={entry.id} entry={entry} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
