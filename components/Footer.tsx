'use client';

import { Github, Linkedin, Mail, Twitter, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative z-10 w-full border-t border-white/10 bg-black/80 backdrop-blur-md pt-16 pb-8 px-4 mt-20">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                {/* Abstract Top Elements */}
                <div className="w-full flex justify-between items-center mb-12 opacity-30">
                    <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent flex-1"></div>
                    <span className="font-mono text-xs tracking-[0.3em] px-4 text-primary">QUANTUM_SYS_TERM</span>
                    <div className="h-px bg-gradient-to-r from-transparent via-secondary to-transparent flex-1"></div>
                </div>

                <div className="flex flex-col md:flex-row justify-between w-full mb-12 items-center gap-8">

                    <div className="text-center md:text-left">
                        <h2 className="font-syncopate font-bold text-2xl text-white mb-2">
                            YASH <span className="text-secondary">PETKAR</span>
                        </h2>
                        <p className="font-mono text-sm text-muted-foreground">
                            AI & Big Data Engineer • Data Scientist
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        <SocialLink href="#" icon={<Github size={20} />} label="GitHub" />
                        <SocialLink href="#" icon={<Linkedin size={20} />} label="LinkedIn" />
                        <SocialLink href="#" icon={
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.52 0 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm-1-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4 7h-2v-6h2v6zm-1-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4 7h-2v-6h2v6zm-1-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" clipRule="evenodd" fillRule="evenodd" opacity="0" />
                                <path d="M18.75 3.5h-13.5c-1.24 0-2.25 1.01-2.25 2.25v13.5c0 1.24 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.01 2.25-2.25v-13.5c0-1.24-1.01-2.25-2.25-2.25zM9.54 18.52h-2.31v-7.38h2.31v7.38zm-1.16-8.39c-.74 0-1.34-.6-1.34-1.33 0-.74.6-1.34 1.34-1.34.73 0 1.33.6 1.33 1.34 0 .73-.6 1.33-1.33 1.33zm8.56 8.39h-2.31v-3.79c0-.91-.02-2.07-1.26-2.07-1.26 0-1.46 1-1.46 2.01v3.85h-2.31v-7.38h2.22v1.01h.03c.31-.59 1.07-1.21 2.2-1.21 2.35 0 2.79 1.55 2.79 3.56v4.02z" />
                            </svg>
                        } label="Kaggle" />
                        <SocialLink href="#" icon={
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.12 14.54l-1.04-.66c-1.35-.85-2.21-2.36-2.21-3.95V7.47h2v4.46c0 1.05.57 2.05 1.48 2.63l.8.5-.8 1.47c-.02.04-.15.22-.23.01zM7 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                <path d="M3.56 12a8.44 8.44 0 1 1 16.88 0 8.44 8.44 0 0 1-16.88 0z" fillRule="evenodd" clipRule="evenodd" opacity="0" />
                                <path d="M3.7 13.5c.36 3.55 3.32 6.3 6.94 6.3 3.86 0 7-3.14 7-7s-3.14-7-7-7c-3.6 0-6.55 2.72-6.93 6.24L2 12l2.36 1.14c.24-4 3.58-7.24 7.64-7.24 4.25 0 7.7 3.45 7.7 7.7s-3.45 7.7-7.7 7.7c-4.06 0-7.39-3.2-7.64-7.16L2 13l1.7.5z" />
                            </svg>
                        } label="Medium" />
                        <SocialLink href="#" icon={<Instagram size={20} />} label="Instagram" />
                    </div>

                </div>

                <div className="flex flex-col md:flex-row justify-between items-center w-full pt-8 border-t border-white/5 text-sm font-mono text-muted-foreground">
                    <p>© {currentYear} Yash Petkar. All Rights Reserved.</p>
                    <div className="mt-4 md:mt-0 flex items-center space-x-2">
                        <span className="text-secondary/60">Built with</span>
                        <span className="text-white hover:text-primary transition-colors cursor-crosshair">Next.js</span>,
                        <span className="text-white hover:text-primary transition-colors cursor-crosshair">Three.js</span> &
                        <span className="text-white hover:text-primary transition-colors cursor-crosshair">TailwindCSS</span>
                    </div>
                </div>

            </div>
        </footer>
    );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3, scale: 1.1 }}
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/70 hover:text-primary hover:border-primary/50 transition-colors"
            title={label}
        >
            {icon}
        </motion.a>
    );
}
