import React from "react";

export default function SupportPage() {
    return (
        <main className="min-h-[80vh] flex flex-col justify-center items-center bg-[#070707] text-white pt-20 px-6 relative">
            <div className="text-center z-10 max-w-2xl">
                <div className="w-16 h-16 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(249,115,22,0.1)]">
                    <span className="text-orange-400 font-serif italic text-3xl">24</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-serif tracking-widest uppercase mb-6 z-10">
                    Client Support
                </h1>
                <p className="text-white/60 font-light mb-10 text-lg leading-relaxed">
                    Our dedicated response team is available around the clock. If you are an active resident or holding a confirmed reservation, please use the encrypted comms channel provided in your itinerary packet.
                </p>
                <div className="flex items-center justify-center gap-4">
                    <button className="bg-white/5 border border-white/20 px-8 py-3 rounded-full text-xs font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all">
                        FAQ Archive
                    </button>
                    <button className="bg-orange-500/10 text-orange-400 border border-orange-500/30 px-8 py-3 rounded-full text-xs font-bold tracking-[0.2em] uppercase hover:bg-orange-500 hover:text-black transition-all shadow-[0_0_15px_rgba(249,115,22,0.2)]">
                        Emergency Contact
                    </button>
                </div>
            </div>
        </main>
    );
}
