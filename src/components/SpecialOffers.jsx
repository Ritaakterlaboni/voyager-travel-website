import { FiArrowRight, FiPercent, FiClock } from 'react-icons/fi';

export default function SpecialOffers() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&q=80"
          alt="Luxury resort pool"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-900/75 to-primary-900/70" />
      </div>

      <div className="container-wide relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-400/20 px-4 py-2 border border-amber-400/30">
              <FiPercent className="text-amber-400" />
              <span className="text-sm font-semibold text-amber-300">Limited Time Offer</span>
            </div>

            <h2 className="mb-4 font-display text-[clamp(28px,4.5vw,48px)] font-bold leading-tight text-white">
              Save Up To{' '}
              <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                40% Off
              </span>{' '}
              on Summer Getaways
            </h2>

            <p className="mb-8 max-w-lg text-lg leading-relaxed text-white/70">
              Book your dream vacation before the season ends. Enjoy exclusive discounts on premium resorts, guided tours, and flight packages across the globe.
            </p>

            <div className="mb-8 flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                  <FiClock className="text-xl text-ocean-300" />
                </div>
                <div>
                  <div className="text-xl font-bold text-white">14 Days</div>
                  <div className="text-sm text-white/60">Offer Remaining</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                  <FiPercent className="text-xl text-amber-300" />
                </div>
                <div>
                  <div className="text-xl font-bold text-white">Up to 40%</div>
                  <div className="text-sm text-white/60">Discount Available</div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#tours"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 px-7 py-3.5 font-semibold text-navy-900 shadow-elevated transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Grab the Deal
                <FiArrowRight />
              </a>
              <a
                href="#destinations"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 px-7 py-3 font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5"
              >
                View All Offers
              </a>
            </div>
          </div>

          {/* Right — Promo Cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                label: 'Beach Resorts',
                discount: '35% OFF',
                desc: 'Luxury beachfront stays in Bali and Maldives',
                gradient: 'from-primary-500/80 to-ocean-500/80',
              },
              {
                label: 'City Breaks',
                discount: '25% OFF',
                desc: 'Explore Paris, Tokyo, and Dubai at unbeatable prices',
                gradient: 'from-violet-500/80 to-primary-500/80',
              },
              {
                label: 'Adventure Tours',
                discount: '30% OFF',
                desc: 'Safari, hiking, and extreme sports packages',
                gradient: 'from-orange-500/80 to-amber-500/80',
              },
              {
                label: 'Honeymoon Specials',
                discount: '40% OFF',
                desc: 'Romantic getaways to Santorini and the Maldives',
                gradient: 'from-rose-500/80 to-pink-500/80',
              },
            ].map((card) => (
              <div
                key={card.label}
                className={`rounded-2xl bg-gradient-to-br ${card.gradient} p-6 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated cursor-pointer`}
              >
                <div className="mb-2 inline-block rounded-lg bg-white/20 px-2.5 py-1 text-xs font-bold text-white">
                  {card.discount}
                </div>
                <h3 className="mb-1 text-lg font-bold text-white">{card.label}</h3>
                <p className="text-sm text-white/80">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
