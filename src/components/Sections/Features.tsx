"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const features = [
    {
        title: "Panoramic Views",
        description: "Immerse yourself in nature with 360-degree glass facades offering breathtaking desert landscapes. Every sunrise and sunset becomes a private spectacle.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        delay: 0.1,
    },
    {
        title: "Handcrafted Bliss",
        description: "Natural textures, custom-built furnishings, and gentle ambient lighting transport you to a realm of pure, handcrafted relaxation. Every detail is curated.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
        ),
        delay: 0.3,
    },
    {
        title: "Eco-Friendly Design",
        description: "Sustainable architecture that blends seamlessly with the environment without leaving a trace. Powered by the sun and built to preserve the wild.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
        delay: 0.5,
    },
];

export default function Features() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    return (
        <section ref={containerRef} className="py-32 px-10 md:px-20 bg-black text-white relative overflow-hidden flex flex-col items-center">
            {/* Ambient glowing orb in the background */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-600/10 rounded-full blur-[150px] pointer-events-none"
                style={{ y: yBackground }}
            />

            <div className="max-w-7xl w-full mx-auto relative z-10">
                <div className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h2 className="text-5xl md:text-7xl font-serif tracking-widest uppercase mb-6 leading-tight">
                            Why <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-100 to-orange-400">
                                Capsules®
                            </span>
                        </h2>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="flex flex-col items-start lg:items-end lg:text-right"
                    >
                        <p className="text-white/70 max-w-md font-light tracking-wide text-lg mb-8 border-l lg:border-l-0 lg:border-r border-orange-500/30 pl-6 lg:pl-0 lg:pr-6">
                            Get closer to the desert nature than ever before and admire this unique, breathtaking landscape wrapped in complete luxury.
                        </p>
                        <button className="group flex items-center gap-4 text-xs tracking-[0.2em] font-bold uppercase transition-all">
                            <span className="w-12 h-12 rounded-full border border-orange-500/50 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-black transition-all duration-500 bg-white/5 backdrop-blur-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </span>
                            <span className="group-hover:text-amber-400 transition-colors duration-500">Discover More</span>
                        </button>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
                    {/* Glowing connector lines (visible on larger screens) */}
                    <div className="hidden md:block absolute top-[40%] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-orange-500/20 to-transparent z-0" />

                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-3xl p-10 hover:border-orange-500/30 hover:bg-zinc-900/80 transition-all duration-700 relative z-10 group flex flex-col h-full shadow-2xl"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: feature.delay, ease: "easeOut" }}
                            whileHover={{ y: -10 }}
                        >
                            {/* Inner ambient glow on hover */}
                            <div className="absolute inset-0 bg-gradient-to-b from-orange-500/0 via-orange-500/0 to-orange-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            <div className="w-16 h-16 rounded-full bg-black border border-white/10 flex items-center justify-center mb-10 group-hover:border-orange-500/50 group-hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.3)] transition-all duration-500">
                                {feature.icon}
                            </div>

                            <h3 className="text-xl font-serif font-bold uppercase tracking-widest mb-4 group-hover:text-orange-100 transition-colors duration-500">
                                {feature.title}
                            </h3>

                            <p className="text-white/60 font-light leading-relaxed flex-grow group-hover:text-white/80 transition-colors duration-500 text-sm md:text-base">
                                {feature.description}
                            </p>

                            <div className="mt-8 w-8 h-[2px] bg-orange-500/30 group-hover:w-full transition-all duration-700" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
