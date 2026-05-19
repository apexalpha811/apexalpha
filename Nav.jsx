function Nav() {
  const { useState, useEffect } = React;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [
    ['Treatments', '#features'],
    ['Pricing', '#pricing'],
    ['Visit', '#contact'],
    ['About', '#footer'],
  ];
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'nav-glass' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-3">
        <Logo />
        <nav className="hidden md:flex items-center gap-9 text-sm text-white/70">
          {links.map(([t, h]) => (
            <a key={h} href={h} className="hover:text-white transition relative group">
              {t}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-electric-400 to-violet-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <a href="tel:3239550811" className="hidden lg:flex items-center gap-2 text-xs font-mono text-white/60 hover:text-white transition">
            <Icon.Phone className="w-4 h-4"/> 323.955.0811
          </a>
          <a href="#contact" className="btn-glow rounded-full px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-white inline-flex items-center gap-1.5 sm:gap-2 whitespace-nowrap">
            Booking <Icon.Arrow className="w-3.5 h-3.5 sm:w-4 sm:h-4"/>
          </a>
          <button onClick={() => setOpen(!open)} aria-label="Menu" className="md:hidden text-white p-1.5"><Icon.Menu className="w-5 h-5"/></button>
        </div>
      </div>
      {open && (
        <div className="md:hidden nav-glass border-t border-white/5">
          <div className="px-5 py-4 flex flex-col gap-3 text-sm">
            {links.map(([t, h]) => <a key={h} href={h} onClick={() => setOpen(false)} className="text-white/80 py-1">{t}</a>)}
          </div>
        </div>
      )}
    </header>
  );
}

window.Nav = Nav;
