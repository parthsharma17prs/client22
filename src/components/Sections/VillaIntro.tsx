"use client";

import { useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CanvasScroll from "@/components/CanvasScroll/CanvasScroll";
import { useImagePreloader } from "@/hooks/useImagePreloader";

export default function VillaIntro() {
    const sequenceMap = useMemo(() => new Map<number, HTMLImageElement>(), []);

    // Using another chunk of frames from sequence-1 because sequence-2 isn't explicitly provided
    const { isLoaded } = useImagePreloader({
        folder: "sequence-1",
        frameCount: 400,
        sequenceMap,
        extension: "jpg",
        padLength: 5,
    });

    const { scrollYProgress } = useScroll();

    // "You Deserve It" text scale and opacity
    const textScale = useTransform(scrollYProgress, [0.3, 0.7], [0.95, 1.05]);
    const textOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.6, 0.7], [0, 1, 1, 0]);

    return (
        <div className="relative">
            <CanvasScroll sequenceMap={sequenceMap} frameCount={400}>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <motion.div
                        style={{ scale: textScale, opacity: textOpacity }}
                        className="text-white text-5xl md:text-7xl font-serif tracking-[0.1em] text-center drop-shadow-2xl"
                    >
                        YOU DESERVE IT.
                        <div className="text-xl md:text-2xl font-sans font-light mt-6 tracking-widest uppercase opacity-80">
                            The Oceanfront Villa
                        </div>
                    </motion.div>
                </div>
            </CanvasScroll>
        </div>
    );
}
