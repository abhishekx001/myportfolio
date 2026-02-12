import { motion } from 'framer-motion';

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
        <section id="skills" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-gradient mb-4">Technical Proficiency</h2>
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
                            className="glass-card p-6 rounded-2xl border-t border-white/5 hover:-translate-y-2 transition-transform duration-300"
                        >
                            <h3 className="text-xl font-semibold mb-6 text-primary-400 border-b border-slate-700 pb-2">
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
                                    <motion.span
                                        key={skill}
                                        variants={itemVariants}
                                        className="px-3 py-1 bg-slate-800/80 rounded-full text-sm text-slate-300 border border-slate-700 hover:border-accent-500 hover:text-white transition-colors cursor-default"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
