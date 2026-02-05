import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=2000",
        subtitle: "Authentic African Cuisine",
        title: "Taste the Soul of Africa",
        description: "Experience the rich, smoky flavors of our signature Jollof Rice and traditional soups, prepared with love and heritage."
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=2000",
        subtitle: "Premium Continental Delight",
        title: "World-Class Flavors",
        description: "From gourmet burgers to creamy pastas, explore a menu crafted for the modern palate."
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2000",
        subtitle: "Exquisite Dining Experience",
        title: "Moments to Remember",
        description: "Great food, perfect ambiance, and unforgettable memories await you at Chizzy Restaurant."
    }
];

const Hero = () => {
    const [current, setCurrent] = useState(0);

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(prev => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrent(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    const prevSlide = () => setCurrent(prev => (prev === 0 ? slides.length - 1 : prev - 1));

    return (
        <section id="home" className="relative h-screen w-full overflow-hidden bg-brand-black text-white">

            <AnimatePresence mode='wait'>
                <motion.div
                    key={current}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 z-0"
                >
                    <img
                        src={slides[current].image}
                        alt={slides[current].title}
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
                </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 z-10 flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <motion.div
                        key={`text-${current}`}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-2xl"
                    >
                        <motion.span
                            className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-brand-red uppercase border border-brand-red/30 rounded-full bg-brand-red/10 backdrop-blur-sm"
                        >
                            {slides[current].subtitle}
                        </motion.span>

                        <h1 className="font-display text-4xl md:text-7xl font-bold leading-tight mb-6">
                            {slides[current].title}
                        </h1>

                        <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
                            {slides[current].description}
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#menu"
                                className="inline-flex items-center px-8 py-4 bg-brand-red text-white font-bold rounded-full shadow-lg hover:bg-red-700 transition transform hover:scale-105"
                            >
                                Order Now
                                <ArrowRight className="ml-2" size={20} />
                            </a>

                            <a
                                href="#about"
                                className="inline-flex items-center px-8 py-4 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 backdrop-blur-sm transition"
                            >
                                View Story
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Controls */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/10 transition-all hover:scale-110"
                aria-label="Previous slide"
            >
                <ChevronLeft size={32} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/10 transition-all hover:scale-110"
                aria-label="Next slide"
            >
                <ChevronRight size={32} />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={`transition-all duration-300 rounded-full ${current === idx ? 'bg-brand-red w-8 h-2' : 'bg-white/40 hover:bg-white w-2 h-2'}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;
