function Contact() {
  const { useState } = React;
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => { setSent(false); setForm({ name:'', email:'', message:''}); }, 3200);
  };
  return (
    <section id="contact" className="relative py-20 sm:py-28 lg:py-36 overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-electric-600/20 blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-violet-600/20 blur-[140px] pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-16">
        <div className="reveal lg:col-span-2">
          <div className="font-display font-medium text-[11px] uppercase tracking-[0.32em] text-cyan-300 mb-5">/ Visit</div>
          <h2 className="font-display uppercase text-3xl sm:text-4xl font-bold tracking-[-0.005em] text-white leading-[1.05]">
            Step into <span className="font-serif italic font-normal normal-case tracking-normal gradient-text">the flagship.</span>
          </h2>
          <p className="mt-5 text-white/55 text-lg leading-relaxed">
            Our Culver City studio is open seven days. Walk-ins welcome for IV therapy &amp; skin scans.
          </p>

          <div className="mt-10 space-y-5">
            <a href="https://maps.google.com/?q=3831+Hughes+Ave+702+Culver+City+CA+90232" target="_blank" rel="noopener" className="group flex items-start gap-4 hover:text-white transition">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 grid place-items-center flex-shrink-0 group-hover:border-violet-400/50 transition">
                <Icon.Pin className="w-5 h-5 text-violet-300"/>
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-white/40">Studio</div>
                <div className="text-white">3831 Hughes Ave #702</div>
                <div className="text-white/60 text-sm">Culver City, CA 90232</div>
              </div>
            </a>

            <a href="tel:3239550811" className="group flex items-start gap-4 hover:text-white transition">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 grid place-items-center flex-shrink-0 group-hover:border-electric-400/50 transition">
                <Icon.Phone className="w-5 h-5 text-electric-300"/>
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-white/40">Direct line</div>
                <div className="text-white">(323) 955-0811</div>
                <div className="text-white/60 text-sm">Mon – Sun · 9 AM – 8 PM</div>
              </div>
            </a>

            <a href="mailto:concierge@apexalpha.com" className="group flex items-start gap-4 hover:text-white transition">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 grid place-items-center flex-shrink-0 group-hover:border-cyan-400/50 transition">
                <Icon.Mail className="w-5 h-5 text-cyan-300"/>
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-white/40">Concierge</div>
                <div className="text-white">concierge@apexalpha.com</div>
                <div className="text-white/60 text-sm">Reply within 2 business hours</div>
              </div>
            </a>
          </div>
        </div>

        <div className="reveal lg:col-span-3" style={{transitionDelay: '0.1s'}}>
          <div className="relative rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-br from-ink-800/80 to-ink-900/80 backdrop-blur p-5 sm:p-8 lg:p-10">
            <div className="absolute -top-px left-6 right-6 sm:left-12 sm:right-12 h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent"></div>

            <div className="flex items-center justify-between mb-5 sm:mb-6 lg:mb-7">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-white">Request your booking</h3>
              <span className="font-mono text-[9px] sm:text-[10px] tracking-widest text-white/40">FORM_01</span>
            </div>

            <form onSubmit={submit} className="space-y-4 sm:space-y-5">
              <div>
                <label className="block text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-white/40 mb-2">Full name</label>
                <input required value={form.name}
                  onChange={e => setForm({...form, name: e.target.value})}
                  placeholder="Alex Carter"
                  className="w-full bg-white/5 border border-white/10 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-violet-400/60 focus:bg-white/[0.07] transition"/>
              </div>
              <div>
                <label className="block text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-white/40 mb-2">Email</label>
                <input required type="email" value={form.email}
                  onChange={e => setForm({...form, email: e.target.value})}
                  placeholder="alex@email.com"
                  className="w-full bg-white/5 border border-white/10 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-electric-400/60 focus:bg-white/[0.07] transition"/>
              </div>
              <div>
                <label className="block text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-white/40 mb-2">Tell us your goals</label>
                <textarea required rows="4" value={form.message}
                  onChange={e => setForm({...form, message: e.target.value})}
                  placeholder="I'd love to brighten my complexion and explore your Lumen RF protocol…"
                  className="w-full bg-white/5 border border-white/10 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-cyan-400/60 focus:bg-white/[0.07] transition resize-none"/>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 pt-1 sm:pt-2">
                <p className="text-[11px] sm:text-xs text-white/40">By submitting, you agree to our concierge reaching out within 2 hours.</p>
                <button type="submit" className="btn-glow rounded-full px-5 sm:px-7 py-3 sm:py-3.5 text-sm font-medium text-white inline-flex items-center justify-center gap-2 whitespace-nowrap">
                  {sent ? <><Icon.Check className="w-4 h-4"/> Received</> : <>Booking <Icon.Arrow className="w-4 h-4"/></>}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Contact = Contact;
