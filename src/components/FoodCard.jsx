import { Plus } from 'lucide-react';
import { motion } from 'framer-motion';

const FoodCard = ({ item, onAddToCart }) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-100 group"
        >
            <div className="relative h-48 overflow-hidden">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
            </div>

            <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-display font-bold text-lg text-brand-black">{item.name}</h3>
                    <span className="bg-brand-gray text-brand-black px-2 py-1 rounded-md text-sm font-bold">
                        ₦{item.price.toLocaleString()}
                    </span>
                </div>

                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{item.description}</p>

                <button
                    onClick={() => onAddToCart(item)}
                    className="w-full flex items-center justify-center p-3 rounded-xl bg-brand-black text-white font-bold hover:bg-brand-red transition-colors group-active:scale-95"
                >
                    <Plus size={18} className="mr-2" />
                    Add to Cart
                </button>
            </div>
        </motion.div>
    );
};

export default FoodCard;
