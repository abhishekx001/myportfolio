import { motion } from 'framer-motion';

import { BGPattern } from './ui/bg-pattern';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Languages',
            skills: ['JavaScript', 'Python', 'HTML', 'CSS', 'SQL', 'NoSQL']
        },
        {
            title: 'Frontend',
            skills: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Figma']
        },
        {
            title: 'Backend',
            skills: ['Node.js', 'Express.js', 'Python Django', 'REST API']
        },
        {
            title: 'Database & Tools',
            skills: ['MongoDB', 'Supabase', 'Git & GitHub', 'VS Code', 'Postman', 'npm/npx']
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0
        }
    };

    return (
        <section id="skills" className="py-20 relative bg-black overflow-hidden">
            <BGPattern variant="grid" fill="#404040" mask="fade-edges" className="absolute inset-0 w-full h-full opacity-100" />
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">Technical Proficiency</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        A comprehensive toolkit that empowers me to build scalable and robust applications.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative p-[1px] rounded-2xl bg-gradient-to-r from-indigo-500/30 via-white/10 to-rose-500/30 hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="bg-black/90 backdrop-blur-xl p-6 rounded-2xl h-full">
                                <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-white/10 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
                                    {category.title}
                                </h3>
                                <motion.div
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="flex flex-wrap gap-2"
                                >
                                    {category.skills.map((skill) => (
                                        <motion.div
                                            key={skill}
                                            variants={itemVariants}
                                            className="relative p-[1px] rounded-full bg-gradient-to-r from-indigo-500/50 via-white/20 to-rose-500/50 group cursor-default"
                                        >
                                            <span className="block px-3 py-1 bg-black rounded-full text-sm text-slate-300 group-hover:text-white transition-colors">
                                                {skill}
                                            </span>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
