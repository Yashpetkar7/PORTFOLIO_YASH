'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import CRTOverlay from './CRTOverlay';

export default function ContactTerminal() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<null | 'sending' | 'success'>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        // Simulate network request
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus(null), 3000);
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 px-4 relative z-10 w-full max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16 text-center"
            >
                <h2 className="text-3xl md:text-5xl font-syncopate font-bold text-white mb-4">
                    <span className="text-secondary mr-4">05.</span>
                    Establish<span className="text-primary">_Uplink</span>
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-secondary to-primary mx-auto"></div>
                <p className="text-muted-foreground mt-6 font-mono max-w-lg mx-auto">
                    {"// Open to new opportunities, collaborations, or discussing the future of AI."}
                </p>
            </motion.div>

            {/* Terminal Window */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-xl overflow-hidden border border-white/20 shadow-2xl bg-black/90 backdrop-blur-xl relative"
            >
                <CRTOverlay className="absolute inset-0 z-50 rounded-xl pointer-events-none" />
                {/* macOS Top Bar */}
                <div className="flex items-center px-4 py-3 bg-white/5 border-b border-white/10">
                    <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <div className="mx-auto flex-1 text-center pr-12">
                        <span className="text-xs font-mono text-muted-foreground">yash_petkar@quantum-core:~</span>
                    </div>
                </div>

                {/* Terminal Body */}
                <div className="p-6 md:p-8 font-mono text-sm text-[#00ff00]">
                    <div className="mb-6 opacity-80">
                        <p className="mb-1 text-primary">{">"} initializing secure connection protocol...</p>
                        <p className="mb-1">{">"} 200 OK</p>
                        <p className="mb-4 text-secondary">{">"} please provide your credentials and payload:</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="group">
                            <label htmlFor="name" className="block mb-2 opacity-70 group-hover:opacity-100 transition-opacity">
                                <span className="text-secondary">const</span> name = <span className="animate-pulse">_</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                required
                                className="w-full bg-black/50 border border-white/10 rounded-md p-3 text-white focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/50 placeholder-[#00ff00]/20 transition-all font-sans"
                                placeholder="'John Doe'"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>

                        <div className="group">
                            <label htmlFor="email" className="block mb-2 opacity-70 group-hover:opacity-100 transition-opacity">
                                <span className="text-secondary">const</span> email = <span className="animate-pulse">_</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                required
                                className="w-full bg-black/50 border border-white/10 rounded-md p-3 text-white focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/50 placeholder-[#00ff00]/20 transition-all font-sans"
                                placeholder="'john@example.com'"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div className="group">
                            <label htmlFor="message" className="block mb-2 opacity-70 group-hover:opacity-100 transition-opacity">
                                <span className="text-secondary">const</span> payload = <span className="animate-pulse">_</span>
                            </label>
                            <textarea
                                id="message"
                                required
                                rows={4}
                                className="w-full bg-black/50 border border-white/10 rounded-md p-3 text-white focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/50 placeholder-[#00ff00]/20 transition-all font-sans resize-none"
                                placeholder="'Hello World...'"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            ></textarea>
                        </div>

                        <div className="pt-4 flex items-center justify-between">
                            <button
                                type="submit"
                                disabled={status === 'sending' || status === 'success'}
                                className="px-6 py-3 bg-secondary/10 border border-secondary text-secondary hover:bg-secondary hover:text-white rounded font-syncopate font-bold text-sm tracking-wider transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === 'sending' ? '> EXECUTING...' : '> SEND_PAYLOAD()'}
                            </button>

                            {status === 'success' && (
                                <span className="text-primary font-bold animate-pulse">
                                    {">"} UPLINK_SUCCESSFUL
                                </span>
                            )}
                        </div>
                    </form>
                </div>
            </motion.div>
        </section>
    );
}
