'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
    return (
        <section id="about" className="py-24 px-4 relative z-10 w-full max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
            >
                <h2 className="text-3xl md:text-5xl font-syncopate font-bold text-white mb-4">
                    <span className="text-primary mr-4">01.</span>
                    Identity<span className="text-secondary">_Matrix</span>
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Bio Block (Spans 2 columns) */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="md:col-span-2 glass p-8 rounded-2xl border-l-4 border-l-primary relative overflow-hidden group"
                >
                    {/* Subtle background glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 group-hover:bg-primary/10 transition-colors duration-500"></div>

                    <h3 className="text-2xl font-syncopate font-bold text-white mb-6 flex items-center">
                        <span className="text-secondary mr-2">/</span> Executive Summary
                    </h3>
                    <p className="text-lg text-muted-foreground font-sans leading-relaxed mb-6">
                        I am a Data Scientist and AI & Big Data Engineer currently pursuing a Master of AI at
                        <span className="text-primary font-medium"> SP Jain School of Global Management</span>.
                        My expertise lies in building scalable machine learning pipelines, predictive modeling, and deploying enterprise-grade AI architectures that drive actionable business intelligence.
                    </p>
                    <p className="text-lg text-muted-foreground font-sans leading-relaxed">
                        From processing 913K+ records for predictive analytics to architecting complex sales intelligence dashboards, I bridge the gap between raw data and strategic outcomes.
                    </p>
                </motion.div>

                {/* Profile/Avatar Block */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="glass p-8 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden"
                >
                    {/* Animated Conic Gradient Border */}
                    <div className="relative w-48 h-48 rounded-full p-1 bg-[conic-gradient(from_var(--border-angle),#FF6B35_0%,#0096FF_50%,#FF6B35_100%)] animate-[border-rotate_4s_linear_infinite]">
                        <div className="w-full h-full bg-card rounded-full overflow-hidden border-4 border-background">
                            <img
                                src="/images/profile.jpg"
                                alt="Yash Petkar Avatar"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <div className="text-secondary font-mono text-sm uppercase tracking-widest mb-1">Status</div>
                        <div className="text-white font-syncopate font-bold text-lg">ONLINE_</div>
                    </div>
                </motion.div>

                {/* Highlight 1 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="glass p-6 rounded-2xl border-t-2 border-t-secondary/50 hover:-translate-y-2 transition-transform duration-300"
                >
                    <div className="text-3xl mb-4">🧠</div>
                    <h4 className="text-white font-syncopate font-bold mb-2">AI & ML</h4>
                    <p className="text-muted-foreground text-sm">Deep learning, predictive modeling, and intelligent agent design.</p>
                </motion.div>

                {/* Highlight 2 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="glass p-6 rounded-2xl border-t-2 border-t-primary/50 hover:-translate-y-2 transition-transform duration-300"
                >
                    <div className="text-3xl mb-4">📊</div>
                    <h4 className="text-white font-syncopate font-bold mb-2">Big Data</h4>
                    <p className="text-muted-foreground text-sm">Distributed processing, data warehousing, and ETL pipelines at scale.</p>
                </motion.div>

                {/* Highlight 3 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="glass p-6 rounded-2xl border-t-2 border-t-secondary/50 hover:-translate-y-2 transition-transform duration-300"
                >
                    <div className="text-3xl mb-4">☁️</div>
                    <h4 className="text-white font-syncopate font-bold mb-2">Cloud Native</h4>
                    <p className="text-muted-foreground text-sm">Deploying robust architectures across major cloud infrastructure.</p>
                </motion.div>

            </div>
        </section>
    );
}
