import { useState } from 'react';
import { FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';
import { MdFlightTakeoff } from 'react-icons/md';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | success | error
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmed = email.trim();
    if (!trimmed) {
      setStatus('error');
      setMessage('Please enter your email address.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('success');
    setMessage('Thank you for subscribing! Check your inbox for travel deals.');
    setEmail('');

    setTimeout(() => {
      setStatus('idle');
      setMessage('');
    }, 5000);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-navy-900 py-20 md:py-24">
      {/* Decorative Elements */}
      <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-white/5 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-ocean-500/10 translate-x-1/3 translate-y-1/3" />
      <div className="absolute left-1/4 top-1/2 h-3 w-3 rounded-full bg-ocean-300/40 animate-pulse-soft" />
      <div className="absolute right-1/3 top-1/4 h-2 w-2 rounded-full bg-white/30 animate-pulse-soft" style={{ animationDelay: '1s' }} />

      <div className="container-narrow relative z-10 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 border border-white/15">
          <MdFlightTakeoff className="text-ocean-300" />
          <span className="text-sm font-medium text-white/90">Stay Updated</span>
        </div>

        <h2 className="mb-4 font-display text-[clamp(26px,4vw,42px)] font-bold text-white">
          Get Exclusive Travel Deals
        </h2>
        <p className="mx-auto mb-8 max-w-lg text-base text-white/70 md:text-lg">
          Subscribe to our newsletter and be the first to know about special offers, new destinations, and travel tips.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto flex max-w-xl flex-col gap-3 sm:flex-row sm:gap-0 sm:rounded-full sm:bg-white/10 sm:p-1.5 sm:backdrop-blur-sm sm:border sm:border-white/20"
          noValidate
        >
          <div className="relative flex-1">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === 'error') {
                  setStatus('idle');
                  setMessage('');
                }
              }}
              placeholder="Enter your email address"
              className={`w-full rounded-full bg-white/10 px-6 py-3.5 text-sm text-white placeholder-white/50 outline-none backdrop-blur-sm sm:bg-transparent sm:backdrop-blur-none ${
                status === 'error' ? 'ring-2 ring-red-400 sm:ring-0' : ''
              }`}
              aria-label="Email address"
            />
          </div>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-primary-700 shadow-soft transition-all duration-300 hover:bg-primary-50 hover:-translate-y-0.5 hover:shadow-elevated"
          >
            {status === 'success' ? (
              <>
                <FiCheck className="text-green-600" />
                Subscribed!
              </>
            ) : (
              <>
                <FiSend />
                Subscribe
              </>
            )}
          </button>
        </form>

        {/* Feedback Message */}
        {message && (
          <div
            className={`mt-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${
              status === 'success'
                ? 'bg-green-500/20 text-green-300'
                : 'bg-red-500/20 text-red-300'
            }`}
            role="alert"
          >
            {status === 'success' ? <FiCheck /> : <FiAlertCircle />}
            {message}
          </div>
        )}

        <p className="mt-4 text-xs text-white/40">
          No spam, ever. Unsubscribe anytime. By subscribing you agree to our Privacy Policy.
        </p>
      </div>
    </section>
  );
}
