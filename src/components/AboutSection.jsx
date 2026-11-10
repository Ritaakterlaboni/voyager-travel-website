import SectionHeading from './SectionHeading';

export default function AboutSection() {
  return (
    <section id="about" className="bg-transparent">
      <div className="bg-[rgba(18,20,27,0.6)]">
        <main className="mx-auto grid w-[min(1150px,92%)] grid-cols-1 gap-10 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="flex items-center">
            <div className="relative h-full min-h-[440px] w-full overflow-hidden rounded-[28px] border border-[var(--border)] bg-[radial-gradient(circle_at_top_left,_rgba(91,140,255,0.26),_transparent_45%),linear-gradient(135deg,_rgba(255,255,255,0.04),_rgba(255,255,255,0.02))] p-6 shadow-soft">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:28px_28px] opacity-40" />
              <div className="absolute left-8 top-8 h-24 w-24 rounded-full border border-white/20 bg-[var(--brand)]/20" />
              <div className="absolute bottom-10 right-10 h-28 w-28 rounded-full border border-[var(--brand-2)]/40" />
              <div className="absolute left-[12%] top-[22%] h-24 w-[2px] rotate-12 bg-white/20" />
              <div className="absolute right-[12%] top-[16%] h-[2px] w-24 bg-white/20" />

              <div className="absolute left-10 top-10 rounded-lg border border-white/10 bg-[#0f121a]/80 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-2)]">
                &lt;/&gt;
              </div>
              <div className="absolute right-8 top-16 rounded-lg border border-white/10 bg-[#0f121a]/80 px-3 py-2 text-[11px] font-semibold tracking-[0.2em] text-slate-200">
                {'{}'} React
              </div>
              <div className="absolute bottom-10 left-20 rounded-lg border border-white/10 bg-[#0f121a]/80 px-3 py-2 text-[11px] text-slate-300">
                UI / Tailwind
              </div>

              <div className="relative flex h-full flex-col rounded-[24px] border border-white/10 bg-[rgba(10,12,18,0.82)] p-4 backdrop-blur sm:p-5">
                <div className="mb-4 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-[var(--muted)]">
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[var(--brand)]" />
                    interface studio
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">MERN</span>
                </div>

                <div className="flex flex-1 flex-col gap-3 lg:flex-row">
                  <div className="flex-1 rounded-[18px] border border-white/10 bg-slate-900/80 p-3 shadow-[0_18px_40px_rgba(0,0,0,0.32)] sm:p-4">
                    <div className="mb-3 flex items-center gap-2 text-[11px] text-[var(--muted)]">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      editor
                    </div>
                    <div className="rounded-[14px] border border-white/10 bg-slate-950/90 p-3">
                      <div className="mb-3 flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[var(--muted)]">
                        <span className="h-2 w-2 rounded-full bg-[var(--brand)]" />
                        VS Code
                      </div>
                      <div className="grid grid-cols-[0.9fr_1.1fr] gap-2">
                        <div className="rounded-[10px] border border-white/10 bg-white/5 p-2">
                          <div className="mb-2 h-2 w-10 rounded-full bg-white/20" />
                          <div className="mb-2 h-2 w-16 rounded-full bg-white/10" />
                          <div className="h-2 w-12 rounded-full bg-white/10" />
                        </div>
                        <div className="rounded-[10px] border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-2">
                          <div className="mb-2 flex gap-1">
                            <div className="h-2 w-6 rounded-full bg-sky-400/70" />
                            <div className="h-2 w-8 rounded-full bg-emerald-400/70" />
                          </div>
                          <div className="space-y-1 font-mono text-[9px] leading-4 text-slate-300">
                            <div>{'<'}div className="card"{'>'}</div>
                            <div className="pl-3 text-sky-300">{'{'} ... {'}'}</div>
                            <div>{'</'}div{'>'}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 rounded-[14px] border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-3">
                      <div className="mb-2 flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-[var(--muted)]">
                        <span>wireframe</span>
                        <span className="rounded-full border border-white/10 px-2 py-1">UX</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="h-10 rounded-lg border border-white/10 bg-slate-950/70" />
                        <div className="h-10 rounded-lg border border-white/10 bg-gradient-to-br from-[var(--brand)]/40 to-[var(--brand-2)]/20" />
                        <div className="h-10 rounded-lg border border-white/10 bg-slate-950/70" />
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 rounded-[18px] border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-3 shadow-[0_18px_40px_rgba(0,0,0,0.32)] sm:p-4">
                    <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-[var(--muted)]">
                      <span>browser</span>
                      <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1">3D</span>
                    </div>
                    <div className="rounded-[14px] border border-white/10 bg-slate-950/90 p-3">
                      <div className="mb-3 flex items-center gap-2">
                        <div className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                        <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                        <div className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                      </div>
                      <div className="grid gap-2">
                        <div className="rounded-[10px] border border-white/10 bg-white/5 p-2">
                          <div className="mb-2 h-2 w-24 rounded-full bg-white/20" />
                          <div className="grid gap-2 sm:grid-cols-2">
                            <div className="h-12 rounded-[10px] border border-white/10 bg-gradient-to-br from-[var(--brand)]/30 to-[var(--brand-2)]/10" />
                            <div className="h-12 rounded-[10px] border border-white/10 bg-slate-800/80" />
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 rounded-[10px] border border-white/10 bg-slate-900/80 p-2">
                            <div className="mb-2 h-2 w-14 rounded-full bg-white/20" />
                            <div className="h-8 rounded-[8px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5" />
                          </div>
                          <div className="rounded-[10px] border border-white/10 bg-slate-900/80 p-2">
                            <div className="h-8 w-8 rounded-[8px] border border-white/10 bg-gradient-to-br from-[var(--brand)]/40 to-[var(--brand-2)]/20" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 grid grid-cols-2 gap-2 text-[10px] uppercase tracking-[0.25em] text-[var(--muted)]">
                      <div className="rounded-[12px] border border-white/10 bg-white/5 p-2 text-center">React</div>
                      <div className="rounded-[12px] border border-white/10 bg-white/5 p-2 text-center">Tailwind</div>
                      <div className="rounded-[12px] border border-white/10 bg-white/5 p-2 text-center">Node.js</div>
                      <div className="rounded-[12px] border border-white/10 bg-white/5 p-2 text-center">MongoDB</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <SectionHeading eyebrow="01. About Me" title="Let me introduce myself." />

            <div className="rounded-[18px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-soft">
              <h3 className="mb-4 text-2xl font-semibold text-white">Introduction</h3>
               <p className="leading-8 text-[var(--muted)]">
                Hi, I'm <span className="font-semibold text-white">Rita Akter Laboni</span>, a
                passionate <span className="text-[var(--brand)]">MERN Stack Developer</span>{" "}
                currently pursuing a B.Sc. in Computer Science and Engineering. I have
                completed a frontend development internship, where I gained hands-on
                experience building responsive and user-friendly web applications. I work
                with React, JavaScript, Tailwind CSS, Node.js, Express.js, and MongoDB to
                create clean, scalable, and high-performance solutions. I enjoy learning
                new technologies, solving real-world problems, and building modern digital
                experiences that deliver excellent user satisfaction.
                </p>
            </div>
          
          </div>
        </main>
      </div>
    </section>
  );
}
