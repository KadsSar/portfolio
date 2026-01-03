import React, { useState, useEffect } from 'react';
import { Bell, Search, User, Menu, X, Github, Linkedin, Briefcase, Info, FileText, CircleUser } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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

    // Menu Options
    const menuItems = [
        { name: "About", icon: <Info size={20} />, link: "#" },
        { name: "My Projects", icon: <FileText size={20} />, link: "#" },
        { name: "Experience", icon: <Briefcase size={20} />, link: "#" },
        { name: "Resume", icon: <FileText size={20} />, link: "#" },
        { name: "LinkedIn", icon: <Linkedin size={20} />, link: "https://linkedin.com", external: true },
        { name: "Github", icon: <Github size={20} />, link: "https://github.com/KadsSar", external: true },
    ];

    return (
        <>
            {/* Sidebar Menu Overlay */}
            <div className={`fixed inset-0 z-[100] bg-black/50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={() => setIsMenuOpen(false)}>
                {/* Sidebar Slide-in */}
                <div
                    className={`fixed top-0 left-0 h-full w-[300px] bg-[#141414] border-r border-[#333] transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="p-6">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-red-600 rounded flex items-center justify-center font-bold text-white">SK</div>
                                <span className="text-white font-bold text-lg font-['Bebas_Neue'] tracking-wide">Sarisha Kadakia</span>
                            </div>
                            <button onClick={() => setIsMenuOpen(false)}>
                                <X className="w-6 h-6 text-gray-400 hover:text-white transition" />
                            </button>
                        </div>

                        {/* Menu Items */}
                        <div className="space-y-6">
                            {menuItems.map((item) => (
                                <div
                                    key={item.name}
                                    className="flex items-center space-x-4 text-gray-400 hover:text-white cursor-pointer transition group"
                                    onClick={() => {
                                        if (item.external) window.open(item.link, '_blank');
                                        setIsMenuOpen(false);
                                    }}
                                >
                                    <span className="group-hover:text-red-500 transition">{item.icon}</span>
                                    <span className="text-lg font-medium">{item.name}</span>
                                </div>
                            ))}
                        </div>

                        {/* Bottom Info */}
                        <div className="absolute bottom-8 left-6 right-6 pt-6 border-t border-[#333] text-xs text-gray-500 text-center">
                        </div>
                    </div>
                </div>
            </div>

            <nav className={`fixed top-0 w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-netflix-black bg-opacity-95' : 'bg-gradient-to-b from-black/80 to-transparent'}`}>
                <div className="flex items-center justify-between px-4 md:px-12 py-4">
                    {/* Left Section: Menu + Logo */}
                    <div className="flex items-center">
                        {/* Hamburger Icon */}
                        <button className="mr-6 text-white hover:text-gray-300 transition" onClick={() => setIsMenuOpen(true)}>
                            <Menu className="w-8 h-8" />
                        </button>

                        <h1 className="text-netflix-red text-2xl md:text-4xl font-bold tracking-tighter cursor-pointer font-['Bebas_Neue']">PORTFOLIO</h1>

                        <ul className="hidden lg:flex space-x-6 text-sm font-light text-gray-300 ml-8">
                            <li className="hover:text-white cursor-pointer transition">Home</li>
                            <li className="hover:text-white cursor-pointer transition">Bio</li>
                            <li className="hover:text-white cursor-pointer transition">Skills</li>
                            <li className="hover:text-white cursor-pointer transition">Experience</li>
                        </ul>
                    </div>

                    {/* Right Icons */}
                    <div className="flex items-center space-x-6 text-white">
                        <Search className="w-5 h-5 cursor-pointer hover:text-gray-300 transition" />
                        <Bell className="w-5 h-5 cursor-pointer hover:text-gray-300 transition" />
                        <div className="flex items-center space-x-2 cursor-pointer group">
                            <CircleUser className="w-9 h-9 text-white hover:text-gray-300 transition" strokeWidth={1.5} />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
