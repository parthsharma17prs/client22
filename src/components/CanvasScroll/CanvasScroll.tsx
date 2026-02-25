"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useSpring } from "framer-motion";

interface CanvasScrollProps {
    sequenceMap: Map<number, HTMLImageElement>;
    frameCount: number;
    children?: React.ReactNode;
}

export default function CanvasScroll({ sequenceMap, frameCount, children }: CanvasScrollProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const { scrollYProgress } = useScroll({ target: containerRef });
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const renderFrame = (index: number) => {
            const img = sequenceMap.get(index);
            if (!img) return;

            const dpr = window.devicePixelRatio || 1;
            // We set canvas internal dimensions to match screen pixels
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;

            const cw = canvas.width;
            const ch = canvas.height;

            ctx.clearRect(0, 0, cw, ch);

            const imgRatio = img.width / img.height;
            const canvasRatio = cw / ch;

            let drawWidth, drawHeight, offsetX, offsetY;

            if (imgRatio > canvasRatio) {
                drawHeight = ch;
                drawWidth = img.width * (ch / img.height);
                offsetX = (cw - drawWidth) / 2;
                offsetY = 0;
            } else {
                drawWidth = cw;
                drawHeight = img.height * (cw / img.width);
                offsetX = 0;
                offsetY = (ch - drawHeight) / 2;
            }

            ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        };

        // Render initial frame
        if (sequenceMap.size > 0) {
            renderFrame(1);
        }

        const unsub = smoothProgress.on("change", (latest) => {
            const frameIndex = Math.max(1, Math.floor(latest * (frameCount - 1)) + 1);
            renderFrame(frameIndex);
        });

        const handleResize = () => {
            const latest = smoothProgress.get();
            const frameIndex = Math.max(1, Math.floor(latest * (frameCount - 1)) + 1);
            renderFrame(frameIndex);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            unsub();
            window.removeEventListener("resize", handleResize);
        };
    }, [smoothProgress, sequenceMap, frameCount]);

    return (
        <div ref={containerRef} className="relative w-full h-[400vh]">
            <div className="sticky top-0 w-full h-screen overflow-hidden bg-black">
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                {/* We can have an overlay for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                {children}
            </div>
        </div>
    );
}
