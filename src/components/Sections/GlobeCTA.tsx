"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function GlobeCTA() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <section className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center z-10">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-40 blur-[2px]"
                    // If public/globe-loop.mp4 exists, it will play. Otherwise it's a blank space.
                    src="/globe-loop.mp4"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black z-0 pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center text-center px-6">
                    <h2 className="text-5xl md:text-8xl font-serif tracking-[0.1em] uppercase text-white mb-6">
                        Global Reach
                    </h2>
                    <p className="font-sans text-xl text-white/80 font-light max-w-lg mb-12 tracking-widest leading-loose">
                        Wherever you decide to disconnect, we ensure an uninterrupted synthesis of luxury and nature.
                    </p>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-[#1FB4B4] text-white px-12 py-5 uppercase font-bold tracking-[0.2em] text-sm md:text-base hover:bg-white hover:text-black transition-all shadow-xl hover:shadow-[0_0_20px_rgba(31,180,180,0.5)] active:scale-95"
                    >
                        Start Your Journey
                    </button>
                </div>
            </section>

            {/* Booking Modal Slide-Over */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex justify-end"
                    >
                        {/* Backdrop */}
                        <div
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            onClick={() => setIsModalOpen(false)}
                        />

                        {/* Sidebar */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="relative w-full md:w-[500px] h-full bg-[#0a0a0a] border-l border-white/10 p-10 flex flex-col items-start overflow-y-auto"
                        >
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="self-end text-white/50 hover:text-white uppercase text-xs font-bold tracking-[0.3em] mb-12 border-b border-transparent hover:border-white transition-all pb-1"
                            >
                                Close
                            </button>

                            <h3 className="font-serif text-4xl text-white tracking-widest uppercase mb-10">
                                Reserve your Pod
                            </h3>

                            <div className="w-full flex-1 space-y-8 text-white font-sans">
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs uppercase tracking-[0.2em] text-[#1FB4B4]">Destination</label>
                                    <select className="bg-transparent border-b border-white/20 pb-2 outline-none uppercase tracking-widest font-light text-lg">
                                        <option className="bg-black text-white">The Lunar Pod (Desert)</option>
                                        <option className="bg-black text-white">The Azure Pod (Coastal)</option>
                                        <option className="bg-black text-white">The Aurora Pod (Arctic)</option>
                                    </select>
                                </div>

                                <div className="flex gap-6">
                                    <div className="flex flex-col gap-2 flex-1">
                                        <label className="text-xs uppercase tracking-[0.2em] text-[#1FB4B4]">Check In</label>
                                        <input type="date" className="bg-transparent border-b border-white/20 pb-2 outline-none uppercase font-light text-white css-invert" />
                                    </div>
                                    <div className="flex flex-col gap-2 flex-1">
                                        <label className="text-xs uppercase tracking-[0.2em] text-[#1FB4B4]">Check Out</label>
                                        <input type="date" className="bg-transparent border-b border-white/20 pb-2 outline-none uppercase font-light text-white css-invert" />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-xs uppercase tracking-[0.2em] text-[#1FB4B4]">Guests</label>
                                    <select className="bg-transparent border-b border-white/20 pb-2 outline-none uppercase tracking-widest font-light text-lg">
                                        <option className="bg-black">1 Guest</option>
                                        <option className="bg-black">2 Guests</option>
                                        <option className="bg-black">3 Guests</option>
                                    </select>
                                </div>
                            </div>

                            <div className="w-full mt-12 pt-8 border-t border-white/10">
                                <div className="flex justify-between items-center mb-6">
                                    <span className="font-sans font-light tracking-widest text-white/50">Total</span>
                                    <span className="font-serif text-2xl tracking-[0.1em] text-white">Razorpay Int.</span>
                                </div>
                                <button className="w-full bg-[#1FB4B4] hover:bg-white text-white hover:text-black py-4 uppercase tracking-[0.2em] font-bold text-sm transition-colors cursor-pointer">
                                    Proceed to Checkout
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
