"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";
import { businessInfo } from "@/lib/site";

export default function Contact() {
  const handleOpenMaps = () => {
    window.open(businessInfo.mapsUrl, "_blank");
  };

  return (
    <section className="py-24 bg-surface-container-lowest" id="contact">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div>
              <span className="font-label-caps text-label-caps text-secondary mb-4 block tracking-widest font-bold">
                FIND US
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-bold">
                In The Heart Of <br /> {businessInfo.area}
              </h2>
            </div>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="text-secondary select-none w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-body-md text-body-md text-primary font-bold mb-1">Address</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant opacity-85 leading-relaxed">
                    {businessInfo.address}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center shrink-0">
                  <Phone className="text-secondary select-none w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-body-md text-body-md text-primary font-bold mb-1">
                    Phone / WhatsApp
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant opacity-85 leading-relaxed">
                    {businessInfo.phoneDisplay}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center shrink-0">
                  <Clock className="text-secondary select-none w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-body-md text-body-md text-primary font-bold mb-1">
                    Operating Hours
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant opacity-85 leading-relaxed">
                    {businessInfo.operatingHours}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Stylized map graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-3xl overflow-hidden h-[500px] border border-white/10 relative w-full"
          >
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcZFobqncf1gDAbB_a0QE6qL387SCZs-rTpGASLwpyRdZoqB4MRUUtEINzASHZof-cmina0mxxKrHAV1PT3UI0Y8WYjYQXW2mWB1L58LgWLH6nh3rLCeKb8onuNIJcP5wbA-OYFzZY7qctoVS7PCiLcoxfG7yOVLvyNTxDfeWQw-5qkyGZIgOGbdcjPmSQL3MHkQZSx7zIvtWrZKXf4PfKe4Y3wyKadG7WbqXZOymcQzZHPC7rDHmLM9ZqkR4ueH2gnkoOGFocTUhh"
              alt={`Stylized map showing ${businessInfo.name} location in ${businessInfo.area}, ${businessInfo.city}.`}
              fill
              sizes="(max-w-768px) 100vw, 50vw"
              className="object-cover"
            />
            {/* Overlay directions card */}
            <div className="absolute bottom-8 left-8 right-8 glass-card p-6 rounded-2xl flex items-center justify-between z-10 backdrop-blur-md">
              <span className="font-body-md text-body-md text-primary font-medium">
                Need directions?
              </span>
              <button
                onClick={handleOpenMaps}
                className="bg-primary text-background px-6 py-2.5 rounded-full font-label-caps text-label-caps font-bold hover:scale-[1.03] active:scale-95 transition-transform cursor-pointer"
              >
                OPEN MAPS
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
