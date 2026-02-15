import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle } from 'lucide-react';

import { BeamsBackground } from './ui/beams-background';

const Experience = () => {
    const experiences = [
        {
            company: 'Koott Pvt.Ltd',
            role: 'Software Developer Intern',
            date: 'Aug 2025 - Present',
            location: 'Kozhikode, Kerala',
            description: [
                'Learned and applied Next.js framework for frontend development using component-based architecture.',
                'Gained hands-on experience in designing responsive user interfaces with Tailwind CSS.',
                'Worked on building and optimizing frontend components specialized for an online therapy platform for children.',
                'Enhanced skills in frontend design and development, ensuring accessibility and responsiveness across devices.',
            ],
        },
        {
            company: 'Webandcrafts',
            role: 'Backend Development Intern (Python Django)',
            date: 'Jun 2025 - Jul 2025',
            location: 'Infopark Koratty, Thrissur, Kerala',
            description: [
                'Learned and applied Python Django framework for backend development.',
                'Gained hands-on experience in building and managing CRUD operations in projects.',
                'Worked with models, views, serializers, and URL routing in Django.',
                'Explored database interactions using Django ORM.',
            ],
        },
    ];

    return (
        <section id="experience" className="relative w-full">
            <BeamsBackground className="h-full">
                <div className="py-20 px-4 max-w-6xl mx-auto relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300"
                    >
                        Work Experience
                    </motion.h2>

                    <div className="space-y-12 relative ml-4 md:ml-10 pl-8 md:pl-12">
                        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-300 via-white/50 to-rose-300" />
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative group"
                            >
                                <span className="absolute -left-[45px] top-0 bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 w-6 h-6 rounded-full border-4 border-black group-hover:scale-125 transition-transform duration-300" />

                                <div className="glass-card p-6 md:p-8 rounded-2xl hover:bg-slate-800/50 transition-colors duration-300">
                                    <div className="flex flex-col md:flex-row justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold mb-1 transition-colors bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
                                                {exp.role}
                                            </h3>
                                            <div className="flex items-center text-slate-400 gap-2">
                                                <Briefcase size={16} />
                                                <span className="font-medium text-lg text-primary-400">{exp.company}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center text-slate-400 mt-2 md:mt-0 gap-2">
                                            <Calendar size={16} />
                                            <span className="text-sm font-mono bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
                                                {exp.date}
                                            </span>
                                        </div>
                                    </div>

                                    <ul className="space-y-3 pl-4">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="text-slate-300 flex items-start gap-3">
                                                <CheckCircle className="text-accent-500 mt-1 flex-shrink-0" size={16} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </BeamsBackground>
        </section >
    );
};

export default Experience;
