"use client";



export default function Footer() {
    return (
        <footer className="bg-[#0A0A0A] text-white pt-24 pb-12 px-10 md:px-20 border-t border-white/10 relative z-10 w-full overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
                {/* Left Side - CTA & Newsletter */}
                <div className="flex-1">
                    <h2 className="font-serif text-5xl md:text-7xl tracking-widest uppercase mb-6 text-white leading-tight">
                        Sign Up For <br /> Escapes.
                    </h2>
                    <div className="flex w-full max-w-md border-b border-white/30 group hover:border-white transition-colors relative mt-10">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-transparent border-none outline-none py-3 px-2 flex-1 font-sans text-sm tracking-widest font-light text-white placeholder-white/30"
                        />
                        <button className="uppercase text-[10px] tracking-[0.2em] font-bold py-3 pr-2 text-white/50 group-hover:text-white transition-colors">
                            Submit
                        </button>
                    </div>
                </div>

                {/* Right Side - Links Array */}
                <div className="flex-1 flex flex-col sm:flex-row justify-end gap-12 sm:gap-24 uppercase font-sans tracking-[0.2em] text-xs font-light text-white/60">
                    <div className="flex flex-col gap-5">
                        <span className="text-white font-medium mb-2 tracking-[0.3em]">Navigation</span>
                        <a href="#destinations" className="hover:text-white transition-colors duration-300">Destinations</a>
                        <a href="#villas" className="hover:text-white transition-colors duration-300">Villas</a>
                        <a href="#experiences" className="hover:text-white transition-colors duration-300">Experiences</a>
                        <a href="#journal" className="hover:text-white transition-colors duration-300">Journal</a>
                    </div>
                    <div className="flex flex-col gap-5">
                        <span className="text-white font-medium mb-2 tracking-[0.3em]">Connect</span>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">Instagram</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">Twitter</a>
                        <a href="mailto:contact@travelpods.com" className="hover:text-white transition-colors duration-300">Contact</a>
                        <a href="#press" className="hover:text-white transition-colors duration-300">Press</a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-white/40 pt-10 border-t border-white/10">
                <div>© {new Date().getFullYear()} The Travel Pods. All rights reserved.</div>
                <div className="flex gap-8 mt-6 md:mt-0">
                    <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
                    <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                </div>
            </div>

            {/* Background Graphic Element - Minimal Moyra Look */}
            <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-[#1FB4B4] rounded-full blur-[200px] opacity-10 pointer-events-none" />
        </footer>
    );
}
