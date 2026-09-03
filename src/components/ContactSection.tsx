"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, ExternalLink, Loader2 } from "lucide-react";

// Inline SVGs for social icons not in lucide-react v1.x
const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const contactLinks = [
  {
    label: "EMAIL",
    value: "kaustubhwarme@gmail.com",
    href: "mailto:kaustubhwarme@gmail.com",
    icon: Mail,
    display: "kaustubhwarme@gmail.com",
  },
  {
    label: "GITHUB",
    value: "github.com/steel3301",
    href: "https://github.com/steel3301",
    icon: GithubIcon,
    display: "github.com/steel3301",
  },
  {
    label: "LINKEDIN",
    value: "LinkedIn Profile",
    href: "https://linkedin.com/in/kaustubh-warme",
    icon: LinkedinIcon,
    display: "linkedin.com/in/kaustubh-warme",
  },
];

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [loadingBtn, setLoadingBtn] = useState<string | null>(null);

  const handleButtonClick = (id: string) => {
    setLoadingBtn(id);
    setTimeout(() => setLoadingBtn(null), 1000);
  };

  return (
    <section id="contact" className="border-b-2 border-ink" aria-labelledby="contact-heading">
      <div className="max-w-[1400px] mx-auto">
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-12"
        >

          {/* Left — headline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 px-6 md:px-10 py-16 md:py-20 border-b-2 md:border-b-0 md:border-r-2 border-ink flex flex-col justify-between gap-12"
          >
            <div>
              <p className="label-upper text-ink-muted mb-6">CONTACT</p>
              <h2
                id="contact-heading"
                className="font-display font-bold text-ink uppercase leading-tight tracking-tight"
                style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
              >
                LET&rsquo;S BUILD<br />SOMETHING<br />USEFUL.
              </h2>
            </div>

            <div>
              <a
                href="mailto:kaustubhwarme@gmail.com"
                onClick={() => handleButtonClick("get-in-touch")}
                className="btn-primary text-base py-4 px-8 inline-flex items-center gap-2"
                aria-label="Send email to Kaustubh Warme"
              >
                {loadingBtn === "get-in-touch" && <Loader2 size={18} className="animate-spin text-paper" />}
                <span>GET IN TOUCH →</span>
              </a>
            </div>
          </motion.div>

          {/* Right — links */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-5 px-6 md:px-10 py-16 md:py-20 flex flex-col gap-6"
          >
            <p className="label-upper text-ink-muted">REACH ME AT</p>

            {/* Contact links */}
            <div className="flex flex-col divide-y-2 divide-ink border-2 border-ink">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => handleButtonClick(link.label)}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className="flex items-center justify-between px-5 py-4 hover:bg-ink hover:text-paper transition-all duration-150 group"
                    aria-label={`${link.label}: ${link.display}`}
                  >
                    <div className="flex items-center gap-3">
                      {loadingBtn === link.label ? (
                        <Loader2 size={16} className="animate-spin text-accent group-hover:text-paper" />
                      ) : (
                        <Icon size={16} className="text-accent group-hover:text-paper transition-colors" />
                      )}
                      <div>
                        <p className="label-upper text-ink-muted group-hover:text-paper/60 transition-colors">
                          {link.label}
                        </p>
                        <p className="font-mono text-xs text-ink group-hover:text-paper transition-colors">
                          {link.display}
                        </p>
                      </div>
                    </div>
                    <ExternalLink size={14} className="text-ink-faint group-hover:text-paper/60 transition-colors" />
                  </a>
                );
              })}
            </div>

            {/* Resume */}
            <div className="border-2 border-ink p-5">
              <p className="label-upper text-ink-muted mb-3">RESUME</p>
              <a
                href="#"
                onClick={() => handleButtonClick("resume-download")}
                className="btn-secondary w-full justify-center flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download resume (opens in new tab)"
              >
                {loadingBtn === "resume-download" && <Loader2 size={14} className="animate-spin text-accent" />}
                <span>DOWNLOAD RESUME ↗</span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
