"use client";

import { motion } from "framer-motion";

const items = [
  {
    period: "2023 — Present",
    title: "B.Tech, Computer Science",
    org: "RD Engineering College",
    detail: "CGPA 8 / 10",
  },
  {
    period: "Ongoing",
    title: "200+ DSA problems solved",
    org: "Strongest in Trees, Dynamic Programming, Recursion",
    detail: "",
  },
  {
    period: "Hackathon",
    title: "College hackathon participant",
    org: "Collaborated with a team under time constraints to build and present a working prototype",
    detail: "",
  },
  {
    period: "",
    title: "Core member, Coding Club",
    org: "RD Engineering College — peer coding sessions & club events",
    detail: "",
  },
  {
    period: "Certification",
    title: "NPTEL — Java",
    org: "",
    detail: "",
  },
  {
    period: "Certification",
    title: "Oracle — Generative AI",
    org: "",
    detail: "",
  },
];

export default function Achievements() {
  return (
    <section className="border-t border-line px-6 py-24 sm:px-10 sm:py-32">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-14 font-mono-ui text-xs uppercase tracking-widest text-gold"
      >
        Education &amp; Achievements
      </motion.p>

      <div className="flex flex-col divide-y divide-line border-t border-line">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="grid gap-2 py-6 sm:grid-cols-[10rem_1fr] sm:items-baseline sm:gap-8"
          >
            <span className="font-mono-ui text-xs uppercase tracking-widest text-ink-muted">
              {it.period}
            </span>
            <div>
              <p className="font-display text-xl text-ink sm:text-2xl">
                {it.title}
              </p>
              {(it.org || it.detail) && (
                <p className="mt-1 text-sm text-ink-muted">
                  {it.org}
                  {it.org && it.detail ? " — " : ""}
                  {it.detail}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
