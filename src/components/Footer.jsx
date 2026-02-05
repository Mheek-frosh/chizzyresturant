import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-brand-dark text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <h1 className="font-display text-3xl font-bold mb-4">
                            Chizzy<span className="text-brand-red">.</span>
                        </h1>
                        <p className="text-gray-400 text-sm">
                            Authentic African & International cuisine delivered to your doorstep. Taste the difference.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-brand-red transition-colors">Home</a></li>
                            <li><a href="#menu" className="hover:text-brand-red transition-colors">Menu</a></li>
                            <li><a href="#about" className="hover:text-brand-red transition-colors">About Us</a></li>
                            <li><a href="#contact" className="hover:text-brand-red transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Contact</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>123 Foodie Lane, Lagos</li>
                            <li>+234 800 123 4567</li>
                            <li>hello@chizzy.com</li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-brand-red transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-brand-red transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-brand-red transition-colors">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Chizzy Restaurant. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
