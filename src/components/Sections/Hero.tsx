"use client";

import { useMemo, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import CanvasScroll from "@/components/CanvasScroll/CanvasScroll";
import { useImagePreloader } from "@/hooks/useImagePreloader";

export default function Hero() {
    const sequenceMap = useMemo(() => new Map<number, HTMLImageElement>(), []);
    const FRAME_COUNT = 639; // 938 - 300 + 1
    const START_FRAME = 300;

    const { progress, isLoaded } = useImagePreloader({
        folder: "sequence-1",
        frameCount: FRAME_COUNT,
        startFrame: START_FRAME,
        sequenceMap,
        extension: "jpg",
        padLength: 5,
    });

    const [minTimeElapsed, setMinTimeElapsed] = useState(false);
    const [preloaderDismissed, setPreloaderDismissed] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setMinTimeElapsed(true);
        }, 2500); // 2.5 seconds minimum for preloader
        return () => clearTimeout(timer);
    }, []);

    // We consider it ready when images are loaded AND 2.5s have passed.
    const isReady = isLoaded && minTimeElapsed;

    useEffect(() => {
        if (isReady) {
            const timer = setTimeout(() => setPreloaderDismissed(true), 800);
            return () => clearTimeout(timer);
        }
    }, [isReady]);

    const { scrollYProgress } = useScroll();

    // Scroll fade out
    const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

    // Visually bound progress to 100% when time runs out, or progress% otherwise
    const displayProgress = Math.max(progress, minTimeElapsed && isLoaded ? 100 : Math.min(progress, 99));

    return (
        <div className="relative">
            <AnimatePresence>
                {!preloaderDismissed && (
                    <motion.div
                        key="preloader"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="fixed inset-0 z-[100] bg-[#0A0A0A] flex flex-col items-center justify-center pt-10"
                    >
                        <motion.div
                            className="text-white/60 font-sans text-[10px] md:text-xs tracking-[0.3em] mb-12 uppercase"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            The Travel Pods
                        </motion.div>

                        {/* Horizontal Capsule Outline */}
                        <div className="w-[200px] h-[50px] md:w-[320px] md:h-[60px] border border-white/20 rounded-full overflow-hidden relative p-[3px] flex items-center justify-center">
                            {/* Text inside the Capsule using mix-blend to invert text color */}
                            <span className="relative z-10 font-sans tracking-[0.3em] md:tracking-[0.4em] uppercase text-xs md:text-sm mix-blend-exclusion text-white">
                                CAPSULES
                            </span>
                            {/* Capsule Fill */}
                            <motion.div
                                className="absolute top-[3px] bottom-[3px] left-[3px] bg-white rounded-full origin-left"
                                initial={{ width: "0%" }}
                                animate={{ width: `calc(${displayProgress}% - 6px)` }}
                                transition={{ ease: "circOut", duration: 0.3 }}
                            />
                        </div>

                        <motion.div
                            className="text-white/40 text-[10px] md:text-xs font-mono mt-10 md:mt-12 tracking-widest tabular-nums"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            {Math.floor(displayProgress)}%
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <CanvasScroll sequenceMap={sequenceMap} frameCount={FRAME_COUNT} startFrame={START_FRAME}>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <motion.div
                        style={{ opacity: textOpacity }}
                        className="flex flex-col items-center justify-center mt-12"
                    >
                        {/* New Element: Animated Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: preloaderDismissed ? 1 : 0, scale: preloaderDismissed ? 1 : 0.8 }}
                            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                            className="px-6 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-md mb-8 flex items-center gap-3 shadow-[0_0_15px_rgba(249,115,22,0.2)]"
                        >
                            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                            <span className="text-orange-300 text-xs font-bold tracking-[0.3em] uppercase">Now Booking</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: preloaderDismissed ? 1 : 0, y: preloaderDismissed ? 0 : 30 }}
                            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                            className="font-serif text-7xl md:text-[11rem] tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 mb-2 font-bold drop-shadow-[0_10px_30px_rgba(249,115,22,0.15)] uppercase"
                        >
                            Capsules
                        </motion.h1>

                        {/* New Element: Subtitle */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: preloaderDismissed ? 1 : 0, y: preloaderDismissed ? 0 : 20 }}
                            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                            className="font-sans font-bold text-xl md:text-3xl text-orange-100 mb-8 tracking-[0.4em] uppercase drop-shadow-lg"
                        >
                            The Edge of the World
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: preloaderDismissed ? 1 : 0, y: preloaderDismissed ? 0 : 20 }}
                            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                            className="font-sans font-bold text-xs md:text-base text-white/90 max-w-2xl leading-loose tracking-[0.2em] md:tracking-[0.3em] uppercase drop-shadow-md border-t border-b border-white/10 py-5 bg-black/20 backdrop-blur-sm rounded-3xl"
                        >
                            Absolute isolation. Perfect luxury. A sanctuary disconnected from the noise of civilization.
                        </motion.p>

                        {/* New Element: Hero Action Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: preloaderDismissed ? 1 : 0, y: preloaderDismissed ? 0 : 20 }}
                            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                            className="flex flex-col sm:flex-row items-center gap-6 mt-12"
                        >
                            <button className="bg-orange-500 text-black px-10 py-4 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-white hover:scale-105 transition-all duration-500 shadow-[0_0_20px_rgba(249,115,22,0.4)]">
                                Reserve Dates
                            </button>
                            <button className="flex items-center gap-3 text-white px-10 py-4 rounded-full border border-white/20 text-xs font-bold tracking-widest uppercase hover:bg-white/10 hover:border-white/50 transition-all backdrop-blur-md">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                                Watch Film
                            </button>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        style={{ opacity: scrollIndicatorOpacity }}
                        className="absolute bottom-12 flex flex-col items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: preloaderDismissed ? 1 : 0 }}
                        transition={{ delay: 1, duration: 1 }}
                    >
                        <div className="text-[9px] tracking-[0.3em] uppercase text-white/80 mb-4">Discover</div>
                        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
                            <motion.div
                                className="w-full h-full bg-white absolute top-0 left-0"
                                initial={{ y: "-100%" }}
                                animate={{ y: "100%" }}
                                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                            />
                        </div>
                    </motion.div>
                </div>
            </CanvasScroll>
        </div>
    );
}
