'use client';

import { useState } from 'react';
import { Mail, Send } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="section-container bg-gradient-to-r from-soft-pink/20 to-soft-blue/20">
      <div className="bg-gradient-to-r from-blush-pink to-baby-blue rounded-3xl p-12 shadow-soft-md overflow-hidden relative">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -mr-24 -mt-24"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Stay Updated with Our Newsletter
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Get exclusive offers, parenting tips, and new product launches delivered to your inbox
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-text-light" size={20} />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-12 pr-4 py-4 rounded-full bg-white/95 text-text-dark placeholder-text-light focus:outline-none focus:ring-2 focus:ring-soft-pink transition-all"
              />
            </div>
            <button
              type="submit"
              className="px-8 py-4 bg-white text-soft-pink font-bold rounded-full hover:bg-cream transition-all duration-300 hover:shadow-soft-md active:scale-95 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <span>Subscribe</span>
              <Send size={18} />
            </button>
          </form>

          {submitted && (
            <p className="mt-4 text-white font-semibold animate-fade-in">
              ✓ Thank you for subscribing!
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
