import { FiStar } from 'react-icons/fi';
import { FaQuoteLeft } from 'react-icons/fa';
import SectionHeading from './SectionHeading';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Solo Traveler',
    avatar: null,
    initials: 'SM',
    color: 'from-primary-400 to-primary-600',
    rating: 5,
    text: 'Voyager made planning my two-week trip through Southeast Asia incredibly easy. The curated itinerary was thoughtful, the accommodations were wonderful, and the local guides were knowledgeable. Highly recommend for solo travelers.',
    destination: 'Thailand & Vietnam',
  },
  {
    id: 2,
    name: 'James & Emily Rodriguez',
    role: 'Honeymoon Trip',
    avatar: null,
    initials: 'JR',
    color: 'from-ocean-400 to-ocean-600',
    rating: 5,
    text: 'Our honeymoon in the Maldives was beyond magical. Every detail was handled — from the seaplane transfer to the private dinner on the beach. Thank you Voyager for creating the most special trip of our lives.',
    destination: 'Maldives',
  },
  {
    id: 3,
    name: 'David Park',
    role: 'Family Vacation',
    avatar: null,
    initials: 'DP',
    color: 'from-violet-400 to-violet-600',
    rating: 5,
    text: 'Traveling with three kids can be stressful, but Voyager took care of everything. Family-friendly hotels, kid-safe activities, and flexible scheduling meant everyone — parents included — had the best time.',
    destination: 'European Explorer',
  },
];

function StarDisplay({ rating }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <FiStar
          key={i}
          className={`text-sm ${i < rating ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Travelers Say"
          description="Real stories from real travelers who explored the world with Voyager."
          center
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <article
              key={t.id}
              className="group relative rounded-2xl border border-slate-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card md:p-8"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              {/* Quote Icon */}
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-400">
                <FaQuoteLeft className="text-lg" />
              </div>

              {/* Rating */}
              <div className="mb-4">
                <StarDisplay rating={t.rating} />
              </div>

              {/* Text */}
              <p className="mb-6 text-[15px] leading-relaxed text-slate-600">
                "{t.text}"
              </p>

              {/* Destination tag */}
              <div className="mb-5 inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-600">
                {t.destination}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-slate-100 pt-5">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${t.color} text-sm font-bold text-white shadow-sm`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-800">{t.name}</div>
                  <div className="text-xs text-slate-400">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
