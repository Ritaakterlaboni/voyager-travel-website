import { useState, useMemo } from 'react';
import { FiMapPin, FiArrowRight, FiStar } from 'react-icons/fi';
import SectionHeading from './SectionHeading';

const destinations = [
  {
    id: 'santorini',
    name: 'Santorini',
    country: 'Greece',
    region: 'europe',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80',
    description: 'Iconic white-washed villages perched on volcanic cliffs with stunning Aegean Sea sunsets.',
    price: 1299,
    rating: 4.9,
  },
  {
    id: 'bali',
    name: 'Bali',
    country: 'Indonesia',
    region: 'asia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
    description: 'Lush rice terraces, ancient temples, and pristine beaches in the Island of the Gods.',
    price: 899,
    rating: 4.8,
  },
  {
    id: 'maldives',
    name: 'Maldives',
    country: 'Maldives',
    region: 'asia',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
    description: 'Crystal-clear turquoise waters, overwater villas, and unparalleled tropical luxury.',
    price: 2199,
    rating: 4.9,
  },
  {
    id: 'paris',
    name: 'Paris',
    country: 'France',
    region: 'europe',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80',
    description: 'The City of Light beckons with world-class art, cuisine, and the iconic Eiffel Tower.',
    price: 1149,
    rating: 4.7,
  },
  {
    id: 'tokyo',
    name: 'Tokyo',
    country: 'Japan',
    region: 'asia',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80',
    description: 'A mesmerizing blend of ultra-modern technology and centuries-old shrines and gardens.',
    price: 1399,
    rating: 4.8,
  },
  {
    id: 'dubai',
    name: 'Dubai',
    country: 'UAE',
    region: 'middle-east',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
    description: 'Futuristic skylines, luxury shopping, and desert adventures in this Arabian gem.',
    price: 1599,
    rating: 4.7,
  },
];

const filters = [
  { id: 'all', label: 'All Destinations' },
  { id: 'asia', label: 'Asia' },
  { id: 'europe', label: 'Europe' },
  { id: 'middle-east', label: 'Middle East' },
];

export default function PopularDestinations() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = useMemo(() => {
    if (activeFilter === 'all') return destinations;
    return destinations.filter((d) => d.region === activeFilter);
  }, [activeFilter]);

  return (
    <section id="destinations" className="section-padding bg-white">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Popular Destinations"
          title="Explore Extraordinary Places"
          description="From sun-kissed beaches to vibrant cities, find the perfect destination for your next journey."
          center
        />

        {/* Filters */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-primary-600 text-white shadow-soft'
                    : 'bg-slate-100 text-slate-600 hover:bg-primary-50 hover:text-primary-700'
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((dest, index) => (
            <article
              key={`${activeFilter}-${dest.id}`}
              className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-soft card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={dest.image}
                  alt={`${dest.name}, ${dest.country}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Rating Badge */}
                <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1.5 backdrop-blur-sm">
                  <FiStar className="text-sm text-amber-500" fill="currentColor" />
                  <span className="text-sm font-semibold text-slate-800">{dest.rating}</span>
                </div>

                {/* Location */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-white">
                  <FiMapPin className="text-sm" />
                  <span className="text-sm font-medium">{dest.country}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="mb-2 text-xl font-bold text-slate-800">{dest.name}</h3>
                <p className="mb-4 text-sm leading-relaxed text-slate-500 line-clamp-2">
                  {dest.description}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-slate-400">From</span>
                    <span className="ml-1 text-xl font-bold text-primary-600">${dest.price}</span>
                    <span className="text-sm text-slate-400">/person</span>
                  </div>
                  <a
                    href="#tours"
                    className="flex items-center gap-1.5 rounded-lg bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-600 transition-all duration-300 hover:bg-primary-600 hover:text-white"
                  >
                    Explore
                    <FiArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="py-16 text-center">
            <FiMapPin className="mx-auto mb-4 text-4xl text-slate-300" />
            <p className="text-lg font-medium text-slate-400">
              No destinations found for this region. Try a different filter.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
