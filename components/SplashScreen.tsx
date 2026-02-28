'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CRTOverlay from './CRTOverlay';

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
    const [progress, setProgress] = useState(0);
    const [textIndex, setTextIndex] = useState(0);

    const bootSequence = [
        'INITIALIZING QUANTUM CORE...',
        'ESTABLISHING NEURAL LINK...',
        'LOADING BIG DATA MODULES...',
        'SYNCING AI PARADIGMS...',
        'BYPASSING SECURITY PROTOCOLS...',
        'ACCESS GRANTED. WELCOME YASH PETKAR.',
    ];

    useEffect(() => {
        const duration = 2500; // total duration of splash
        const intervalTime = 50;
        const increment = 100 / (duration / intervalTime);

        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(onComplete, 800); // Wait a bit after 100%
                    return 100;
                }
                return prev + increment;
            });
        }, intervalTime);

        return () => clearInterval(timer);
    }, [onComplete]);

    useEffect(() => {
        // Determine which text to show based on progress
        const index = Math.min(
            Math.floor((progress / 100) * bootSequence.length),
            bootSequence.length - 1
        );
        setTextIndex(index);
    }, [progress, bootSequence.length]);

    const [hexElements, setHexElements] = useState<{ color: string, opacity: string }[]>([]);

    useEffect(() => {
        // Generate random elements only on the client side to avoid hydration mismatch
        const elements = Array.from({ length: 32 }).map(() => ({
            color: Math.random() > 0.5 ? 'bg-primary' : 'bg-secondary',
            opacity: Math.random() > 0.7 ? 'opacity-100' : 'opacity-0'
        }));
        setHexElements(elements);
    }, []);

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black font-mono text-white"
                initial={{ opacity: 1 }}
                exit={{
                    opacity: 0,
                    scale: 1.1,
                    filter: 'blur(10px)',
                    transition: { duration: 0.8, ease: 'easeInOut' }
                }}
            >
                <CRTOverlay className="absolute inset-0 z-50 pointer-events-none" />
                <div className="w-full max-w-2xl px-8 relative z-10">
                    {/* Header */}
                    <div className="mb-8 flex justify-between text-xs text-primary opacity-70">
                        <span>SYS_BOOT: v9.4.2</span>
                        <span>UPLINK: SECURE</span>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="relative h-2 w-full overflow-hidden rounded-full bg-white/10">
                        <motion.div
                            className="absolute left-0 top-0 h-full bg-primary"
                            style={{ width: `${progress}%` }}
                            layout
                        />
                    </div>

                    {/* Boot Text & Percentage */}
                    <div className="mt-4 flex items-center justify-between font-mono">
                        <span className="text-secondary opacity-80 animate-pulse text-sm">
                            {bootSequence[textIndex]}
                        </span>
                        <span className="text-primary tracking-widest text-lg">
                            {Math.floor(progress)}%
                        </span>
                    </div>

                    {/* Hex decorative elements */}
                    <div className="mt-12 grid grid-cols-8 gap-2 opacity-20">
                        {hexElements.length > 0 ? (
                            hexElements.map((el, i) => (
                                <div
                                    key={i}
                                    className={`h-2 w-full ${el.color} ${el.opacity}`}
                                />
                            ))
                        ) : (
                            // Placeholder during SSR to match the grid structure
                            Array.from({ length: 32 }).map((_, i) => (
                                <div key={i} className="h-2 w-full bg-transparent" />
                            ))
                        )}
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
