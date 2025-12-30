import React, { useState, useEffect } from 'react';
import { Bell, Search, User } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-netflix-black bg-opacity-95' : 'bg-gradient-to-b from-black/80 to-transparent'}`}>
            <div className="flex items-center justify-between px-4 md:px-12 py-4">
                {/* Logo */}
                <div className="flex items-center space-x-8">
                    <h1 className="text-netflix-red text-2xl md:text-4xl font-bold tracking-tighter cursor-pointer">PORTFOLIO</h1>

                    <ul className="hidden md:flex space-x-6 text-sm font-light text-gray-300">
                        <li className="hover:text-white cursor-pointer transition">Home</li>
                        <li className="hover:text-white cursor-pointer transition">Projects</li>
                        <li className="hover:text-white cursor-pointer transition">Skills</li>
                        <li className="hover:text-white cursor-pointer transition">Experience</li>
                    </ul>
                </div>

                {/* Right Icons */}
                <div className="flex items-center space-x-6 text-white">
                    <Search className="w-5 h-5 cursor-pointer hover:text-gray-300 transition" />
                    <Bell className="w-5 h-5 cursor-pointer hover:text-gray-300 transition" />
                    <div className="flex items-center space-x-2 cursor-pointer group">
                        <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                            <User size={20} />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
