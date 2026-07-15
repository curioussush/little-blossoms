import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-baby-blue via-blush-pink to-mint-green overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-dark leading-tight">
              Everything Your
              <span className="block gradient-text">Little One Needs</span>
            </h1>

            <p className="text-lg text-text-light leading-relaxed max-w-lg">
              Premium baby essentials designed with love, comfort, and safety. Trusted by parents worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary inline-flex items-center justify-center gap-2 group">
                Shop Now
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8">
              <div>
                <p className="text-2xl font-bold gradient-text">50K+</p>
                <p className="text-text-light text-sm">Happy Families</p>
              </div>
              <div>
                <p className="text-2xl font-bold gradient-text">1000+</p>
                <p className="text-text-light text-sm">Premium Products</p>
              </div>
              <div>
                <p className="text-2xl font-bold gradient-text">4.9⭐</p>
                <p className="text-text-light text-sm">Customer Rating</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 lg:h-full min-h-96 animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-br from-soft-pink/30 to-soft-mint/30 rounded-3xl"></div>
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-br from-soft-blue/20 to-soft-pink/20 rounded-3xl flex items-center justify-center border-4 border-white/50 shadow-soft">
                <span className="text-text-light text-center px-4">
                  <p className="text-lg font-semibold mb-2">Baby Image Placeholder</p>
                  <p className="text-sm">High-quality baby product imagery</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-soft-pink/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-soft-blue/20 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
