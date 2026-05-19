function Pricing() {
  const tiers = [
    { name: 'Glow', tag: 'Single visit', price: '180', cadence: 'starting',
      desc: 'Try us. One signature treatment with a personalized skin consult.',
      features: ['Signature Hydrafacial', 'AI skin diagnostic scan', '30-min MD consultation', 'Take-home glow protocol'],
      cta: 'Booking', featured: false },
    { name: 'Luxe', tag: 'Most chosen', price: '420', cadence: '/ month',
      desc: 'Our flagship membership. Real results, compounded monthly.',
      features: ['Two premium treatments / month', '20% off all add-ons & injectables', 'Quarterly MD review + biometric tracking', 'Priority booking — same week', 'Members-only IV bar access'],
      cta: 'Booking', featured: true },
    { name: 'Apex', tag: 'By invitation', price: '1,200', cadence: '/ month',
      desc: 'White-glove care for the highest-touch client. Concierge-led.',
      features: ['Unlimited treatments', 'Dedicated MD + practitioner team', 'House-call & travel protocols', 'Custom compounded formulations', 'Annual full-body biomarker panel'],
      cta: 'Request invite', featured: false },
  ];
  return (
    <section id="pricing" className="relative py-20 sm:py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none"></div>
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="reveal text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="font-display font-medium text-[11px] uppercase tracking-[0.32em] text-violet-400 mb-5">/ Membership</div>
          <h2 className="font-display uppercase text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.005em] text-white leading-[1.05]">
            Pricing built for <span className="font-serif italic font-normal normal-case tracking-normal gradient-text">long-term radiance.</span>
          </h2>
          <p className="mt-5 text-lg text-white/55">Transparent. No hidden fees. Cancel any time.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {tiers.map((t, i) => (
            <div
              key={t.name}
              className={`reveal relative rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-9 ${
                t.featured
                  ? 'bg-gradient-to-br from-electric-600/30 via-violet-600/20 to-cyan-500/20 border border-violet-400/40'
                  : 'bg-ink-800/40 border border-white/8'
              }`}
              style={{transitionDelay: `${i*0.1}s`}}
            >
              {t.featured && (
                <>
                  <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-electric-500/0 via-violet-500/10 to-cyan-400/0 blur-2xl -z-10"></div>
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-gradient-to-r from-electric-500 to-violet-500 text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-white">
                    Best value
                  </div>
                </>
              )}

              <div className="flex items-baseline justify-between mb-3 sm:mb-4">
                <h3 className="text-xl sm:text-2xl font-medium text-white">{t.name}</h3>
                <div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-white/40">{t.tag}</div>
              </div>

              <div className="flex items-end gap-2 mb-2.5 sm:mb-3">
                <span className="text-[10px] sm:text-[11px] font-mono text-white/40 mb-1 sm:mb-2">$</span>
                <span className={`text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight ${t.featured ? 'gradient-text' : 'text-white'}`}>{t.price}</span>
                <span className="text-xs sm:text-sm text-white/40 mb-2 sm:mb-3">{t.cadence}</span>
              </div>

              <p className="text-sm text-white/55 mb-7 min-h-[2.5em]">{t.desc}</p>
              <div className="h-px bg-white/10 mb-6"></div>

              <ul className="space-y-3 mb-9">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-white/75">
                    <span className={`mt-0.5 grid place-items-center w-4 h-4 rounded-full flex-shrink-0 ${t.featured ? 'bg-gradient-to-br from-electric-400 to-violet-500' : 'bg-white/10'}`}>
                      <Icon.Check className="w-2.5 h-2.5 text-white"/>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a href="#contact"
                className={`block text-center rounded-full px-6 py-3.5 text-sm font-medium transition ${
                  t.featured ? 'btn-glow text-white' : 'bg-white/5 hover:bg-white/10 border border-white/10 text-white'
                }`}
              >{t.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Pricing = Pricing;
