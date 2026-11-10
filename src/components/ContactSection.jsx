import { useState } from 'react';
import SectionHeading from '../components/SectionHeading';

export default function ContactSection() {
  const [formMessage, setFormMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !subject || !message) {
      setFormMessage('Please fill in all fields.');
      return;
    }

    const ok = /.+@.+\..+/.test(email);
    if (!ok) {
      setFormMessage('Please provide a valid email address.');
      return;
    }

    setFormMessage('Thanks! Your message has been prepared (demo only).');
    form.reset();
  };

  return (
    <section id="contact" className="px-0 py-20">
      <div className="mx-auto w-[min(1150px,92%)]">
        <SectionHeading eyebrow="09. Contact Me" title="Let’s Work Together" />
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-[16px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-soft">
            <h3 className="mb-3 text-xl font-semibold text-white">Location</h3>
            <p className="mb-4 text-[var(--muted)]">Demra, Dhaka, Stafquyater</p>
            <h3 className="mb-3 text-xl font-semibold text-white">Email</h3>
            <p className="mb-4 text-[var(--muted)]">ritaakterlaboni4@gmail.com</p>
            <h3 className="mb-3 text-xl font-semibold text-white">Phone</h3>
            <p className="text-[var(--muted)]">01880102830</p>
          </div>
          <div className="rounded-[16px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-soft">
            <form className="grid gap-3 md:grid-cols-2" onSubmit={handleSubmit}>
              <input className="w-full rounded-xl border border-[var(--border)] bg-[#0f121a] px-3 py-3 text-sm text-white outline-none" type="text" name="name" placeholder="Your Name" />
              <input className="w-full rounded-xl border border-[var(--border)] bg-[#0f121a] px-3 py-3 text-sm text-white outline-none" type="email" name="email" placeholder="Your Email" />
              <input className="w-full rounded-xl border border-[var(--border)] bg-[#0f121a] px-3 py-3 text-sm text-white outline-none md:col-span-2" type="text" name="subject" placeholder="Subject" />
              <textarea className="min-h-32 w-full rounded-xl border border-[var(--border)] bg-[#0f121a] px-3 py-3 text-sm text-white outline-none md:col-span-2" name="message" placeholder="Message" />
              <button type="submit" className="rounded-xl border border-transparent bg-gradient-to-r from-[var(--brand)] to-[var(--brand-2)] px-4 py-3 font-semibold text-[#0b0c11] shadow-soft md:col-span-2">
                Send Message
              </button>
              <p className="md:col-span-2 text-sm text-[var(--muted)]">{formMessage}</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
