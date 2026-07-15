import { CheckCircle, Trophy, Zap, RotateCcw } from 'lucide-react';

const features = [
  {
    id: 1,
    title: 'Safe & Certified',
    description: 'All products meet international safety standards and certifications',
    icon: CheckCircle,
    color: 'from-blush-pink to-soft-pink',
  },
  {
    id: 2,
    title: 'Premium Quality',
    description: 'Handpicked products made from the finest materials for your baby',
    icon: Trophy,
    color: 'from-baby-blue to-soft-blue',
  },
  {
    id: 3,
    title: 'Fast Delivery',
    description: 'Swift shipping to get your orders to you within 2-3 business days',
    icon: Zap,
    color: 'from-mint-green to-soft-mint',
  },
  {
    id: 4,
    title: 'Easy Returns',
    description: 'Hassle-free returns within 30 days for your complete peace of mind',
    icon: RotateCcw,
    color: 'from-soft-pink to-soft-blue',
  },
];

export default function WhyChoose() {
  return (
    <section className="section-container bg-white">
      <div className="text-center mb-16 animate-slide-up">
        <h2 className="text-4xl sm:text-5xl font-bold text-text-dark mb-4">
          Why Choose <span className="gradient-text">Little Blossoms</span>
        </h2>
        <p className="text-text-light text-lg max-w-2xl mx-auto">
          We're committed to providing the best for your little ones with unmatched quality and service
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.id}
              className="card-hover"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className={`bg-gradient-to-br ${feature.color} rounded-2xl p-8 h-full flex flex-col items-center text-center`}>
                <div className="mb-4 p-4 bg-white/60 rounded-full">
                  <Icon size={32} className="text-text-dark" />
                </div>
                <h3 className="text-xl font-bold text-text-dark mb-3">{feature.title}</h3>
                <p className="text-text-light text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
