import { motion } from 'framer-motion';

const Reservation = () => {
    return (
        <section id="reservation" className="relative py-16 md:py-24 mx-4 my-10 md:my-20 rounded-3xl overflow-hidden max-w-7xl md:mx-auto">
            {/* Background */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?auto=format&fit=crop&q=80&w=2000"
                    alt="Restaurant Interior"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-brand-black/70 backdrop-blur-sm" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-brand-red font-bold tracking-widest uppercase text-sm mb-4 block">Book a Table</span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">Reservation</h2>
                    <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
                        Secure your spot at Ladelicious Foods. Whether it's a romantic dinner or a family gathering,
                        we promise an unforgettable experience.
                    </p>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-white/10 backdrop-blur-md p-6 md:p-12 rounded-3xl border border-white/20 shadow-2xl"
                >
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="text-left">
                            <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                            <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-brand-red transition-colors" />
                        </div>
                        <div className="text-left">
                            <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                            <input type="tel" placeholder="+234..." className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-brand-red transition-colors" />
                        </div>
                        <div className="text-left">
                            <label className="block text-sm font-medium text-gray-300 mb-2">Date</label>
                            <input type="date" className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-brand-red transition-colors [color-scheme:dark]" />
                        </div>
                        <div className="text-left">
                            <label className="block text-sm font-medium text-gray-300 mb-2">Guests</label>
                            <select className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-red transition-colors [&>option]:text-brand-black">
                                <option>2 People</option>
                                <option>3 People</option>
                                <option>4 People</option>
                                <option>5+ People</option>
                            </select>
                        </div>
                    </div>

                    <button className="w-full bg-brand-red text-white font-bold py-4 rounded-xl hover:bg-red-700 transition-colors shadow-lg shadow-brand-red/30">
                        Confirm Reservation
                    </button>
                </motion.form>
            </div>
        </section>
    );
};

export default Reservation;
