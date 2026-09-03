"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const metrics = [
  { value: "03", label: "AI / SYSTEM\nPROJECTS", suffix: "" },
  { value: "85", label: "SKILL EXTRACTION\nACCURACY", suffix: "%" },
  { value: "92", label: "FEDERATED MODEL\nACCURACY", suffix: "%" },
  { value: "70", label: "SCREENING TIME\nREDUCTION", suffix: "%" },
];

export default function MetricStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="border-b-2 border-ink"
      aria-label="Key project metrics"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x-2 divide-y-2 md:divide-y-0 divide-ink">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="px-6 md:px-10 py-8 flex flex-col gap-2"
            >
              <div className="flex items-end gap-0.5">
                <span
                  className="font-display font-bold text-ink leading-none"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
                >
                  {metric.value}
                </span>
                {metric.suffix && (
                  <span
                    className="font-display font-bold text-accent leading-none mb-1"
                    style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
                  >
                    {metric.suffix}
                  </span>
                )}
              </div>
              <p className="label-upper text-ink-muted whitespace-pre-line">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
