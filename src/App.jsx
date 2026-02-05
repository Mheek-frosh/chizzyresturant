import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import { categories } from './data/menu';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const addToCart = (item) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true);
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
    }).filter(item => item.quantity > 0)); // Extra safety, though disabled button handles logic
  };

  return (
    <div className="bg-brand-gray min-h-screen">
      <Navbar
        cartCount={cartCount}
        toggleCart={() => setIsCartOpen(!isCartOpen)}
      />

      <Hero />

      <main id="menu" className="pt-8 pb-16 space-y-8 bg-brand-gray">
        {categories.map((category) => (
          <MenuSection
            key={category.id}
            title={category.title}
            items={category.items}
            onAddToCart={addToCart}
          />
        ))}
      </main>

      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold text-brand-black mb-6">Our Story</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            Chizzy Restaurant was born from a passion for authentic flavors and community.
            Whether you are craving the comfort of home-cooked Nigerian dishes or the excitement
            of international cuisine, we bring the best of both worlds to your table.
            Fresh ingredients, premium quality, and love in every bite.
          </p>
        </div>
      </section>

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
