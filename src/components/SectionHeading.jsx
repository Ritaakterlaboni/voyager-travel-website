export default function SectionHeading({ eyebrow, title, description, center = false, className = '' }) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''} ${className}`}>
      {eyebrow && (
        <div className="mb-3 inline-flex items-center gap-2">
          <span className="h-[2px] w-8 rounded-full bg-gradient-to-r from-primary-500 to-ocean-500" />
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-600">
            {eyebrow}
          </span>
          <span className="h-[2px] w-8 rounded-full bg-gradient-to-r from-ocean-500 to-primary-500" />
        </div>
      )}
      <h2 className="font-display text-[clamp(26px,3.5vw,42px)] font-bold leading-tight text-slate-800">
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed text-slate-500 md:text-lg ${center ? 'mx-auto max-w-2xl' : 'max-w-xl'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
