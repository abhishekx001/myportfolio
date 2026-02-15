import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers, Server, Activity } from 'lucide-react';
import { BackgroundPaths } from './ui/background-paths';

const Projects = () => {
    const projects = [
        {
            title: 'LittleCare',
            description: 'A responsive online therapy website designed specifically for children, focusing on accessibility and ease of use.',
            tags: ['Next.js', 'Tailwind CSS', 'React', 'Frontend'],
            icon: <Layers className="w-12 h-12 text-white" />,
            gradient: 'from-blue-500/30 via-white/10 to-cyan-500/30',
            textGradient: 'from-blue-300 via-white/90 to-cyan-300',
            link: '#'
        },
        {
            title: 'E-commerce Platform',
            description: 'Full-featured e-commerce platform handling carts, orders, and product management with robust backend logic.',
            tags: ['Django', 'Python', 'SQL', 'CRUD'],
            icon: <Server className="w-12 h-12 text-white" />,
            gradient: 'from-purple-500/30 via-white/10 to-pink-500/30',
            textGradient: 'from-purple-300 via-white/90 to-pink-300',
            link: '#'
        },
        {
            title: 'Hospital Management',
            description: 'Comprehensive system for managing patient records, doctor scheduling, and appointment bookings.',
            tags: ['Django', 'Python', 'Database Design', 'Management'],
            icon: <Activity className="w-12 h-12 text-white" />,
            gradient: 'from-emerald-500/30 via-white/10 to-teal-500/30',
            textGradient: 'from-emerald-300 via-white/90 to-teal-300',
            link: '#'
        }
    ];

    return (
        <section id="projects" className="relative w-full">
            <BackgroundPaths title="">
                <div className="py-20 px-4 max-w-7xl mx-auto text-left">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16 text-center"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 font-medium tracking-wider uppercase text-sm block mb-2">My Portfolio</span>
                        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">Featured Projects</h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className={`relative p-[1px] rounded-2xl bg-gradient-to-r ${project.gradient} hover:-translate-y-2 transition-transform duration-300`}
                            >
                                <div className="h-full bg-black/90 backdrop-blur-xl p-8 rounded-2xl flex flex-col">
                                    <div className={`relative w-16 h-16 mb-6 p-[1px] rounded-2xl bg-gradient-to-r ${project.gradient}`}>
                                        <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center">
                                            {project.icon}
                                        </div>
                                    </div>

                                    <h3 className={`text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r ${project.textGradient}`}>
                                        {project.title}
                                    </h3>

                                    <p className="text-slate-400 mb-6 leading-relaxed flex-grow">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tags.map((tag) => (
                                            <div key={tag} className={`relative p-[1px] rounded-md bg-gradient-to-r ${project.gradient}`}>
                                                <span className="block px-2.5 py-1 rounded-md bg-black text-xs font-medium text-slate-300">
                                                    {tag}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                                        <a href={project.link} className="flex items-center gap-2 text-sm font-medium text-white hover:text-indigo-400 transition-colors">
                                            <Github size={18} />
                                            <span>Code</span>
                                        </a>
                                        <a href={project.link} className="flex items-center gap-2 text-sm font-medium text-white hover:text-rose-400 transition-colors ml-auto">
                                            <span>Live Demo</span>
                                            <ExternalLink size={16} />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </BackgroundPaths>
        </section>
    );
};

export default Projects;
