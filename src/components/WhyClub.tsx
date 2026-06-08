"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Lightbulb, CalendarCheck, MapPin, Users, Package, LucideIcon } from "lucide-react";
import { businessInfo } from "@/lib/site";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const features: Feature[] = [
  {
    icon: Target,
    title: "Professional Surfaces",
    description: "Certified blue and red panoramic courts with zero-vibration surfaces for peak performance.",
    index: 0,
  },
  {
    icon: Lightbulb,
    title: "Cinema Lighting",
    description: "Advanced LED floodlights provide 360-degree illumination without glare for night matches.",
    index: 1,
  },
  {
    icon: CalendarCheck,
    title: "Easy Booking",
    description: "Skip the calls. Book your preferred slot through our streamlined WhatsApp portal instantly.",
    index: 2,
  },
  {
    icon: MapPin,
    title: "Prime Location",
    description: "Situated in the heart of DHA Phase 5, easily accessible from all parts of Lahore.",
    index: 3,
  },
  {
    icon: Users,
    title: "Active Community",
    description: "Join our exclusive WhatsApp groups to find partners and participate in tournaments.",
    index: 4,
  },
  {
    icon: Package,
    title: "Pro Equipment",
    description: "Don't have gear? Rent premium Bullpadel rackets and buy high-altitude balls on-site.",
    index: 5,
  },
];

function FeatureRow({ icon: Icon, title, description, index }: Feature) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay: (index % 3) * 0.1,
        ease: [0.32, 0.72, 0, 1],
      }}
      className="group flex items-start gap-6 py-7 hairline first:border-t-0 transition-all duration-500"
    >
      {/* Index + Icon cluster */}
      <div className="flex items-center gap-3 shrink-0 w-24 pt-0.5">
        <span className="font-label-caps text-[11px] text-on-surface-variant/50 tabular-nums leading-none">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="w-8 h-8 rounded-lg bg-accent/8 border border-accent/12 flex items-center justify-center group-hover:bg-accent/15 group-hover:border-accent/25 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
          <Icon className="w-4 h-4 text-accent/70 group-hover:text-accent transition-colors duration-300" strokeWidth={1.5} />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col md:flex-row md:items-start md:justify-between gap-3">
        <h3 className="font-display-lg font-bold text-[1.05rem] text-primary leading-tight tracking-tight group-hover:text-accent transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]">
          {title}
        </h3>
        <p className="font-body-md text-[0.875rem] text-on-surface-variant leading-relaxed md:max-w-xs md:text-right opacity-80">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default function WhyClub() {
  const col1 = features.slice(0, 3);
  const col2 = features.slice(3, 6);

  return (
    <section className="py-32 relative overflow-hidden" id="why">
      {/* Subtle court blue ambient */}
      <div className="absolute top-0 right-0 w-[40vw] h-[60%] bg-[radial-gradient(ellipse_at_top_right,rgba(var(--color-court-blue-rgb),0.6)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">

        {/* Editorial Header — asymmetric split */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div className="max-w-lg">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className="eyebrow-accent mb-5"
            >
              WHY {businessInfo.name}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
              className="font-display-lg font-extrabold text-4xl md:text-[3.25rem] text-primary leading-[1.05] tracking-tight"
            >
              Unmatched Quality<br />For Elite Players
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="font-body-md text-[0.925rem] text-on-surface-variant max-w-xs opacity-75 leading-relaxed lg:text-right lg:pb-1"
          >
            Experience the difference of playing on internationally certified surfaces with premium
            amenities designed for the Lahore elite.
          </motion.p>
        </div>

        {/* Asymmetric Two-Column Feature List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0">
          <div className="border-t border-white/5">
            {col1.map((f) => <FeatureRow key={f.index} {...f} />)}
          </div>
          {/* Right column offset — editorial vertical shift */}
          <div className="border-t border-white/5 lg:mt-12">
            {col2.map((f) => <FeatureRow key={f.index} {...f} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
