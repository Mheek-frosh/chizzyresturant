import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';

const WhatsAppModal = ({ isOpen, onClose, cartItems }) => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        note: ''
    });

    const [specialRequest, setSpecialRequest] = useState({
        item: '',
        quantity: 1
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSpecialRequestChange = (field, value) => {
        setSpecialRequest(prev => ({ ...prev, [field]: value }));
    };

    const handleSend = (e) => {
        e.preventDefault();

        const phoneNumber = "2347054885172";
        let message = `*🌟 New VIP Order Request from ${formData.name}* 🌟%0A%0A`;

        // Cart Items
        if (cartItems.length > 0) {
            message += "*📝 Order Details:*%0A";
            cartItems.forEach(item => {
                message += `• ${item.name} (x${item.quantity}) - ₦${(item.price * item.quantity).toLocaleString()}%0A`;
            });
            const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
            message += `%0A*💰 Total Cart Value: ₦${total.toLocaleString()}*%0A%0A`;
        }

        // Special Request
        if (specialRequest.item.trim()) {
            message += `*✨ Special Request / Custom Order:*%0A`;
            message += `• ${specialRequest.item} (x${specialRequest.quantity})%0A%0A`;
        }

        if (cartItems.length === 0 && !specialRequest.item.trim()) {
            message += "I have an enquiry regarding your menu.%0A%0A";
        }

        if (formData.address) message += `*📍 Delivery Address:* ${formData.address}%0A`;
        if (formData.note) message += `*💬 Note:* ${formData.note}%0A`;

        message += "%0A_Sent via Chizzy Resturant Premium Concierge_";

        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-md"
                    />

                    {/* Premium Drawer */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                        className="fixed top-0 right-0 z-[61] h-full w-full max-w-md bg-white shadow-2xl flex flex-col font-sans"
                    >
                        {/* Premium Header */}
                        <div className="bg-gradient-to-r from-brand-red to-[#b90422] p-6 text-white shadow-lg relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>

                            <div className="flex items-center justify-between relative z-10">
                                <div className="flex items-center gap-4">
                                    <div className="relative">
                                        <div className="w-12 h-12 rounded-full border-2 border-white/80 p-0.5">
                                            <img
                                                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=150"
                                                alt="Concierge"
                                                className="w-full h-full rounded-full object-cover"
                                            />
                                        </div>
                                        <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-400 border-2 border-brand-red rounded-full animate-pulse"></div>
                                    </div>
                                    <div>
                                        <h3 className="font-display font-bold text-xl leading-none mb-1">Chizzy Concierge</h3>
                                        <p className="text-xs text-red-100 font-light tracking-wide">Premium Order Support</p>
                                    </div>
                                </div>
                                <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-full transition-colors">
                                    <X size={24} />
                                </button>
                            </div>
                        </div>

                        {/* Scrollable Body */}
                        <div className="flex-1 overflow-y-auto bg-gray-50 p-6 space-y-6">

                            {/* Greeting */}
                            <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-gray-100">
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    Hello! 👋 Welcome to Chizzy's premium ordering service.
                                    <br /><span className="mt-2 block text-gray-500 text-xs">Tell us what you're craving, and we'll handle the rest.</span>
                                </p>
                            </div>

                            {/* Custom Order Section (New) */}
                            <div className="bg-white p-5 rounded-2xl shadow-sm border border-red-50 relative overflow-hidden group hover:border-red-100 transition-colors">
                                <div className="absolute top-0 right-0 bg-red-50 px-3 py-1 rounded-bl-xl text-[10px] font-bold text-brand-red uppercase tracking-wider">
                                    Custom Request
                                </div>
                                <h4 className="font-display font-bold text-gray-800 mb-4 flex items-center gap-2">
                                    <span className="text-xl">🍽️</span> What are you craving?
                                </h4>

                                <div className="space-y-4">
                                    <div>
                                        <input
                                            type="text"
                                            value={specialRequest.item}
                                            onChange={(e) => handleSpecialRequestChange('item', e.target.value)}
                                            placeholder="e.g. Afang Soup with Pounded Yam..."
                                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/20 transition-all placeholder:text-gray-400"
                                        />
                                    </div>

                                    <div className="flex items-center justify-between bg-gray-50 rounded-xl p-2 border border-gray-200">
                                        <span className="text-xs font-bold text-gray-500 ml-2 uppercase">Quantity</span>
                                        <div className="flex items-center bg-white rounded-lg shadow-sm border border-gray-100">
                                            <button
                                                type="button"
                                                onClick={() => handleSpecialRequestChange('quantity', Math.max(1, specialRequest.quantity - 1))}
                                                className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-brand-red transition-colors"
                                            >
                                                -
                                            </button>
                                            <span className="w-8 text-center text-sm font-bold text-gray-800">{specialRequest.quantity}</span>
                                            <button
                                                type="button"
                                                onClick={() => handleSpecialRequestChange('quantity', specialRequest.quantity + 1)}
                                                className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-brand-red transition-colors"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Cart Summary */}
                            {cartItems.length > 0 && (
                                <div className="border-t border-dashed border-gray-200 pt-4">
                                    <h4 className="font-bold text-sm text-gray-800 mb-3 flex items-center justify-between">
                                        <span>Your Cart</span>
                                        <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-md text-xs">{cartItems.length} items</span>
                                    </h4>
                                    <div className="space-y-2">
                                        {cartItems.map(item => (
                                            <div key={item.id} className="flex justify-between text-sm py-1">
                                                <span className="text-gray-600">{item.name} <span className="text-gray-400 text-xs">x{item.quantity}</span></span>
                                                <span className="font-medium text-gray-900">₦{(item.price * item.quantity).toLocaleString()}</span>
                                            </div>
                                        ))}
                                        <div className="flex justify-between pt-2 mt-2 border-t border-gray-100 font-bold text-brand-black">
                                            <span>Subtotal</span>
                                            <span>₦{cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0).toLocaleString()}</span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Details Form */}
                            <form onSubmit={handleSend} className="space-y-4 pt-2">
                                <h4 className="font-display font-bold text-gray-800 text-sm uppercase tracking-wide">Delivery Details</h4>

                                <div className="grid grid-cols-1 gap-4">
                                    <input
                                        required
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/20 transition-all"
                                    />

                                    <div className="relative">
                                        <textarea
                                            required
                                            name="address"
                                            value={formData.address}
                                            onChange={handleChange}
                                            placeholder="Delivery Address / Location"
                                            rows="3"
                                            className="w-full bg-yellow-50/50 border border-yellow-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/30 transition-all resize-none"
                                        />
                                        <span className="absolute bottom-3 right-3 text-[10px] text-yellow-600 bg-yellow-100 px-2 py-0.5 rounded-full font-bold">REQUIRED</span>
                                    </div>

                                    <input
                                        name="note"
                                        value={formData.note}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder="Add a note (e.g. Call when close)..."
                                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/20 transition-all"
                                    />
                                </div>
                            </form>
                        </div>

                        {/* Action Bar */}
                        <div className="p-5 bg-white border-t border-gray-100 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] z-20">
                            <button
                                onClick={handleSend}
                                className="w-full bg-gradient-to-r from-brand-red to-[#b90422] text-white font-bold py-4 rounded-xl shadow-lg shadow-brand-red/30 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group"
                            >
                                <span className="tracking-wide">Confirm Order via WhatsApp</span>
                                <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <p className="text-center text-[10px] text-gray-400 mt-3 flex items-center justify-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                Secure WhatsApp Encryption
                            </p>
                        </div>

                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default WhatsAppModal;
