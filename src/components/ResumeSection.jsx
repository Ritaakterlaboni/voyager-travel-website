import { useEffect, useRef, useState } from 'react';
import SectionHeading from './SectionHeading';

const experience = [
  { range: '2025 Running', title: 'Uttara University', text: 'Bsc in Computer Science.' },
  { range: '2024 May – 2025 August', title: 'Front-End Developer', text: 'I turn Figma mockups into clean, responsive code with HTML, CSS, JS, Tailwind & Bootstrap.' },
  { range: '2020 – 2024', title: 'NIET (Narayanganj)', text: 'Diploma in Computer Science.' },
  { range: '2025 Running', title: 'Creative IT Institute', text: 'Mearn Stack Development' }
];

export default function ResumeSection() {
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          experience.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards((prev) => (prev.includes(index) ? prev : [...prev, index]));
            }, index * 1000);
          });
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="resume" ref={sectionRef} className="px-0 py-20">
      <div className="mx-auto w-[min(1150px,92%)]">
        <SectionHeading eyebrow="04. My Resume" title="Experience & Education" />
        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-[var(--border)] md:block" />

          <div className="space-y-6">
            {experience.map((item, index) => {
              const isLeft = index % 2 === 0;
              const direction = isLeft ? '-translate-x-6' : 'translate-x-6';
              const isVisible = visibleCards.includes(index);

              return (
                <div key={`${item.title}-${index}`} className="relative grid items-start gap-4 md:grid-cols-[1fr_1fr]">
                  {isLeft ? (
                    <>
                      <div className={`transition-all duration-700 ease-out ${isVisible ? 'translate-x-0 opacity-100' : `${direction} opacity-0`}`}>
                        <div className="flex h-full min-h-[180px] flex-col rounded-[16px] border border-[var(--border)] bg-[#232633] p-5 shadow-soft">
                          <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">{item.range}</div>
                          <h4 className="mb-2 text-lg font-semibold text-white">{item.title}</h4>
                          <p className="leading-8 text-[var(--muted)]">{item.text}</p>
                        </div>
                      </div>
                      <div className="hidden md:block" />
                    </>
                  ) : (
                    <>
                      <div className="hidden md:block" />
                      <div className={`transition-all duration-700 ease-out ${isVisible ? 'translate-x-0 opacity-100' : `${direction} opacity-0`}`}>
                        <div className="flex h-full min-h-[180px] flex-col rounded-[16px] border border-[var(--border)] bg-[#232633] p-5 shadow-soft">
                          <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">{item.range}</div>
                          <h4 className="mb-2 text-lg font-semibold text-white">{item.title}</h4>
                          <p className="leading-8 text-[var(--muted)]">{item.text}</p>
                        </div>
                      </div>
                    </>
                  )}

                  <div className="absolute left-1/2 top-6 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-[var(--brand)] bg-[#0f1117] md:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
