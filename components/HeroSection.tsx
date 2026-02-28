'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import Hero3DHUD from './Hero3DHUD';
import StatsChips from './StatsChips';

const roles = ['AI & Big Data Engineer', 'Data Scientist', 'ML Practitioner'];

export default function HeroSection() {
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 4000); // 4 seconds per role
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 overflow-hidden">

            {/* Main Content Layout */}
            <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 z-10">

                {/* Left Text Column */}
                <div className="flex-1 flex flex-col items-start text-left space-y-6">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h2 className="text-primary font-space font-medium tracking-widest uppercase mb-2">
                            System Online // Identity Confirmed
                        </h2>
                        <h1 className="text-5xl md:text-7xl font-syncopate font-bold text-gradient leading-tight">
                            YASH PETKAR
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="h-12 flex items-center"
                    >
                        <span className="text-2xl md:text-3xl font-space text-white/90">
                            <span className="text-white/40 mr-2">&gt;</span>
                            <span className="relative">
                                {roles.map((role, idx) => (
                                    <motion.span
                                        key={role}
                                        className="absolute left-0 top-0 whitespace-nowrap"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{
                                            opacity: idx === roleIndex ? 1 : 0,
                                            y: idx === roleIndex ? 0 : -20,
                                            pointerEvents: idx === roleIndex ? 'auto' : 'none'
                                        }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {role}
                                    </motion.span>
                                ))}
                                {/* Invisible placeholder to maintain height/width */}
                                <span className="opacity-0 pointer-events-none">AI & Big Data Engineer</span>
                            </span>
                            <motion.span
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ duration: 1, repeat: Infinity }}
                                className="inline-block w-4 h-8 bg-secondary ml-1 align-middle"
                            />
                        </span>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="font-mono text-muted-foreground max-w-lg mt-8"
                    >
                        Architecting intelligent systems and turning complex data into actionable insights with military-grade precision.
                    </motion.p>
                </div>

                {/* Right 3D HUD & Profile */}
                <div className="flex-1 relative w-full aspect-square max-w-[500px]">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="absolute inset-0 z-0"
                    >
                        <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
                            <ambientLight intensity={0.5} />
                            <Hero3DHUD />
                        </Canvas>
                    </motion.div>

                    {/* Profile Photo contained within exactly center of the 3D HUD */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.5, type: 'spring', bounce: 0.4 }}
                        className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
                    >
                        <div className="w-[45%] h-[45%] rounded-full overflow-hidden border-2 border-primary/50 shadow-[0_0_30px_rgba(255,107,53,0.3)] bg-black/50 backdrop-blur-sm relative">
                            {/* Fallback pattern until image loads or if missing */}
                            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,107,53,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] pointer-events-none" />
                            <img
                                src="/images/profile.jpg"
                                alt="Yash Petkar"
                                className="w-full h-full object-cover opacity-90 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500 pointer-events-auto"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Stats Chips */}
            <div className="w-full z-10 pb-10">
                <StatsChips />
            </div>

        </section>
    );
}
