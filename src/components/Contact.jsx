import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-6">Let's work together!</h2>
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
                        className="glass-card p-8 rounded-3xl border border-white/5"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="col-span-2 sm:col-span-1">
                                    <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                                    <input type="text" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors" placeholder="John Doe" />
                                </div>
                                <div className="col-span-2 sm:col-span-1">
                                    <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                                    <input type="email" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors" placeholder="john@example.com" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                                <textarea rows="4" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors resize-none" placeholder="Tell me about your project..." />
                            </div>

                            <button type="button" className="w-full bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white font-medium py-4 rounded-xl shadow-lg shadow-primary-500/20 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2">
                                Send Message
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

const ContactItem = ({ icon, label, value, href }) => (
    <a href={href} className="flex items-center gap-4 group">
        <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
            {icon}
        </div>
        <div>
            <p className="text-sm text-slate-500 font-medium">{label}</p>
            <p className="text-white font-medium group-hover:text-primary-400 transition-colors">{value}</p>
        </div>
    </a>
);

export default Contact;
