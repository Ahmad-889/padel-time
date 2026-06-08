"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import WhyClub from "@/components/WhyClub";
import Gallery from "@/components/Gallery";
import Perks from "@/components/Perks";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { businessInfo, createWhatsAppLink } from "@/lib/site";

import { ArrowUpRight } from "lucide-react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleJoinCommunity = () => {
    window.open(createWhatsAppLink(businessInfo.communityMessage), "_blank");
  };

  return (
    <>
      {/* Navigation Header */}
      <Navbar onBookClick={() => setIsModalOpen(true)} />

      {/* Main Page Layout */}
      <main>
        {/* Hero Section */}
        <Hero onBookClick={() => setIsModalOpen(true)} />

        {/* Stats Milestone Section */}
        <Stats />

        {/* Why Padel Time Section */}
        <WhyClub />

        {/* Grid Gallery Section */}
        <Gallery />

        {/* Perks & Process Section */}
        <Perks />

        {/* Pricing Cards Section */}
        <Pricing onBookClick={() => setIsModalOpen(true)} />

        {/* Testimonials Review Slider */}
        <Testimonials />

        {/* Contact/Find Us Section */}
        <Contact />

        {/* FAQ Accordion Section */}
        <FAQ />

        {/* CTA Bottom Banner Section */}
        <section className="py-32 px-margin-mobile md:px-margin-desktop">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            className="max-w-container-max mx-auto focal-card p-12 md:p-24 text-center overflow-hidden relative"
          >
            {/* Radial overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-secondary)/6%,transparent_75%)] pointer-events-none" />

            <div className="relative z-10 space-y-12">
              <h2 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary font-extrabold leading-[1.05] tracking-tight">
                Ready To Own <br /> The Court?
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto opacity-85 leading-relaxed">
                Join the {businessInfo.name} community today. Limited evening slots available this week.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-secondary text-on-secondary px-8 py-4 rounded-full font-label-caps text-label-caps tracking-widest font-bold hover:bg-secondary/90 active:scale-[0.98] transition-all duration-300 ease-premium cursor-pointer group shadow-xl shadow-secondary/10"
                >
                  <span>Book Your Court Now</span>
                  <span className="w-5 h-5 rounded-full bg-black/15 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
                    <ArrowUpRight className="w-3.5 h-3.5 text-on-secondary" strokeWidth={2.5} />
                  </span>
                </button>
                <button
                  onClick={handleJoinCommunity}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/5 text-primary border border-white/10 px-8 py-4 rounded-full font-label-caps text-label-caps tracking-widest font-bold hover:bg-white/10 hover:border-white/15 active:scale-[0.98] transition-all duration-300 ease-premium cursor-pointer group"
                >
                  <span>Join Community Group</span>
                  <span className="w-5 h-5 rounded-full bg-white/8 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
                    <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2.5} />
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer Legal Info */}
      <Footer />

      {/* Interactive Booking Modal Popup */}
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
