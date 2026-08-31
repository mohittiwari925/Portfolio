"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Steps", value: "9,658", sub: "/ 10,000" },
  { label: "Sleep", value: "8h", sub: "/ 8h goal" },
  { label: "Heart Rate", value: "78", sub: "bpm avg" },
  { label: "Hydration", value: "4.2L", sub: "/ 2.5L" },
];

const stack = ["React.js", "Tailwind CSS", "Supabase", "PostgreSQL", "REST APIs"];

export default function Projects() {
  return (
    <section id="work">
      {/* Panel 1 — Dashboard */}
      <div className="group relative flex min-h-[100vh] flex-col justify-end overflow-hidden border-t border-line">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/projects/healthmate-dashboard.png"
            alt="HealthMate dashboard showing health score, daily metrics, and an AI insight"
            className="h-full w-full object-cover object-top opacity-70 transition-opacity duration-700 group-hover:opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/70 to-canvas/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-canvas/90 via-canvas/20 to-transparent" />
        </div>

        <div className="halftone-scan pointer-events-none absolute inset-0" />

        {/* floating live-metric chips, grounded in the actual dashboard data */}
        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              animate={{ y: [0, -8, 0] }}
              style={{
                right: `${6 + i * 12}%`,
                top: `${18 + (i % 2) * 14}%`,
                animationDuration: "6s",
              }}
              className="absolute rounded-sm border border-line bg-canvas/70 px-3 py-2 font-mono-ui text-xs uppercase tracking-widest text-ink backdrop-blur-sm"
            >
              <span className="block text-[10px] text-ink-muted">{s.label}</span>
              <span className="text-gold">{s.value}</span>{" "}
              <span className="text-ink-muted">{s.sub}</span>
            </motion.div>
          ))}
        </div>

        <div className="relative flex flex-col gap-8 px-6 pb-16 sm:px-10">
          <div className="flex items-start justify-between">
            <span className="font-mono-ui text-xs uppercase tracking-widest text-ink-muted">
              Case study
            </span>
            <span className="font-mono-ui text-xs uppercase tracking-widest text-gold">
              Shipped
            </span>
          </div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="font-display text-[15vw] leading-[0.85] tracking-tight text-ink sm:text-[10vw] lg:text-[8vw]"
          >
            Health<em className="text-accent">Mate</em>
          </motion.h3>

          <div className="flex flex-col gap-6 border-t border-line pt-6 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-xl leading-relaxed text-ink-muted">
              An AI health companion built solo, end-to-end — UI, database
              schema, and deployment. A 9-table normalized schema in Supabase
              (PostgreSQL) with Row-Level Security, so every user only ever
              reads and writes their own data. 8+ core features, mobile-first
              and responsive.
            </p>
            <div className="flex shrink-0 flex-col gap-3">
              <div className="flex flex-wrap gap-2">
                {stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-sm border border-line px-2 py-1 font-mono-ui text-[10px] uppercase tracking-widest text-ink-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="flex gap-6 font-mono-ui text-xs uppercase tracking-widest text-ink">
                <a
                  href="https://healtmate-two.vercel.app/"
                  className="transition-opacity hover:opacity-60"
                >
                  Live ↗
                </a>
                <a
                  href="https://github.com/healthmate-official/healtmate"
                  className="transition-opacity hover:opacity-60"
                >
                  Code ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Panel 2 — AI Companion */}
      <div className="group relative flex min-h-[85vh] flex-col justify-end overflow-hidden border-t border-line">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/projects/healthmate-ai.png"
            alt="HealthMate AI Companion chat, answering questions about medicines, routine, and sleep"
            className="h-full w-full object-cover object-top opacity-60 transition-opacity duration-700 group-hover:opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/80 to-canvas/30" />
        </div>

        <div className="halftone-scan pointer-events-none absolute inset-0" />

        <div className="relative flex flex-col gap-4 px-6 pb-16 sm:px-10">
          <span className="font-mono-ui text-xs uppercase tracking-widest text-gold">
            AI Companion
          </span>
          <p className="max-w-lg font-display text-2xl leading-snug text-ink sm:text-3xl">
            Ask it about your medicines, your routine, or last night&apos;s
            sleep — it answers from your own logged data.
          </p>
        </div>
      </div>
      {/* Panel 3 — Medicines */}
      <div className="group relative flex min-h-[85vh] flex-col justify-end overflow-hidden border-t border-line">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/projects/healthmate-medicines.png"
            alt="HealthMate medicines page tracking doses taken, upcoming, and missed"
            className="h-full w-full object-cover object-top opacity-60 transition-opacity duration-700 group-hover:opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/80 to-canvas/30" />
        </div>

        <div className="halftone-scan pointer-events-none absolute inset-0" />

        <div className="relative flex flex-col gap-4 px-6 pb-16 sm:px-10">
          <span className="font-mono-ui text-xs uppercase tracking-widest text-gold">
            Medicines
          </span>
          <p className="max-w-lg font-display text-2xl leading-snug text-ink sm:text-3xl">
            Every dose tracked — taken, upcoming, or missed — with one tap to
            mark it done.
          </p>
        </div>
      </div>

      {/* Panel 4 — Health Overview */}
      <div className="group relative flex min-h-[85vh] flex-col justify-end overflow-hidden border-t border-line">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/projects/healthmate-overview.png"
            alt="HealthMate health overview showing today's readings and a 7-day health score trend"
            className="h-full w-full object-cover object-top opacity-60 transition-opacity duration-700 group-hover:opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/80 to-canvas/30" />
        </div>

        <div className="halftone-scan pointer-events-none absolute inset-0" />

        <div className="relative flex flex-col gap-4 px-6 pb-16 sm:px-10">
          <span className="font-mono-ui text-xs uppercase tracking-widest text-gold">
            Health Overview
          </span>
          <p className="max-w-lg font-display text-2xl leading-snug text-ink sm:text-3xl">
            Steps, sleep, heart rate, hydration, activity, and breathing —
            logged daily, plotted into a 7-day trend.
          </p>
        </div>
      </div>
    </section>
  );
}
