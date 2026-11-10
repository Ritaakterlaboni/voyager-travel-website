import { useState } from 'react';
import { FiSearch, FiCalendar, FiMapPin, FiUsers } from 'react-icons/fi';
import { MdFlightTakeoff } from 'react-icons/md';

const stats = [
  { value: '500+', label: 'Destinations' },
  { value: '10K+', label: 'Happy Travelers' },
  { value: '4.9', label: 'Average Rating' },
  { value: '15+', label: 'Years Experience' },
];

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const el = document.getElementById('destinations');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80"
          alt="Beautiful tropical beach with crystal clear water"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 via-navy-900/50 to-navy-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container-wide relative z-10 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur-md border border-white/20">
            <MdFlightTakeoff className="text-ocean-300" />
            <span className="text-sm font-medium text-white/90">Explore 500+ destinations worldwide</span>
          </div>

          {/* Headline */}
          <h1 className="mb-6 font-display text-[clamp(36px,6vw,72px)] font-bold leading-[1.1] text-white">
            Discover Your Next{' '}
            <span className="bg-gradient-to-r from-ocean-300 to-primary-300 bg-clip-text text-transparent">
              Great Adventure
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mb-10 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl">
            Explore the world's most breathtaking destinations with expertly curated travel packages designed for unforgettable experiences.
          </p>

          {/* Search Bar */}
          <form
            onSubmit={handleSearch}
            className="flex flex-col gap-3 rounded-2xl bg-white p-3 shadow-elevated sm:flex-row sm:items-center lg:gap-0 lg:rounded-full lg:p-2"
          >
            {/* Destination */}
            <div className="flex flex-1 items-center gap-3 rounded-xl px-4 py-2 lg:border-r lg:border-slate-200">
              <FiMapPin className="shrink-0 text-lg text-primary-500" />
              <div className="flex-1">
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  Destination
                </label>
                <input
                  type="text"
                  placeholder="Where do you want to go?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full border-none bg-transparent text-sm font-medium text-slate-800 outline-none placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Check In */}
            <div className="flex flex-1 items-center gap-3 rounded-xl px-4 py-2 lg:border-r lg:border-slate-200">
              <FiCalendar className="shrink-0 text-lg text-primary-500" />
              <div className="flex-1">
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  Check In
                </label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full border-none bg-transparent text-sm font-medium text-slate-800 outline-none"
                />
              </div>
            </div>

            {/* Check Out */}
            <div className="flex flex-1 items-center gap-3 rounded-xl px-4 py-2 lg:border-r lg:border-slate-200">
              <FiCalendar className="shrink-0 text-lg text-primary-500" />
              <div className="flex-1">
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  Check Out
                </label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full border-none bg-transparent text-sm font-medium text-slate-800 outline-none"
                />
              </div>
            </div>

            {/* Search Button */}
            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-3.5 font-semibold text-white shadow-soft transition-all duration-300 hover:shadow-elevated hover:-translate-y-0.5 sm:rounded-full lg:px-8"
            >
              <FiSearch className="text-lg" />
              <span>Search</span>
            </button>
          </form>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4 lg:mt-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/10 px-6 py-5 text-center backdrop-blur-sm transition-all duration-300 hover:bg-white/15"
            >
              <div className="text-2xl font-bold text-white md:text-3xl">{stat.value}</div>
              <div className="mt-1 text-sm text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
