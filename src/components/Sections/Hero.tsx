"use client";

import { useMemo, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CanvasScroll from "@/components/CanvasScroll/CanvasScroll";
import { useImagePreloader } from "@/hooks/useImagePreloader";

export default function Hero() {
    const sequenceMap = useMemo(() => new Map<number, HTMLImageElement>(), []);
    const frameCount = 938; // 938 images in the folder, or 120 as per plan? The folder has 938 frames, we could use first 400. Let's use 400.
    const { progress, isLoaded } = useImagePreloader({
        folder: "sequence-1",
        frameCount: 400,
        sequenceMap,
        extension: "jpg",
        padLength: 5,
    });

    const { scrollYProgress } = useScroll();

    // Fade out "What are you waiting for?" at 20%
    const waitingOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    // Escape text fades in early and stays
    const escapeOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
    const escapeY = useTransform(scrollYProgress, [0.1, 0.3], [50, 0]);

    // Schedule button appears at 80% scroll
    const scheduleOpacity = useTransform(scrollYProgress, [0.7, 0.8], [0, 1]);

    if (!isLoaded && progress < 10) {
        return (
            <div className="w-full h-screen flex flex-col items-center justify-center bg-[#1A1A1A] text-white">
                <h2 className="font-serif tracking-[0.2em] uppercase text-2xl mb-4 text-[#1FB4B4]">Loading Experience</h2>
                <div className="text-4xl font-light tracking-widest">{progress}%</div>
            </div>
        );
    }

    // Split text for "ESCAPE"
    const escapeWord = "ESCAPE";
    const theOrdinary = "THE ORDINARY.";

    return (
        <div className="relative">
            <CanvasScroll sequenceMap={sequenceMap} frameCount={400}>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <motion.div
                        style={{ opacity: waitingOpacity }}
                        className="text-white/80 font-sans tracking-[0.2em] uppercase text-sm md:text-xl absolute top-[30%]"
                    >
                        What are you waiting for?
                    </motion.div>

                    <motion.div
                        style={{ opacity: escapeOpacity, y: escapeY }}
                        className="flex flex-col items-center justify-center"
                    >
                        <h1 className="font-serif text-5xl md:text-8xl tracking-[0.1em] uppercase text-white mb-6">
                            <span className="flex gap-2">
                                {escapeWord.split("").map((char, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 + 0.5, duration: 0.8 }}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </span>
                            <span className="block mt-4 text-3xl md:text-6xl text-white/90">
                                {theOrdinary}
                            </span>
                        </h1>
                        <p className="max-w-xl font-sans font-light md:text-lg text-white/80 mt-4 leading-relaxed tracking-wide">
                            Architectural sanctuaries designed to dissolve the boundary between soul and nature.
                        </p>
                    </motion.div>

                    <motion.div
                        style={{ opacity: scheduleOpacity }}
                        className="absolute bottom-20 md:bottom-32"
                    >
                        <button className="bg-[#1FB4B4] hover:bg-[#1FB4B4]/80 text-white px-10 py-4 tracking-[0.2em] font-semibold text-sm transition-all shadow-xl shadow-[#1FB4B4]/20 hover:scale-105 active:scale-95 uppercase">
                            Schedule Your Escape
                        </button>
                    </motion.div>
                </div>
            </CanvasScroll>
        </div>
    );
}
