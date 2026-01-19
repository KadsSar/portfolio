import React from 'react';
import { X, Linkedin, Github, Mail, ChevronDown } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

const ProfileModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] bg-[#141414] overflow-y-auto animate-fade-in">
            {/* Close Button - Fixed to viewport */}
            <button
                onClick={onClose}
                className="fixed top-6 right-6 z-50 p-2 rounded-full bg-black/40 hover:bg-white/20 transition text-white border border-white/10 backdrop-blur-md"
            >
                <X className="w-8 h-8" />
            </button>

            <div className="min-h-screen w-full flex flex-col md:flex-row">

                {/* Left Side: Image (Top on mobile, Left on desktop) */}
                <div className="relative w-full md:w-1/2 h-[50vh] md:h-auto md:min-h-screen md:fixed md:top-0 md:left-0 md:bottom-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent z-10 md:hidden" /> {/* Mobile bottom fade */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#141414] z-10 hidden md:block" /> {/* Desktop right fade */}

                    <img
                        src={profileImg}
                        alt="Sarisha Kadakia"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right Side: Spacer for desktop to push content right */}
                <div className="hidden md:block md:w-1/2"></div>

                {/* Right Side: Content (Bottom on mobile, Right on desktop) */}
                <div className="relative w-full md:w-1/2 p-6 md:p-20 flex flex-col justify-center min-h-[50vh] md:min-h-screen bg-[#141414]">

                    <div className="max-w-xl mx-auto md:mx-0 animate-slide-up space-y-8">
                        <div>
                            <h3 className="text-red-500 font-bold tracking-widest text-sm mb-3 uppercase">About the User</h3>
                            <h2 className="text-5xl md:text-7xl font-['Bebas_Neue'] tracking-wide text-white mb-4 leading-none">Sarisha<br />Kadakia</h2>
                            <div className="h-1 w-20 bg-red-600 mb-6"></div>
                            <p className="text-gray-400 font-medium tracking-wide text-sm md:text-base uppercase">Computer Science Student • Creative Technologist</p>
                        </div>

                        <div className="space-y-6 text-gray-300 font-light leading-relaxed text-base md:text-lg">
                            <p>
                                <span className="text-white font-medium">About the Author,</span> Sarisha Kadakia is a Computer Science student at Brock University who treats the IDE like a canvas and code like a medium. She believes that a robust algorithm requires the same intentionality as a blank sketchbook.
                            </p>
                            <p>
                                When she isn’t wrestling with the logic of MIPS Assembly or configuring Cloud infrastructure, you can find her painting, designing, and immersing herself in creative side projects that keep her right brain just as active as her left.
                            </p>
                            <p>
                                She operates on the belief that the best software doesn't just function, it feels designed. Now, she is looking to bring this unique fusion of technical grit and artistic vision to a forward-thinking team, helping to build products that are as intuitive as they are powerful.
                            </p>
                        </div>

                        {/* Interactive Buttons */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
                            <a
                                href="https://www.linkedin.com/in/sarisha-kadakia"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center gap-3 px-6 py-4 bg-[#0077b5] text-white rounded transition-all hover:bg-[#006097]"
                            >
                                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                <span className="font-semibold">Connect on LinkedIn</span>
                            </a>
                            <a
                                href="https://github.com/KadsSar"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center gap-3 px-6 py-4 bg-[#24292e] text-white rounded transition-all hover:bg-[#1b1f23]"
                            >
                                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                <span className="font-semibold">View GitHub</span>
                            </a>
                            <a
                                href="mailto:tn24yv@brocku.ca"
                                className="group sm:col-span-2 flex items-center justify-center gap-3 px-6 py-4 bg-transparent border border-red-600 text-red-500 rounded transition-all hover:bg-red-600 hover:text-white"
                            >
                                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                <span className="font-semibold">Send Email</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileModal;
