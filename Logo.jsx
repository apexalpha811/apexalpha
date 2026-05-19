function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2 sm:gap-2.5 group flex-shrink-0">
      <div className="relative">
        <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-lg bg-gradient-to-br from-electric-500 via-violet-500 to-cyan-400 grid place-items-center">
          <div className="w-3 sm:w-3.5 h-3 sm:h-3.5 rounded-sm bg-ink-950"></div>
        </div>
        <div className="absolute inset-0 rounded-lg blur-md bg-gradient-to-br from-electric-500 to-violet-500 opacity-60 -z-10 group-hover:opacity-90 transition"></div>
      </div>
      <div className="leading-tight">
        <div className="font-display text-[11px] sm:text-[14px] font-bold tracking-[0.05em] text-white">APEX <span className="text-electric-300">ALPHA</span></div>
        <div className="font-display font-medium text-[6px] sm:text-[8px] uppercase tracking-[0.32em] text-white/55 mt-0.5">LUXE MEDSPA</div>
      </div>
    </a>
  );
}

window.Logo = Logo;
