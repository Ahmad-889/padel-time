"use client";

import React from "react";
import { businessInfo } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest py-16 border-t border-white/5">
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between px-margin-desktop max-w-container-max mx-auto">
        {/* Branding & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <span className="font-display-lg text-lg text-primary uppercase tracking-tighter font-extrabold select-none">
            {businessInfo.name}
          </span>
          <p className="font-body-md text-[0.85rem] text-on-surface-variant opacity-70">
            &copy; {new Date().getFullYear()} {businessInfo.legalName}. All Rights Reserved.
          </p>
        </div>

        {/* Attribution */}
        <div className="flex flex-col items-center gap-2 text-center">
          <a
            href={businessInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-label-caps text-label-caps text-on-surface-variant tracking-[0.22em] uppercase font-semibold hover:text-secondary transition-colors"
            aria-label="Developed by Muhammad Ahmad on LinkedIn"
          >
            Developed by Muhammad Ahmad
          </a>
        </div>

        {/* Social Link */}
        <div className="flex gap-4 justify-center md:justify-end">
          <a
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-on-surface-variant hover:text-secondary hover:border-secondary transition-all"
            href={businessInfo.facebookUrl}
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.114 4.388 23.082 10.125 24v-8.438H7.078v-3.49h3.047V9.414c0-3.02 1.792-4.688 4.533-4.688 1.312 0 2.686.235 2.686.235v2.953H15.82c-1.491 0-1.956.934-1.956 1.89v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.082 24 18.114 24 12.073z" />
            </svg>
          </a>
          <a
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-on-surface-variant hover:text-secondary hover:border-secondary transition-all"
            href={businessInfo.instagramUrl}
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.247 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.247-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.247-2.242-1.31-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.247 3.608-1.31 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.337 2.618 6.78 6.98 6.98 1.281.058 1.689.073 4.948.073s3.667-.014 4.947-.072c4.337-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.338-2.617-6.78-6.98-6.98-1.281-.058-1.69-.072-4.949-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
