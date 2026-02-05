import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Promotions from './components/Promotions';
import Reservation from './components/Reservation';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import { categories } from './data/menu';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const addToCart = (item) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        setIsCartOpen(true); // Open upon adding
        return prev.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      setIsCartOpen(true);
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, delta) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(1, item.quantity + delta) };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  return (
    <div className="font-sans antialiased bg-gray-50 text-brand-black">
      <ScrollToTop />
      <WhatsAppButton cartItems={cartItems} />

      <Navbar
        cartCount={cartCount}
        toggleCart={() => setIsCartOpen(!isCartOpen)}
      />

      <Hero />

      <About />

      <Promotions />

      <main id="menu" className="py-20 space-y-24 bg-brand-gray relative">
        <div className="max-w-7xl mx-auto px-4 text-center mb-12">
          <h2 className="font-display text-4xl font-bold text-brand-black mb-4">Our Menu</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Explore a symphony of flavors, carefully curated to delight your senses.</p>
        </div>

        {categories.map((category) => (
          <MenuSection
            key={category.id}
            title={category.title}
            items={category.items}
            onAddToCart={addToCart}
          />
        ))}
      </main>

      <Testimonials />

      <Reservation />

      <div id="contact">
        <Footer />
      </div>

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
      />
    </div>
  );
}

export default App;
