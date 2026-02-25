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

                        {/* Capsule Outline */}
                        <div className="w-[60px] h-[160px] md:w-[80px] md:h-[220px] border border-white/20 rounded-full overflow-hidden relative p-[3px]">
                            {/* Capsule Fill */}
                            <motion.div
                                className="absolute bottom-[3px] left-[3px] right-[3px] bg-white rounded-full origin-bottom"
                                initial={{ height: "0%" }}
                                animate={{ height: `calc(${displayProgress}% - 6px)` }}
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
                        className="flex flex-col items-center justify-center"
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: preloaderDismissed ? 1 : 0, y: preloaderDismissed ? 0 : 30 }}
                            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                            className="font-sans text-6xl md:text-[9rem] tracking-tight text-white mb-6 font-light drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                        >
                            Capsules
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: preloaderDismissed ? 1 : 0, y: preloaderDismissed ? 0 : 20 }}
                            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                            className="font-sans font-light text-base md:text-lg text-white/90 leading-relaxed tracking-[0.1em] md:tracking-[0.2em] uppercase drop-shadow-md"
                        >
                            Absolute isolation. Perfect luxury.
                        </motion.p>
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
