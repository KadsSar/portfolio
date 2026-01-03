import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Row = ({ title, items, isLargeRow, onSelect, className = "", itemClassName = "", titleBackgroundImage = null }) => {
    const rowRef = useRef(null);
    const [isMoved, setIsMoved] = useState(false);

    // Handle Scroll
    const handleClick = (direction) => {
        setIsMoved(true);
        if (rowRef.current) {
            const { scrollLeft, clientWidth } = rowRef.current;
            const scrollTo = direction === "left"
                ? scrollLeft - clientWidth
                : scrollLeft + clientWidth;

            console.log("Scrolling to:", scrollTo); // Debug log
            rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
        }
    };

    return (
        <div className={`space-y-2 md:px-12 px-4 mb-0 group ${className}`}>

            <div className="relative group/row">
                {/* Left Arrow */}
                <ChevronLeft
                    className={`absolute top-0 bottom-0 left-2 z-[60] m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover/row:opacity-100 ${!isMoved && "hidden"}`}
                    onClick={() => handleClick("left")}
                />

                <div
                    ref={rowRef}
                    className="flex items-end space-x-2.5 overflow-x-scroll scrollbar-hide md:space-x-3.5 no-scrollbar py-4 px-4"
                >
                    {/* Title Card - First Item */}
                    <div
                        className={`relative min-w-[200px] md:min-w-[240px] flex flex-col justify-end p-4 shrink-0 transition duration-200 ease-out z-10 overflow-hidden rounded-md ${isLargeRow ? 'h-[280px] md:min-w-[400px] pb-14' : 'h-[200px]'}`}
                    >
                        {/* Detail Background Image if provided */}
                        {titleBackgroundImage && (
                            <>
                                <img
                                    src={titleBackgroundImage}
                                    className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
                                    alt="Row Background"
                                />
                                {/* Gradients for Seamless Blending - Aggressive Fade */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] from-20% via-transparent to-transparent z-0" />
                                <div className="absolute inset-0 bg-gradient-to-b from-[#141414] from-20% via-transparent to-transparent z-0" />
                                <div className="absolute inset-0 bg-gradient-to-r from-[#141414] from-20% via-transparent to-transparent z-0" />
                                <div className="absolute inset-0 bg-gradient-to-l from-[#141414] from-20% via-transparent to-transparent z-0" />
                                <div className="absolute inset-0 bg-black/20 z-0" />
                            </>
                        )}

                        <h2 className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-['Rubik_Distressed'] text-[#E50914] leading-[0.85] tracking-wide uppercase break-words drop-shadow-lg">
                            {title}
                        </h2>

                        <div className="relative z-10 flex flex-col mt-2 opacity-80">
                            {title === "Latest Releases" && (
                                <div className="text-[10px] md:text-xs text-gray-400 font-medium tracking-widest uppercase mb-1">
                                    here are my projects
                                </div>
                            )}
                            {title === "Top Trending" && (
                                <div className="text-[10px] md:text-xs text-gray-400 font-medium tracking-widest uppercase mb-1">
                                    skills i have acquired
                                </div>
                            )}
                            {title === "Top picks for you" && (
                                <div className="text-[10px] md:text-xs text-gray-400 font-medium tracking-widest uppercase mb-1">
                                    my work experience
                                </div>
                            )}
                            <div className="flex items-center text-[10px] md:text-xs text-gray-400 font-medium tracking-widest uppercase">
                                <span>Drag to next</span>
                                <span className="ml-2 text-base">→</span>
                            </div>
                        </div>
                    </div>

                    {items.map((item, index) => {
                        // Special Layout for Top Trending (Ranked Items)
                        if (item.rank) {
                            return (
                                <div
                                    key={item.id || index}
                                    className={`relative group/item min-w-[220px] md:min-w-[340px] h-[160px] md:h-[240px] flex items-center cursor-pointer mr-0 hover:z-50 ${itemClassName}`}
                                    onClick={() => onSelect(item)}
                                >
                                    {/* Big Number (Left side, ON TOP) */}
                                    {/* Z-Index: 20 -> Places number visually on top of the image */}
                                    <div className="h-full flex items-center justify-center font-bold text-[140px] md:text-[200px] text-black drop-shadow-lg leading-none select-none z-20 scale-y-110 translate-y-2 translate-x-4">
                                        <svg viewBox="0 0 70 100" className="h-full w-auto overflow-visible">
                                            <text
                                                x="40"
                                                y="95"
                                                textAnchor="middle"
                                                fill="black"
                                                stroke="#595959"
                                                strokeWidth="2"
                                                className="font-sans"
                                                style={{ fontSize: '85px', fontWeight: '800' }}
                                            >
                                                {item.rank}
                                            </text>
                                        </svg>
                                    </div>

                                    {/* The Image (Right side, BEHIND) */}
                                    {/* Z-index: 10 -> Places image behind number */}
                                    {/* Special spacing for double-digit rank (10) to avoid overlapping the '0' */}
                                    <div
                                        className={`relative -ml-2 md:-ml-4 h-full w-[120px] md:w-[200px] shrink-0 rounded-sm overflow-hidden z-10 transition duration-300 ease-out translate-y-2 md:translate-y-4 hover:scale-110 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] shadow-lg`}
                                        style={{ marginLeft: item.rank == 10 ? '60px' : '' }}
                                    >
                                        {item.image ? (
                                            <img
                                                src={item.image}
                                                alt={item.title || item.name}
                                                className="w-full h-full object-cover rounded-sm"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-[#333] flex items-center justify-center">
                                                <span className="text-gray-400 font-bold">{item.title || item.name}</span>
                                            </div>
                                        )}
                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition duration-300 flex items-center justify-center">
                                            <p className="text-white font-bold text-center px-2 text-sm md:text-xl">{item.title || item.name}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        }

                        // Standard Card Layout
                        return (
                            <div
                                key={item.id || index}
                                className={`relative min-w-[180px] md:min-w-[240px] cursor-pointer transition duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] hover:z-50 group-hover/item:opacity-100 ${isLargeRow ? 'h-[280px] md:min-w-[400px]' : 'h-[140px]'} rounded-sm overflow-hidden ${itemClassName}`}
                                onClick={() => onSelect(item)}
                            >
                                <div className="absolute inset-0 bg-[#2f2f2f] animate-pulse -z-10" />

                                {/* Image */}
                                {item.image ? (
                                    <img
                                        src={item.image}
                                        alt={item.title || item.name}
                                        className="rounded-sm object-cover md:rounded w-full h-full"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-[#333] flex items-center justify-center">
                                        <span className="text-gray-400 font-bold">{item.title || item.name}</span>
                                    </div>
                                )}

                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition duration-300 flex items-center justify-center">
                                    <p className="text-white font-bold text-center px-2">{item.title || item.name}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Right Arrow */}
                <ChevronRight
                    className="absolute top-0 bottom-0 right-2 z-[60] m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover/row:opacity-100"
                    onClick={() => handleClick("right")}
                />
            </div>
        </div>
    );
};

export default Row;
