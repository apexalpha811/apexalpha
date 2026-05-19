function Features() {
  const features = [
    { icon: Icon.Beam,    tag: '01', title: 'Lumen RF Resurfacing',
      desc: 'Radiofrequency micro-needling that lifts, tightens, and erases scars in a single 45-minute session.',
      hue: 'from-electric-500 to-violet-500' },
    { icon: Icon.Drop,    tag: '02', title: 'IV Vitality Lab',
      desc: 'Bespoke IV infusions formulated by our MDs — glow, immunity, athletic recovery, and jet-lag protocols.',
      hue: 'from-violet-500 to-cyan-400' },
    { icon: Icon.Wave,    tag: '03', title: 'Signature Hydrafacial',
      desc: 'Three-step deep cleanse, extract, and infuse — leaves skin visibly luminous for up to 14 days.',
      hue: 'from-cyan-400 to-electric-500' },
    { icon: Icon.Sparkle, tag: '04', title: 'Neuromodulator Sculpt',
      desc: 'Micro-doses of Botox and Dysport — natural movement, refined lines, zero frozen look.',
      hue: 'from-electric-500 to-violet-600' },
    { icon: Icon.Pulse,   tag: '05', title: 'CoolSculpt Body Contour',
      desc: 'FDA-cleared cryolipolysis to permanently eliminate stubborn fat in jawline, abdomen, and flanks.',
      hue: 'from-violet-600 to-electric-400' },
    { icon: Icon.Shield,  tag: '06', title: 'Member Concierge',
      desc: 'Same-week appointments, exclusive pricing, and a dedicated practitioner who knows your skin story.',
      hue: 'from-electric-400 to-cyan-300' },
  ];
  return (
    <section id="features" className="relative py-20 sm:py-28 lg:py-36 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-violet-600/20 blur-[160px] pointer-events-none"></div>
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="reveal max-w-3xl">
          <div className="font-display font-medium text-[11px] uppercase tracking-[0.32em] text-electric-300 mb-5">/ Treatments</div>
          <h2 className="font-display uppercase text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.005em] text-white leading-[1.05]">
            Every protocol, <span className="font-serif italic font-normal normal-case tracking-normal gradient-text">tuned to you.</span>
          </h2>
          <p className="mt-5 text-lg text-white/55 max-w-2xl">
            We don&apos;t do off-the-shelf. Each treatment is calibrated to your skin&apos;s biology — measured, mapped, and optimized over time.
          </p>
        </div>

        <div className="mt-10 sm:mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {features.map((f, i) => (
            <div key={f.title} className="reveal glow-card rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-7" style={{transitionDelay: `${i*0.07}s`}}>
              <div className="flex items-start justify-between mb-5 sm:mb-6 lg:mb-7">
                <div className={`w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${f.hue} grid place-items-center text-white`}>
                  <f.icon className="w-5 sm:w-6 h-5 sm:h-6"/>
                </div>
                <div className="font-mono text-[9px] sm:text-[10px] tracking-widest text-white/30">{f.tag}</div>
              </div>
              <h3 className="text-lg sm:text-xl font-medium text-white mb-2">{f.title}</h3>
              <p className="text-xs sm:text-sm text-white/55 leading-relaxed">{f.desc}</p>
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-5 border-t border-white/5 flex items-center justify-between text-[11px] sm:text-xs">
                <span className="text-white/40 font-mono uppercase tracking-widest">Learn protocol</span>
                <Icon.Arrow className="w-4 h-4 text-electric-300"/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Features = Features;
