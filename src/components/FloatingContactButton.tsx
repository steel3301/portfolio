"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingContactButton() {
  const pathname = usePathname();

  // Hide button if already on contact page
  if (pathname === "/contact") return null;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.5 }}
      className="fixed bottom-6 right-6 z-40"
    >
      <Link
        href="/contact"
        aria-label="Contact Me"
        title="Contact Me"
        className="w-12 h-12 bg-accent text-paper border-2 border-ink shadow-neo flex items-center justify-center hover:bg-ink hover:text-paper transition-all duration-200 group focus-visible:outline-accent"
      >
        <Mail size={20} className="group-hover:scale-110 transition-transform duration-200" />
      </Link>
    </motion.div>
  );
}
