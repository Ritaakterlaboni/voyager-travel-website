import { FiClock, FiArrowRight, FiUser } from 'react-icons/fi';
import SectionHeading from './SectionHeading';

const posts = [
  {
    id: 'packing-tips',
    title: '10 Essential Packing Tips for International Travel',
    excerpt:
      'Maximize your luggage space and minimize stress with these tried-and-tested packing strategies from seasoned globetrotters.',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80',
    author: 'Voyager Team',
    date: 'Oct 15, 2025',
    readTime: '5 min read',
    category: 'Travel Tips',
  },
  {
    id: 'hidden-gems',
    title: 'Hidden Gems: 7 Underrated European Destinations',
    excerpt:
      'Skip the crowds and discover stunning European towns and villages that most tourists never see. From coastal Croatia to rural Provence.',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80',
    author: 'Voyager Team',
    date: 'Sep 28, 2025',
    readTime: '7 min read',
    category: 'Destination Guide',
  },
  {
    id: 'budget-travel',
    title: 'How to Travel the World on a Budget in 2025',
    excerpt:
      'Practical advice for exploring amazing destinations without breaking the bank. Includes tips on flights, accommodation, and local food.',
    image: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=800&q=80',
    author: 'Voyager Team',
    date: 'Sep 10, 2025',
    readTime: '6 min read',
    category: 'Budget Travel',
  },
];

export default function TravelBlog() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Travel Blog"
          title="Travel Stories & Tips"
          description="Inspiration, guides, and expert advice to help you plan your next adventure."
          center
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <article
              key={post.id}
              className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-soft card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute left-4 top-4 rounded-lg bg-primary-600 px-3 py-1 text-xs font-semibold text-white">
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Meta */}
                <div className="mb-3 flex items-center gap-4 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <FiUser className="text-xs" />
                    {post.author}
                  </span>
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1">
                    <FiClock className="text-xs" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="mb-2 text-lg font-bold leading-snug text-slate-800 transition-colors group-hover:text-primary-600 line-clamp-2">
                  {post.title}
                </h3>

                <p className="mb-4 text-sm leading-relaxed text-slate-500 line-clamp-2">
                  {post.excerpt}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 transition-all duration-300 hover:gap-3"
                  onClick={(e) => e.preventDefault()}
                >
                  Read More
                  <FiArrowRight className="text-sm" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
