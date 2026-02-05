import { motion } from 'framer-motion';

const testimonials = [
    {
        id: 1,
        name: "Tunde Ednut",
        role: "Food Blogger",
        text: "The best Jollof Rice I've had in years. Highly recommended!",
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100"
    },
    {
        id: 2,
        name: "Sarah Jones",
        role: "Regular Customer",
        text: "Customer service is top-notch and the ambiance is lovely.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
    },
    {
        id: 3,
        name: "David O.",
        role: "Chef",
        text: "Authentic flavors that take you right back home. 10/10.",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100"
    },
    {
        id: 4,
        name: "Amara K.",
        role: "Foodie",
        text: "The cocktails are to die for! Perfect chill spot.",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100"
    }
];

const Testimonials = () => {
    return (
        <section className="py-20 bg-brand-gray overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
                <h2 className="font-display text-4xl font-bold text-brand-black mb-4">What People Say</h2>
                <p className="text-gray-600">Don't just take our word for it.</p>
            </div>

            <div className="flex w-full overflow-hidden select-none mask-gradient">
                <motion.div
                    className="flex gap-8 whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                >
                    {[...testimonials, ...testimonials].map((t, i) => (
                        <div key={i} className="min-w-[350px] bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4">
                            <p className="text-gray-600 italic whitespace-normal">"{t.text}"</p>
                            <div className="flex items-center gap-4 mt-auto">
                                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                                <div>
                                    <h4 className="font-bold font-display text-brand-black">{t.name}</h4>
                                    <span className="text-xs text-brand-red uppercase tracking-wider">{t.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
