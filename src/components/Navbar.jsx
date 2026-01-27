import React, { useState, useEffect, useRef } from 'react';
import { Bell, Search, User, Menu, X, Github, Linkedin, Briefcase, Info, FileText, CircleUser, Play } from 'lucide-react';
import { projects, skills, experience, genres } from '../data';
import ProfileModal from './ProfileModal';

const Navbar = ({ onLeadershipClick, onSkillsClick, onProjectsClick, onExperienceClick, onSearchSelect }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isBioOpen, setIsBioOpen] = useState(false);
    const [isHomeOpen, setIsHomeOpen] = useState(false);
    const [isRinging, setIsRinging] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const homeRef = useRef(null);
    const bioRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        const handleClickOutside = (event) => {
            if (homeRef.current && !homeRef.current.contains(event.target)) {
                setIsHomeOpen(false);
            }
            if (bioRef.current && !bioRef.current.contains(event.target)) {
                setIsBioOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const menuItems = [
        { name: "About", icon: <Info size={20} />, link: "#", action: "profile" },
        { name: "My Projects", icon: <FileText size={20} />, link: "#", action: "projects" },
        { name: "Experience", icon: <Briefcase size={20} />, link: "#", action: "experience" },
        { name: "Resume", icon: <FileText size={20} />, link: "/assets/technical_resume.pdf", external: true },
        { name: "LinkedIn", icon: <Linkedin size={20} />, link: "https://www.linkedin.com/in/sarisha-kadakia", external: true },
        { name: "Github", icon: <Github size={20} />, link: "https://github.com/KadsSar", external: true },
    ];

    // Search Logic
    const allContent = [
        ...projects.map(p => ({ ...p, type: 'project' })),
        ...skills.map(s => ({ ...s, type: 'skill', title: s.name })), // Normalize 'name' to 'title'
        ...experience.map(e => ({ ...e, type: 'experience' })),
        ...genres.map(g => ({ ...g, type: 'genre' }))
    ];

    const customSearchItems = [
        { title: "GitHub Profile", desc: "View my code repositories", link: "https://github.com/KadsSar", external: true },
        { title: "LinkedIn Profile", desc: "Connect professionally", link: "https://www.linkedin.com/in/sarisha-kadakia", external: true }
    ];

    const searchResults = searchQuery
        ? [...allContent, ...customSearchItems].filter(item => {
            const query = searchQuery.toLowerCase();

            // Special Case: "skills" triggers all skills
            if ((query === 'skills' || query === 'skill') && item.type === 'skill') {
                return true;
            }

            return (
                (item.title && item.title.toLowerCase().includes(query)) ||
                (item.desc && item.desc.toLowerCase().includes(query)) ||
                (item.tags && item.tags.some(tag => tag.toLowerCase().includes(query)))
            );
        })
        : [];

    const handleSearchItemClick = (item) => {
        if (item.type === 'skill') return; // Skills are not clickable

        if (item.external) {
            window.open(item.link, '_blank');
        } else {
            onSearchSelect(item);
        }
        setIsSearchOpen(false);
        setSearchQuery('');
    };

    return (
        <>
            <ProfileModal isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />

            {/* Search Overlay */}
            {isSearchOpen && (
                <div className="fixed inset-0 z-[100] bg-black/90 flex flex-col items-center pt-20 animate-fade-in">
                    <button
                        className="absolute top-6 right-8 text-white hover:text-gray-300 transition"
                        onClick={() => setIsSearchOpen(false)}
                    >
                        <X className="w-8 h-8" />
                    </button>

                    <div className="w-full max-w-4xl px-4 animate-scale-up">
                        <div className="relative mb-12">
                            <Search className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Titles, people, genres"
                                className="w-full bg-transparent border-none text-white text-4xl pl-14 pr-12 placeholder-gray-500 focus:outline-none focus:ring-0"
                                autoFocus
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            {searchQuery && (
                                <button
                                    className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition"
                                    onClick={() => setSearchQuery('')}
                                >
                                    <X className="w-8 h-8" />
                                </button>
                            )}
                        </div>

                        {searchQuery ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[60vh] overflow-y-auto no-scrollbar">
                                {searchResults.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className={`flex items-center space-x-4 group p-3 rounded transition ${item.type === 'skill' ? 'cursor-default' : 'cursor-pointer hover:bg-[#333]'}`}
                                        onClick={() => handleSearchItemClick(item)}
                                    >
                                        <div className="w-16 h-10 overflow-hidden rounded bg-gray-800 flex-shrink-0">
                                            {(item.image || item.modalImage) ? (
                                                <img src={item.image || item.modalImage} alt={item.title} className="w-full h-full object-cover" />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-gray-500 text-xs">IMG</div>
                                            )}
                                        </div>
                                        <div>
                                            <h4 className="text-white text-lg font-bold">{item.title}</h4>
                                            <p className="text-gray-400 text-sm">{item.desc?.substring(0, 50)}...</p>
                                        </div>
                                    </div>
                                ))}
                                {searchResults.length === 0 && (
                                    <p className="text-gray-500 text-lg">No results found for "{searchQuery}"</p>
                                )}
                            </div>
                        ) : (
                            <>
                                <h3 className="text-gray-400 text-lg mb-4">Recent Searches</h3>
                                <div className="space-y-4">
                                    {["Nutribudget", "Contact me", "AR/VR projects"].map((search, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center space-x-4 group cursor-pointer hover:bg-[#333] p-3 rounded transition"
                                            onClick={() => setSearchQuery(search)}
                                        >
                                            <div className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center group-hover:border-white transition">
                                                <Play className="w-3 h-3 text-white fill-white" />
                                            </div>
                                            <span className="text-gray-400 text-lg font-bold group-hover:text-white transition">{search}</span>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}

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
                                        if (item.action === "projects" && onProjectsClick) {
                                            onProjectsClick();
                                        } else if (item.action === "experience" && onExperienceClick) {
                                            onExperienceClick();
                                        } else if (item.action === "profile") {
                                            setIsProfileOpen(true);
                                        } else if (item.external) {
                                            window.open(item.link, '_blank');
                                        }
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
                <div className="flex items-center justify-between px-4 md:px-8 py-4">
                    {/* Left Section: Menu + Logo */}
                    <div className="flex items-center">
                        {/* Hamburger Icon */}
                        <button className="mr-6 text-white hover:text-gray-300 transition" onClick={() => setIsMenuOpen(true)}>
                            <Menu className="w-8 h-8" />
                        </button>

                        <h1 className="text-netflix-red text-2xl md:text-4xl font-bold tracking-tighter cursor-pointer font-['Bebas_Neue']">PORTFOLIO</h1>

                        <ul className="hidden lg:flex space-x-6 text-sm font-light text-gray-300 ml-8">
                            <li className="relative" ref={homeRef}>
                                <span
                                    className={`hover:text-white cursor-pointer transition ${isHomeOpen ? 'text-white font-medium' : ''}`}
                                    onClick={() => {
                                        setIsHomeOpen(!isHomeOpen);
                                        if (!isHomeOpen) setIsBioOpen(false);
                                    }}
                                >
                                    Navigate
                                </span>
                                {isHomeOpen && (
                                    <div className="absolute top-12 left-0 z-[60] animate-fade-in-down">
                                        {/* Arrow */}
                                        <div className="absolute top-[-5px] left-4 w-3 h-3 bg-[#141414] border-t border-l border-[#333] transform rotate-45 z-20"></div>

                                        {/* Neon Container */}
                                        <div
                                            className="relative w-[500px] rounded-xl overflow-hidden group p-[1px]"
                                            onMouseMove={(e) => {
                                                const rect = e.currentTarget.getBoundingClientRect();
                                                const x = e.clientX - rect.left;
                                                const y = e.clientY - rect.top;
                                                e.currentTarget.style.setProperty('--x', `${x}px`);
                                                e.currentTarget.style.setProperty('--y', `${y}px`);
                                            }}
                                        >
                                            <div className="absolute inset-0 bg-[#333]" />
                                            <div
                                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-150 ease-out"
                                                style={{ background: `radial-gradient(600px circle at var(--x) var(--y), #E50914, transparent 40%)` }}
                                            />

                                            <div className="relative bg-[#0a0a0a] rounded-xl p-6 h-full">
                                                <div
                                                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none rounded-xl"
                                                    style={{ background: `radial-gradient(800px circle at var(--x) var(--y), #ffffff, transparent 40%)` }}
                                                />

                                                <h3 className="text-xl font-bold text-white mb-6 font-['Bebas_Neue'] tracking-wider border-b border-gray-800 pb-2">
                                                    NAVIGATE Through MY PORTFOLIO!
                                                </h3>

                                                <div className="space-y-4">
                                                    {[
                                                        { icon: <Play className="w-4 h-4 text-red-500" />, text: "The Latest releases row is my projects", highlight: "projects" },
                                                        { icon: <div className="text-green-500 font-bold text-xs">TOP</div>, text: "The Top trending row is my acquired skills and my knowledge", highlight: "skills" },
                                                        { icon: <div className="text-blue-500 font-bold text-xs">PICKS</div>, text: "Top pick ups for you row has my experience", highlight: "experience" },
                                                        { icon: <div className="w-2 h-2 rounded-full bg-yellow-500" />, text: "Select genre is my information and history", highlight: "info" },
                                                        { icon: <Menu className="w-4 h-4 text-purple-500" />, text: "Try clicking all the buttons in the pop ups, every button has unique information!", highlight: "buttons" },
                                                        { icon: <User className="w-4 h-4 text-orange-500" />, text: "Click on the profile option in the top right corner to know who I am", highlight: "profile" },
                                                        { icon: <Play className="w-4 h-4 fill-white text-white" />, text: "Try clicking on the 'watch now' button and I'll say hi!", highlight: "watch" },
                                                        { icon: <Play className="w-4 h-4 text-white fill-black bg-white rounded-sm" />, text: "click on 'visit' button in every project to see my work directly", highlight: "visit" },
                                                        { icon: <Search className="w-4 h-4 text-gray-400" />, text: "The search option will help you find everything you want", highlight: "search" }
                                                    ].map((item, idx) => (
                                                        <div key={idx} className="flex items-start space-x-3 group/item">
                                                            <div className="mt-1 flex-shrink-0">{item.icon}</div>
                                                            <p className="text-gray-400 text-sm group-hover/item:text-white transition-colors duration-200">
                                                                {item.text}
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </li>
                            <li className="relative" ref={bioRef}>
                                <span
                                    className={`hover:text-white cursor-pointer transition ${isBioOpen ? 'text-white font-medium' : ''}`}
                                    onClick={() => {
                                        setIsBioOpen(!isBioOpen);
                                        if (!isBioOpen) setIsHomeOpen(false);
                                    }}
                                >
                                    Bio
                                </span>
                                {isBioOpen && (
                                    <div className="absolute top-12 left-0 z-[60]">
                                        {/* Arrow (Static for stability) */}
                                        <div className="absolute top-[-5px] left-6 w-3 h-3 bg-[#141414] border-t border-l border-[#333] transform rotate-45 z-20"></div>

                                        {/* Neon Container */}
                                        <div
                                            className="relative w-96 rounded-xl overflow-hidden group p-[1px]"
                                            onMouseMove={(e) => {
                                                const rect = e.currentTarget.getBoundingClientRect();
                                                const x = e.clientX - rect.left;
                                                const y = e.clientY - rect.top;
                                                e.currentTarget.style.setProperty('--x', `${x}px`);
                                                e.currentTarget.style.setProperty('--y', `${y}px`);
                                            }}
                                        >
                                            {/* Base Border */}
                                            <div className="absolute inset-0 bg-[#333]" />

                                            {/* Neon Border Glow */}
                                            <div
                                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-150 ease-out"
                                                style={{
                                                    background: `radial-gradient(400px circle at var(--x) var(--y), #E50914, transparent 40%)`
                                                }}
                                            />

                                            {/* Content Box */}
                                            <div className="relative bg-[#0a0a0a] rounded-xl p-6 h-full">
                                                {/* Inner Background Spotlight */}
                                                <div
                                                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none rounded-xl"
                                                    style={{
                                                        background: `radial-gradient(600px circle at var(--x) var(--y), #E50914, transparent 40%)`
                                                    }}
                                                />

                                                <h4 className="text-white font-bold text-lg mb-2 relative z-10 flex items-center gap-2">
                                                    About Me <span className="text-xs uppercase px-2 py-0.5 border border-red-600/30 bg-red-600/10 text-red-500 rounded-full tracking-wider">DEV</span>
                                                </h4>
                                                <p className="text-gray-300 text-sm leading-relaxed relative z-10 font-light">
                                                    <span className="text-white font-medium">CS Student</span> obsessed with how things work, from the metal up. Skilled in <span className="text-red-400">MIPS Assembly</span>, Calculus, and <span className="text-red-400">OCI</span>. I love tackling complex problems, whether it's debugging memory-mapped I/O or architecting a cloud solution. Currently seeking opportunities to <span className="italic text-gray-200">build impactful software</span>.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </li>
                            <li className="hover:text-white cursor-pointer transition" onClick={onSkillsClick}>Skills</li>
                            <li className="hover:text-white cursor-pointer transition" onClick={onLeadershipClick}>Honours and Leadership</li>
                            <li className="hover:text-white cursor-pointer transition" onClick={() => window.open('/assets/technical_resume.pdf', '_blank')}>Resume</li>
                            <li className="hover:text-white cursor-pointer transition">LearnLab</li>
                        </ul>
                    </div>

                    {/* Right Icons */}
                    <div className="flex items-center space-x-6 text-white">
                        <button onClick={() => setIsSearchOpen(true)}>
                            <Search className="w-5 h-5 cursor-pointer hover:text-gray-300 transition" />
                        </button>
                        <Bell
                            className={`w-5 h-5 cursor-pointer transition duration-300 ${isRinging ? 'animate-ring text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.6)]' : 'text-white hover:text-gray-300'}`}
                            onClick={() => {
                                setIsRinging(true);
                                setTimeout(() => setIsRinging(false), 500);
                            }}
                        />
                        <div className="flex items-center space-x-2 cursor-pointer group" onClick={() => setIsProfileOpen(true)}>
                            <CircleUser className="w-9 h-9 text-white hover:text-gray-300 transition" strokeWidth={1.5} />
                        </div>
                    </div>
                </div>
            </nav >
        </>
    );
};

export default Navbar;
