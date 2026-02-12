import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers, Server, Activity } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'LittleCare',
            description: 'A responsive online therapy website designed specifically for children, focusing on accessibility and ease of use.',
            tags: ['Next.js', 'Tailwind CSS', 'React', 'Frontend'],
            icon: <Layers className="w-12 h-12 text-blue-400" />,
            color: 'from-blue-500/20 to-cyan-500/20',
            link: '#'
        },
        {
            title: 'E-commerce Platform',
            description: 'Full-featured e-commerce platform handling carts, orders, and product management with robust backend logic.',
            tags: ['Django', 'Python', 'SQL', 'CRUD'],
            icon: <Server className="w-12 h-12 text-purple-400" />,
            color: 'from-purple-500/20 to-pink-500/20',
            link: '#'
        },
        {
            title: 'Hospital Management',
            description: 'Comprehensive system for managing patient records, doctor scheduling, and appointment bookings.',
            tags: ['Django', 'Python', 'Database Design', 'Management'],
            icon: <Activity className="w-12 h-12 text-emerald-400" />,
            color: 'from-emerald-500/20 to-teal-500/20',
            link: '#'
        }
    ];

    return (
        <section id="projects" className="py-20 px-4 bg-slate-900/50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <span className="text-accent-500 font-medium tracking-wider uppercase text-sm block mb-2">My Portfolio</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl -z-10" />

                            <div className="h-full glass-card p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col">
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-6 border border-white/5`}>
                                    {project.icon}
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-slate-400 mb-6 leading-relaxed flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                                    <a href={project.link} className="flex items-center gap-2 text-sm font-medium text-white hover:text-accent-500 transition-colors">
                                        <Github size={18} />
                                        <span>Code</span>
                                    </a>
                                    <a href={project.link} className="flex items-center gap-2 text-sm font-medium text-white hover:text-accent-500 transition-colors ml-auto">
                                        <span>Live Demo</span>
                                        <ExternalLink size={16} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
