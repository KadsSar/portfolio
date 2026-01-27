import React from 'react';
import { X, Play, Plus, ThumbsUp } from 'lucide-react';

const Modal = ({ item, onClose }) => {
    const [videoLoaded, setVideoLoaded] = React.useState(false);
    const [isLiked, setIsLiked] = React.useState(false);
    const [showCodeSnippet, setShowCodeSnippet] = React.useState(false);

    React.useEffect(() => {
        setVideoLoaded(false);
        setIsLiked(false);
        setShowCodeSnippet(false);
    }, [item]);

    if (!item) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in">
            <div className={`relative w-full ${item.details ? 'max-w-3xl' : 'max-w-4xl'} bg-[#181818] rounded-md shadow-2xl overflow-hidden animate-scale-up max-h-[85vh] flex flex-col`}>
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-[60] w-8 h-8 rounded-full bg-[#181818]/80 backdrop-blur flex items-center justify-center hover:bg-white/20 transition shadow-md"
                >
                    <X className="w-5 h-5 text-white" />
                </button>

                <div className="overflow-y-auto custom-scrollbar flex-1 relative w-full">

                    {/* Font Imports */}
                    <style>{`
                    @import url('https://fonts.cdnfonts.com/css/minecrafter');
                    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&display=swap');
                    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
                    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap');
                `}</style>

                    {/* Hero Section of Modal */}
                    <div className={`relative ${item.details ? 'h-[25vh] md:h-[35vh]' : (item.terminalLogs ? 'h-[25vh] md:h-[30vh]' : 'h-[30vh] md:h-[50vh]')} w-full bg-black overflow-hidden`}>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent z-20 pointer-events-none" />
                        <div className="absolute inset-y-0 left-0 w-96 bg-gradient-to-r from-[#181818] to-transparent z-20 pointer-events-none" />
                        <div className="absolute inset-y-0 right-0 w-96 bg-gradient-to-l from-[#181818] to-transparent z-20 pointer-events-none" />

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
                                    src={`https://www.youtube.com/embed/${item.youtubeId.trim()}?autoplay=1&mute=1&controls=0&loop=1&playlist=${item.youtubeId.trim()}&showinfo=0&modestbranding=1&iv_load_policy=3&rel=0&origin=${typeof window !== 'undefined' ? window.location.origin : ''}${item.videoStart ? `&start=${item.videoStart}` : ''}${item.videoEnd ? `&end=${item.videoEnd}` : ''}`}
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
                                            : (item.title === "Nutribudget")
                                                ? "text-green-600 font-['Oswald'] text-6xl tracking-wide [-webkit-text-stroke:0.5px_orange]"
                                                : (item.title.includes("Network Administrator"))
                                                    ? "text-pink-600"
                                                    : "text-white"
                                    }`
                                }
                                style={{
                                    fontFamily: (item.title === "Jurassic Park Interactive")
                                        ? "'Tribeca', sans-serif"
                                        : (item.title.includes("LOGOS"))
                                            ? "'Minecrafter', sans-serif"
                                            : (item.title === "Museum AR/VR")
                                                ? "'Cinzel', serif"
                                                : (item.title === "Nutribudget")
                                                    ? "'Oswald', sans-serif"
                                                    : "inherit"
                                }}
                            >
                                {item.title === "Nutribudget" ? "NutriBudget" : (item.title || item.name)}
                            </h2>
                            <div className="flex space-x-3">
                                <button
                                    onClick={() => item.link && window.open(item.link, "_blank")}
                                    className="flex items-center px-6 py-1.5 bg-white text-black font-bold rounded hover:bg-opacity-80 transition"
                                >
                                    <Play className="w-5 h-5 mr-2 fill-black" /> Visit
                                </button>
                                <button
                                    onClick={() => setShowCodeSnippet(!showCodeSnippet)}
                                    className={`flex items-center justify-center w-10 h-10 border-2 rounded-full transition ${showCodeSnippet ? 'border-white bg-white/20' : 'border-gray-500 hover:border-white'}`}
                                >
                                    <Plus className={`w-5 h-5 ${showCodeSnippet ? 'text-white' : 'text-gray-300'}`} />
                                </button>
                                <button
                                    onClick={() => setIsLiked(!isLiked)}
                                    className={`flex items-center justify-center w-10 h-10 border-2 rounded-full transition-all duration-700 ease-in-out ${isLiked ? 'border-green-500 rotate-[360deg]' : 'border-gray-500 hover:border-white'}`}
                                >
                                    <ThumbsUp className={`w-5 h-5 transition-colors duration-700 ${isLiked ? 'text-green-500 fill-green-500' : 'text-gray-300'}`} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Modal Content */}
                    <div className="px-10 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="md:col-span-2 space-y-4">
                            <div className="flex items-center space-x-4 text-green-400 font-semibold">
                                <span>98% Match</span>
                                <span className="text-gray-400">{item.duration || "2026"}</span>
                                <span className="border border-gray-500 px-2 rounded text-xs text-white">HD</span>
                            </div>

                            {/* Specific Content for IT Role or Code Snippet */}
                            {(showCodeSnippet && item.codeSnippet) ? (
                                <div className="font-mono text-sm bg-black p-4 rounded border border-gray-800 shadow-2xl max-h-[300px] overflow-y-auto custom-scrollbar">
                                    <div className="flex space-x-2 mb-4 border-b border-gray-800 pb-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                        <span className="text-gray-500 text-xs ml-2">README.md</span>
                                    </div>
                                    <div className="text-gray-300 font-['Courier_New'] whitespace-pre-wrap leading-relaxed">
                                        {item.codeSnippet}
                                    </div>
                                </div>
                            ) : (item.terminalLogs) ? (
                                <div className="font-mono text-sm bg-black p-4 rounded border border-green-900 shadow-[0_0_20px_rgba(0,255,0,0.1)]">
                                    <div className="flex space-x-2 mb-4 border-b border-green-900 pb-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                        <span className="text-green-700 text-xs ml-2">root@pioneer-server:~</span>
                                    </div>
                                    <div className="space-y-2 text-green-500 font-['Courier_New'] max-h-[250px] overflow-y-auto no-scrollbar">
                                        <p className="animate-pulse">&gt; INITIALIZING CONNECTION...</p>
                                        <p>&gt; ACCESSING JOB_LOGS... [OK]</p>
                                        <p className="text-white mt-4">&gt; ROLE: {item.title}</p>
                                        <p className="text-gray-500">&gt; DURATION: {item.duration}</p>
                                        <div className="mt-4 border-l-2 border-green-800 pl-4 space-y-3">
                                            {item.terminalLogs.map((log, index) => (
                                                <p key={index}>&gt; {log}</p>
                                            ))}
                                        </div>
                                        <p className="mt-4 animate-bounce">&gt; _</p>
                                    </div>
                                </div>
                            ) : (
                                <p className="text-white text-lg leading-relaxed">
                                    {item.desc || item.subtitle || "No description available."}
                                </p>
                            )}

                            {item.details && (
                                <ul className="mt-4 space-y-3 max-h-[250px] overflow-y-auto pr-2 no-scrollbar">
                                    {item.details.map((detail, idx) => (
                                        <li key={idx} className={`bg-[#2f2f2f] rounded hover:bg-[#383838] transition duration-200 ${detail.link ? 'cursor-pointer' : ''}`}>
                                            {detail.link ? (
                                                <a href={detail.link} target="_blank" rel="noopener noreferrer" className="block p-5 w-full h-full">
                                                    <h4 className="text-white font-bold text-lg">{detail.title || detail.subtitle}</h4>
                                                    <p className="text-blue-400 text-sm hover:underline whitespace-pre-line block mt-2">{detail.desc}</p>
                                                </a>
                                            ) : (
                                                <div className="p-5 w-full h-full">
                                                    <h4 className="text-white font-bold text-lg">{detail.title || detail.subtitle}</h4>
                                                    <p className="text-gray-400 text-sm whitespace-pre-line mt-2">{detail.desc}</p>
                                                </div>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        <div className="space-y-4 text-sm text-gray-400">
                            <div>
                                <span className="text-gray-500">Tags/Tech:{item.id === 'education' ? ' Education history' : (item.id === 'toolkit' ? ' Tech toolkit' : (item.id === 'contact' ? ' Reach me here' : (item.id === 'certifications' ? ' Examinations' : (item.id === 'hackathons' ? ' Roles and participations' : ''))))}</span>
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
        </div>
    );
};

export default Modal;
