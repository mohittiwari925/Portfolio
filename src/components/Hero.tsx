"use client";

import { motion } from "framer-motion";
import SparkMark from "./SparkMark";

export default function Hero() {
  return (
    <section
      id="top"
      className="grain relative flex min-h-screen flex-col justify-between overflow-hidden px-6 pb-10 pt-28 sm:px-10 sm:pt-32"
    >
      <motion.div
        initial={{ opacity: 0, rotate: -20, scale: 0.8 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute right-6 top-28 text-accent sm:right-10 sm:top-32"
      >
        <SparkMark className="h-10 w-10 sm:h-14 sm:w-14" />
      </motion.div>

      <div className="flex flex-1 flex-col justify-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 font-mono-ui text-xs uppercase tracking-widest text-gold"
        >
          Frontend Developer — Final-year CS student
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="font-display text-[15vw] leading-[0.85] tracking-tight text-ink sm:text-[11vw] lg:text-[9vw]"
        >
          Mohit
          <br />
          <em className="text-accent">Tiwari</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 max-w-md text-base leading-relaxed text-ink-muted"
        >
          I build products end-to-end — UI, database design, deployment.
          Shipped HealthMate solo, end-to-end. Now looking for a
          frontend developer internship or role.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex flex-wrap items-end justify-between gap-6 border-t border-line pt-6"
      >
        <div className="flex gap-6 font-mono-ui text-xs uppercase tracking-widest text-ink-muted">
          <a href="#work" className="transition-colors hover:text-ink">
            View work ↓
          </a>
          <a href="#contact" className="transition-colors hover:text-ink">
            Get in touch
          </a>
        </div>
        <span className="font-mono-ui text-xs uppercase tracking-widest text-ink-muted">
          Delhi, India
        </span>
      </motion.div>
    </section>
  );
}
