import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'New Mom',
    review: 'Little Blossoms has been a lifesaver! The quality is exceptional and the customer service is outstanding. Highly recommend!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Emily Chen',
    role: 'Parent of Two',
    review: 'I love the attention to detail and the premium materials used. My kids are so comfortable in their clothes. Best purchase ever!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Michael Rodriguez',
    role: 'First-time Parent',
    review: 'Fast delivery, beautiful packaging, and amazing products. Little Blossoms makes parenting easier and more enjoyable.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="section-container bg-gradient-to-b from-cream to-blush-pink/10">
      <div className="text-center mb-16 animate-slide-up">
        <h2 className="text-4xl sm:text-5xl font-bold text-text-dark mb-4">
          What Parents <span className="gradient-text">Love About Us</span>
        </h2>
        <p className="text-text-light text-lg max-w-2xl mx-auto">
          Join thousands of happy families who trust Little Blossoms for their baby's needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className="card-hover bg-white rounded-2xl p-8 shadow-soft"
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            {/* Quote Icon */}
            <div className="mb-4">
              <Quote className="text-soft-pink" size={32} />
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className="fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            {/* Review Text */}
            <p className="text-text-light mb-6 leading-relaxed italic">
              "{testimonial.review}"
            </p>

            {/* Customer Info */}
            <div className="pt-6 border-t border-gray-200">
              <p className="font-bold text-text-dark">{testimonial.name}</p>
              <p className="text-sm text-text-light">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
