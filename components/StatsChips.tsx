'use client';

import { motion } from 'framer-motion';

const stats = [
    { value: '10+', label: 'Projects' },
    { value: '913K+', label: 'Records' },
    { value: '5+', label: 'Certs' },
    { value: '1', label: 'Research Paper' },
];

export default function StatsChips() {
    return (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 w-full max-w-4xl mx-auto mt-12">
            {stats.map((stat, index) => (
                <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                    className="glass-amber p-4 rounded-xl flex flex-col items-center justify-center text-center group hover:glass-cyan transition-all duration-300 transform hover:-translate-y-1"
                >
                    <span className="text-3xl font-syncopate font-bold text-white group-hover:text-secondary transition-colors">
                        {stat.value}
                    </span>
                    <span className="text-sm font-space text-muted-foreground mt-1 uppercase tracking-wider">
                        {stat.label}
                    </span>
                </motion.div>
            ))}
        </div>
    );
}
