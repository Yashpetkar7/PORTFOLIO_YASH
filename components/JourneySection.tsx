'use client';

import { motion } from 'framer-motion';

const modules = [
    {
        id: "01",
        title: "Executive Operations & Leadership",
        description: "Spearheaded operational strategies and execution as a founding member and investor, establishing rigorous frameworks for organizational growth. Mentored and developed engineering talent, instilling elite best practices in seamless model deployment and robust system architecture."
    },
    {
        id: "02",
        title: "Cloud-Native ML Architecture",
        description: "Architected enterprise-grade machine learning pipelines from the ground up. Developed and deployed complex predictive models utilizing PyTorch and scikit-learn, entirely hosted and dynamically scaled on reliable AWS infrastructure."
    },
    {
        id: "03",
        title: "High-Performance Data Optimization",
        description: "Engineered high-throughput data ingestion and processing workflows for massive datasets. Designed real-time data streaming architectures using Kafka, and successfully reduced model inference latency by a critical 45% utilizing TensorRT optimization."
    }
];

export default function JourneySection() {
    return (
        <section id="experience" className="py-24 px-4 relative z-10 w-full max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16 text-center"
            >
                <h2 className="text-3xl md:text-5xl font-syncopate font-bold text-white mb-4">
                    <span className="text-secondary mr-4">03.</span>
                    Executive<span className="text-primary">_Briefing</span>
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-secondary to-primary mx-auto"></div>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-16 relative items-start">

                {/* Left Side: Sticky Role Identity */}
                <div className="w-full lg:w-1/3 lg:sticky lg:top-32 glass p-8 rounded-2xl border-t border-l border-white/20">
                    <div className="flex items-center space-x-3 mb-6">
                        <div className="h-2 w-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(245,158,11,0.8)]"></div>
                        <span className="font-mono text-xs text-primary tracking-widest uppercase">Live Operations</span>
                    </div>

                    <h3 className="text-3xl font-syncopate font-bold text-white mb-2 leading-tight">
                        Voyage Mintus
                    </h3>

                    <h4 className="text-xl text-secondary font-space mb-6 font-medium">
                        Head of Operations, Investor & Founding Member
                    </h4>

                    <div className="inline-block px-4 py-2 bg-white/5 font-mono text-sm text-white/70 rounded-md border border-white/10 mb-8">
                        2023 — Present
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed border-l-2 border-primary/50 pl-4 italic">
                        "Driving the architectural convergence of Big Data processing and enterprise-level machine learning pipelines to ensure robust, real-time predictive capabilities."
                    </p>
                </div>

                {/* Right Side: Scrollable Impact Modules */}
                <div className="w-full lg:w-2/3 space-y-8 lg:space-y-12 pb-12">
                    {modules.map((mod, idx) => (
                        <motion.div
                            key={mod.id}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.1 * idx }}
                            className="glass p-8 rounded-2xl border border-white/5 hover:border-secondary/30 transition-colors group relative overflow-hidden dim-trigger z-10 hover:z-50"
                        >
                            {/* Decorative Grid Background on Hover */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                            <div className="flex flex-col md:flex-row gap-6 items-start relative z-10">
                                <span className="text-6xl font-syncopate font-bold text-white/5 group-hover:text-secondary/10 transition-colors duration-500 leading-none">
                                    {mod.id}
                                </span>

                                <div>
                                    <h4 className="text-xl font-space font-bold text-white mb-4 group-hover:text-secondary transition-colors">
                                        {mod.title}
                                    </h4>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {mod.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
