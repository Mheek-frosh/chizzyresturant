import { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

const Navbar = ({ cartCount, toggleCart }) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled || mobileMenuOpen ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <h1 className={`font-display text-2xl font-bold ${scrolled || mobileMenuOpen ? 'text-brand-black' : 'text-brand-black'
                            }`}>
                            Chizzy<span className="text-brand-red">.</span>
                        </h1>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {['Home', 'Menu', 'About', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-brand-black hover:text-brand-red font-medium transition-colors"
                            >
                                {item}
                            </a>
                        ))}

                        {/* Cart Icon */}
                        <button
                            onClick={toggleCart}
                            className="relative p-2 text-brand-black hover:text-brand-red transition-colors"
                        >
                            <ShoppingBag size={24} />
                            {cartCount > 0 && (
                                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-brand-red rounded-full">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-brand-black p-2"
                        >
                            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-md absolute w-full transition-all">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
                        {['Home', 'Menu', 'About', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="block px-3 py-2 text-base font-medium text-brand-black hover:text-brand-red hover:bg-brand-gray/50 rounded-md"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item}
                            </a>
                        ))}
                        <button
                            onClick={() => {
                                toggleCart();
                                setMobileMenuOpen(false);
                            }}
                            className="w-full mt-4 flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brand-red hover:bg-red-700"
                        >
                            <ShoppingBag className="mr-2" size={20} />
                            View Cart ({cartCount})
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
