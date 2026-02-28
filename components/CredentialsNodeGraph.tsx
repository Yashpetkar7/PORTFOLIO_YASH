'use client';

import { motion } from 'framer-motion';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
    {
        subject: 'Research & ML',
        name: 'IJCRT Vol-10: Pneumonia Detection via CNNs',
        date: 'Aug 2022',
        hash: '0x8F9B2...A4',
        A: 95,
        fullMark: 100,
    },
    {
        subject: 'Cloud Infra',
        name: 'AWS Certified Cloud Practitioner',
        date: 'Nov 2023',
        hash: '0xAWS77...91',
        A: 90,
        fullMark: 100,
    },
    {
        subject: 'Deep Learning',
        name: 'DeepLearning.AI: TensorFlow Developer',
        date: 'Jan 2024',
        hash: '0xTF4B1...C2',
        A: 85,
        fullMark: 100,
    },
    {
        subject: 'Foundational AI',
        name: 'Machine Learning by Stanford (Andrew Ng)',
        date: 'Mar 2023',
        hash: '0xML1A9...E5',
        A: 100,
        fullMark: 100,
    },
    {
        subject: 'Data Analytics',
        name: 'Google Data Analytics Professional',
        date: 'Jul 2023',
        hash: '0xGDA28...D4',
        A: 80,
        fullMark: 100,
    },
    {
        subject: 'Architecture',
        name: 'SP Jain: Master of Artifical Intelligence',
        date: '2024 - Present',
        hash: '0xSPJ10...F8',
        A: 95,
        fullMark: 100,
    }
];

const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
        const item = payload[0].payload;
        return (
            <div className="glass p-4 rounded-xl border border-secondary/50 backdrop-blur-xl bg-black/80 font-mono shadow-2xl">
                <div className="flex items-center space-x-2 text-xs text-primary mb-2">
                    <span className="animate-pulse">●</span>
                    <span>PAYLOAD_DECRYPTED</span>
                </div>
                <h4 className="text-white font-bold mb-1">{item.name}</h4>
                <p className="text-muted-foreground text-xs mb-3">Issued: {item.date}</p>
                <div className="bg-black/50 px-2 py-1 rounded text-[#00ff00] text-[0.65rem] border border-white/5 break-all">
                    [HASH: {item.hash}]
                </div>
            </div>
        );
    }
    return null;
};

export default function CredentialsNodeGraph() {
    return (
        <section id="credentials" className="py-24 px-4 relative z-10 w-full max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16 text-center"
            >
                <h2 className="text-3xl md:text-5xl font-syncopate font-bold text-white mb-4">
                    <span className="text-primary mr-4">04.</span>
                    Node<span className="text-secondary">_Clearance</span>
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
                <p className="text-muted-foreground mt-6 font-mono">
                    {"// Verified credentials and architectural clearances."}
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="glass p-4 md:p-8 rounded-2xl border border-white/5 dim-trigger relative z-10 hover:z-50 transition-all duration-500 w-full aspect-square md:aspect-[16/9]"
            >
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
                        <PolarGrid stroke="rgba(255,255,255,0.1)" />
                        <PolarAngleAxis
                            dataKey="subject"
                            tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 12, fontFamily: 'var(--font-space)' }}
                        />
                        <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                        <Tooltip content={<CustomTooltip />} />
                        <Radar
                            name="Skill Verification"
                            dataKey="A"
                            stroke="#3B82F6"
                            strokeWidth={2}
                            fill="url(#colorCyan)"
                            fillOpacity={0.6}
                            activeDot={{ r: 6, fill: '#F59E0B', stroke: '#000', strokeWidth: 2 }}
                        />
                        <defs>
                            <linearGradient id="colorCyan" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.2} />
                            </linearGradient>
                        </defs>
                    </RadarChart>
                </ResponsiveContainer>

                <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 flex items-center space-x-2 text-xs font-mono text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-secondary animate-ping"></div>
                    <span>HOVER NODES TO DECRYPT</span>
                </div>
            </motion.div>
        </section>
    );
}
