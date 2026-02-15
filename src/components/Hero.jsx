import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText, MapPin } from 'lucide-react';
import { InteractiveRobotSpline } from './interactive-3d-robot';
import ElegantShape from './ui/elegant-shape';
import { cn } from '@/lib/utils';

const Hero = () => {
    return (
        <section id="about" className="min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303] px-4 pt-20 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <ElegantShape
                    delay={0.3}
                    width={600}
                    height={140}
                    rotate={12}
                    gradient="from-indigo-500/[0.15]"
                    className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
                />
                <ElegantShape
                    delay={0.5}
                    width={500}
                    height={120}
                    rotate={-15}
                    gradient="from-rose-500/[0.15]"
                    className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
                />
                <ElegantShape
                    delay={0.4}
                    width={300}
                    height={80}
                    rotate={-8}
                    gradient="from-violet-500/[0.15]"
                    className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
                />
                <ElegantShape
                    delay={0.6}
                    width={200}
                    height={60}
                    rotate={20}
                    gradient="from-amber-500/[0.15]"
                    className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
                />
                <ElegantShape
                    delay={0.7}
                    width={150}
                    height={40}
                    rotate={-25}
                    gradient="from-cyan-500/[0.15]"
                    className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
                />
            </div>

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
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
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">Abhishek S</span>
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
                            className="bg-white hover:bg-zinc-200 text-black px-8 py-3 rounded-full font-bold transition-all shadow-lg shadow-white/10"
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
                        <SocialLink
                            href="https://linkedin.com"
                            icon={<Linkedin size={20} />}
                            hoverColor="hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20"
                        />
                        <SocialLink
                            href="mailto:abishek96335451@gmail.com"
                            icon={<Mail size={20} />}
                            hoverColor="hover:text-rose-400 hover:border-rose-500/50 hover:bg-rose-500/10 hover:shadow-lg hover:shadow-rose-500/20"
                        />
                        <SocialLink
                            href="https://github.com"
                            icon={<Github size={20} />}
                            hoverColor="hover:text-purple-400 hover:border-purple-500/50 hover:bg-purple-500/10 hover:shadow-lg hover:shadow-purple-500/20"
                        />

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
                    className="relative hidden lg:flex items-center justify-center h-[500px]"
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

const SocialLink = ({ href, icon, hoverColor }) => (
    <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`p-3 rounded-full glass-card text-slate-400 transition-all duration-300 border border-transparent ${hoverColor}`}
    >
        {icon}
    </a>
);

export default Hero;
