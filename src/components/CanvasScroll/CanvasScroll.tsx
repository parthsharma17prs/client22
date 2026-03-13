"use client";

import { useEffect, useRef } from "react";
import { useScroll, useSpring } from "framer-motion";

interface CanvasScrollProps {
    sequenceMap: Map<number, HTMLImageElement>;
    frameCount: number;
    startFrame?: number;
    children?: React.ReactNode;
}

export default function CanvasScroll({ sequenceMap, frameCount, startFrame = 1, children }: CanvasScrollProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const frameIndexRef = useRef<number>(startFrame);
    const animationFrameId = useRef<number>();

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Using a more "lush" spring for the scroll progress
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 40,
        damping: 20,
        restDelta: 0.0001
    });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d", { alpha: false }); // Better performance
        if (!ctx) return;

        const updateCanvasSize = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;

            // Re-render current frame on resize
            renderFrame(frameIndexRef.current);
        };

        const renderFrame = (index: number) => {
            const img = sequenceMap.get(index);
            if (!img || !ctx) return;

            const cw = canvas.width;
            const ch = canvas.height;

            // Clear isn't strictly necessary if we cover the whole canvas
            // but helps with alpha issues if they exist
            // ctx.clearRect(0, 0, cw, ch);

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

            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = "high";
            ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        };

        const loop = () => {
            const latest = smoothProgress.get();
            const targetFrame = startFrame + Math.max(0, Math.floor(latest * (frameCount - 1)));

            if (targetFrame !== frameIndexRef.current) {
                frameIndexRef.current = targetFrame;
                renderFrame(targetFrame);
            }

            animationFrameId.current = requestAnimationFrame(loop);
        };

        updateCanvasSize();
        window.addEventListener("resize", updateCanvasSize);
        animationFrameId.current = requestAnimationFrame(loop);

        return () => {
            window.removeEventListener("resize", updateCanvasSize);
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, [smoothProgress, sequenceMap, frameCount, startFrame]);

    return (
        <div ref={containerRef} className="relative w-full h-[500vh]">
            <div className="sticky top-0 w-full h-screen overflow-hidden bg-black">
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
                {children}
            </div>
        </div>
    );
}
