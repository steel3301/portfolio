"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "PROJECTS", href: "/projects" },
  { label: "EXPERIENCE", href: "/experience" },
  { label: "RESEARCH", href: "/research" },
  { label: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-paper border-b-2 border-ink shadow-neo-sm" : "bg-paper/90 backdrop-blur-md border-b-2 border-ink"
        }`}
      >
        <nav
          className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between h-14"
          aria-label="Main navigation"
        >
          {/* Logo / Name */}
          <Link
            href="/"
            className="font-display font-bold text-sm tracking-widest uppercase text-ink hover:text-accent transition-colors duration-150 flex items-center gap-2"
          >
            <span className="w-3 h-3 bg-accent border border-ink"></span>
            KW
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`label-upper transition-colors duration-150 focus-visible:outline-accent relative py-1 ${
                    isActive
                      ? "text-accent font-bold border-b-2 border-accent"
                      : "text-ink hover:text-accent"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href="#"
              className="btn-secondary py-2 px-4 text-[0.65rem]"
              aria-label="Download resume (opens in new tab)"
              target="_blank"
              rel="noopener noreferrer"
            >
              RESUME ↗
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden border-ink border-2 p-1.5 focus-visible:outline-accent"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-14 left-0 right-0 z-40 bg-paper border-b-2 border-ink"
          >
            <div className="flex flex-col">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`px-6 py-4 label-upper transition-colors duration-150 border-b border-ink focus-visible:outline-accent ${
                      isActive
                        ? "bg-accent text-paper font-bold"
                        : "text-ink hover:bg-ink hover:text-paper"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <a
                href="#"
                className="px-6 py-4 label-upper text-accent hover:bg-ink hover:text-paper transition-colors duration-150"
                target="_blank"
                rel="noopener noreferrer"
              >
                RESUME ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
