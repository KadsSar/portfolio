import React from 'react';
import { X, Play, Plus, ThumbsUp } from 'lucide-react';

const Modal = ({ item, onClose }) => {
    if (!item) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in">
            <div className="relative w-full max-w-4xl bg-[#181818] rounded-md shadow-2xl overflow-hidden animate-scale-up">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-[#181818] flex items-center justify-center hover:bg-white/20 transition"
                >
                    <X className="w-5 h-5 text-white" />
                </button>

                {/* Hero Section of Modal */}
                <div className="relative h-[40vh] w-full">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#181818] to-transparent z-10" />

                    {item.image ? (
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    ) : (
                        <div className="w-full h-full bg-[#333]" />
                    )}

                    <div className="absolute bottom-10 left-10 z-20 space-y-4">
                        <h2 className="text-4xl font-bold text-white">{item.title || item.name}</h2>
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
