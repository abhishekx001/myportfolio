import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

import { StarsBackground } from './ui/stars-background';

const Contact = () => {
    return (
        <section id="contact" className="relative py-20 px-4 min-h-screen bg-black overflow-hidden flex items-center">
            <StarsBackground
                starDensity={0.00015}
                allStarsTwinkle={true}
                twinkleProbability={0.7}
                minTwinkleSpeed={0.5}
                maxTwinkleSpeed={1}
            />
            <div className="absolute inset-0 bg-black/50" /> {/* Optional overlay for text readability */}
            <div className="max-w-6xl mx-auto relative z-10 w-full">
                <div className="grid md:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">Let's work together!</h2>
                        <p className="text-slate-400 mb-8 text-lg">
                            I'm always open to discussing product design work or partnership opportunities.
                        </p>

                        <div className="space-y-6">
                            <ContactItem
                                icon={<Mail className="w-6 h-6" />}
                                label="Email"
                                value="abishek96335451@gmail.com"
                                href="mailto:abishek96335451@gmail.com"
                            />
                            <ContactItem
                                icon={<Phone className="w-6 h-6" />}
                                label="Phone"
                                value="+91 9633545172"
                                href="tel:+919633545172"
                            />
                            <ContactItem
                                icon={<MapPin className="w-6 h-6" />}
                                label="Location"
                                value="Palakkad, Kerala, India"
                                href="#"
                            />
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative p-[1px] rounded-3xl bg-gradient-to-r from-indigo-500/10 via-white/5 to-rose-500/10"
                    >
                        <div className="bg-transparent p-8 rounded-3xl">
                            <form className="space-y-6">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="col-span-2 sm:col-span-1">
                                        <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                                        <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 hover:bg-white/10" placeholder="John Doe" />
                                    </div>
                                    <div className="col-span-2 sm:col-span-1">
                                        <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                                        <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 hover:bg-white/10" placeholder="john@example.com" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                                    <textarea rows="4" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 hover:bg-white/10 resize-none" placeholder="Tell me about your project..." />
                                </div>

                                <button type="button" className="w-full bg-white hover:bg-zinc-200 text-black font-bold py-4 rounded-xl shadow-lg shadow-white/10 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2">
                                    Send Message
                                    <Send size={18} />
                                </button>
                            </form>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

const ContactItem = ({ icon, label, value, href }) => (
    <a href={href} className="flex items-center gap-4 group">
        <div className="relative w-12 h-12 p-[1px] rounded-full bg-gradient-to-r from-indigo-500/30 via-white/10 to-rose-500/30 group-hover:from-indigo-500 group-hover:to-rose-500 transition-all duration-300">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
        </div>
        <div>
            <p className="text-sm text-slate-400 font-medium mb-1">{label}</p>
            <p className="text-white font-medium group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-300 group-hover:to-rose-300 transition-all duration-300">{value}</p>
        </div>
    </a>
);

export default Contact;
