"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from 'next/link';

export default function Navbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50) {
            if (!isScrolled) setIsScrolled(true);
        } else {
            if (isScrolled) setIsScrolled(false);
        }
    });

    return (
        <div className="fixed top-6 left-0 right-0 w-full z-50 flex justify-center px-4">
            <motion.nav
                className={`rounded-full px-6 py-3 w-full max-w-7xl transition-all duration-500 flex items-center justify-between border ${isScrolled
                    ? "backdrop-blur-2xl bg-white/10 border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]"
                    : "bg-white/10 backdrop-blur-xl border-white/20 shadow-lg"
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {/* Logo Section */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-black font-serif italic text-xl font-bold group-hover:scale-105 transition-transform">
                        T
                    </div>
                    <span className="text-white font-serif tracking-widest text-lg font-bold group-hover:text-white/80 transition-colors">
                        TRAVEL CO.
                    </span>
                </Link>

                {/* Links */}
                <div className="hidden lg:flex items-center justify-center gap-8 text-white text-xs font-bold tracking-widest uppercase font-sans flex-1 ml-16">
                    {["Home", "About", "Dates", "Travel", "Gallery", "Contact", "Support"].map((item) => (
                        <Link
                            key={item}
                            href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                            className={`hover:text-white/70 transition-colors relative pb-1 ${item === "Home"
                                    ? "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-white"
                                    : "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-white after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:duration-300"
                                }`}
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-6 font-sans">
                    <Link href="/login" className="text-white text-sm font-bold tracking-wider hover:text-white/70 transition-colors">
                        Login
                    </Link>
                    <Link href="/reserve" className="bg-white text-black px-7 py-2.5 rounded-full text-sm font-bold shadow-md hover:scale-105 active:scale-95 transition-all">
                        Reserve
                    </Link>
                </div>
            </motion.nav>
        </div>
    );
}
