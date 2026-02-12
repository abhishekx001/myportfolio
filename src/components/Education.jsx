import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';

const Education = () => {
    return (
        <section className="py-10 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass-card p-8 md:p-12 rounded-3xl border border-primary-500/20 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-32 bg-primary-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                    <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
                        <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center border border-slate-700 flex-shrink-0">
                            <GraduationCap className="text-accent-500 w-8 h-8" />
                        </div>

                        <div className="flex-grow">
                            <h2 className="text-xl text-accent-400 font-medium mb-1">Education</h2>
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">BTech Computer Science</h3>
                            <p className="text-lg text-slate-300 mb-4">APJ Abdul Kalam Technological University</p>

                            <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                                <span className="flex items-center gap-1 bg-slate-800/50 px-3 py-1 rounded-full">
                                    <MapPin size={14} />
                                    Thrissur, Kerala
                                </span>
                                <span className="bg-primary-900/30 text-primary-300 px-3 py-1 rounded-full border border-primary-500/20">
                                    Graduation: Jun 2027
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
