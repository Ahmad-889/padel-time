"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { businessInfo } from "@/lib/site";

interface GalleryItemProps {
  src: string;
  alt: string;
  className: string;
  delay: number;
}

function GalleryItem({ src, alt, className, delay }: GalleryItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay }}
      className={`relative overflow-hidden group rounded-2xl ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-w-768px) 100vw, 50vw"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      {/* Subtle overlay on hover */}
      <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
}

export default function Gallery() {
  const images = [
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0fA5ZMEdvIvUF0tTUozH9aioBtehwj33jGYRQJzHJxZNbd2I_gYsLq-OhhySxkoZn2gdDo-ywGehsX3jOyofoD_cgi4wKshNUBfba11fI7cDPaTrfkyqgVJNb8DhWMXdIshD5q71zq0L44uo1hv14nWyFakrhYxGKD9rz3peHqO1NOJo-oIWIENQHnxvJ545_GnBJsKxbLNGhUF_4ht2kzoNR8jj03mZRrLZrEqL5b_ZkccTRnEG31c8n9SYFILHtBXVkDZ84eKKl",
      alt: "Flagship padel courts at night showcasing the top-tier sports facilities in DHA Phase 5, Lahore.",
      className: "md:col-span-2 md:row-span-2 min-h-[300px] md:min-h-full",
      delay: 0,
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXueua0unpY8pDt0wI-kCeU5Esu8mjS0xMzqRBpYWWUe_7r8wP3zOFabbSquyqmWLu2aXeYOhikhaQZoDT0mD8DBuetGmEAkHu8r5L9NNtzgaRQwgmO1_WAfeBblLYIrCXYdIQb9c-t8zCmzce6pysQySF0Xt_V4W19Ip-jXa-tPbj7-TeZkYV2hvvs5sh4uRVAQWJi_JTqFNphbHC-IZkwjVPGb8dkDtKG_qJjeXIo4eNOeLCicmuw4lfnCD6inGMi8VjP_so9QuB",
      alt: "Close up of a professional padel racket and ball resting on the court surface.",
      className: "md:col-span-1 md:row-span-1 min-h-[200px] md:min-h-full",
      delay: 0.1,
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpNJr8kz2lXSeMlZkhyH7E7l_xwslKDx_3kzzE5vp_A6IMLrBKhzEQujv0B-pm9y1B0EwE_3SUh7mbZqbLyT7espuCTeU131zz6kXLjX6laySVML21kNotUCP8do4rG_pymqmtZZhi4DzNrrBj6oHCDxTKnwuqsGw7DMsHPnz6ut-Bg_ny2XD0KEj1tDXKRqDjSqxRxu8ZBw1qmTDS2fiQmxjObN4Bx2pdmDm8WNWwe9tgUWmUAEInQM4VuT6jFW0LcJQgDeLbfGG5",
      alt: `Lounge area at the entrance of ${businessInfo.name} with high-end sports social hub atmosphere.`,
      className: "md:col-span-1 md:row-span-2 min-h-[300px] md:min-h-full",
      delay: 0.2,
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfTCFlJ81Kto_Y-5Ym4yqCACPce5SppIZMVXjHod5qdHE_UecO3JSetAZgxRI2dwkqdlfeikwBaOHrWKCmt1z-59Bv0_3p3GqfhsROkrB2Ap--93JuzZqnql4XVteuWNUbVvUB4PY86ystn6--AiF7aOy9j0vCCrkTk8svjGm14Z5mLTgzBFdCW9-QjrGYI_vHpUUzKDe7I-NbjSM3hpfJJd_ChWNHA3dyGmYKe3XuVGaFEfiyqNDspH_6QE26Z5zSbfVBlHTXLVj7",
      alt: "Dynamic shot of a player serving on a neon-lighted court in Lahore.",
      className: "md:col-span-1 md:row-span-1 min-h-[200px] md:min-h-full",
      delay: 0.3,
    },
  ];

  return (
    <section className="py-24 bg-surface-container-lowest" id="gallery">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Header Title */}
        <div className="text-center mb-16">
          <span className="font-label-caps text-label-caps text-secondary mb-4 block tracking-widest font-bold">
            THE CLUB GALLERY
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-bold">
            A Vision Of Modern Sport
          </h2>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {images.map((img, idx) => (
            <GalleryItem
              key={idx}
              src={img.src}
              alt={img.alt}
              className={img.className}
              delay={img.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
