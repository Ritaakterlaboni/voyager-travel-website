import { useMemo, useState } from 'react';
import SectionHeading from '../components/SectionHeading';

const works = [
  { id: 'jera', filters: ['web-design'], href: 'https://ritaakterlaboni.github.io/Jera_protfolio/', img: '/images/Screenshot (41).png', title: 'Web Design' },
  { id: 'cyber', filters: ['web-design'], href: 'https://cyber-security-gold.vercel.app/', img: '/images/Screenshot (43).png', title: 'Web Design' },
  { id: 'furnior', filters: ['dashboard'], href: 'https://ritaakterlaboni.github.io/Furnior/', img: '/images/Screenshot (45).png', title: 'Graphic Design' },
  { id: 'analytics', filters: ['ecommerce'], href: 'https://orebi-ecom-theta.vercel.app/', img: '/images/Screenshot (46).png', title: 'Graphic Design' },
  { id: 'brand', filters: ['dashboard'], href: 'https://orebi-ecom-theta.vercel.app/', img: '/images/Screenshot (48).png', title: 'Branding' },
  { id: 'orebi', filters: ['ecommerce'], href: 'https://orebi-ecom-theta.vercel.app/', img: '/images/Screenshot (49).png', title: 'E-commerce' }
];

const filters = [
  { id: 'all', label: 'All' },
  { id: 'web-design', label: 'Web Design' },
  { id: 'ecommerce', label: 'E-commerce' },
  { id: 'dashboard', label: 'Dashboard' }
];

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredWorks = useMemo(() => {
    if (activeFilter === 'all') return works;
    return works.filter((work) => work.filters.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section id="portfolio" className="px-0 py-20">
      <div className="mx-auto w-[min(1150px,92%)]">
        <SectionHeading eyebrow="05. My Portfolio" title="Selected Works" />

        <div className="mb-6 flex flex-wrap gap-3">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.id;

            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                className={`rounded-full border px-3 py-2 text-sm transition-all duration-300 ${isActive ? 'border-transparent bg-gradient-to-r from-[var(--brand)] to-[var(--brand-2)] text-[#0b0c11] shadow-[0_0_0_1px_rgba(255,255,255,0.12)]' : 'border-[var(--border)] bg-[#12141b] text-slate-100 hover:border-[var(--brand)] hover:text-white'}`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredWorks.map((work) => (
            <figure
              key={`${activeFilter}-${work.id}`}
              className="group overflow-hidden rounded-[14px] border border-[var(--border)] shadow-soft transition-all duration-300 ease-out"
              style={{ animation: 'portfolioFadeIn 0.3s ease-out both' }}
            >
              <a href={work.href} target="_blank" rel="noreferrer">
                <img src={work.img} alt={work.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-125" />
              </a>
              <figcaption className="bg-gradient-to-t from-black/80 to-transparent p-4 font-medium text-white">{work.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes portfolioFadeIn {
          from {
            opacity: 0;
            transform: scale(0.96);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}
