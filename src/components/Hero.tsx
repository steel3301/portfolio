"use client";

import { motion } from "framer-motion";
import NodeGraph from "./NodeGraph";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-14"
      aria-labelledby="hero-heading"
    >
      {/* Subtle background node graph */}
      <div className="absolute inset-0 opacity-80">
        <NodeGraph />
      </div>

      {/* Bottom border line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-ink" />

      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">

          {/* LEFT — Main headline */}
          <div className="md:col-span-8 md:border-r-2 md:border-ink md:pr-10">

            {/* System label */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-2 mb-8"
            >
              <div className="status-dot" />
              <span className="label-upper text-ink-muted">
                AI / ML ENGINEER · PUNE, INDIA
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              id="hero-heading"
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display font-bold leading-[0.9] tracking-[-0.04em] uppercase text-ink mb-6"
              style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)" }}
            >
              KAUSTUBH
              <br />
              WARME
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.6, delay: 0.35 }}
              className="font-display font-medium text-ink-muted uppercase tracking-[-0.01em] mb-10 max-w-xl"
              style={{ fontSize: "clamp(1rem, 2.5vw, 1.5rem)" }}
            >
              I BUILD AI SYSTEMS THAT MOVE FROM MODELS TO PRODUCTION.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#work"
                className="btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                VIEW WORK →
              </a>
              <a
                href="#contact"
                className="btn-secondary"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                GET IN TOUCH
              </a>
            </motion.div>
          </div>

          {/* RIGHT — Status panel */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.45 }}
            className="md:col-span-4 md:pl-10 mt-12 md:mt-0 flex flex-col justify-center"
          >
            <div className="border-2 border-ink p-6 bg-paper space-y-6">
              {/* Currently */}
              <div>
                <p className="label-upper text-ink-muted mb-2">CURRENTLY</p>
                <div className="space-y-1">
                  {[
                    "AI / ML Engineering",
                    "Agentic Systems",
                    "Computer Vision",
                    "MLOps",
                  ].map((item) => (
                    <p key={item} className="font-display font-medium text-ink text-sm uppercase tracking-wide">
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              <div className="border-t-2 border-ink" />

              {/* Based in */}
              <div>
                <p className="label-upper text-ink-muted mb-1">BASED IN</p>
                <p className="font-display font-bold text-ink text-lg uppercase tracking-tight">
                  PUNE, INDIA
                </p>
              </div>

              <div className="border-t-2 border-ink" />

              {/* Status */}
              <div>
                <p className="label-upper text-ink-muted mb-2">STATUS</p>
                <div className="flex items-center gap-2">
                  <div className="status-dot" />
                  <p className="font-display font-bold text-accent text-sm uppercase tracking-wide">
                    OPEN TO AI / ML<br />OPPORTUNITIES
                  </p>
                </div>
              </div>

              <div className="border-t-2 border-ink" />

              {/* Education compact */}
              <div>
                <p className="label-upper text-ink-muted mb-1">EDUCATION</p>
                <p className="font-mono text-xs text-ink leading-relaxed">
                  B.TECH CS · VIIT PUNE<br />
                  CGPA 8.4 · EXP. 2027
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
