import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const FoodCard = ({ item, onAddToCart }) => {
    return (
        <motion.div
            className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <div className="aspect-[4/3] overflow-hidden">
                <motion.img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                />
            </div>

            <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-display font-medium text-xl text-brand-black">{item.name}</h3>
                    <span className="font-sans font-semibold text-brand-red">₦{item.price.toLocaleString()}</span>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">
                    {item.description}
                </p>

                <button
                    onClick={() => onAddToCart(item)}
                    className="w-full bg-gray-50 text-brand-black font-medium py-3 rounded-xl flex items-center justify-center gap-2 group-hover:bg-brand-black group-hover:text-white transition-colors duration-300"
                >
                    <Plus size={18} />
                    <span>Add to Cart</span>
                </button>
            </div>
        </motion.div>
    );
};

export default FoodCard;
