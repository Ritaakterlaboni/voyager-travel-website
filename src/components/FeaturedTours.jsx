import { FiClock, FiUsers, FiStar, FiArrowRight } from 'react-icons/fi';
import { MdFlightTakeoff } from 'react-icons/md';
import SectionHeading from './SectionHeading';

const tours = [
  {
    id: 'tropical-paradise',
    title: 'Tropical Paradise Escape',
    location: 'Maldives & Sri Lanka',
    image: 'https://images.unsplash.com/photo-1559827291-bce044a23ae5?w=800&q=80',
    duration: '7 Days / 6 Nights',
    groupSize: 'Up to 12',
    rating: 4.9,
    reviews: 284,
    price: 2499,
    originalPrice: 3199,
    discount: 22,
    featured: true,
    highlights: ['Overwater Villa', 'Snorkeling', 'Spa & Wellness'],
  },
  {
    id: 'european-explorer',
    title: 'European Explorer Tour',
    location: 'Paris, Rome & Barcelona',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80',
    duration: '12 Days / 11 Nights',
    groupSize: 'Up to 18',
    rating: 4.8,
    reviews: 412,
    price: 3299,
    originalPrice: 3999,
    discount: 18,
    featured: false,
    highlights: ['Guided Tours', 'Local Cuisine', 'Museum Passes'],
  },
  {
    id: 'asian-adventure',
    title: 'Southeast Asian Adventure',
    location: 'Thailand, Vietnam & Cambodia',
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80',
    duration: '10 Days / 9 Nights',
    groupSize: 'Up to 15',
    rating: 4.7,
    reviews: 356,
    price: 1899,
    originalPrice: null,
    discount: null,
    featured: false,
    highlights: ['Temple Tours', 'Street Food', 'Beach Hopping'],
  },
  {
    id: 'african-safari',
    title: 'African Safari Experience',
    location: 'Kenya & Tanzania',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80',
    duration: '8 Days / 7 Nights',
    groupSize: 'Up to 10',
    rating: 4.9,
    reviews: 198,
    price: 3799,
    originalPrice: 4499,
    discount: 16,
    featured: true,
    highlights: ['Game Drives', 'Luxury Lodges', 'Great Migration'],
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <FiStar
          key={star}
          className={`text-sm ${star <= Math.round(rating) ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`}
        />
      ))}
    </div>
  );
}

export default function FeaturedTours() {
  return (
    <section id="tours" className="section-padding bg-slate-50">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Featured Tours"
          title="Curated Tour Packages"
          description="Handcrafted itineraries designed by travel experts to give you the most authentic and memorable experiences."
          center
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {tours.map((tour, index) => (
            <article
              key={tour.id}
              className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-soft card-hover"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="flex flex-col sm:flex-row">
                {/* Image */}
                <div className="relative h-56 sm:h-auto sm:w-[45%] shrink-0 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent sm:bg-gradient-to-t" />

                  {/* Discount Badge */}
                  {tour.discount && (
                    <div className="absolute left-3 top-3 rounded-lg bg-red-500 px-2.5 py-1 text-xs font-bold text-white shadow-sm">
                      {tour.discount}% OFF
                    </div>
                  )}

                  {/* Featured Badge */}
                  {tour.featured && (
                    <div className="absolute right-3 top-3 flex items-center gap-1 rounded-lg bg-amber-400 px-2.5 py-1 text-xs font-bold text-amber-900 shadow-sm">
                      <FiStar className="text-xs" fill="currentColor" />
                      Featured
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                  <div>
                    <div className="mb-2 flex items-center gap-2 text-sm text-primary-600">
                      <MdFlightTakeoff className="text-base" />
                      <span className="font-medium">{tour.location}</span>
                    </div>

                    <h3 className="mb-3 text-lg font-bold text-slate-800 group-hover:text-primary-600 transition-colors">
                      {tour.title}
                    </h3>

                    {/* Meta */}
                    <div className="mb-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <FiClock className="text-ocean-500" /> {tour.duration}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FiUsers className="text-ocean-500" /> {tour.groupSize}
                      </span>
                    </div>

                    {/* Rating */}
                    <div className="mb-3 flex items-center gap-2">
                      <StarRating rating={tour.rating} />
                      <span className="text-sm font-semibold text-slate-700">{tour.rating}</span>
                      <span className="text-sm text-slate-400">({tour.reviews} reviews)</span>
                    </div>

                    {/* Highlights */}
                    <div className="mb-4 flex flex-wrap gap-2">
                      {tour.highlights.map((h) => (
                        <span
                          key={h}
                          className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-end justify-between border-t border-slate-100 pt-4">
                    <div>
                      {tour.originalPrice && (
                        <span className="block text-sm text-slate-400 line-through">
                          ${tour.originalPrice.toLocaleString()}
                        </span>
                      )}
                      <span className="text-2xl font-bold text-primary-600">
                        ${tour.price.toLocaleString()}
                      </span>
                      <span className="text-sm text-slate-400"> /person</span>
                    </div>
                    <a
                      href="#contact"
                      className="flex items-center gap-1.5 rounded-xl bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:bg-primary-700 hover:-translate-y-0.5"
                    >
                      Book Now
                      <FiArrowRight className="text-sm" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
