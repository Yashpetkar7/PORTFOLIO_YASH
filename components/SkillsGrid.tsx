'use client';

import { motion } from 'framer-motion';

type Skill = {
    name: string;
    icon: string; // The slug for SimpleIcons
    color: string;
};

type SkillCategory = {
    title: string;
    skills: Skill[];
};

const skillCategories: SkillCategory[] = [
    {
        title: "ML / AI",
        skills: [
            { name: "TensorFlow", icon: "tensorflow", color: "#FF6F00" },
            { name: "PyTorch", icon: "pytorch", color: "#EE4C2C" },
            { name: "Scikit-Learn", icon: "scikitlearn", color: "#F7931E" },
            { name: "Keras", icon: "keras", color: "#D00000" },
            { name: "OpenCV", icon: "opencv", color: "#5C3EE8" },
        ]
    },
    {
        title: "Big Data & Engineering",
        skills: [
            { name: "Apache Spark", icon: "apachespark", color: "#E25A1C" },
            { name: "Hadoop", icon: "apachehadoop", color: "#66CC15" },
            { name: "SQL", icon: "postgresql", color: "#4169E1" }, // Using PostgreSQL as proxy for SQL
            { name: "MongoDB", icon: "mongodb", color: "#47A248" },
            { name: "Pandas", icon: "pandas", color: "#150458" },
        ]
    },
    {
        title: "Languages",
        skills: [
            { name: "Python", icon: "python", color: "#3776AB" },
            { name: "R", icon: "r", color: "#276DC3" },
            { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
            { name: "TypeScript", icon: "typescript", color: "#3178C6" },
            { name: "C++", icon: "cplusplus", color: "#00599C" },
        ]
    },
    {
        title: "Cloud & Ops",
        skills: [
            { name: "AWS", icon: "amazonaws", color: "#232F3E" },
            { name: "Docker", icon: "docker", color: "#2496ED" },
            { name: "Git", icon: "git", color: "#F05032" },
            { name: "Linux", icon: "linux", color: "#FCC624" },
            { name: "Next.js", icon: "nextdotjs", color: "#000000" },
        ]
    }
];

export default function SkillsGrid() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { type: 'spring', bounce: 0.4 } }
    };

    return (
        <section id="skills" className="py-12 px-4 relative z-10 w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {skillCategories.map((category, catIdx) => (
                    <div key={category.title} className="glass p-8 rounded-2xl dim-trigger relative z-10 hover:z-50 transition-all duration-500">
                        <h3 className="text-xl font-syncopate font-bold text-white mb-6 border-b border-white/10 pb-4">
                            <span className="text-secondary mr-2">/</span>
                            {category.title}
                        </h3>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            className="flex flex-wrap gap-4"
                        >
                            {category.skills.map((skill) => (
                                <motion.div
                                    key={skill.name}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05 }}
                                    className="glass-amber px-4 py-2 rounded-full border border-primary/40 hover:border-secondary/60 flex items-center space-x-3 cursor-default transition-colors duration-300"
                                >
                                    <img
                                        src={`https://cdn.simpleicons.org/${skill.icon}/${skill.color.replace('#', '')}`}
                                        alt={`${skill.name} icon`}
                                        className="w-5 h-5 filter drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
                                    />
                                    <span className="text-sm font-space text-white/90 font-medium">
                                        {skill.name}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
}
