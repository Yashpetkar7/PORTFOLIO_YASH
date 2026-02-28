'use client';

import { motion } from 'framer-motion';
import { ExternalLink, FileText, Award } from 'lucide-react';

export default function CredentialsVault() {
    return (
        <section id="certifications" className="py-24 px-4 relative z-10 w-full max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
            >
                <h2 className="text-3xl md:text-5xl font-syncopate font-bold text-white mb-4">
                    <span className="text-primary mr-4">04.</span>
                    Credentials<span className="text-secondary">_Vault</span>
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary"></div>
            </motion.div>

            {/* Masonry Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[minmax(200px,auto)] gap-6">

                {/* Primary Research Paper Card (Spans 2 columns, 2 rows) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="md:col-span-2 md:row-span-2 glass-amber p-8 rounded-3xl relative overflow-hidden group flex flex-col justify-between"
                >
                    {/* Abstract backdrop */}
                    <div className="absolute -inset-10 bg-gradient-to-br from-primary/10 to-transparent blur-2xl z-0 pointer-events-none group-hover:opacity-100 opacity-50 transition-opacity duration-700"></div>

                    <div className="relative z-10 flex justify-between items-start mb-6">
                        <div className="p-4 bg-primary/20 text-primary rounded-xl backdrop-blur-sm border border-primary/30">
                            <FileText size={32} />
                        </div>
                        <span className="font-mono text-xs uppercase tracking-widest text-[#FFD700] px-3 py-1 rounded bg-[#FFD700]/10 border border-[#FFD700]/30 shadow-[0_0_10px_rgba(255,215,0,0.2)]">
                            Published Paper
                        </span>
                    </div>

                    <div className="relative z-10">
                        <h3 className="text-2xl md:text-4xl font-syncopate font-bold text-white mb-4 leading-tight group-hover:text-primary transition-colors">
                            Pneumonia Detection using Convolutional Neural Networks
                        </h3>
                        <p className="text-lg text-primary/80 font-space mb-6 font-medium">
                            IJCRT Vol-10, Issue 5, May 2022 | ISSN: 2320-2882
                        </p>
                        <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                            A comprehensive study on utilizing deep learning architectures to assist medical professionals in identifying pneumonia from chest X-rays with high precision and recall, reducing false negatives in critical diagnosis.
                        </p>

                        <a href="#" className="inline-flex items-center space-x-2 text-white bg-white/10 border border-white/20 hover:bg-primary/20 hover:border-primary hover:text-primary px-6 py-3 rounded-full transition-all duration-300">
                            <span className="font-syncopate text-sm font-bold tracking-wider">Access Publication</span>
                            <ExternalLink size={16} />
                        </a>
                    </div>
                </motion.div>

                {/* Certification Cards */}
                {[
                    {
                        title: "AWS Certified Machine Learning – Specialty",
                        issuer: "Amazon Web Services",
                        date: "Oct 2023"
                    },
                    {
                        title: "TensorFlow Developer Certificate",
                        issuer: "Google",
                        date: "Aug 2023"
                    },
                    {
                        title: "Data Engineering with Google Cloud",
                        issuer: "Coursera",
                        date: "May 2023"
                    },
                    {
                        title: "Applied Data Science with Python",
                        issuer: "University of Michigan",
                        date: "Jan 2023"
                    }
                ].map((cert, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                        className="glass p-6 rounded-2xl flex flex-col group hover:-translate-y-2 transition-transform duration-300 border-t border-white/5"
                    >
                        <div className="text-secondary/60 mb-4 bg-secondary/10 p-3 rounded-lg w-fit group-hover:text-secondary group-hover:bg-secondary/20 transition-colors">
                            <Award size={24} />
                        </div>
                        <h3 className="text-lg font-syncopate font-bold text-white mb-2 leading-snug">{cert.title}</h3>
                        <div className="mt-auto pt-4 flex justify-between items-center text-sm font-mono text-muted-foreground border-t border-white/5">
                            <span>{cert.issuer}</span>
                            <span className="text-primary">{cert.date}</span>
                        </div>
                    </motion.div>
                ))}

            </div>
        </section>
    );
}
