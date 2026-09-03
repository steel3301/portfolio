"use client";

import { useState, useEffect, useTransition } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Loader2 } from "lucide-react";

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
  const [loadingHref, setLoadingHref] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Clear loading state when pathname updates
  useEffect(() => {
    setLoadingHref(null);
  }, [pathname]);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (pathname === href) return;

    setLoadingHref(href);
    setMenuOpen(false);

    startTransition(() => {
      router.push(href);
    });
  };

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
            onClick={(e) => handleNavClick(e, "/")}
            className="font-display font-bold text-sm tracking-widest uppercase text-ink hover:text-accent transition-colors duration-150 flex items-center gap-2"
          >
            {loadingHref === "/" ? (
              <Loader2 size={14} className="animate-spin text-accent" />
            ) : (
              <span className="w-3 h-3 bg-accent border border-ink"></span>
            )}
            KW
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const isLoading = loadingHref === link.href || (isPending && loadingHref === link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`label-upper transition-colors duration-150 focus-visible:outline-accent relative py-1 flex items-center gap-1.5 ${
                    isActive
                      ? "text-accent font-bold border-b-2 border-accent"
                      : "text-ink hover:text-accent"
                  }`}
                >
                  {isLoading && <Loader2 size={14} className="animate-spin text-accent flex-shrink-0" />}
                  <span>{link.label}</span>
                </Link>
              );
            })}
            <a
              href="#"
              className="btn-secondary py-2 px-4 text-[0.65rem] flex items-center gap-1.5"
              aria-label="Download resume (opens in new tab)"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                setLoadingHref("resume");
                setTimeout(() => setLoadingHref(null), 1000);
              }}
            >
              {loadingHref === "resume" && <Loader2 size={12} className="animate-spin text-accent" />}
              <span>RESUME ↗</span>
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
                const isLoading = loadingHref === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-6 py-4 label-upper transition-colors duration-150 border-b border-ink focus-visible:outline-accent flex items-center justify-between ${
                      isActive
                        ? "bg-accent text-paper font-bold"
                        : "text-ink hover:bg-ink hover:text-paper"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isLoading && <Loader2 size={16} className="animate-spin text-paper" />}
                  </Link>
                );
              })}
              <a
                href="#"
                className="px-6 py-4 label-upper text-accent hover:bg-ink hover:text-paper transition-colors duration-150 flex items-center justify-between"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>RESUME ↗</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
