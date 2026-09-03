"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { skillCategories, type Skill, type SkillCategory } from "@/data/skills";

function SkillTag({ skill }: { skill: Skill }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative">
      <button
        className="skill-tag focus-visible:outline-accent"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        aria-label={`${skill.name}: ${skill.context.join(", ")}`}
      >
        {skill.name}
      </button>

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-full left-0 mb-2 z-20 bg-ink text-paper p-3 min-w-[160px] border-2 border-ink shadow-brutal-sm"
            role="tooltip"
          >
            <p className="font-mono text-[0.65rem] text-accent uppercase tracking-wider mb-1.5">
              {skill.name}
            </p>
            {skill.context.map((ctx) => (
              <p key={ctx} className="font-mono text-[0.6rem] text-paper/70 leading-relaxed">
                {ctx}
              </p>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function CategoryBlock({ category }: { category: SkillCategory }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="border-b-2 border-ink last:border-b-0 px-6 md:px-10 py-8 grid grid-cols-1 md:grid-cols-12 gap-6"
    >
      {/* Category label */}
      <div className="md:col-span-3">
        <p className="label-upper text-ink font-bold">{category.label}</p>
      </div>

      {/* Skills */}
      <div className="md:col-span-9 flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <SkillTag key={skill.name} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}

export default function SkillsGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="border-b-2 border-ink" aria-labelledby="skills-heading">
      <div className="max-w-[1400px] mx-auto">

        {/* Header */}
        <div
          ref={ref}
          className="px-6 md:px-10 py-12 md:py-16 border-b-2 border-ink grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="md:col-span-8"
          >
            <p className="label-upper text-ink-muted mb-3">04 / CAPABILITIES</p>
            <h2 id="skills-heading" className="heading-section text-ink">
              WHAT I<br />WORK WITH
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-4 flex items-end"
          >
            <p className="label-upper text-ink-muted">
              HOVER EACH TAG<br />FOR CONTEXT.
            </p>
          </motion.div>
        </div>

        {/* Skill categories */}
        <div>
          {skillCategories.map((cat) => (
            <CategoryBlock key={cat.id} category={cat} />
          ))}
        </div>

      </div>
    </section>
  );
}
