import React from 'react';
import { Play, Info } from 'lucide-react';
import { userData } from '../data';

const Hero = () => {
    return (
        <div className="relative h-[85vh] w-full text-white">
            {/* Background Image */}
            <div
                className="absolute top-0 left-0 w-full h-full"
                style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
            >
                <img
                    src="/hero-bg.png"
                    alt="Hero Background"
                    className="w-full h-full object-cover"
                />

                {/* Realistic Lightning Container */}
                <div
                    className="absolute inset-0 pointer-events-none z-[1] mix-blend-plus-lighter"
                    style={{ maskImage: 'linear-gradient(to bottom, black 0%, black 40%, transparent 60%)', WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 40%, transparent 60%)' }}
                >
                    {/* Bolt 1: Large Branching Strike (Right Sky) - Ultra Shiny */}
                    <svg viewBox="0 0 200 200" className="absolute top-0 right-[5%] w-[600px] h-[600px] opacity-0 animate-flicker filter drop-shadow-[0_0_15px_rgba(200,240,255,1)]">
                        {/* Core White Plasma (Thinner) */}
                        <path d="M100 0 L95 20 L105 35 L85 60 L100 85 L90 110 L110 130"
                            fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                        {/* Outer Glow Path (Thinner) */}
                        <path d="M100 0 L95 20 L105 35 L85 60 L100 85 L90 110 L110 130"
                            fill="none" stroke="#bddeff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />

                        {/* Branches (Very Thin) */}
                        <path d="M100 85 L120 100 L135 95" fill="none" stroke="white" strokeWidth="0.5" opacity="0.8" />
                        <path d="M85 60 L60 75 L50 90" fill="none" stroke="white" strokeWidth="0.5" opacity="0.7" />
                    </svg>

                    {/* Bolt 2: Distant Sheet Lightning (Left Sky) */}
                    <svg viewBox="0 0 200 200" className="absolute top-[-50px] left-[5%] w-[500px] h-[500px] opacity-0 animate-flicker-2 filter drop-shadow-[0_0_20px_rgba(180,220,255,1)]">
                        <path d="M60 0 L50 25 L70 40 L55 70 L80 90"
                            fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>

                    {/* Bolt 3: Distant Background Strike (Far Right) - Faded Overlay */}
                    <svg viewBox="0 0 200 400" className="absolute top-[-50px] right-[-5%] w-[400px] h-[600px] opacity-0 animate-quick-strike filter drop-shadow-[0_0_15px_rgba(200,240,255,0.5)]" style={{ animationDelay: '1s' }}>
                        {/* Outer Glow Path (Faded) */}
                        <path d="M50 0 L40 50 L70 80 L30 150 L60 200 L40 300"
                            fill="none" stroke="#bddeff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.2" />

                        {/* Main Core Path (Faded White) */}
                        <path d="M50 0 L40 50 L70 80 L30 150 L60 200 L40 300"
                            fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />

                        {/* Branches - Very Faint */}
                        <path d="M40 50 L20 70" fill="none" stroke="white" strokeWidth="0.5" strokeLinecap="round" opacity="0.3" />
                        <path d="M70 80 L90 90 L95 110" fill="none" stroke="white" strokeWidth="0.5" strokeLinecap="round" opacity="0.3" />
                        <path d="M30 150 L10 170" fill="none" stroke="white" strokeWidth="0.5" strokeLinecap="round" opacity="0.3" />
                        <path d="M60 200 L80 220" fill="none" stroke="white" strokeWidth="0.5" strokeLinecap="round" opacity="0.3" />
                    </svg>


                </div>

                {/* Panoramic Sky Glow (Synchronized with flashes manually via timing or generic pulse) */}
                <div
                    className="absolute top-0 left-0 w-full h-[70%] bg-[#b0d0ff] pointer-events-none z-[1] opacity-0 animate-flicker mix-blend-soft-light"
                    style={{ maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)' }}
                ></div>

                {/* Gradient Overlay - Top to Bottom & Left to Right */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-[6]"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-transparent z-[6]"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center h-full px-4 md:px-12 w-full md:w-2/3 lg:w-1/2 space-y-6 pt-20">
                {/* Netflix-style 'Portfolio' Label */}
                <div className="flex items-center space-x-3 mb-[-5px] mt-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <svg width="15" height="27" viewBox="0 0 30 54" className="drop-shadow-md">
                        {/* Left Leg (Darker) */}
                        <path d="M0 0 H10 V54 H0 Z" fill="#B20710" />
                        {/* Right Leg (Darker) */}
                        <path d="M20 0 H30 V54 H20 Z" fill="#B20710" />
                        {/* Diagonal Ribbon (Brighter) */}
                        <path d="M0 0 H10 L30 54 H20 Z" fill="#E50914" />
                    </svg>
                    <span className="text-gray-200 text-sm md:text-base font-medium tracking-[0.25em] uppercase font-['Bebas_Neue'] mt-3">
                        Portfolio
                    </span>
                </div>
                <h1 className="text-5xl md:text-8xl tracking-widest drop-shadow-[0_5px_5px_rgba(0,0,0,1)] animate-fade-in-up font-['Rubik_Distressed'] text-white uppercase leading-[0.8]">
                    {userData.name.split(" ").map((word, i) => (
                        <span key={i} className="block">{word}</span>
                    ))}
                </h1>

                {/* Metadata Row */}
                <div className="flex items-center space-x-4 text-gray-300 text-sm md:text-lg font-medium drop-shadow-md">
                    <span className="text-[#46d369]">98% Match</span>
                    <span>Resume</span>
                    <span className="text-gray-500">•</span>
                    <span>Contact Information</span>
                    <span className="border border-gray-500 px-2 text-xs rounded text-gray-400">HD</span>
                </div>

                <p className="text-sm md:text-base font-normal drop-shadow-md text-gray-300 max-w-lg line-clamp-3">
                    {userData.logline}
                </p>

                <div className="flex space-x-4">
                    <button className="flex items-center px-6 py-2 bg-white text-black font-bold rounded hover:bg-opacity-80 transition duration-300">
                        <Play className="w-5 h-5 mr-2 fill-black" />
                        Watch Now
                    </button>

                    <button className="flex items-center px-6 py-2 bg-[rgba(109,109,110,0.7)] text-white font-bold rounded hover:bg-[rgba(109,109,110,0.4)] transition duration-300 backdrop-blur-sm">
                        <Info className="w-5 h-5 mr-2" />
                        More Info
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
