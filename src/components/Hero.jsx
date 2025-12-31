import React from 'react';
import { Play, Info } from 'lucide-react';
import { userData } from '../data';

const Hero = () => {
    return (
        <div className="relative h-[85vh] w-full text-white">
            {/* Background Image */}
            <div className="absolute top-0 left-0 w-full h-full">
                <img
                    src="/hero-bg.png"
                    alt="Hero"
                    className="w-full h-full object-cover"
                />
                {/* Gradient Overlay - Top to Bottom & Left to Right */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center h-full px-4 md:px-12 w-full md:w-2/3 lg:w-1/2 space-y-6 pt-20">
                <h1 className="text-5xl md:text-8xl font-bold tracking-widest drop-shadow-[0_5px_5px_rgba(0,0,0,1)] animate-fade-in-up font-['Boycott'] text-white uppercase">
                    {userData.name}
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
                        Resume
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
