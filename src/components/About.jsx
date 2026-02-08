import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 bg-white relative overflow-hidden">
            {/* Background decorative blob */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-gray/50 skew-x-12 translate-x-1/2 -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-brand-red font-bold tracking-widest uppercase text-sm">Our Story</span>
                        <h2 className="font-display text-3xl md:text-5xl font-bold text-brand-black mt-3 mb-6 leading-tight">
                            Crafting Memories <br /> One Meal at a Time
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Founded in 2024, Ladelicious Foods was born from a simple desire: to create a space where
                            authentic Nigerian flavors meet modern culinary excellence. We believe that food is more than just sustenance—it's
                            an experience that brings people together.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            Whether you're here for our signature Smoky Jollof or exploring our Continental menu,
                            every dish is prepared with fresh ingredients, passion, and a touch of home.
                        </p>

                        <button className="bg-brand-black text-white px-8 py-3 rounded-full font-medium hover:bg-brand-red transition-colors duration-300">
                            Read More
                        </button>
                    </motion.div>

                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&q=80&w=1000"
                            alt="Chefs cooking"
                            className="rounded-3xl shadow-xl w-full h-[350px] md:h-[500px] object-cover"
                        />

                        <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-lg max-w-[200px] hidden md:block">
                            <span className="block text-4xl font-display font-bold text-brand-red mb-1">5k+</span>
                            <span className="text-gray-600 text-sm">Happy Customers Served Annually</span>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
