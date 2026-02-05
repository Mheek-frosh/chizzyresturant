import { motion } from 'framer-motion';

const Promotions = () => {
    return (
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">

                {/* Promo 1: Happy Hour */}
                <motion.div
                    whileHover={{ y: -5 }}
                    className="relative h-64 rounded-3xl overflow-hidden shadow-lg group"
                >
                    <img
                        src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1000"
                        alt="Cocktail"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-red/90 to-transparent flex items-center p-8">
                        <div className="text-white max-w-xs">
                            <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">Friday Special</span>
                            <h3 className="font-display text-3xl font-bold mb-2">Happy Hour</h3>
                            <p className="mb-6 opacity-90">Get 50% off all cocktails every Friday from 6 PM - 9 PM.</p>
                        </div>
                    </div>
                </motion.div>

                {/* Promo 2: Delivery */}
                <motion.div
                    whileHover={{ y: -5 }}
                    className="relative h-64 rounded-3xl overflow-hidden shadow-lg group"
                >
                    <img
                        src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1000"
                        alt="Delivery"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-black/80 to-transparent flex items-center justify-end p-8 text-right">
                        <div className="text-white max-w-xs">
                            <span className="bg-brand-red px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">Limited Time</span>
                            <h3 className="font-display text-3xl font-bold mb-2">Free Delivery</h3>
                            <p className="mb-6 opacity-90">Enjoy free delivery on all orders over ₦20,000 within the city.</p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Promotions;
