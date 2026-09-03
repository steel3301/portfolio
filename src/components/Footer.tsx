"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const [isHovered, setIsHovered] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const currentScroll = window.scrollY + windowHeight;

      // Expand footer when within 120px of bottom of page
      if (documentHeight - currentScroll <= 120) {
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isExpanded = isHovered || isAtBottom;

  return (
    <footer
      className="border-t-2 border-b-2 border-ink bg-paper transition-all duration-300 relative z-30"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="contentinfo"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Collapsed Top Bar Indicator */}
        <div className="px-6 md:px-10 py-3.5 flex items-center justify-between border-b border-ink/20 cursor-pointer select-none">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-accent rounded-full animate-pulse"></span>
            <p className="font-display font-bold text-ink uppercase tracking-wider text-xs">
              KAUSTUBH WARME
            </p>
            <span className="text-ink-muted text-xs">|</span>
            <span className="label-upper text-ink-muted text-[0.7rem]">AI / ML ENGINEER</span>
          </div>

          <div className="flex items-center gap-2 text-ink-muted text-xs font-mono">
            <span className="hidden md:inline label-upper text-[0.65rem]">
              {isExpanded ? "COLLAPSE" : "HOVER OR SCROLL TO EXPAND"}
            </span>
            <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronUp size={16} className="text-ink" />
            </motion.div>
          </div>
        </div>

        {/* Expandable Body */}
        <motion.div
          initial={false}
          animate={{
            height: isExpanded ? "auto" : 0,
            opacity: isExpanded ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 border-t border-ink">
            {/* Left Column */}
            <div className="md:col-span-8 px-6 md:px-10 py-8 border-b-2 md:border-b-0 md:border-r-2 border-ink flex flex-col justify-between gap-6">
              <div>
                <p className="font-display font-bold text-ink uppercase tracking-tight text-3xl">
                  KAUSTUBH WARME
                </p>
                <p className="label-upper text-ink-muted mt-1 text-xs">
                  AI / ML / AGENTIC SYSTEMS / COMPUTER VISION
                </p>
              </div>

              <div className="flex items-center gap-6">
                <p className="label-upper text-ink-muted text-xs font-bold">PUNE · INDIA</p>
                <p className="label-upper text-ink-muted text-xs">© {year} ALL RIGHTS RESERVED</p>
              </div>
            </div>

            {/* Right Links */}
            <div className="md:col-span-4 px-6 md:px-10 py-8 flex flex-col justify-between gap-6 bg-paper/50">
              <nav aria-label="Footer navigation">
                <div className="flex flex-col gap-2.5">
                  {[
                    { label: "GITHUB", href: "https://github.com/steel3301" },
                    { label: "LINKEDIN", href: "https://linkedin.com/in/kaustubh-warme" },
                    { label: "EMAIL", href: "mailto:kaustubhwarme@gmail.com" },
                  ].map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("mailto") ? undefined : "_blank"}
                      rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                      className="label-upper text-ink hover:text-accent font-bold text-xs transition-colors flex items-center justify-between group"
                    >
                      <span>{link.label}</span>
                      <span className="text-accent group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  ))}
                </div>
              </nav>
              <p className="label-upper text-ink-faint text-[0.65rem]">BUILT WITH NEXT.JS 15 & TAILWIND CSS</p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
