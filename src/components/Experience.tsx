"use client";

// Experience section — matches the existing editorial design system:
// warm ink-brown canvas, amber/gold accents, large serif headings.
// Drop this into app/page.tsx between your Achievements and Contact
// sections (or wherever "Experience" fits your current page order).
//
// NOTE: swap `font-serif` below for your actual Fraunces font class/
// variable if your project uses a custom one (e.g. `font-fraunces`
// or `className={fraunces.className}`) — I don't have your exact
// font setup cached, so this uses Tailwind's default serif as a
// safe placeholder that you can adjust to match your headings exactly.

const INK = "#0f0d0a";
const AMBER = "#ff8a3d";
const GOLD = "#e8b04b";
const CREAM = "#f4ede1";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative w-full px-6 py-24 sm:px-12 sm:py-32"
      style={{ backgroundColor: INK, color: CREAM }}
    >
      <div className="mx-auto max-w-5xl">
        <p
          className="mb-3 text-xs font-semibold uppercase tracking-[0.3em]"
          style={{ color: GOLD }}
        >
          Experience
        </p>
        <h2 className="font-serif text-4xl leading-[1.05] sm:text-6xl">
          Where I&apos;m headed next
        </h2>

        <div className="mt-16 border-t" style={{ borderColor: "rgba(244,237,225,0.15)" }}>
          <div className="grid grid-cols-1 gap-8 border-b py-10 sm:grid-cols-[200px_1fr]" style={{ borderColor: "rgba(244,237,225,0.15)" }}>
            {/* Left: dates + status */}
            <div>
              <p className="font-serif text-lg" style={{ color: GOLD }}>
                Sept 2026 —
              </p>
              <p className="mt-1 text-sm opacity-70">6-month internship</p>
              <span
                className="mt-4 inline-block rounded-full px-3 py-1 text-xs font-semibold"
                style={{ backgroundColor: "rgba(255,138,61,0.15)", color: AMBER }}
              >
                Offer Accepted
              </span>
            </div>

            {/* Right: role details */}
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl">
                Technical Content Engineer Intern
              </h3>
              <p className="mt-1 text-base opacity-80">GeeksforGeeks — Noida, India</p>

              <ul className="mt-6 space-y-3 text-[15px] leading-relaxed opacity-90">
                <li className="flex gap-3">
                  <span style={{ color: AMBER }}>—</span>
                  Creating technical articles, tutorials, and hands-on coding examples across
                  frontend, backend, APIs, and databases for learners at every skill level.
                </li>
                <li className="flex gap-3">
                  <span style={{ color: AMBER }}>—</span>
                  Serving as a Teaching Assistant for Web Development courses, helping resolve
                  learners&apos; technical doubts directly.
                </li>
                <li className="flex gap-3">
                  <span style={{ color: AMBER }}>—</span>
                  Researching, testing, and validating code examples for accuracy across
                  environments before publishing.
                </li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {["React.js", "Node.js", "REST APIs", "Technical Writing", "MySQL/MongoDB"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border px-3 py-1 text-xs"
                    style={{ borderColor: "rgba(244,237,225,0.25)", color: CREAM }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
