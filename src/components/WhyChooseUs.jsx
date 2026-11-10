import { FiDollarSign, FiShield, FiHeadphones, FiAward } from 'react-icons/fi';
import SectionHeading from './SectionHeading';

const features = [
  {
    icon: <FiDollarSign />,
    title: 'Affordable Pricing',
    description:
      'Competitive rates with no hidden fees. We negotiate directly with hotels, airlines, and local partners to bring you the best value.',
    color: 'from-primary-500 to-primary-600',
    bgColor: 'bg-primary-50',
    textColor: 'text-primary-600',
  },
  {
    icon: <FiShield />,
    title: 'Trusted Travel Experts',
    description:
      'Our team of certified travel professionals has over 15 years of industry experience planning seamless journeys around the globe.',
    color: 'from-ocean-500 to-ocean-600',
    bgColor: 'bg-ocean-50',
    textColor: 'text-ocean-600',
  },
  {
    icon: <FiHeadphones />,
    title: '24/7 Customer Support',
    description:
      'Round-the-clock assistance wherever you are. Our multilingual support team is always available via phone, email, or live chat.',
    color: 'from-violet-500 to-violet-600',
    bgColor: 'bg-violet-50',
    textColor: 'text-violet-600',
  },
  {
    icon: <FiAward />,
    title: 'Handpicked Experiences',
    description:
      'Every destination and tour is carefully vetted by our team. We select only the finest accommodations, guides, and activities.',
    color: 'from-amber-500 to-amber-600',
    bgColor: 'bg-amber-50',
    textColor: 'text-amber-600',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-wide">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <SectionHeading
              eyebrow="Why Choose Us"
              title="Your Journey, Our Passion"
              description="We go above and beyond to make every trip exceptional. Here's what sets Voyager apart from the rest."
            />

            <div className="grid gap-5 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card hover:border-slate-200"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${feature.bgColor} ${feature.textColor} text-xl transition-transform duration-300 group-hover:scale-110`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-slate-800">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-500">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Collage */}
          <div className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-2xl shadow-card">
                  <img
                    src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80"
                    alt="Mountain lake landscape"
                    className="h-48 w-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl shadow-card">
                  <img
                    src="https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&q=80"
                    alt="Beautiful coastal town"
                    className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="overflow-hidden rounded-2xl shadow-card">
                  <img
                    src="https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=600&q=80"
                    alt="Tropical beach resort"
                    className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl shadow-card">
                  <img
                    src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80"
                    alt="Scenic nature view"
                    className="h-48 w-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 opacity-60 -z-10" />
            <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-gradient-to-br from-ocean-100 to-ocean-200 opacity-60 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
