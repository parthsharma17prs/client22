"use client";

import { useState, useEffect, useRef } from "react";

interface PreloadOptions {
    sequenceMap: Map<number, HTMLImageElement>;
    folder: string;
    frameCount: number;
    extension?: string;
    padLength?: number;
}

export function useImagePreloader({ folder, frameCount, sequenceMap, extension = "jpg", padLength = 3 }: PreloadOptions) {
    const [progress, setProgress] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        let loadedCount = 0;
        const loadOrder: number[] = [];

        // Progressive loading strategy: Load every 5th frame first (0, 5, 10...)
        for (let i = 1; i <= frameCount; i += 5) {
            loadOrder.push(i);
        }
        // Then load the rest
        for (let i = 1; i <= frameCount; i++) {
            if (i % 5 !== 1) { // 1 based indexing for 1, 6, 11...
                loadOrder.push(i);
            }
        }

        const loadNext = (index: number) => {
            if (index >= loadOrder.length) {
                setIsLoaded(true);
                return;
            }
            const frameIndex = loadOrder[index];
            // Format number to 3 digits like 001.jpg
            const frameStr = frameIndex.toString().padStart(padLength, "0");
            const img = new Image();
            img.src = `/${folder}/${frameStr}.${extension}`;

            img.onload = () => {
                sequenceMap.set(frameIndex, img);
                loadedCount++;
                setProgress(Math.floor((loadedCount / frameCount) * 100));
                loadNext(index + 1); // load sequentially or start a batch?
            };

            img.onerror = () => {
                // skip on error
                loadedCount++;
                loadNext(index + 1);
            };
        };

        // To speed up, we can load in batches of 5 to not block completely nor wait too long
        const BATCH_SIZE = 10;
        for (let i = 0; i < BATCH_SIZE; i++) {
            loadNext(i);
        }

    }, [folder, frameCount, sequenceMap, extension]);

    return { progress, isLoaded };
}
