export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="container-md mx-auto px-6 pt-8 pb-12 text-white">
      <div className="performance-rule" />
      <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-lg">
          <div className="performance-wordmark text-[0.68rem] text-white/44">
            Deer<span>Flow</span>
          </div>
          <p className="mt-4 text-sm leading-6 text-white/62 md:text-base">
            Open-source by design, tuned for long-horizon agent work, and built
            to stay under your control.
          </p>
        </div>
        <div className="text-left text-[0.66rem] tracking-[0.28em] text-white/36 uppercase md:text-right">
          <p>Licensed under MIT</p>
          <p className="mt-2">&copy; {year} DeerFlow</p>
        </div>
      </div>
    </footer>
  );
}
