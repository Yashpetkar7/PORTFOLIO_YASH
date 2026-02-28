'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import CRTOverlay from './CRTOverlay';

const projects = [
    {
        title: "Forest Fire Prediction",
        description: "Machine learning model to predict forest fire occurrences based on meteorological data with high accuracy.",
        techStack: ["Python", "Scikit-Learn", "Pandas", "Flask"],
        architecture: "[SYSTEM] -> Data Ingestion -> Feature Engineering -> Random Forest -> REST API",
        github: "#",
        demo: "#"
    },
    {
        title: "Lung Cancer Risk Analysis",
        description: "Predictive analytics tool analyzing patient history and environmental factors to assess lung cancer risk probabilities.",
        techStack: ["Python", "TensorFlow", "Seaborn", "Streamlit"],
        architecture: "[PIPELINE] -> Client Data -> Deep Neural Net -> Risk Scoring -> Streamlit UI",
        github: "#",
        demo: "#"
    },
    {
        title: "Insurance Analysis",
        description: "Statistical analysis model determining insurance premiums based on individual health and lifestyle metrics.",
        techStack: ["R", "XGBoost", "ggplot2", "Shiny"],
        architecture: "[ANALYTICS] -> Claims DB -> XGBoost Ensembles -> Premium Calculation -> Dashboard",
        github: "#",
        demo: "#"
    },
    {
        title: "Google Play EDA",
        description: "Comprehensive exploratory data analysis on a dataset containing over 913K records of app metrics to identify market trends.",
        techStack: ["Apache Spark", "Python", "Matplotlib", "Jupyter"],
        architecture: "[BIG DATA] -> 913K+ Records -> PySpark Cluster -> Aggregations -> Visuals",
        github: "#",
        demo: "#"
    }
];

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-24 px-4 relative z-10 w-full max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
            >
                <h2 className="text-3xl md:text-5xl font-syncopate font-bold text-white mb-4">
                    <span className="text-primary mr-4">02.</span>
                    Data_Driven<span className="text-secondary">_Architectures</span>
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary"></div>
            </motion.div>

            {/* Featured Project */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-16 relative group dim-trigger z-10 hover:z-50 transition-all"
            >
                {/* Gold Border Glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FFD700] via-primary to-[#FFD700] rounded-2xl opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

                <div className="relative glass p-8 md:p-12 rounded-2xl bg-black/80 flex flex-col md:flex-row gap-8 items-center border border-[#FFD700]/30 backdrop-blur-xl">

                    <div className="w-full md:w-1/2 rounded-xl overflow-hidden border border-white/10 group-hover:border-primary/50 transition-colors duration-500 aspect-video relative">
                        <CRTOverlay className="absolute inset-0 z-50 rounded-xl pointer-events-none" />
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,107,53,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:10px_10px] pointer-events-none z-10 mix-blend-overlay" />
                        <div className="w-full h-full bg-card/80 flex items-center justify-center text-secondary/30 font-mono text-sm shadow-inner">[DASHBOARD VISUALIZATION STREAM]</div>
                    </div>

                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                        <div className="flex items-center space-x-2 mb-2">
                            <span className="px-2 py-1 text-xs font-mono font-bold text-black bg-[#FFD700] rounded-sm uppercase tracking-wider">Enterprise Level</span>
                        </div>
                        <h3 className="text-3xl font-syncopate font-bold text-white mb-4 group-hover:text-primary transition-colors">
                            Lulu Sales Intelligence Dashboard
                        </h3>

                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            A comprehensive, real-time sales dashboard integrating historical data with live streaming pipelines. Features complex forecasting models, interactive multi-chart visualizations, and granular temporal metrics mapping numeric IDs to meaningful entities. Containerized with Docker for seamless deployment.
                        </p>

                        <div className="mb-6 flex flex-wrap gap-2">
                            {['PostgreSQL', 'Python', 'Next.js', 'Tailwind', 'Docker'].map(tech => (
                                <span key={tech} className="text-xs font-space px-3 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/20">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="relative bg-black/50 p-3 rounded-lg border border-white/5 font-mono text-xs text-[#FFD700] mb-8 overflow-hidden group/arch">
                            <CRTOverlay className="absolute inset-0 z-50 pointer-events-none opacity-50 rounded-lg group-hover/arch:opacity-100 transition-opacity" />
                            <div className="relative z-10 overflow-x-auto whitespace-nowrap">
                                {`[ARCHITECTURE] -> Data Generation -> PostgreSQL DB -> Python Backend (Forecasting) -> Next.js Edge Runtime -> Real-time UI`}
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <a href="#" className="flex items-center space-x-2 text-white hover:text-primary transition-colors">
                                <Github size={20} /> <span className="font-space text-sm">Repository</span>
                            </a>
                            <a href="#" className="flex items-center space-x-2 text-white hover:text-secondary transition-colors">
                                <ExternalLink size={20} /> <span className="font-space text-sm">Live Dashboard</span>
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, idx) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                        className="glass p-8 rounded-2xl flex flex-col h-full group hover:border-primary/50 relative overflow-hidden dim-trigger z-10 hover:z-50 transition-all duration-300"
                    >
                        {/* Hover abstract background */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/0 rounded-full blur-2xl -z-10 group-hover:bg-primary/10 transition-colors duration-500 translate-x-10 -translate-y-10"></div>

                        <div className="flex justify-between items-start mb-6">
                            <h3 className="text-xl font-syncopate font-bold text-white group-hover:text-secondary transition-colors">{project.title}</h3>
                            <div className="flex space-x-3">
                                <a href={project.github} className="text-muted-foreground hover:text-white transition-colors">
                                    <Github size={18} />
                                </a>
                            </div>
                        </div>

                        <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                            {project.description}
                        </p>

                        <div className="mb-6 flex flex-wrap gap-2">
                            {project.techStack.map(tech => (
                                <span key={tech} className="text-xs font-space px-2 py-1 rounded-md bg-white/5 text-white/70 border border-white/10">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="mt-auto bg-black/40 p-3 rounded border border-white/5 font-mono text-[0.65rem] text-primary/80 overflow-x-auto whitespace-nowrap">
                            {project.architecture}
                        </div>
                    </motion.div>
                ))}
            </div>

        </section>
    );
}
