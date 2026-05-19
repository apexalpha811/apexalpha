function SocialProof() {
  const logos = ['VOGUE', "HARPER'S BAZAAR", 'ALLURE', 'GOOP', 'ELLE', 'REFINERY29', 'BYRDIE', 'WELL+GOOD'];
  return (
    <section className="relative py-16 border-y border-white/5 bg-ink-900/40">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 reveal">
        <div className="text-center text-[11px] font-mono uppercase tracking-[0.3em] text-white/40 mb-8">
          Trusted &amp; featured by
        </div>
        <div className="relative overflow-hidden" style={{maskImage: 'linear-gradient(90deg, transparent, black 12%, black 88%, transparent)'}}>
          <div className="flex marquee gap-16 whitespace-nowrap">
            {[...logos, ...logos].map((l, i) => (
              <div key={i} className="text-2xl sm:text-3xl font-serif italic text-white/40 hover:text-white/80 transition">{l}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

window.SocialProof = SocialProof;
