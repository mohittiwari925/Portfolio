"use client";

/**
 * SplineViewport
 * ----------------
 * This is where your Spline 3D scene goes. Steps:
 *
 * 1. Build your scene at https://spline.design
 * 2. Export it: top-left menu -> Export -> Code Export -> React (or "Public URL" for the simplest option)
 * 3. Option A (simplest): use the public URL export.
 *    npm install @splinetool/runtime @splinetool/react-spline
 *    Then replace the placeholder <div> below with:
 *
 *      import Spline from '@splinetool/react-spline';
 *      <Spline scene="https://prod.spline.design/XXXXX/scene.splinecode" />
 *
 * 4. Keep this wrapper (the frame, corner brackets, coordinate label) —
 *    just swap the inner placeholder div for the <Spline /> component.
 */

export default function SplineViewport() {
  return (
    <div className="relative aspect-square w-full max-w-lg">
      {/* corner brackets */}
      <span className="absolute -left-2 -top-2 h-6 w-6 border-l-2 border-t-2 border-gold" />
      <span className="absolute -right-2 -top-2 h-6 w-6 border-r-2 border-t-2 border-gold" />
      <span className="absolute -bottom-2 -left-2 h-6 w-6 border-b-2 border-l-2 border-gold" />
      <span className="absolute -bottom-2 -right-2 h-6 w-6 border-b-2 border-r-2 border-gold" />

      {/* coordinate label */}
      <span className="absolute -top-7 left-0 font-mono-ui text-[10px] uppercase tracking-widest text-ink-muted">
        viewport / 01
      </span>
      <span className="absolute -top-7 right-0 font-mono-ui text-[10px] uppercase tracking-widest text-gold">
        live
      </span>

      <div className="relative h-full w-full overflow-hidden rounded-sm border border-line bg-surface">
        {/*
          PLACEHOLDER — replace with your <Spline scene="..." /> component.
          This animated wireframe is just a stand-in so the layout works today.
        */}
        <div className="flex h-full w-full items-center justify-center">
          <div className="animate-[spin_16s_linear_infinite] [transform-style:preserve-3d]">
            <svg
              width="220"
              height="220"
              viewBox="0 0 220 220"
              fill="none"
              className="opacity-90"
            >
              <polygon
                points="110,20 190,65 190,155 110,200 30,155 30,65"
                stroke="#ff8a3d"
                strokeWidth="1.5"
              />
              <polygon
                points="110,20 190,65 110,110 30,65"
                stroke="#e8b04b"
                strokeWidth="1.5"
              />
              <line x1="110" y1="110" x2="110" y2="200" stroke="#ff8a3d" strokeWidth="1" />
              <line x1="30" y1="65" x2="110" y2="110" stroke="#e8b04b" strokeWidth="1" />
              <line x1="190" y1="65" x2="110" y2="110" stroke="#e8b04b" strokeWidth="1" />
            </svg>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(38,46,61,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(38,46,61,0.6)_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>

      <p className="mt-3 text-center font-mono-ui text-[10px] uppercase tracking-widest text-ink-muted">
        drop your spline export here
      </p>
    </div>
  );
}
