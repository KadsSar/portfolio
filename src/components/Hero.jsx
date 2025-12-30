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
                <h1 className="text-6xl md:text-9xl font-bold tracking-wide drop-shadow-2xl animate-fade-in-up font-['Bebas_Neue'] text-[#E50914]">
                    {userData.name}
                </h1>

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
