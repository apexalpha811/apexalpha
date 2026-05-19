function Footer() {
  const cols = [
    { title: 'Treatments', links: ['Lumen RF', 'Hydrafacial', 'IV Vitality Lab', 'Neuromodulators', 'CoolSculpt', 'Membership'] },
    { title: 'Studio',     links: ['About', 'Our doctors', 'Press', 'Careers', 'Gift cards', 'Refer a friend'] },
    { title: 'Visit',      links: ['Book a consult', 'New client offer', 'FAQ', 'Pricing', 'Contact', 'Insurance'] },
  ];
  return (
    <footer id="footer" className="relative pt-20 sm:pt-24 pb-10 border-t border-white/5 bg-ink-950 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-6 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10">
          <div className="col-span-2 sm:col-span-6 lg:col-span-5 reveal">
            <Logo/>
            <p className="mt-5 sm:mt-6 text-white/55 text-sm sm:text-base max-w-md leading-relaxed">
              A precision medspa for the next era of skin. MD-led protocols, FDA-cleared technology, and concierge care in Culver City.
            </p>
            <div className="mt-5 sm:mt-7 flex items-center gap-3">
              {[Icon.Insta, Icon.TikTok, Icon.X].map((I, i) => (
                <a key={i} href="#" aria-label="Social" className="w-9 sm:w-10 h-9 sm:h-10 rounded-full border border-white/10 grid place-items-center text-white/60 hover:text-white hover:border-violet-400/50 hover:bg-white/5 transition">
                  <I className="w-3.5 sm:w-4 h-3.5 sm:h-4"/>
                </a>
              ))}
            </div>

            <a href="#contact" className="mt-6 sm:mt-8 btn-glow inline-flex items-center gap-2 rounded-full px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-white">
              Booking <Icon.Arrow className="w-3.5 sm:w-4 h-3.5 sm:h-4"/>
            </a>
          </div>

          {cols.map((c) => (
            <div key={c.title} className="sm:col-span-2 lg:col-span-2 reveal">
              <div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-white/40 mb-4 sm:mb-5">{c.title}</div>
              <ul className="space-y-2 sm:space-y-3">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-xs sm:text-sm text-white/70 hover:text-white transition">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 sm:col-span-6 lg:col-span-1 reveal">
            <div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-white/40 mb-4 sm:mb-5">Hours</div>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-white/70">
              <li>Mon–Fri<br/><span className="text-white/40 text-[11px] sm:text-xs">9a – 8p</span></li>
              <li>Sat–Sun<br/><span className="text-white/40 text-[11px] sm:text-xs">10a – 6p</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 lg:mt-16 pt-5 sm:pt-7 border-t border-white/5 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="text-[10px] sm:text-[11px] text-white/40 font-mono leading-relaxed">
            © 2026 APEX ALPHA LUXE · 3831 HUGHES AVE #702 · CULVER CITY, CA 90232
          </div>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-[11px] sm:text-xs text-white/40">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Accessibility</a>
            <a href="#" className="hover:text-white transition">HIPAA</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
