"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SecurityLocation() {
    return (
        <section className="py-24 px-10 md:px-20 bg-[#070707] text-white relative flex flex-col items-center border-t border-white/5 overflow-hidden">
            {/* Subtle orange glow for the map section */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[180px] pointer-events-none" />

            <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="h-[1px] w-12 bg-orange-500" />
                        <span className="text-orange-400 text-xs tracking-[0.3em] uppercase font-bold">Sanctuary</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-serif tracking-widest uppercase mb-8 leading-tight">Location & <br />Security</h2>
                    <p className="text-white/70 font-light leading-relaxed mb-10 text-lg border-l border-white/10 pl-6">
                        Nestled in the breathtaking wilderness of the Californian desert, our capsules offer pure isolation without compromising your safety. The perfect escape from civilization.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-start gap-6 group">
                            <div className="bg-zinc-900 border border-white/10 p-4 rounded-full mt-1 group-hover:border-orange-500/50 group-hover:bg-orange-500/10 transition-colors duration-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-200 group-hover:text-orange-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-bold uppercase tracking-widest mb-2 text-white group-hover:text-orange-100 transition-colors">Prime Location</h3>
                                <p className="text-white/50 text-sm font-light leading-relaxed">Joshua Tree National Park Area, California. Exact coordinates provided securely upon booking to ensure your absolute privacy.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 group">
                            <div className="bg-zinc-900 border border-white/10 p-4 rounded-full mt-1 group-hover:border-orange-500/50 group-hover:bg-orange-500/10 transition-colors duration-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-200 group-hover:text-orange-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-bold uppercase tracking-widest mb-2 text-white group-hover:text-orange-100 transition-colors">24/7 Security</h3>
                                <p className="text-white/50 text-sm font-light leading-relaxed">Discreet remote monitoring with secure smart-lock access. A dedicated emergency response team remains on standby around the clock.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="relative w-full h-[600px] rounded-[2rem] overflow-hidden border border-white/10 group shadow-2xl"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    {/* Placeholder for map image or abstract geography */}
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541334466-9abaf50b064c?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />

                    {/* Map UI overlay */}
                    <div className="absolute inset-0 border-[1px] border-white/5 rounded-[2rem] pointer-events-none" />

                    <div className="absolute bottom-10 left-10 right-10 backdrop-blur-xl bg-black/40 p-8 rounded-3xl border border-white/10 group-hover:border-orange-500/30 transition-colors duration-500">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div>
                                <h4 className="font-bold tracking-[0.2em] uppercase mb-2 text-sm text-orange-200">Protected Area</h4>
                                <p className="text-white/80 font-mono text-lg tracking-wider">34.1347° N, 116.3131° W</p>
                            </div>
                            <button className="text-xs uppercase tracking-widest border border-white/30 px-6 py-4 rounded-full hover:bg-orange-500 hover:border-orange-500 hover:text-black transition-all bg-white/5 font-bold shadow-lg">
                                Access Map
                            </button>
                        </div>
                    </div>

                    {/* Fake radar/target graphic on map */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-orange-500 shadow-[0_0_20px_rgba(249,115,22,1)] z-10" />
                        <div className="absolute w-20 h-20 rounded-full border border-orange-500/50 animate-ping" />
                        <div className="absolute w-32 h-32 rounded-full border border-white/10" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
