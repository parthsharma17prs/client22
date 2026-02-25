"use client";

import { motion } from "framer-motion";

const pods = [
    { name: "The Lunar Pod", location: "Joshua Tree Desert", price: "$1,200/night", bg: "bg-orange-900/40" },
    { name: "The Azure Pod", location: "Mediterranean Coast", price: "$1,500/night", bg: "bg-blue-900/40" },
    { name: "The Aurora Pod", location: "Icelandic Tundra", price: "$1,850/night", bg: "bg-teal-900/40" },
    { name: "The Canopy Pod", location: "Amazon Rainforest", price: "$1,300/night", bg: "bg-green-900/40" },
    { name: "The Summit Pod", location: "Swiss Alps", price: "$1,750/night", bg: "bg-slate-700/40" },
];

export default function Destinations() {
    return (
        <section id="destinations" className="py-32 px-10 md:px-20 bg-black text-white relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-white/10 pb-10">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-serif tracking-[0.1em] uppercase mb-4 text-[#1FB4B4]">
                            Global Sanctuaries
                        </h2>
                        <p className="font-sans font-light tracking-widest text-white/70 max-w-md">
                            Five unique terrains. One consistent standard of absolute architectural perfection.
                        </p>
                    </div>
                    <button className="text-sm uppercase tracking-[0.2em] font-medium border-b border-white pb-1 hover:text-[#1FB4B4] hover:border-[#1FB4B4] transition-colors">
                        Explore All
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {pods.map((pod, i) => (
                        <motion.div
                            key={pod.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className={`group relative overflow-hidden rounded-xl border border-white/10 p-8 h-[450px] flex flex-col justify-end cursor-pointer ${pod.bg}`}
                        >
                            {/* Overlay gradient for legibility */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-0 pointer-events-none" />

                            <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="text-[#1FB4B4] text-xs font-bold tracking-[0.2em] uppercase mb-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                                    {pod.location}
                                </div>
                                <h3 className="text-2xl md:text-3xl font-serif tracking-widest uppercase mb-1">
                                    {pod.name}
                                </h3>
                                <div className="flex justify-between items-center mt-4">
                                    <div className="text-sm font-sans tracking-widest text-white/60">
                                        {pod.price}
                                    </div>
                                    <button className="bg-white text-black px-4 py-2 text-xs font-bold tracking-[0.1em] uppercase shadow-lg shadow-black/50 invisible group-hover:visible transition-all hover:bg-[#1FB4B4] hover:text-white">
                                        Book
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
