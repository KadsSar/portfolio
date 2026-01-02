import React from 'react';
import { X, Play, Plus, ThumbsUp } from 'lucide-react';

const Modal = ({ item, onClose }) => {
    const [videoLoaded, setVideoLoaded] = React.useState(false);

    React.useEffect(() => {
        setVideoLoaded(false);
    }, [item]);

    if (!item) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in">
            <div className="relative w-full max-w-4xl bg-[#181818] rounded-md shadow-2xl overflow-hidden animate-scale-up">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-50 w-8 h-8 rounded-full bg-[#181818] flex items-center justify-center hover:bg-white/20 transition"
                >
                    <X className="w-5 h-5 text-white" />
                </button>

                {/* Font Imports */}
                <style>{`
                    @import url('https://fonts.cdnfonts.com/css/minecrafter');
                    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&display=swap');
                `}</style>

                {/* Hero Section of Modal */}
                <div className="relative h-[50vh] w-full bg-black overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent z-20 pointer-events-none" />
                    <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#181818] to-transparent z-20 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#181818] to-transparent z-20 pointer-events-none" />

                    {/* Base Image Layer (Always visible as placeholder) */}
                    {(item.modalImage || item.image) ? (
                        <img
                            src={item.modalImage || item.image}
                            alt={item.title}
                            className="absolute inset-0 w-full h-full object-cover z-0"
                        />
                    ) : (
                        <div className="absolute inset-0 w-full h-full bg-[#333] z-0" />
                    )}

                    {/* Video Layer (Fades in on top) */}
                    {item.youtubeId && (
                        <div className="absolute inset-0 w-full h-full z-10 overflow-hidden pointer-events-none">
                            <iframe
                                className={`absolute ${item.videoPosition || "w-[250%] h-[250%] -top-[15%] -left-[75%]"} object-cover pointer-events-none transition-opacity duration-1000 ease-in-out ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
                                src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${item.youtubeId}&showinfo=0&modestbranding=1&iv_load_policy=3&rel=0`}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                onLoad={() => {
                                    setTimeout(() => setVideoLoaded(true), 1200);
                                }}
                            ></iframe>
                        </div>
                    )}

                    <div className="absolute bottom-10 left-10 z-20 space-y-4">
                        <h2
                            className={`text-4xl font-bold ${(item.title === "Jurassic Park Interactive")
                                ? "text-[#d9901c] font-['Tribeca'] text-5xl font-normal tracking-widest drop-shadow-lg"
                                : (item.title.includes("LOGOS"))
                                    ? "text-red-600 font-['Minecrafter'] text-5xl font-normal tracking-wide drop-shadow-md"
                                    : (item.title === "Museum AR/VR")
                                        ? "text-cyan-400 font-['Cinzel'] text-5xl font-bold tracking-widest drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                                        : "text-white"
                                }`}
                            style={{
                                fontFamily: (item.title === "Jurassic Park Interactive")
                                    ? "'Tribeca', sans-serif"
                                    : (item.title.includes("LOGOS"))
                                        ? "'Minecrafter', sans-serif"
                                        : (item.title === "Museum AR/VR")
                                            ? "'Cinzel', serif"
                                            : "inherit"
                            }}
                        >
                            {item.title || item.name}
                        </h2>
                        <div className="flex space-x-3">
                            <button className="flex items-center px-6 py-1.5 bg-white text-black font-bold rounded hover:bg-opacity-80 transition">
                                <Play className="w-5 h-5 mr-2 fill-black" /> Visit
                            </button>
                            <button className="flex items-center justify-center w-10 h-10 border-2 border-gray-500 rounded-full hover:border-white transition">
                                <Plus className="w-5 h-5 text-gray-300" />
                            </button>
                            <button className="flex items-center justify-center w-10 h-10 border-2 border-gray-500 rounded-full hover:border-white transition">
                                <ThumbsUp className="w-5 h-5 text-gray-300" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Modal Content */}
                <div className="px-10 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-4">
                        <div className="flex items-center space-x-4 text-green-400 font-semibold">
                            <span>98% Match</span>
                            <span className="text-gray-400">{item.duration || "2024"}</span>
                            <span className="border border-gray-500 px-2 rounded text-xs text-white">HD</span>
                        </div>

                        <p className="text-white text-lg leading-relaxed">
                            {item.desc || item.subtitle || "No description available."}
                        </p>

                        {item.details && (
                            <ul className="mt-4 space-y-2">
                                {item.details.map((detail, idx) => (
                                    <li key={idx} className="bg-[#2f2f2f] p-3 rounded">
                                        <h4 className="text-white font-bold">{detail.title || detail.subtitle}</h4>
                                        <p className="text-gray-400 text-sm">{detail.desc}</p>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div className="space-y-4 text-sm text-gray-400">
                        <div>
                            <span className="text-gray-500">Tags/Tech:</span>
                            <div className="flex flex-wrap gap-2 mt-1">
                                {item.tags?.map(tag => (
                                    <span key={tag} className="text-white hover:underline cursor-pointer">{tag}, </span>
                                ))}
                                {/* For details/experience, maybe show company or role */}
                                {item.company && <span className="text-white">{item.company}</span>}
                                {item.subtitle && <span className="text-white">{item.subtitle}</span>}
                            </div>
                        </div>
                        <div>
                            <span className="text-gray-500">Genre:</span> <span className="text-white">Portfolio, Showcase</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Modal;
