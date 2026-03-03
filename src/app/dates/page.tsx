import React from "react";

export default function DatesPage() {
    return (
        <main className="min-h-[80vh] flex flex-col justify-center items-center bg-[#050505] text-white pt-20 px-6 overflow-hidden relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 blur-[150px] rounded-full pointer-events-none" />
            <h1 className="text-4xl md:text-5xl font-serif tracking-widest uppercase mb-6 z-10 text-orange-100 drop-shadow-[0_0_15px_rgba(249,115,22,0.3)]">
                Available Dates
            </h1>
            <p className="text-white/60 font-light mb-10 z-10 text-center uppercase tracking-widest text-sm max-w-lg">
                Our reservations for {new Date().getFullYear()} are currently closed. Join our private waitlist for immediate notification when new seasonal allocations become available.
            </p>
            <button className="z-10 bg-white/5 border border-white/20 px-8 py-3 rounded-full text-xs font-bold tracking-[0.2em] uppercase hover:bg-orange-500 hover:text-black hover:border-orange-500 transition-all shadow-lg active:scale-95">
                Join Waitlist
            </button>
        </main>
    );
}
