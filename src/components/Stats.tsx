"use client";

import React from "react";
import { motion } from "framer-motion";

interface StatItemProps {
  number: string;
  label: string;
  delay: number;
}

function StatItem({ number, label, delay }: StatItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <h3 className="font-display-lg text-headline-lg text-secondary mb-1 font-extrabold">
        {number}
      </h3>
      <p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider font-semibold">
        {label}
      </p>
    </motion.div>
  );
}

export default function Stats() {
  const statsData = [
    { number: "500+", label: "Matches Played", delay: 0 },
    { number: "400+", label: "Active Members", delay: 0.1 },
    { number: "3", label: "Premium Courts", delay: 0.2 },
    { number: "20h", label: "Daily Availability", delay: 0.3 },
  ];

  return (
    <section className="py-stack-lg bg-surface-container-lowest border-y border-white/5">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, idx) => (
            <StatItem
              key={idx}
              number={stat.number}
              label={stat.label}
              delay={stat.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
