"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, ChevronDown } from "lucide-react";
import { businessInfo, createWhatsAppLink } from "@/lib/site";

interface HeroProps {
  onBookClick: () => void;
}

export default function Hero({ onBookClick }: HeroProps) {
  const handleWhatsAppBooking = () => {
    window.open(createWhatsAppLink(businessInfo.bookingMessage), "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20" id="home">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-transparent z-10"></div>
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnt-uCBP_Lcn5B7GbwcXF_BOUW9mOtQS0exrEFfilpAV9QSWA_QAlLScfGj_GixqqNMyddt6V0Ro9Fq_DyltCNUAsBvp7cnf0BKi0Lk6Im9eicascnMIbTbAqX5cfL6tneUBbVvnBk27jeCdwjGCPYYJWnsBGXqdltjX3HpeZ31VMqZWvO0h3kwkehx_V6ms9JJA3coP_jzlMMdXE8_8f5TU7UpaQxg0gccDpbYmNWau6Qyu_lhIyWTvuxaWcGSehRSnpnip_eva5j"
          alt="A high-contrast cinematic shot of a professional padel court at night in Lahore."
          fill
          priority
          sizes="100vw"
          className="object-cover grayscale-20"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="max-w-3xl space-y-stack-lg">
          {/* Badge Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-surface-container-low border border-outline px-4 py-1.5 rounded-full"
          >
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="font-label-caps text-[11px] text-on-surface-variant tracking-wider">
              OPEN IN {businessInfo.area.toUpperCase()}, {businessInfo.city.toUpperCase()}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary leading-tight font-extrabold"
          >
            Lahore{"'"}s Premier <br />{" "}
            <span className="text-secondary">Padel Experience</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-body-lg text-body-lg text-on-surface-variant max-w-xl"
          >
            Play on professional courts, book instantly, and join one of Lahore{"'"}s fastest-growing
            sports communities.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <button
              onClick={onBookClick}
              className="bg-secondary text-on-secondary px-10 py-4 rounded-xl font-label-caps text-body-md font-bold hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-secondary/15"
            >
              Book Your Court
              <ArrowRight className="font-bold w-6 h-6" />
            </button>
            <button
              onClick={handleWhatsAppBooking}
              className="bg-surface-container-high text-on-surface border border-white/10 px-10 py-4 rounded-xl font-label-caps text-body-md font-bold hover:bg-surface-variant hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="text-secondary w-6 h-6" />
              WhatsApp Booking
            </button>
          </motion.div>

          {/* Quick Stats/Hours info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex items-center gap-8 pt-8"
          >
            <div className="flex flex-col">
              <span className="font-label-caps text-label-caps text-secondary font-semibold tracking-wider">
                HOURS
              </span>
              <span className="font-body-md text-body-md text-primary font-medium">
                {businessInfo.operatingHours.replace("Daily: ", "")}
              </span>
            </div>
            <div className="w-px h-8 bg-white/10"></div>
            <div className="flex flex-col">
              <span className="font-label-caps text-label-caps text-secondary font-semibold tracking-wider">
                LOCATION
              </span>
              <span className="font-body-md text-body-md text-primary font-medium">
                {businessInfo.area}, {businessInfo.city}
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center select-none opacity-80">
        <span className="font-label-caps text-[11px] text-on-surface-variant mb-2 tracking-widest font-semibold">
          SCROLL TO EXPLORE
        </span>
        <ChevronDown className="text-secondary w-8 h-8" />
      </div>
    </section>
  );
}
