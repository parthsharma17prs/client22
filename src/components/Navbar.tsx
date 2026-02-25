"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDarkBg, setIsDarkBg] = useState(true); // true means text should be white, false means text should be black

    useMotionValueEvent(scrollY, "change", (latest) => {
        // Blur effect after 100vh
        if (latest > window.innerHeight) {
            if (!isScrolled) setIsScrolled(true);
        } else {
            if (isScrolled) setIsScrolled(false);
        }

        // Color swap logic based on approximate scroll position where the sequence transitions
        // For now we'll simulate it based on scroll ranges
        if (latest > window.innerHeight * 2 && latest < window.innerHeight * 4) {
            setIsDarkBg(false); // Day shots, text black
        } else {
            setIsDarkBg(true); // Sunset/dark shots, text white
        }
    });

    return (
        <motion.nav
            className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-10 py-6 transition-colors duration-500 ${isScrolled ? "backdrop-blur-xl bg-black/10" : "bg-transparent"
                } ${isDarkBg ? "text-white" : "text-black"}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="font-serif text-2xl tracking-[0.2em] uppercase font-semibold">
                The Travel Pods
            </div>
            <div className="flex items-center gap-8">
                <a href="#destinations" className="text-sm font-medium tracking-widest hover:opacity-75 transition-opacity">
                    DESTINATIONS
                </a>
                <a href="#villas" className="text-sm font-medium tracking-widest hover:opacity-75 transition-opacity">
                    VILLAS
                </a>
                <button className="bg-turquoise text-white px-6 py-2.5 text-sm font-bold tracking-widest uppercase transition-all hover:bg-turquoise/80 hover:scale-105 active:scale-95 border border-white/20">
                    Book Now
                </button>
            </div>
        </motion.nav>
    );
}
