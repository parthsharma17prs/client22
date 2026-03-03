"use client";

import { useState, useEffect, useRef } from "react";

interface PreloadOptions {
    sequenceMap: Map<number, HTMLImageElement>;
    folder: string;
    frameCount: number;
    startFrame?: number;
    extension?: string;
    padLength?: number;
}

export function useImagePreloader({ folder, frameCount, sequenceMap, startFrame = 1, extension = "jpg", padLength = 3 }: PreloadOptions) {
    const [progress, setProgress] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        let loadedCount = 0;
        let hasMarkedLoaded = false;
        let isRendered = true;
        const loadOrder: number[] = [];

        // Progressive loading strategy: Load every 5th frame first (0, 5, 10...)
        for (let i = startFrame; i < startFrame + frameCount; i += 5) {
            loadOrder.push(i);
        }
        // Then load the rest
        for (let i = startFrame; i < startFrame + frameCount; i++) {
            const offset = i - startFrame;
            if (offset % 5 !== 0) {
                loadOrder.push(i);
            }
        }

        let nextIndexToLoad = 0;
        const BATCH_SIZE = 15; // Increased concurrency

        const loadNext = () => {
            if (!isRendered) return;

            const currentIndex = nextIndexToLoad++;
            if (currentIndex >= loadOrder.length) {
                return;
            }

            const frameIndex = loadOrder[currentIndex];
            const frameStr = frameIndex.toString().padStart(padLength, "0");
            const img = new Image();
            img.src = `/${folder}/${frameStr}.${extension}`;

            const checkProgress = () => {
                if (!isRendered) return;
                loadedCount++;
                setProgress(Math.floor((loadedCount / frameCount) * 100));

                // Allow the website to show after 30 frames are loaded! Huge speed boost.
                if (loadedCount > 30 && !hasMarkedLoaded) {
                    setIsLoaded(true);
                    hasMarkedLoaded = true;
                }

                loadNext();
            };

            img.onload = () => {
                sequenceMap.set(frameIndex, img);
                checkProgress();
            };

            img.onerror = () => {
                checkProgress();
            };
        };

        // Start initial batch
        for (let i = 0; i < BATCH_SIZE; i++) {
            loadNext();
        }

        return () => {
            isRendered = false; // clean up on unmount
        };
    }, [folder, frameCount, sequenceMap, startFrame, extension]);

    return { progress, isLoaded };
}
