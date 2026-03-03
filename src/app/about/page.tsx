import React from "react";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#070707] text-white pt-32 pb-20 px-4 md:px-10 overflow-hidden relative">
            {/* Ambient background glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[180px] pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">
                <div className="flex items-center gap-4 mb-6">
                    <div className="h-[1px] w-12 bg-orange-500" />
                    <span className="text-orange-400 text-xs tracking-[0.3em] uppercase font-bold">Our Story</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-serif tracking-widest uppercase mb-12 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
                    Beyond <br /> Boundaries
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
                    <div>
                        <p className="text-white/80 font-light leading-relaxed text-lg mb-6">
                            Founded in 2024, Our Capsules was born from a desire to merge the untamed beauty of the world's most remote locations with unparalleled architectural luxury.
                        </p>
                        <p className="text-white/60 font-light leading-relaxed mb-8">
                            We believe that true isolation doesn't mean sacrificing comfort. Every capsule is meticulously designed to provide a 360-degree theater of nature, completely off-grid yet connected to the finest amenities.
                        </p>
                        <div className="flex items-center gap-8 border-t border-white/10 pt-8 mt-10">
                            <div>
                                <h4 className="font-bold text-3xl font-serif tracking-wide text-orange-400">07</h4>
                                <p className="text-xs tracking-[0.2em] font-normal uppercase text-white/50 mt-1">Locations</p>
                            </div>
                            <div className="w-[1px] h-10 bg-white/10" />
                            <div>
                                <h4 className="font-bold text-3xl font-serif tracking-wide text-orange-400">100%</h4>
                                <p className="text-xs tracking-[0.2em] font-normal uppercase text-white/50 mt-1">Off-Grid</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-[400px] rounded-[2rem] overflow-hidden border border-white/10 group">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-80 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-1000" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    </div>
                </div>
            </div>
        </main>
    );
}
