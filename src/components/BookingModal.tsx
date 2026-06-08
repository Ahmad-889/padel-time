"use client";

import React, { useState, FormEvent, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Target, ChevronDown, Users, ShieldCheck, CheckCircle, ArrowRight } from "lucide-react";
import { businessInfo, createWhatsAppLink } from "@/lib/site";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [players, setPlayers] = useState("");
  const [notes, setNotes] = useState("");

  const floatingGroupClass = (state: "filled" | "static" | false) =>
    `floating-label-group${state ? ` is-${state}` : ""}`;

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setStep(1);
        setFullName("");
        setPhone("");
        setDate("");
        setTime("");
        setPlayers("");
        setNotes("");
      }, 300);
    }
  }, [isOpen]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const getWhatsAppLink = () => {
    const formattedMessage = `*Padel Next Lahore - Court Booking Request*
*Name:* ${fullName}
*Phone:* ${phone}
*Date:* ${date}
*Time:* ${time}
*Players:* ${players}${notes ? `\n*Notes:* ${notes}` : ""}`;

    return createWhatsAppLink(formattedMessage);
  };

  const handleContinueToWhatsApp = () => {
    window.open(getWhatsAppLink(), "_blank");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto px-4 py-8 md:items-center md:py-12">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/90 modal-blur"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative z-10 w-full max-w-150 max-h-[calc(100vh-4rem)] overflow-y-auto rounded-[20px] border border-white/5 bg-surface-container shadow-2xl md:max-h-[calc(100vh-6rem)]"
            id="booking-modal"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-on-surface-variant hover:text-primary transition-colors cursor-pointer z-20"
              aria-label="Close modal"
            >
              <X className="text-2xl w-6 h-6" />
            </button>

            {/* Step 1: Booking Form */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-8 md:p-10"
                id="booking-form-step"
              >
                <div className="flex items-center gap-stack-md mb-stack-sm">
                  <Target className="text-secondary text-3xl w-8 h-8" />
                  <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
                    Book Your Court
                  </h1>
                </div>
                <p className="text-on-surface-variant mb-stack-lg font-body-md opacity-80">
                  Fill in your details and we{"'"}ll connect you via WhatsApp to confirm your booking at {businessInfo.name}.
                </p>

                <form className="space-y-6" id="padel-booking-form" onSubmit={handleSubmit}>
                  {/* Name & Phone Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                    <div className={floatingGroupClass(fullName ? "filled" : false)}>
                      <input
                        className="w-full rounded-lg border border-outline-variant bg-surface-container-low px-4 py-3.5 text-on-surface outline-none transition-all duration-200 ease-premium focus:border-secondary"
                        id="full-name"
                        placeholder=" "
                        required
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                      <label
                        className="font-label-caps text-label-caps text-on-surface-variant"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                    </div>
                    <div className={floatingGroupClass(phone ? "filled" : false)}>
                      <input
                        className="w-full rounded-lg border border-outline-variant bg-surface-container-low px-4 py-3.5 text-on-surface outline-none transition-all duration-200 ease-premium focus:border-secondary"
                        id="phone"
                        placeholder=" "
                        required
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                      <label
                        className="font-label-caps text-label-caps text-on-surface-variant"
                        htmlFor="phone"
                      >
                        Phone Number
                      </label>
                    </div>
                  </div>

                  {/* Date & Time Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                    <div className={floatingGroupClass("static")}>
                      <input
                        className="w-full rounded-lg border border-outline-variant bg-surface-container-low px-4 py-3.5 text-on-surface outline-none transition-all duration-200 ease-premium focus:border-secondary"
                        id="date"
                        placeholder=" "
                        required
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                      />
                      <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="date">
                        Preferred Date
                      </label>
                    </div>
                    <div className={floatingGroupClass("static")}>
                      <select
                        className="w-full cursor-pointer appearance-none rounded-lg border border-outline-variant bg-surface-container-low px-4 py-3.5 text-on-surface outline-none transition-all duration-200 ease-premium focus:border-secondary"
                        id="time"
                        required
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                      >
                        <option value="" disabled>
                          Select Time
                        </option>
                        <option value="05:00 PM">05:00 PM</option>
                        <option value="06:00 PM">06:00 PM</option>
                        <option value="07:00 PM">07:00 PM</option>
                        <option value="08:00 PM">08:00 PM</option>
                        <option value="09:00 PM">09:00 PM</option>
                        <option value="10:00 PM">10:00 PM</option>
                        <option value="11:00 PM">11:00 PM</option>
                      </select>
                      <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="time">
                        Preferred Time
                      </label>
                      <ChevronDown className="pointer-events-none absolute right-4 top-3.5 w-5 h-5 text-on-surface-variant" />
                    </div>
                  </div>

                  {/* Players & Notes */}
                  <div className={floatingGroupClass("static")}>
                    <select
                      className="w-full cursor-pointer appearance-none rounded-lg border border-outline-variant bg-surface-container-low px-4 py-3.5 text-on-surface outline-none transition-all duration-200 ease-premium focus:border-secondary"
                      id="players"
                      required
                      value={players}
                      onChange={(e) => setPlayers(e.target.value)}
                    >
                      <option value="" disabled>
                        Number of Players
                      </option>
                      <option value="2 Players">2 Players</option>
                      <option value="4 Players">4 Players</option>
                      <option value="6 Players">6 Players</option>
                      <option value="8 Players">8 Players</option>
                    </select>
                    <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="players">
                      Number of Players
                    </label>
                    <Users className="pointer-events-none absolute right-4 top-3.5 w-5 h-5 text-on-surface-variant" />
                  </div>

                  <div className={floatingGroupClass(notes ? "filled" : false)}>
                    <textarea
                      className="custom-scrollbar w-full resize-none rounded-lg border border-outline-variant bg-surface-container-low px-4 py-3.5 text-on-surface outline-none transition-all duration-200 ease-premium focus:border-secondary"
                      id="notes"
                      placeholder=" "
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                    />
                    <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="notes">
                      Additional Notes (Optional)
                    </label>
                  </div>

                  <div className="pt-2">
                    <button
                      className="w-full bg-secondary text-on-secondary py-4 rounded-lg font-headline-md text-headline-md hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-secondary/10 cursor-pointer font-bold"
                      type="submit"
                    >
                      Request booking
                    </button>
                    <div className="flex items-center justify-center gap-2 mt-4 text-on-surface-variant">
                      <ShieldCheck className="w-5 h-5 text-body-lg" />
                      <p className="font-label-caps text-label-caps opacity-70">
                        No payment required. Availability confirmed via WhatsApp.
                      </p>
                    </div>
                  </div>
                </form>
              </motion.div>
            )}

            {/* Step 2: Success State */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-12 flex flex-col items-center text-center"
                id="success-step"
              >
                <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mb-stack-lg border border-secondary/20">
                  <CheckCircle className="text-secondary text-5xl animate-bounce w-12 h-12" />
                </div>
                <h2 className="font-display-lg text-headline-lg text-primary mb-stack-sm">
                  Almost There!
                </h2>
                <p className="text-on-surface-variant text-body-lg mb-stack-lg max-w-sm mx-auto">
                  We{"'"}ll redirect you to WhatsApp with your booking details pre-filled.
                </p>
                <button
                  className="w-full bg-secondary text-on-secondary py-4 rounded-lg font-headline-md text-headline-md flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer font-bold"
                  onClick={handleContinueToWhatsApp}
                >
                  Continue to WhatsApp
                  <ArrowRight className="w-6 h-6" />
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
