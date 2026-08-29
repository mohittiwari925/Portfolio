"use client";

import { motion } from "framer-motion";

const links = [
  { href: "mailto:mt7512590@gmail.com", label: "mt7512590@gmail.com" },
  { href: "https://github.com/healthmate-official", label: "GitHub" },
  { href: "https://linkedin.com/in/mohit-tiwari-713a9630b/", label: "LinkedIn" },
  { href: "https://leetcode.com/u/mohittiwari7417/", label: "LeetCode" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="grain flex min-h-[80vh] flex-col justify-between border-t border-line px-6 py-16 sm:px-10"
    >
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="flex flex-1 items-center font-display text-[13vw] leading-[0.9] tracking-tight text-ink sm:text-[8vw] lg:text-[6.5vw]"
      >
        Let&apos;s build
        <br />
        something <em className="text-accent">considered.</em>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:flex-wrap sm:gap-8"
      >
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="font-mono-ui text-sm uppercase tracking-widest text-ink-muted transition-colors hover:text-ink"
          >
            {l.label}
          </a>
        ))}
      </motion.div>
    </section>
  );
}
