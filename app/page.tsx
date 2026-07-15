import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import FeaturedProducts from '@/components/FeaturedProducts';
import WhyChoose from '@/components/WhyChoose';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-cream">
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <WhyChoose />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}
