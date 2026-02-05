import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const slides = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&q=80&w=2070",
        title: "Authentic Nigerian Flavors",
        subtitle: "Experience the taste of home with our special Jollof & Pounded Yam."
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&q=80&w=2070",
        title: "Juicy Burgers & Shawarma",
        subtitle: "Craving something fast? Grab our signature burgers and spicy shawarma."
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1511690656952-34342d57a0f0?auto=format&fit=crop&q=80&w=2070",
        title: "Family Feasts & Fun",
        subtitle: "Bring everyone together with our family-sized platters."
    }
];

const Hero = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="home" className="relative h-screen w-full overflow-hidden">
            <AnimatePresence mode='wait'>
                <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                >
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${slides[current].image})` }}
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
                </motion.div>
            </AnimatePresence>

            {/* Content */}
            <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
                <motion.div
                    key={current + "text"}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-2xl"
                >
                    <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        {slides[current].title}
                    </h1>
                    <p className="text-xl text-gray-200 mb-8 font-light">
                        {slides[current].subtitle}
                    </p>
                    <a
                        href="#menu"
                        className="inline-flex items-center px-8 py-4 bg-brand-red text-white font-bold rounded-full hover:bg-white hover:text-brand-red transition-all transform hover:scale-105 shadow-lg group"
                    >
                        Order Now
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>

                {/* Dots */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`w-3 h-3 rounded-full transition-all ${index === current ? 'bg-brand-red w-8' : 'bg-white/50 hover:bg-white'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
