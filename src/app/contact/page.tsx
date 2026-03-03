import React from "react";

export default function ContactPage() {
    return (
        <main className="min-h-screen flex flex-col justify-center items-center bg-[#070707] text-white pt-32 px-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="w-full max-w-2xl bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-16 relative z-10 shadow-2xl">
                <span className="text-orange-400 text-xs tracking-[0.4em] uppercase font-bold block mb-4">Inquiries</span>
                <h1 className="text-4xl md:text-5xl font-serif tracking-widest uppercase mb-10">
                    Contact <br /> Concierge
                </h1>

                <form className="space-y-6 flex flex-col">
                    <div className="flex flex-col gap-2">
                        <label className="text-xs tracking-[0.2em] font-bold uppercase text-white/50">Full Name</label>
                        <input type="text" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500/50 transition-colors" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-xs tracking-[0.2em] font-bold uppercase text-white/50">Email Thread</label>
                        <input type="email" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500/50 transition-colors" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-xs tracking-[0.2em] font-bold uppercase text-white/50">Details</label>
                        <textarea rows={4} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500/50 transition-colors" />
                    </div>

                    <button type="button" className="mt-8 bg-orange-500 text-black font-bold uppercase tracking-widest text-sm py-4 rounded-xl hover:bg-white hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all">
                        Dispatch Message
                    </button>
                </form>
            </div>
        </main>
    );
}
