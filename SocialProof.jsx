function SocialProof() {
  const logos = ['VOGUE', "HARPER'S BAZAAR", 'ALLURE', 'GOOP', 'ELLE', 'REFINERY29', 'BYRDIE', 'WELL+GOOD'];
  return (
    <section className="relative py-12 sm:py-16 border-y border-white/5 bg-ink-900/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 reveal">
        <div className="text-center text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.25em] sm:tracking-[0.3em] text-white/40 mb-6 sm:mb-8">
          Trusted &amp; featured by
        </div>
        <div className="relative overflow-hidden" style={{maskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)'}}>
          <div className="flex marquee gap-8 sm:gap-12 lg:gap-16 whitespace-nowrap">
            {[...logos, ...logos].map((l, i) => (
              <div key={i} className="text-sm sm:text-xl lg:text-2xl xl:text-3xl font-serif italic text-white/40 hover:text-white/80 transition flex-shrink-0">{l}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

window.SocialProof = SocialProof;
