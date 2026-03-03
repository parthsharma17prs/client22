import React from "react";

export default function LoginPage() {
    return (
        <main className="min-h-screen flex flex-col justify-center items-center bg-[#050505] text-white pt-20 px-6 relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541334466-9abaf50b064c?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

            <div className="w-full max-w-md bg-zinc-900/50 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 relative z-10 mx-auto shadow-2xl">
                <div className="text-center mb-10">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mx-auto mb-6 text-black font-serif italic text-2xl font-bold shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                        T
                    </div>
                    <span className="text-white font-serif tracking-widest text-xl font-bold uppercase block mb-1">
                        Client Portal
                    </span>
                    <span className="text-orange-400 text-[10px] tracking-[0.4em] uppercase font-bold">Secure Access</span>
                </div>

                <form className="space-y-6 flex flex-col">
                    <div className="flex flex-col gap-2">
                        <label className="text-[10px] tracking-[0.2em] font-bold uppercase text-white/50 ml-2">Access Grid</label>
                        <input
                            type="text"
                            placeholder="Email or Identifier"
                            className="bg-black/50 border border-white/10 rounded-full px-6 py-4 text-sm text-white focus:outline-none focus:border-orange-500/50 transition-colors backdrop-blur-sm"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-center ml-2 mr-2">
                            <label className="text-[10px] tracking-[0.2em] font-bold uppercase text-white/50">Passkey</label>
                            <a href="#" className="text-[10px] text-orange-400/80 hover:text-orange-400 tracking-wider">RECOVER</a>
                        </div>
                        <input
                            type="password"
                            placeholder="••••••••••"
                            className="bg-black/50 border border-white/10 rounded-full px-6 py-4 text-sm text-white focus:outline-none focus:border-orange-500/50 transition-colors backdrop-blur-sm"
                        />
                    </div>

                    <button type="button" className="mt-4 bg-white text-black font-bold uppercase tracking-widest text-xs py-4 rounded-full hover:bg-orange-500 hover:text-white shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] transition-all duration-300">
                        Authenticate
                    </button>

                    <div className="text-center mt-6">
                        <span className="text-white/40 text-[10px] tracking-wider uppercase">Are you new here? </span>
                        <a href="/reserve" className="text-orange-400 text-[10px] tracking-widest uppercase font-bold hover:text-white transition-colors">Apply</a>
                    </div>
                </form>
            </div>
        </main>
    );
}
