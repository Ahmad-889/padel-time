"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  avatar: string;
  delay: number;
}

function TestimonialCard({ quote, name, title, avatar, delay }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay, ease: [0.32, 0.72, 0, 1] }}
      className="min-w-[300px] md:min-w-[400px] flex-1 depth-card p-8 snap-center flex flex-col justify-between border border-white/5 accent-hover transition-all duration-500 hover:-translate-y-1"
    >
      <div>
        {/* Stars */}
        <div className="flex items-center gap-1 text-secondary mb-6">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="select-none w-4 h-4 fill-current text-secondary"
              strokeWidth={1.5}
            />
          ))}
        </div>
        <p className="font-body-md text-[0.95rem] text-on-surface-variant italic mb-8 leading-relaxed opacity-90">
          &ldquo;{quote}&rdquo;
        </p>
      </div>

      <div className="flex items-center gap-4 border-t border-white/5 pt-4">
        <div className="w-10 h-10 rounded-full overflow-hidden relative shrink-0">
          <Image src={avatar} alt={`${name} Avatar`} fill className="object-cover" />
        </div>
        <div>
          <h5 className="font-body-md text-[0.9rem] text-primary font-bold">{name}</h5>
          <p className="font-label-caps text-[10px] text-on-surface-variant/60 tracking-wider font-semibold">
            {title}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const reviews = [
    {
      quote: "Best padel courts in Lahore, hands down. The surface is perfect and the night lighting is spectacular. Finally, a world-class facility in DHA 5.",
      name: "Ahmed Malik",
      title: "DHA 5 RESIDENT",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3eu0Vn9c_WlD5FlWyeeFvPOD54TwHYTqbuNBUVgOVazp1c7scJmaorYZkRfkR9OEMnaSnjdaVuRNyHaXVzkYxQtfjZWcCZ3Ta1zoEogxYFdihJubUQhuQE5x_uo7TYbJ28Hf87_x04nny4E4t6asP0ykoAe1HdhP3wMkF4bH8aalhRgp9MFo87vmAjv4Ta7TwdXaMZryknyxrdcUhgEybIeSNsVlZ_o0ft6yE3lAlC3Sq_lv39cxmZRqRPmsI2X45I_13lg3Olll3",
      delay: 0,
    },
    {
      quote: "The booking process is so smooth through WhatsApp. No more waiting or guessing. The community here is great for finding match partners.",
      name: "Zoya Khan",
      title: "PADEL ENTHUSIAST",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6ZkjxayYL64VXiN7Unh7DkB9VKESafqo0-3Pz5iWkcXdX9Szr9BverdFxxb5eDmT7lRnv0c8IL33HBmBlUB87zO5GQQjf3FtMekYln6-KwDhxaSTEUsOkcSTybIbhHQ8tQ2oqDxVY0RsA1dEJ-Q1Bd7KmzoEhdseCPw12vKU__jwNFgPaFxH-ljr2w9qMPOa6pxyzQH1oMLzJNibNmE8nI-swoQGxLtGQ7CkF-DAK0sk4LZGkHrSv7_x_uzNcfa6wFKciC5SO_JMx",
      delay: 0.1,
    },
    {
      quote: "Excellent coaching staff and the facility is incredibly clean. It's more than just a court; it's a social hub for sports lovers in Lahore.",
      name: "Omar Farooq",
      title: "BUSINESS OWNER",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCh8BJiipfNo1W0LOoGW--NcPnr1qm2-8e12fK9cWVG3401IaOdwxEXW2f-fouBRf896UJ-mcXexasWeXmEiJMPLYnMOz6BLLJrSidSg5mV9g-l1pO161Eeuulq2EmKzWQCeJDUTrSdkc7yd6R_itvMx7HfDmfgz6XvlNtm-nnLoAK6exQOb53L4x58aqnxD1QkQD_H2bTI5oM5UIY8HFQwNxkBhqWmI2LGl7JrT8Deq3V3j_PTJtldEOYILN6U-phgbhNpFK53mARQ",
      delay: 0.2,
    },
  ];

  return (
    <section className="py-32 overflow-hidden bg-surface-container-lowest/30">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow-accent mb-4 block">
              WHAT OUR PLAYERS SAY
            </span>
            <h2 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary font-extrabold leading-[1.1] tracking-tight">
              Voices From <br />The Court
            </h2>
          </div>
        </div>

        {/* Scrollable Container */}
        <div className="flex space-x-6 overflow-x-auto pb-8 snap-x no-scrollbar cursor-grab active:cursor-grabbing">
          {reviews.map((rev, idx) => (
            <TestimonialCard
              key={idx}
              quote={rev.quote}
              name={rev.name}
              title={rev.title}
              avatar={rev.avatar}
              delay={rev.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
