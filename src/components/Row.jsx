import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Row = ({ title, items, isLargeRow, onSelect }) => {
    const rowRef = useRef(null);
    const [isMoved, setIsMoved] = useState(false);

    // Handle Scroll
    const handleClick = (direction) => {
        setIsMoved(true);
        if (rowRef.current) {
            const { scrollLeft, clientWidth } = rowRef.current;
            const scrollTo = direction === "left"
                ? scrollLeft - clientWidth / 2
                : scrollLeft + clientWidth / 2;

            rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
        }
    };

    return (
        <div className="space-y-2 md:px-12 px-4 mb-8 group">
            <h2 className="w-56 mt-4 text-sm font-semibold text-[#e5e5e5] md:text-xl lg:text-2xl hover:text-white transition cursor-pointer">
                {title}
            </h2>

            <div className="relative group/row">
                {/* Left Arrow */}
                <ChevronLeft
                    className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover/row:opacity-100 ${!isMoved && "hidden"}`}
                    onClick={() => handleClick("left")}
                />

                <div
                    ref={rowRef}
                    className="flex items-center space-x-2.5 overflow-x-scroll scrollbar-hide md:space-x-3.5 no-scrollbar py-4"
                >
                    {items.map((item, index) => (
                        <div
                            key={item.id || index}
                            className={`relative min-w-[180px] md:min-w-[240px] cursor-pointer transition duration-200 ease-out md:hover:scale-110 group-hover/item:opacity-100 ${isLargeRow ? 'h-[280px] md:min-w-[400px]' : 'h-[140px]'} rounded-sm overflow-hidden`}
                            onClick={() => onSelect(item)}
                        >
                            <div className="absolute inset-0 bg-[#2f2f2f] animate-pulse -z-10" /> {/* Skeleton placeholder */}

                            {/* Image or Content */}
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

                            {/* Rank Numbers for Top Trending */}
                            {item.rank && (
                                <div className="absolute -left-4 -bottom-2 text-[8rem] font-bold text-black drop-shadow-[0_0_5px_rgba(229,9,20,0.8)]" style={{ WebkitTextStroke: '2px #595959', textShadow: '0 0 10px rgba(0,0,0,0.8)' }}>
                                    {item.rank}
                                </div>
                            )}

                            {/* Hover content (simplified vs real netflix but indicates interactivity) */}
                            <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition duration-300 flex items-center justify-center">
                                <p className="text-white font-bold text-center px-2">{item.title || item.name}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Arrow */}
                <ChevronRight
                    className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover/row:opacity-100"
                    onClick={() => handleClick("right")}
                />
            </div>
        </div>
    );
};

export default Row;
