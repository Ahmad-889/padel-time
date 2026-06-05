"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowUpRight } from "lucide-react";

interface PricingProps {
  onBookClick: () => void;
}

const plans = [
  {
    tier: "WARM UP",
    duration: "1 Hour",
    weekday: "Rs. 3,000",
    weekend: "Rs. 3,500",
    perks: ["Standard Court Booking", "Free Water Bottles"],
    focal: false,
    cta: "Book Session",
  },
  {
    tier: "THE PRO GAME",
    duration: "2 Hours",
    weekday: "Rs. 5,500",
    weekend: "Rs. 6,500",
    perks: ["Premium Court Selection", "Complimentary Towels", "Discounted Gear Rental"],
    focal: true,
    badge: "Most Selected",
    cta: "Book Session",
  },
  {
    tier: "TOURNAMENT READY",
    duration: "3 Hours",
    weekday: "Rs. 7,500",
    weekend: "Rs. 9,000",
    perks: ["Unlimited Refreshments", "Reserved Lounge Access"],
    focal: false,
    cta: "Book Session",
  },
];

interface PlanCardProps {
  plan: (typeof plans)[0];
  index: number;
  onBookClick: () => void;
}

function PlanCard({ plan, index, onBookClick }: PlanCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.65,
        delay: index * 0.12,
        ease: [0.32, 0.72, 0, 1],
      }}
      className={`relative flex flex-col justify-between h-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
        plan.focal
          ? "focal-card p-9 lg:p-10 scale-[1.03] lg:scale-[1.04] z-10"
          : "spatial-card p-9 lg:p-10 hover:border-white/10 accent-hover"
      }`}
    >
      {/* Focal card — premium court blue depth glow */}
      {plan.focal && (
        <div className="absolute inset-0 rounded-[2rem] overflow-hidden pointer-events-none">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-32 bg-accent/5 blur-3xl" />
        </div>
      )}

      {/* Badge for focal */}
          {plan.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1.5 bg-accent text-on-secondary px-4 py-1.5 rounded-full font-label-caps text-[11px] font-bold tracking-widest whitespace-nowrap shadow-[0_4px_16px_rgba(var(--color-secondary-rgb),0.3)]">
            <span className="w-1.5 h-1.5 rounded-full bg-on-secondary/60 animate-pulse" />
            {plan.badge}
          </span>
        </div>
      )}

      <div>
        {/* Tier label */}
        <p
          className={`font-label-caps text-[11px] tracking-[0.18em] font-semibold mb-5 ${
            plan.focal ? "text-accent/80" : "text-on-surface-variant/60"
          }`}
        >
          {plan.tier}
        </p>

        {/* Duration */}
        <h3
          className={`font-display-lg font-extrabold text-[2.5rem] leading-none tracking-tight mb-1 ${
            plan.focal ? "text-primary" : "text-primary"
          }`}
        >
          {plan.duration}
        </h3>

        {/* Pricing rows */}
        <div className="mt-6 mb-8 space-y-3">
          <div
            className={`flex items-center justify-between py-3 border-b ${
              plan.focal ? "border-white/8" : "border-white/5"
            }`}
          >
            <span className="font-label-caps text-[10px] tracking-widest text-on-surface-variant/55 uppercase">
              Weekdays
            </span>
            <span
              className={`font-display-lg font-bold text-[1.1rem] tabular-nums ${
                plan.focal ? "text-accent" : "text-primary"
              }`}
            >
              {plan.weekday}
            </span>
          </div>
          <div className="flex items-center justify-between py-1">
            <span className="font-label-caps text-[10px] tracking-widest text-on-surface-variant/55 uppercase">
              Weekends
            </span>
            <span
              className={`font-display-lg font-bold text-[1.1rem] tabular-nums ${
                plan.focal ? "text-accent" : "text-primary"
              }`}
            >
              {plan.weekend}
            </span>
          </div>
        </div>

        {/* Perks */}
        <div
          className={`space-y-3 pt-6 border-t ${
            plan.focal ? "border-white/8" : "border-white/5"
          }`}
        >
          {plan.perks.map((perk, i) => (
            <div key={i} className="flex items-center gap-3">
              <CheckCircle
                className={`w-4 h-4 shrink-0 ${
                  plan.focal ? "text-accent/80" : "text-on-surface-variant/40"
                }`}
                strokeWidth={1.75}
              />
              <span
                className={`font-body-md text-[0.85rem] leading-snug ${
                  plan.focal ? "text-primary/90" : "text-on-surface-variant/70"
                }`}
              >
                {perk}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <button
        onClick={onBookClick}
        className={`mt-10 w-full flex items-center justify-center gap-2.5 py-4 rounded-2xl font-label-caps text-[12px] tracking-widest font-bold transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] cursor-pointer group ${
          plan.focal
            ? "bg-accent text-on-secondary hover:bg-accent/90 shadow-[0_8px_24px_rgba(var(--color-secondary-rgb),0.25)]"
            : "bg-white/5 text-primary/70 border border-white/8 hover:bg-white/10 hover:text-primary hover:border-white/15"
        }`}
      >
        {plan.cta}
        <span
          className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
            plan.focal ? "bg-black/15" : "bg-white/8"
          }`}
        >
          <ArrowUpRight className="w-3 h-3" strokeWidth={2} />
        </span>
      </button>
    </motion.div>
  );
}

export default function Pricing({ onBookClick }: PricingProps) {
  return (
    <section className="py-32 relative overflow-hidden court-blue-gradient" id="pricing">
      {/* Ambient depth — top radial */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(var(--color-court-blue-rgb),0.6)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">

        {/* Header — left-aligned editorial */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className="eyebrow mb-5"
            >
              PRICING PLANS
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
              className="font-display-lg font-extrabold text-4xl md:text-[3.25rem] text-primary leading-[1.05] tracking-tight"
            >
              Transparent<br />Booking Rates
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.32, 0.72, 0, 1] }}
            className="font-body-md text-[0.9rem] text-on-surface-variant/60 max-w-xs leading-relaxed lg:text-right"
          >
            No hidden fees. Consistent pricing across all courts. Reserve any slot from 6 AM to 2 AM daily.
          </motion.p>
        </div>

        {/* Pricing Cards — asymmetric scale on focal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-4 items-center">
          {plans.map((plan, idx) => (
            <PlanCard key={idx} plan={plan} index={idx} onBookClick={onBookClick} />
          ))}
        </div>
      </div>
    </section>
  );
}
