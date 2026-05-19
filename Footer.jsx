function Footer() {
  const cols = [
    { title: 'Treatments', links: ['Lumen RF', 'Hydrafacial', 'IV Vitality Lab', 'Neuromodulators', 'CoolSculpt', 'Membership'] },
    { title: 'Studio',     links: ['About', 'Our doctors', 'Press', 'Careers', 'Gift cards', 'Refer a friend'] },
    { title: 'Visit',      links: ['Book a consult', 'New client offer', 'FAQ', 'Pricing', 'Contact', 'Insurance'] },
  ];
  return (
    <footer id="footer" className="relative pt-20 sm:pt-24 pb-10 border-t border-white/5 bg-ink-950">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-6 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12">
          <div className="col-span-2 sm:col-span-6 lg:col-span-5 reveal">
            <Logo/>
            <p className="mt-6 text-white/55 text-base max-w-md leading-relaxed">
              A precision medspa for the next era of skin. MD-led protocols, FDA-cleared technology, and a concierge experience — all in one Culver City studio.
            </p>
            <div className="mt-7 flex items-center gap-3">
              {[Icon.Insta, Icon.TikTok, Icon.X].map((I, i) => (
                <a key={i} href="#" aria-label="Social" className="w-10 h-10 rounded-full border border-white/10 grid place-items-center text-white/60 hover:text-white hover:border-violet-400/50 hover:bg-white/5 transition">
                  <I className="w-4 h-4"/>
                </a>
              ))}
            </div>

            <a href="#contact" className="mt-8 btn-glow inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white">
              Booking <Icon.Arrow className="w-4 h-4"/>
            </a>
          </div>

          {cols.map((c) => (
            <div key={c.title} className="sm:col-span-2 lg:col-span-2 reveal">
              <div className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-5">{c.title}</div>
              <ul className="space-y-3">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-sm text-white/70 hover:text-white transition">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 sm:col-span-6 lg:col-span-1 reveal">
            <div className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-5">Hours</div>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Mon–Fri<br/><span className="text-white/40 text-xs">9a – 8p</span></li>
              <li>Sat–Sun<br/><span className="text-white/40 text-xs">10a – 6p</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 pt-7 border-t border-white/5 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="text-[11px] sm:text-xs text-white/40 font-mono leading-relaxed">
            © 2026 APEX ALPHA LUXE · 3831 HUGHES AVE #702 · CULVER CITY, CA 90232
          </div>
          <div className="flex items-center gap-6 text-xs text-white/40">
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
