import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText, MapPin } from 'lucide-react';
import { InteractiveRobotSpline } from './interactive-3d-robot';

const Hero = () => {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-[100px] animate-pulse-slow" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/20 rounded-full blur-[100px] animate-pulse-slow" />
            </div>

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-primary-400 text-sm mb-6"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                        </span>
                        Available for Opportunities
                    </motion.div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Hi, I'm <br />
                        <span className="text-gradient">Abhishek S</span>
                    </h1>

                    <p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
                        A passionate BTech Computer Science student and Software Developer based in Palakkad, Kerala.
                        Crafting modern web experiences with React, Next.js, and Python.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#contact"
                            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-full font-medium transition-all shadow-lg shadow-primary-500/25"
                        >
                            Let's Talk
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="/resume final ats.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass-card px-8 py-3 rounded-full font-medium text-white hover:bg-white/10 transition-all flex items-center gap-2"
                        >
                            <FileText size={18} />
                            Resume
                        </motion.a>
                    </div>

                    <div className="mt-12 flex items-center gap-6">
                        <SocialLink href="https://linkedin.com" icon={<Linkedin size={20} />} />
                        <SocialLink href="mailto:abishek96335451@gmail.com" icon={<Mail size={20} />} />
                        <SocialLink href="https://github.com" icon={<Github size={20} />} />

                        <div className="h-8 w-[1px] bg-slate-700 hidden md:block" />

                        <div className="hidden md:flex items-center gap-2 text-slate-400 text-sm">
                            <MapPin size={16} className="text-accent-500" />
                            Palakkad, Kerala, India
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative hidden md:flex items-center justify-center h-[500px]"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 to-accent-500/10 rounded-full blur-3xl" />
                    <InteractiveRobotSpline
                        scene="https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode"
                        className="w-full h-full"
                    />
                </motion.div>
            </div>
        </section>
    );
};

const SocialLink = ({ href, icon }) => (
    <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="p-3 rounded-full glass-card text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-slate-600"
    >
        {icon}
    </a>
);

export default Hero;
