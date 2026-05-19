function HeroVisual() {
  return (
    <div className="relative">
      <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-gradient-to-br from-electric-500 to-violet-600 blur-3xl opacity-50 orb-float"></div>
      <div className="absolute -bottom-10 -right-6 w-48 h-48 rounded-full bg-gradient-to-br from-cyan-400 to-electric-500 blur-3xl opacity-40 orb-float" style={{animationDelay: '-3s'}}></div>

      <div className="relative device-glow rounded-[28px] overflow-hidden bg-gradient-to-br from-ink-800/80 to-ink-900/80 border border-white/10 backdrop-blur">
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/5">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-white/20"></span>
            <span className="w-2 h-2 rounded-full bg-white/20"></span>
            <span className="w-2 h-2 rounded-full bg-electric-400 pulse-glow"></span>
          </div>
          <div className="font-mono text-[10px] tracking-widest text-white/40">SESSION_07 · LIVE</div>
          <div className="font-mono text-[10px] text-electric-300">●REC</div>
        </div>

        <div className="p-4 sm:p-6 lg:p-8 grid grid-cols-5 gap-3 sm:gap-4">
          <div className="col-span-2 space-y-2.5 sm:space-y-3">
            <div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-white/40">Client</div>
            <div className="text-white text-base sm:text-lg">Mara K.</div>
            <div className="h-px bg-white/10"></div>
            <div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-white/40">Protocol</div>
            <div className="text-white text-xs sm:text-sm leading-tight">Lumen RF<br/>+ Hydrafacial</div>
            <div className="h-px bg-white/10"></div>
            <div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-white/40">Practitioner</div>
            <div className="text-white text-xs sm:text-sm">Dr. Lena Voss</div>
          </div>

          <div className="col-span-3 relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-ink-900 to-ink-950 border border-white/5 relative overflow-hidden">
              {[1,2,3,4,5].map(i => (
                <div key={i}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-electric-400/30"
                  style={{
                    width: `${i*22}%`, height: `${i*22}%`,
                    animation: `pulse-glow ${3+i*0.4}s ease-in-out infinite`,
                    animationDelay: `${-i*0.3}s`,
                  }}
                />
              ))}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-electric-400 via-violet-500 to-cyan-400 blur-sm"></div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white"></div>
              <div className="absolute top-3 left-3 font-mono text-[9px] text-white/40 tracking-widest">↗ 432nm</div>
              <div className="absolute bottom-3 right-3 font-mono text-[9px] text-electric-300 tracking-widest">98.2% ABSORB</div>
            </div>

            <div className="mt-3 sm:mt-4 grid grid-cols-3 gap-1.5 sm:gap-2">
              {[['HYDRA', '+34%'], ['ELAST', '+22%'], ['LUMIN', '+41%']].map(([k, v]) => (
                <div key={k} className="rounded-lg bg-white/5 border border-white/5 px-1.5 sm:px-2 py-1 sm:py-1.5">
                  <div className="text-[7px] sm:text-[8px] font-mono tracking-widest text-white/40">{k}</div>
                  <div className="text-electric-300 text-xs sm:text-sm font-medium">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="px-6 py-3 border-t border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[10px] font-mono text-white/40">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-glow"></span>
            BIOMETRIC SYNC ACTIVE
          </div>
          <div className="text-[10px] font-mono text-white/40">00:42:18</div>
        </div>
      </div>

      <div className="absolute -bottom-8 left-2 sm:-left-6 hidden md:block rounded-2xl bg-ink-800/90 border border-white/10 backdrop-blur px-4 py-3 shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-electric-500 grid place-items-center">
            <Icon.Sparkle className="w-4 h-4 text-white"/>
          </div>
          <div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-white/40">Next Booking</div>
            <div className="text-white text-sm">Tomorrow · 2:30 PM</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="aurora"></div>
      <div className="absolute inset-0 grid-bg"></div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-14 lg:gap-10 items-center">
        <div className="reveal">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur px-3 py-1.5 mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-electric-400 pulse-glow"></span>
            <span className="font-display font-medium text-[11px] uppercase tracking-[0.32em] text-white/70">Now booking · Culver City</span>
          </div>

          <h1 className="font-display uppercase text-[28px] [@media(min-width:380px)]:text-[34px] sm:text-5xl lg:text-[64px] leading-[1.05] sm:leading-[0.98] font-bold tracking-[-0.01em] text-white text-balance">
            Skin, <span className="font-serif italic font-normal normal-case tracking-normal gradient-text">engineered</span><br/>
            for the future of you.
          </h1>

          <p className="mt-5 sm:mt-7 text-[15px] sm:text-xl text-white/60 max-w-xl leading-relaxed">
            A precision medspa where biotech, light, and luxury converge. Personalized protocols, supervised by board-certified MDs in Culver City.
          </p>

          <div className="mt-7 sm:mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
            <a href="#contact" className="btn-glow rounded-full px-6 sm:px-7 py-3.5 sm:py-4 text-sm sm:text-base font-medium text-white inline-flex items-center gap-2">
              Booking <Icon.Arrow className="w-4 h-4"/>
            </a>
            <a href="#features" className="group rounded-full border border-white/15 px-5 sm:px-7 py-3.5 sm:py-4 text-sm sm:text-base text-white/80 hover:text-white hover:border-white/30 transition inline-flex items-center gap-2">
              Explore treatments
              <span className="w-1 h-1 rounded-full bg-electric-400 group-hover:bg-violet-400 transition"></span>
            </a>
          </div>

          <div className="mt-10 sm:mt-12 flex flex-wrap items-center gap-x-5 sm:gap-x-8 gap-y-5">
            <div>
              <div className="text-xl sm:text-2xl font-semibold text-white">4.9<span className="text-violet-400">★</span></div>
              <div className="text-[11px] font-mono uppercase tracking-widest text-white/40">2,400+ reviews</div>
            </div>
            <div className="hidden xs:block w-px h-10 bg-white/10"></div>
            <div>
              <div className="text-xl sm:text-2xl font-semibold text-white">12<span className="text-electric-400">+</span></div>
              <div className="text-[11px] font-mono uppercase tracking-widest text-white/40">MD-led protocols</div>
            </div>
            <div className="hidden xs:block w-px h-10 bg-white/10"></div>
            <div>
              <div className="text-xl sm:text-2xl font-semibold text-white">FDA<span className="text-cyan-400">·</span></div>
              <div className="text-[11px] font-mono uppercase tracking-widest text-white/40">Cleared devices</div>
            </div>
          </div>
        </div>

        <div className="reveal" style={{transitionDelay: '0.15s'}}>
          <HeroVisual/>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
window.HeroVisual = HeroVisual;
