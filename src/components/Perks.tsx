"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Target, Coffee, Droplets, ShoppingBag } from "lucide-react";

const perks = [
  {
    icon: Target,
    title: "Professional Coaching",
    description: "Level up your game with our certified padel instructors.",
  },
  {
    icon: Coffee,
    title: "Premium Lounge Area",
    description: "Relax before and after your match in our climate-controlled lounge.",
  },
  {
    icon: Droplets,
    title: "Shower & Changing Rooms",
    description: "High-end facilities for your comfort.",
  },
  {
    icon: ShoppingBag,
    title: "Pro Shop",
    description: "Rent or buy the latest Bullpadel equipment on-site.",
  },
];

const steps = [
  {
    num: "01",
    title: "Choose Your Slot",
    description: "Browse available dates and times. We're open from 6 AM till 2 AM for your convenience.",
  },
  {
    num: "02",
    title: "WhatsApp Confirmation",
    description: "Tap the book button to start a chat with our concierge for instant slot reservation.",
  },
  {
    num: "03",
    title: "Play & Enjoy",
    description: "Arrive 10 minutes early, grab your equipment, and step onto Lahore's finest courts.",
    done: true,
  },
];

export default function Perks() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Court blue ambient left */}
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50%] bg-[radial-gradient(ellipse_at_bottom_left,rgba(13,33,55,0.5)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-20 items-start">

          {/* ── Left: Booking Process ──────────────────────────────────── */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className="eyebrow-accent mb-5"
            >
              BOOKING PROCESS
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
              className="font-display-lg font-extrabold text-4xl md:text-[3rem] text-primary leading-[1.05] tracking-tight mb-16"
            >
              From Lounge<br />To Court In Minutes
            </motion.h2>

            {/* Steps — typographic list with vertical hairline */}
            <div className="relative space-y-0">
              {/* Vertical rail */}
              <div className="absolute left-[1.4rem] top-3 bottom-3 w-px bg-gradient-to-b from-accent/20 via-white/8 to-transparent" />

              {steps.map((step, idx) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.55,
                    delay: idx * 0.1,
                    ease: [0.32, 0.72, 0, 1],
                  }}
                  className="flex items-start gap-8 py-7 relative group"
                >
                  {/* Step marker */}
                  <div
                    className={`relative z-10 w-12 h-12 rounded-full border flex items-center justify-center shrink-0 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                      step.done
                        ? "bg-accent border-accent"
                        : "bg-surface-container-high border-white/10 group-hover:border-accent/40"
                    }`}
                  >
                    {step.done ? (
                      <Check className="w-5 h-5 text-on-secondary" strokeWidth={2.5} />
                    ) : (
                      <span className="font-label-caps text-[12px] text-accent font-bold">
                        {step.num}
                      </span>
                    )}
                  </div>

                  {/* Step content */}
                  <div className="pt-2.5">
                    <h4 className="font-display-lg font-bold text-[1.05rem] text-primary mb-2 leading-snug tracking-tight">
                      {step.title}
                    </h4>
                    <p className="font-body-md text-[0.875rem] text-on-surface-variant opacity-75 leading-relaxed max-w-xs">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Right: Club Perks — typographic column, no glass box ─── */}
          <div className="lg:pt-16">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05, ease: [0.32, 0.72, 0, 1] }}
              className="eyebrow mb-5"
            >
              PREMIUM CLUB PERKS
            </motion.p>

            {/* Perks as clean hairline-separated rows */}
            <div className="border-t border-white/5">
              {perks.map((perk, idx) => {
                const Icon = perk.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.55,
                      delay: idx * 0.09,
                      ease: [0.32, 0.72, 0, 1],
                    }}
                    className="group flex items-start gap-5 py-7 hairline"
                  >
                    {/* Minimal icon */}
                    <div className="w-9 h-9 rounded-lg border border-white/8 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-accent/30 group-hover:bg-accent/5 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                      <Icon
                        className="w-4 h-4 text-on-surface-variant group-hover:text-accent transition-colors duration-300"
                        strokeWidth={1.5}
                      />
                    </div>

                    <div>
                      <h5 className="font-display-lg font-bold text-[1rem] text-primary mb-1.5 leading-snug tracking-tight">
                        {perk.title}
                      </h5>
                      <p className="font-body-md text-[0.85rem] text-on-surface-variant opacity-75 leading-relaxed">
                        {perk.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
