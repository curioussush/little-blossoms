import { Shirt, Gamepad2, Utensils, Droplets } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Baby Clothing',
    icon: Shirt,
    color: 'from-blush-pink to-soft-pink',
    description: 'Soft, comfortable clothing',
  },
  {
    id: 2,
    name: 'Toys & Learning',
    icon: Gamepad2,
    color: 'from-baby-blue to-soft-blue',
    description: 'Educational and fun toys',
  },
  {
    id: 3,
    name: 'Feeding Essentials',
    icon: Utensils,
    color: 'from-mint-green to-soft-mint',
    description: 'Safe feeding products',
  },
  {
    id: 4,
    name: 'Diapers & Wipes',
    icon: Droplets,
    color: 'from-soft-pink to-soft-blue',
    description: 'Premium care products',
  },
];

export default function Categories() {
  return (
    <section className="section-container bg-cream">
      <div className="text-center mb-16 animate-slide-up">
        <h2 className="text-4xl sm:text-5xl font-bold text-text-dark mb-4">
          Shop by <span className="gradient-text">Category</span>
        </h2>
        <p className="text-text-light text-lg max-w-2xl mx-auto">
          Explore our carefully curated collection of premium baby products
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <div
              key={category.id}
              className="card-hover group cursor-pointer"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className={`bg-gradient-to-br ${category.color} rounded-3xl p-8 h-full flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-soft-md`}>
                <div className="mb-4 p-4 bg-white/50 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <Icon size={40} className="text-text-dark" />
                </div>
                <h3 className="text-xl font-bold text-text-dark mb-2">{category.name}</h3>
                <p className="text-sm text-text-light">{category.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
