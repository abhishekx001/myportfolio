import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';
import { SparklesCore } from './ui/sparkles';

const Education = () => {
    return (
        <section className="py-10 px-4 bg-black">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative p-[1px] overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-300 via-white/50 to-rose-300"
                >
                    <div className="relative h-full w-full bg-black rounded-3xl overflow-hidden">
                        {/* Gradients */}
                        <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm mx-auto" />
                        <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4 mx-auto" />
                        <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm mx-auto" />
                        <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4 mx-auto" />

                        {/* Sparkles */}
                        <div className="absolute inset-0 w-full h-full bg-black">
                            <SparklesCore
                                background="transparent"
                                minSize={0.4}
                                maxSize={1}
                                particleDensity={1200}
                                className="w-full h-full"
                                particleColor="#FFFFFF"
                            />
                        </div>

                        {/* Radial Gradient Mask */}
                        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>

                        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center p-8 md:p-12">
                            <div className="w-16 h-16 rounded-2xl bg-black flex items-center justify-center border border-white/10 flex-shrink-0 relative z-20">
                                <GraduationCap className="text-white w-8 h-8" />
                            </div>

                            <div className="flex-grow">
                                <h2 className="text-xl text-accent-400 font-medium mb-1 relative z-20">Education</h2>
                                <h3 className="text-xl md:text-2xl font-bold mb-2 relative z-20 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">BTech Computer Science</h3>
                                <p className="text-lg text-slate-300 mb-4 relative z-20">APJ Abdul Kalam Technological University</p>

                                <div className="flex flex-wrap gap-4 text-sm text-slate-400 relative z-20">
                                    <span className="flex items-center gap-1 bg-black px-3 py-1 rounded-full border border-white/10">
                                        <MapPin size={14} />
                                        Thrissur, Kerala
                                    </span>
                                    <span className="bg-black text-zinc-300 px-3 py-1 rounded-full border border-white/10">
                                        Graduation: Jun 2027
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
