import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import WhatsAppModal from './WhatsAppModal';

const WhatsAppButton = ({ cartItems = [] }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Friendly avatar image (simulated with a nice chef/person image)
    const avatarImage = "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=200";

    return (
        <>
            <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-2 group">

                {/* Animated Speech Bubble */}
                <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="bg-white px-4 py-2 rounded-2xl rounded-tr-sm shadow-lg border border-gray-100 mb-1 max-w-[150px] text-center hidden md:block" // Hidden on very small screens to avoid clutter
                >
                    <p className="text-xs font-bold text-gray-800">Order faster via WhatsApp! 👇</p>
                </motion.div>

                {/* Button Container */}
                <div className="relative">
                    {/* Animated Avatar Helper */}
                    <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="absolute -top-12 right-0 pointer-events-none"
                    >
                        <img
                            src={avatarImage}
                            alt="Support"
                            className="w-12 h-12 rounded-full border-2 border-white shadow-md object-cover"
                        />
                    </motion.div>

                    <motion.button
                        onClick={() => setIsModalOpen(true)}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-brand-red to-[#b90422] text-white p-4 rounded-full shadow-xl hover:shadow-brand-red/40 transition-all flex items-center justify-center relative ring-4 ring-white/30 backdrop-blur-sm"
                        aria-label="Chat on WhatsApp"
                    >
                        <MessageCircle size={28} fill="white" />

                        {/* Cart Badge */}
                        {cartItems.length > 0 && (
                            <span className="absolute -top-1 -left-1 bg-black text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                                {cartItems.length}
                            </span>
                        )}
                    </motion.button>
                </div>
            </div>

            <WhatsAppModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                cartItems={cartItems}
            />
        </>
    );
};

export default WhatsAppButton;
