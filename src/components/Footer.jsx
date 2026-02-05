import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Send } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-brand-black text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">

                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="font-display text-2xl font-bold mb-4">Chizzy<span className="text-brand-red">.</span></h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Experience the authentic taste of African and Continental dishes prepared with love and passion.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-brand-red transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-brand-red transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-brand-red transition-colors"><Instagram size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                            <li><a href="#menu" className="hover:text-white transition-colors">Our Menu</a></li>
                            <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#reservation" className="hover:text-white transition-colors">Reservation</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Contact Us</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-brand-red mt-0.5" />
                                <span>123 Food Street, Lagos, Nigeria</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-brand-red" />
                                <span>+234 123 456 7890</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-brand-red" />
                                <span>hello@chizzy.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Newsletter</h4>
                        <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for latest updates and offers.</p>
                        <form className="relative">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full bg-white/10 border border-white/10 rounded-lg py-3 px-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-red transition-colors"
                            />
                            <button type="button" className="absolute right-2 top-1/2 transform -translate-y-1/2 text-brand-red hover:text-white transition-colors p-1">
                                <Send size={18} />
                            </button>
                        </form>
                    </div>

                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-xs">
                        &copy; {new Date().getFullYear()} Chizzy Restaurant. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-gray-500 text-xs">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
