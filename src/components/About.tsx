"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="border-t border-line px-6 py-24 sm:px-10 sm:py-32">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-8 font-mono-ui text-xs uppercase tracking-widest text-gold"
      >
        About
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="max-w-4xl font-display text-3xl leading-tight text-ink sm:text-5xl lg:text-6xl"
      >
        I like owning a product end-to-end —{" "}
        <em className="text-accent">UI, database, and the pipeline that ships it.</em>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-10 max-w-2xl leading-relaxed text-ink-muted"
      >
        I&apos;m a final-year Computer Science undergrad, actively looking for
        frontend developer internship and new-grad opportunities. I like
        picking apart how a product actually works end-to-end — not just the
        UI, but the schema underneath it and the pipeline that ships it.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-14 flex flex-wrap gap-3"
      >
        {[
          "JavaScript",
          "TypeScript",
          "React.js",
          "Next.js",
          "Tailwind CSS",
          "Supabase",
          "PostgreSQL",
          "Git",
          "Vercel",
        ].map((s) => (
          <span
            key={s}
            className="rounded-sm border border-line px-3 py-1.5 font-mono-ui text-xs uppercase tracking-widest text-ink-muted"
          >
            {s}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
