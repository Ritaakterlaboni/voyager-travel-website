import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';

export default function HomeSection({ displayedText }) {
  return (
    <section id="home" className="bg-transparent">
      <div className="bg-[rgba(18,20,27,0.6)]">
        <main className="mx-auto grid w-[min(1150px,92%)] grid-cols-1 gap-10 py-24 lg:grid-cols-[1.2fr_0.8fr] lg:py-28">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-[var(--brand-2)]">Hi there, I’m</p>
            <h1 className="pb-4 pt-8 font-headline text-[clamp(28px,4.2vw,56px)] font-bold leading-[1.08] text-white">
              Rita Akter Laboni
            </h1>
            <div className="min-h-9 text-[clamp(18px,2vw,24px)] font-medium text-[var(--muted)]">{displayedText}</div>
            <p className="pb-6 pr-0 pt-6 leading-8 text-[var(--muted)] lg:pr-[145px]">
              I am Rita Akter Laboni. My expertise is in creating & designing websites with responsive. Creative Frontend Developer with a passion for building responsive, user-friendly websites and web applications.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="https://www.facebook.com/Rita Akter" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[#12141b] text-slate-100 transition hover:-translate-y-0.5 hover:border-[var(--brand)] hover:text-[var(--brand)]">
                <FaFacebookF />
              </a>
              <a href="https://github.com/Ritaakterlaboni/" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[#12141b] text-slate-100 transition hover:-translate-y-0.5 hover:border-[var(--brand)] hover:text-[var(--brand)]">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/rita-akter-laboni-56a66237a/" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[#12141b] text-slate-100 transition hover:-translate-y-0.5 hover:border-[var(--brand)] hover:text-[var(--brand)]">
                <FaLinkedinIn />
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-xl border border-transparent bg-gradient-to-r from-[var(--brand)] to-[var(--brand-2)] px-5 py-3 font-semibold text-[#0b0c11] shadow-soft transition hover:-translate-y-0.5">
                Hire Me
              </a>
              <a href="#portfolio" className="rounded-xl border border-[var(--border)] bg-[#12141b] px-5 py-3 font-semibold text-slate-100 shadow-soft transition hover:-translate-y-0.5">
                See Works
              </a>
            </div>
          </div>
          <div className="hidden lg:flex lg:items-center lg:justify-center">
            <div className="relative h-[320px] w-full max-w-[360px] overflow-hidden rounded-[28px] border border-[var(--border)] bg-[radial-gradient(circle_at_top_left,_rgba(91,140,255,0.28),_transparent_45%),linear-gradient(135deg,_rgba(255,255,255,0.04),_rgba(255,255,255,0.02))] p-6 shadow-soft">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:28px_28px] opacity-40" />
              <div className="absolute left-8 top-8 h-24 w-24 rounded-full border border-white/20 bg-[var(--brand)]/25" />
              <div className="absolute bottom-10 right-10 h-28 w-28 rounded-full border border-[var(--brand-2)]/40" />
              <div className="absolute left-16 top-24 h-32 w-[2px] rotate-12 bg-white/25" />
              <div className="absolute right-16 top-12 h-[2px] w-24 bg-white/25" />
              <div className="absolute bottom-16 left-10 h-20 w-20 rounded-2xl border border-white/20" />
              <div className="absolute inset-x-8 bottom-8 h-20 rounded-[20px] border border-white/10 bg-white/5" />
              <div className="absolute left-10 top-10 rounded-lg border border-white/10 bg-[#0f121a]/80 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-2)]">
                &lt;/&gt;
              </div>
              <div className="absolute right-8 top-16 rounded-lg border border-white/10 bg-[#0f121a]/80 px-3 py-2 text-[11px] font-semibold tracking-[0.2em] text-slate-200">
                { } React
              </div>
              <div className="absolute bottom-10 left-20 rounded-lg border border-white/10 bg-[#0f121a]/80 px-3 py-2 text-[11px] text-slate-300">
                UI / Tailwind
              </div>
              <div className="absolute right-8 bottom-16 h-8 w-8 rounded-full border border-[var(--brand)]/50" />
              <div className="absolute right-16 bottom-20 h-3 w-12 rounded-full bg-white/20" />
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
