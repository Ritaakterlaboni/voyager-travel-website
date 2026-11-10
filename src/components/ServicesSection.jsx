import SectionHeading from '../components/SectionHeading';

const services = [
  { icon: 'fa-pen-nib', title: 'Creative Design', text: 'Brand-first visuals and elegant UI systems for the modern web.' },
  { icon: 'fa-font-awesome', title: 'Branding', text: 'Identity, voice, and consistency across every customer touchpoint.' },
  { icon: 'fa-laptop', title: 'User Interface', text: 'Beautiful, accessible components with micro-interactions.' },
  { icon: 'fa-briefcase', title: 'User Experience', text: 'Flows and information architecture that just make sense.' },
  { icon: 'fa-code', title: 'Clean Code', text: 'Maintainable, documented, and performance-minded frontend.' },
  { icon: 'fa-headset', title: 'Fast Support', text: 'Clear communication and reliable delivery.' }
];

export default function ServicesSection() {
  return (
    <section id="services" className="px-0 py-20">
      <div className="mx-auto w-[min(1150px,92%)]">
        <SectionHeading eyebrow="03. My Services" title="What I Do" />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="rounded-[16px] border border-[var(--border)] bg-[#232633] p-6 text-center shadow-soft transition duration-300 hover:-translate-y-1 hover:border-slate-400">
              <span><i className={`fa-solid ${service.icon} fa-fw fa-2x text-[var(--brand-2)]`}></i></span>
              <h3 className="mt-4 pb-3 text-[20px] font-semibold text-white">{service.title}</h3>
              <p className="leading-8 text-[var(--muted)]">{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
