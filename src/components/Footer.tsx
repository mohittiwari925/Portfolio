export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-8 sm:px-10">
      <div className="flex flex-col items-center justify-between gap-2 font-mono-ui text-[11px] uppercase tracking-widest text-ink-muted sm:flex-row">
        <span>© {new Date().getFullYear()} Mohit Tiwari</span>
        <span>Built with Next.js &amp; Tailwind</span>
      </div>
    </footer>
  );
}
