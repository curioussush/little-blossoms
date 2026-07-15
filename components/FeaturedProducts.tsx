import { ShoppingCart, Star } from 'lucide-react';

const products = [
  { id: 1, name: 'Organic Cotton Onesie', price: '$24.99', rating: 4.9, reviews: 128 },
  { id: 2, name: 'Soft Plush Teddy Bear', price: '$32.99', rating: 5.0, reviews: 95 },
  { id: 3, name: 'Silicone Feeding Set', price: '$18.99', rating: 4.8, reviews: 156 },
  { id: 4, name: 'Premium Diaper Bag', price: '$45.99', rating: 4.9, reviews: 203 },
  { id: 5, name: 'Baby Sleep Gown', price: '$28.99', rating: 5.0, reviews: 87 },
  { id: 6, name: 'Eco-Friendly Toys Bundle', price: '$52.99', rating: 4.8, reviews: 142 },
  { id: 7, name: 'Gentle Wipes Pack', price: '$14.99', rating: 4.9, reviews: 319 },
  { id: 8, name: 'Baby Care Essentials Kit', price: '$67.99', rating: 5.0, reviews: 178 },
];

export default function FeaturedProducts() {
  return (
    <section className="section-container bg-gradient-to-b from-cream to-baby-blue/20">
      <div className="text-center mb-16 animate-slide-up">
        <h2 className="text-4xl sm:text-5xl font-bold text-text-dark mb-4">
          Featured <span className="gradient-text">Products</span>
        </h2>
        <p className="text-text-light text-lg max-w-2xl mx-auto">
          Discover our bestselling premium baby essentials loved by thousands of parents
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="card-hover bg-white rounded-2xl overflow-hidden shadow-soft"
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            {/* Product Image */}
            <div className="h-48 bg-gradient-to-br from-blush-pink/30 to-baby-blue/30 flex items-center justify-center hover:from-blush-pink/50 hover:to-baby-blue/50 transition-colors">
              <span className="text-text-light text-center">
                <p className="text-sm font-medium">Product Image</p>
              </span>
            </div>

            {/* Product Details */}
            <div className="p-6">
              <h3 className="font-bold text-lg text-text-dark mb-3 line-clamp-2 hover:text-soft-pink transition-colors">
                {product.name}
              </h3>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-sm text-text-light">({product.reviews})</span>
              </div>

              {/* Price */}
              <p className="text-2xl font-bold gradient-text mb-4">{product.price}</p>

              {/* Add to Cart Button */}
              <button className="w-full bg-gradient-to-r from-soft-pink to-soft-blue text-white font-semibold py-3 rounded-xl hover:shadow-soft-md transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
                <ShoppingCart size={18} />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
