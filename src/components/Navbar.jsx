import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiMapPin } from 'react-icons/fi';
import { MdFlightTakeoff } from 'react-icons/md';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Tours', href: '#tours' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass border-b border-slate-200/60 shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <div className="container-wide">
        <nav className="flex items-center justify-between py-4" aria-label="Main navigation">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group" aria-label="Voyager home">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-ocean-500 text-white shadow-soft transition-transform duration-300 group-hover:scale-110">
              <MdFlightTakeoff className="text-xl" />
            </span>
            <span className="font-display text-xl font-bold tracking-tight text-navy-900">
              Voyager
            </span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden items-center gap-1 md:flex" role="list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="rounded-lg px-4 py-2 text-sm font-bold hover:font-bold text-slate-600 transition-colors duration-200 hover:bg-primary-50 hover:text-primary-700"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <button className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:text-primary-700">
              Sign In
            </button>
            <a
              href="#tours"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:shadow-elevated hover:-translate-y-0.5"
            >
              <FiMapPin className="text-sm" />
              Get Started
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`border-t border-slate-100 bg-white shadow-elevated md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-wide py-4">
          <ul className="flex flex-col gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block rounded-lg px-4 py-3 text-[15px] font-medium text-slate-700 transition-colors hover:bg-primary-50 hover:text-primary-700"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-2 border-t border-slate-100 pt-4">
            <button className="rounded-lg px-4 py-3 text-left text-[15px] font-semibold text-slate-700 transition-colors hover:bg-slate-50">
              Sign In
            </button>
            <a
              href="#tours"
              className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 px-5 py-3 font-semibold text-white shadow-soft"
              onClick={() => setIsOpen(false)}
            >
              <FiMapPin className="text-sm" />
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
