"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, ArrowUpRight, Menu, X } from "lucide-react";
import { businessInfo } from "@/lib/site";

interface NavbarProps {
  onBookClick: () => void;
}

const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "The Club", id: "why" },
  { label: "Gallery", id: "gallery" },
  { label: "Pricing", id: "pricing" },
  { label: "Location", id: "contact" },
];

export default function Navbar({ onBookClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isDark, setIsDark] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    // Load saved theme
    const saved = localStorage.getItem("padel-theme");
    const dark = saved !== "light";
    setIsDark(dark);
    document.documentElement.classList.toggle("light", !dark);
  }, []);

  const toggleTheme = useCallback(() => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("light", !next);
    localStorage.setItem("padel-theme", next ? "dark" : "light");
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);

      const current = NAV_LINKS.find(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current) setActiveSection(current.id);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileOpen(false);
  };

  return (
    <>
      {/* ── Floating Pill Nav ─────────────────────────────────────────── */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
        className={`fixed top-5 left-1/2 -translate-x-1/2 z-40 w-max max-w-[calc(100vw-2rem)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isScrolled
            ? "glass-card shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            : "bg-transparent border border-white/0"
        } rounded-full px-2 py-1.5`}
      >
        <div className="flex items-center gap-1">
          {/* Brand */}
          <a
            href="#home"
            onClick={(e) => scrollTo(e, "home")}
            className="px-4 py-2 font-display-lg tracking-tighter text-primary font-extrabold text-[15px] uppercase select-none whitespace-nowrap"
          >
            {businessInfo.name.toUpperCase()}
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center">
            {NAV_LINKS.map(({ label, id }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => scrollTo(e, id)}
                className={`relative px-4 py-2 font-label-caps text-[12px] tracking-widest uppercase font-medium transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] cursor-pointer whitespace-nowrap ${
                  activeSection === id
                    ? "text-primary"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {activeSection === id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-accent/10 border border-accent/25 rounded-full"
                    transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-5 bg-white/10 mx-1" />

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-white/8 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] cursor-pointer shrink-0"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isDark ? (
                <motion.span
                  key="sun"
                  initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 45, scale: 0.7 }}
                  transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
                >
                  <Sun className="w-4 h-4" strokeWidth={1.5} />
                </motion.span>
              ) : (
                <motion.span
                  key="moon"
                  initial={{ opacity: 0, rotate: 45, scale: 0.7 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -45, scale: 0.7 }}
                  transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
                >
                  <Moon className="w-4 h-4" strokeWidth={1.5} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          {/* Book CTA */}
          <button
            onClick={onBookClick}
            className="hidden md:flex items-center gap-2 bg-accent text-on-secondary px-5 py-2 rounded-full font-label-caps text-[12px] tracking-widest font-bold hover:bg-accent/90 active:scale-[0.97] transition-all duration-200 ease-[cubic-bezier(0.32,0.72,0,1)] cursor-pointer ml-1 group"
          >
            <span>Book Court</span>
            <span className="w-5 h-5 rounded-full bg-black/15 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
              <ArrowUpRight className="w-3 h-3" strokeWidth={2} />
            </span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Menu"
            className="md:hidden w-9 h-9 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-white/8 transition-all duration-300 cursor-pointer"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMobileOpen ? (
                <motion.span
                  key="close"
                  initial={{ opacity: 0, rotate: -45 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 45 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-4 h-4" strokeWidth={1.5} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ opacity: 0, rotate: 45 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -45 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-4 h-4" strokeWidth={1.5} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* ── Mobile Menu Overlay ────────────────────────────────────────── */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 md:hidden flex flex-col justify-center px-8 bg-background/95 backdrop-blur-3xl"
            onClick={() => setIsMobileOpen(false)}
          >
            <nav className="space-y-1" onClick={(e) => e.stopPropagation()}>
              {NAV_LINKS.map(({ label, id }, idx) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{
                    duration: 0.35,
                    delay: idx * 0.06,
                    ease: [0.32, 0.72, 0, 1],
                  }}
                >
                  <a
                    href={`#${id}`}
                    onClick={(e) => scrollTo(e, id)}
                    className={`block py-4 font-display-lg font-bold text-4xl tracking-tight transition-colors duration-200 cursor-pointer ${
                      activeSection === id
                        ? "text-accent"
                        : "text-primary/60 hover:text-primary"
                    }`}
                  >
                    {label}
                  </a>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{
                  duration: 0.35,
                  delay: NAV_LINKS.length * 0.06,
                  ease: [0.32, 0.72, 0, 1],
                }}
                className="pt-8"
              >
                <button
                  onClick={() => { onBookClick(); setIsMobileOpen(false); }}
                  className="inline-flex items-center gap-3 bg-accent text-on-secondary px-8 py-4 rounded-full font-label-caps text-sm tracking-widest font-bold cursor-pointer"
                >
                  Book Your Court
                  <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
                </button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
