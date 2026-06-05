"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  delay: number;
}

function FAQItem({ question, answer, delay }: FAQItemProps) {
  return (
    <motion.details
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay, ease: [0.32, 0.72, 0, 1] }}
      className="group border-t border-white/6 last:border-b last:border-white/6 overflow-hidden"
    >
      <summary className="flex justify-between items-center py-6 cursor-pointer list-none select-none outline-none hover:text-primary transition-colors duration-300">
        <span className="font-display-lg font-semibold text-[1rem] text-primary leading-snug tracking-tight pr-8">
          {question}
        </span>
        <ChevronDown className="shrink-0 transition-transform duration-400 ease-[cubic-bezier(0.32,0.72,0,1)] group-open:rotate-180 text-on-surface-variant/60 w-5 h-5" strokeWidth={1.5} />
      </summary>
      <div className="pb-6">
        <p className="font-body-md text-[0.9rem] text-on-surface-variant/70 leading-relaxed max-w-2xl">
          {answer}
        </p>
      </div>
    </motion.details>
  );
}

export default function FAQ() {
  const faqs = [
    {
      question: "Do I need my own racket?",
      answer: "No, we provide high-quality Bullpadel rackets for rent at a nominal fee. You can also purchase balls and other gear from our pro-shop.",
    },
    {
      question: "What is the cancellation policy?",
      answer: "Cancellations made 24 hours prior to the slot are eligible for a full reschedule. Same-day cancellations may incur a small fee.",
    },
    {
      question: "Is there parking available?",
      answer: "Yes, we have dedicated, secure parking for all our members within the facility premises.",
    },
  ];

  return (
    <section className="py-28 max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop">
      {/* Header — left-aligned editorial */}
      <div className="mb-16">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
          className="eyebrow mb-5"
        >
          QUESTIONS
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
          className="font-display-lg font-extrabold text-3xl md:text-[2.75rem] text-primary leading-tight tracking-tight"
        >
          Everything You<br />Need To Know
        </motion.h2>
      </div>

      {/* Accordion list — hairline dividers only */}
      <div>
        {faqs.map((faq, idx) => (
          <FAQItem
            key={idx}
            question={faq.question}
            answer={faq.answer}
            delay={idx * 0.08}
          />
        ))}
      </div>
    </section>
  );
}
