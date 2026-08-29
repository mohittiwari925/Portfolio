"use client";

import { motion } from "framer-motion";

const groups = [
  {
    label: "languages",
    items: ["JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    label: "frameworks",
    items: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    label: "tools",
    items: ["Git", "Supabase", "Vercel", "Figma"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="mb-12 font-display text-3xl text-ink sm:text-4xl">
        Toolkit
      </h2>

      <div className="grid gap-10 sm:grid-cols-3">
        {groups.map((g, i) => (
          <motion.div
            key={g.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <p className="font-mono-ui text-xs uppercase tracking-widest text-gold">
              {g.label}
            </p>
            <ul className="mt-4 space-y-2">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="border-b border-line pb-2 text-ink-muted transition-colors hover:text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
