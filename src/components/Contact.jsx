import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 px-6 border-t border-sky-900/20 bg-slate-950 mt-12 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/20 backdrop-blur-md mb-2">
            <span className="text-sm font-semibold text-sky-400 tracking-wider uppercase">
              Get In Touch
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-sky-200 bg-clip-text text-transparent pb-2">
            Let's craft your next visual story.
          </h2>
          
          <p className="text-lg text-slate-400 max-w-2xl mx-auto pb-6">
            Whether you need a cinematic video edit, motion graphics, or stunning 3D animations, I am currently available for freelance projects. Drop me a line!
          </p>
          
          <a 
            href="mailto:shyamvfx1020@gmail.com"
            className="group inline-flex items-center gap-4 px-8 py-5 bg-sky-500/10 hover:bg-sky-500/20 border border-sky-400/30 rounded-full text-sky-300 font-semibold transition-all hover:scale-105 shadow-[0_0_30px_-5px_rgba(14,165,233,0.2)] hover:shadow-[0_0_40px_-5px_rgba(14,165,233,0.4)]"
          >
            <Mail className="w-6 h-6" />
            <span className="text-lg tracking-wide">shyamvfx1020@gmail.com</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Footer text */}
      <div className="mt-32 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Shyam Anne Payaluga</p>
        
      </div>
      
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-sky-600/5 blur-[120px] -z-10 rounded-t-full pointer-events-none" />
    </section>
  );
};

export default Contact;
