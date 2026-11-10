import { useState } from 'react';
import { MdFlightTakeoff } from 'react-icons/md';
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiYoutube,
  FiMapPin,
  FiMail,
  FiPhone,
  FiArrowRight,
  FiSend,
} from 'react-icons/fi';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Tour Packages', href: '#tours' },
  { label: 'Special Offers', href: '#' },
  { label: 'Travel Blog', href: '#' },
];

const supportLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Contact Us', href: '#contact' },
  { label: 'FAQ', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
];

const socialLinks = [
  { icon: <FiFacebook />, label: 'Facebook', href: '#' },
  { icon: <FiTwitter />, label: 'Twitter', href: '#' },
  { icon: <FiInstagram />, label: 'Instagram', href: '#' },
  { icon: <FiYoutube />, label: 'YouTube', href: '#' },
];

export default function Footer() {
  const [footerEmail, setFooterEmail] = useState('');

  return (
    <footer id="contact" className="bg-navy-900 text-white">
      {/* Main Footer */}
      <div className="container-wide pt-16 pb-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#home" className="mb-5 inline-flex items-center gap-2.5" aria-label="Voyager home">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-ocean-500 text-white">
                <MdFlightTakeoff className="text-xl" />
              </span>
              <span className="font-display text-xl font-bold">Voyager</span>
            </a>
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-slate-400">
              Your trusted travel companion for extraordinary journeys. Discover, book, and explore the world's most breathtaking destinations.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-slate-400 transition-all duration-300 hover:bg-primary-600 hover:text-white hover:-translate-y-0.5"
                  aria-label={s.label}
                  onClick={(e) => e.preventDefault()}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    <FiArrowRight className="text-xs text-primary-500 opacity-0 transition-all duration-300 group-hover:opacity-100" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
              Support
            </h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    <FiArrowRight className="text-xs text-primary-500 opacity-0 transition-all duration-300 group-hover:opacity-100" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
              Get in Touch
            </h3>
            <ul className="mb-6 space-y-3">
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <FiMapPin className="mt-0.5 shrink-0 text-primary-400" />
                <span>123 Travel Street, Adventure City, World 10001</span>
              </li>
              <li>
                <a href="mailto:hello@voyager.travel" className="flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-white">
                  <FiMail className="shrink-0 text-primary-400" />
                  hello@voyager.travel
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-white">
                  <FiPhone className="shrink-0 text-primary-400" />
                  +1 (234) 567-890
                </a>
              </li>
            </ul>

            {/* Mini Newsletter */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setFooterEmail('');
              }}
              className="flex overflow-hidden rounded-xl border border-white/10 bg-white/5"
            >
              <input
                type="email"
                value={footerEmail}
                onChange={(e) => setFooterEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 bg-transparent px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="flex items-center justify-center bg-primary-600 px-4 text-white transition-colors hover:bg-primary-700"
                aria-label="Subscribe"
              >
                <FiSend className="text-sm" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-wide flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Voyager Travel. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <a href="#" className="transition-colors hover:text-white" onClick={(e) => e.preventDefault()}>
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-white" onClick={(e) => e.preventDefault()}>
              Terms of Service
            </a>
            <a href="#" className="transition-colors hover:text-white" onClick={(e) => e.preventDefault()}>
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
