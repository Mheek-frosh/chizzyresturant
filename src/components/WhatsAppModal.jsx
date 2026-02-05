import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';

const WhatsAppModal = ({ isOpen, onClose, cartItems }) => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        note: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSend = (e) => {
        e.preventDefault();

        const phoneNumber = "2347054885172";
        let message = `*New Order from ${formData.name}*%0A%0A`;

        if (cartItems.length === 0) {
            message += "I have an enquiry.";
        } else {
            message += "*Order Details:*%0A";
            cartItems.forEach(item => {
                message += `- ${item.name} (x${item.quantity}) - ₦${(item.price * item.quantity).toLocaleString()}%0A`;
            });

            const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
            message += `%0A*Total: ₦${total.toLocaleString()}*%0A`;
        }

        if (formData.address) message += `%0A*Delivery Address:* ${formData.address}%0A`;
        if (formData.note) message += `%0A*Note:* ${formData.note}%0A`;

        message += "%0A_Sent via Chizzy Website_";

        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
        onClose();
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                />

                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    className="relative bg-white rounded-3xl w-full max-w-md p-6 shadow-2xl overflow-hidden"
                >
                    <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
                        <X size={20} />
                    </button>

                    <div className="text-center mb-6">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Send size={32} className="text-[#25D366] ml-1" />
                        </div>
                        <h3 className="font-display text-2xl font-bold text-gray-900">Complete Your Order</h3>
                        <p className="text-sm text-gray-500">Send your order directly to us on WhatsApp.</p>
                    </div>

                    <form onSubmit={handleSend} className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Your Name</label>
                            <input
                                required
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                type="text"
                                placeholder="John Doe"
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#25D366] transition-colors"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Delivery Address</label>
                            <textarea
                                required
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                placeholder="Where should we deliver?"
                                rows="2"
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#25D366] transition-colors resize-none"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Additional Note (Optional)</label>
                            <input
                                name="note"
                                value={formData.note}
                                onChange={handleChange}
                                type="text"
                                placeholder="e.g., Extra spicy, No onions"
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#25D366] transition-colors"
                            />
                        </div>

                        {cartItems.length > 0 && (
                            <div className="bg-gray-50 p-4 rounded-xl">
                                <div className="flex justify-between items-center text-sm font-medium">
                                    <span className="text-gray-600">Items ({cartItems.length})</span>
                                    <span className="text-brand-black">₦{cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0).toLocaleString()}</span>
                                </div>
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-[#25D366] text-white font-bold py-4 rounded-xl shadow-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                        >
                            <span>Send via WhatsApp</span>
                            <Send size={18} />
                        </button>
                    </form>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default WhatsAppModal;
