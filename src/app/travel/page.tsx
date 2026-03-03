import React from "react";

export default function TravelPage() {
    return (
        <main className="min-h-[80vh] flex flex-col justify-center items-center bg-[#070707] text-white pt-20 px-6 overflow-hidden relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[200px] bg-white/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="text-center z-10">
                <span className="text-orange-400 text-xs tracking-[0.4em] uppercase font-bold block mb-4">Itineraries & Logistics</span>
                <h1 className="text-5xl md:text-6xl font-serif tracking-widest uppercase mb-8 z-10 drop-shadow-md">
                    The Journey
                </h1>
                <p className="text-white/70 font-light text-center max-w-xl mx-auto leading-relaxed border border-white/10 p-8 rounded-3xl bg-zinc-900/30 backdrop-blur-md">
                    Detailed travel instructions, helicopter coordinates, and private pickup arrangements will be securely delivered to your vault once your reservation is confirmed. We ensure absolute discretion from your front door to the desert.
                </p>
            </div>
        </main>
    );
}
