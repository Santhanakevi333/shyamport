import React from 'react';
import { Mail, ArrowRight, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const YoutubeIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

const InstagramIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

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
          
          <div className="flex flex-col items-center justify-center gap-6">
            <a 
              href="mailto:shyamvfx1020@gmail.com"
              className="group inline-flex items-center gap-4 px-8 py-5 bg-sky-500/10 hover:bg-sky-500/20 border border-sky-400/30 rounded-full text-sky-300 font-semibold transition-all hover:scale-105 shadow-[0_0_30px_-5px_rgba(14,165,233,0.2)] hover:shadow-[0_0_40px_-5px_rgba(14,165,233,0.4)] w-full sm:w-auto justify-center"
            >
              <Mail className="w-6 h-6" />
              <span className="text-lg tracking-wide">shyamvfx1020@gmail.com</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>

            <a 
              href="tel:+919952665483"
              className="group inline-flex items-center gap-4 px-8 py-5 bg-sky-500/10 hover:bg-sky-500/20 border border-sky-400/30 rounded-full text-sky-300 font-semibold transition-all hover:scale-105 shadow-[0_0_30px_-5px_rgba(14,165,233,0.2)] hover:shadow-[0_0_40px_-5px_rgba(14,165,233,0.4)] w-full sm:w-auto justify-center"
            >
              <Phone className="w-6 h-6" />
              <span className="text-lg tracking-wide">+91 99526 65483</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="flex items-center gap-4 mt-2">
              <a 
                href="https://www.youtube.com/@SHyamvFxStudio/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-full bg-red-500/5 hover:bg-red-500/10 border border-red-500/20 hover:border-red-500/40 text-slate-300 hover:text-red-500 transition-all hover:scale-110 group shadow-[0_0_20px_-5px_rgba(239,68,68,0.1)] hover:shadow-[0_0_30px_-5px_rgba(239,68,68,0.3)]"
                title="19K+ YouTube Subscribers"
              >
                <YoutubeIcon className="w-6 h-6" />
              </a>
              <a 
                href="https://www.instagram.com/shyamvfxstudio?igsh=MW82MTB2bzh2ZG80bg=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-full bg-pink-500/5 hover:bg-pink-500/10 border border-pink-500/20 hover:border-pink-500/40 text-slate-300 hover:text-pink-500 transition-all hover:scale-110 shadow-[0_0_20px_-5px_rgba(236,72,153,0.1)] hover:shadow-[0_0_30px_-5px_rgba(236,72,153,0.3)]"
              >
                <InstagramIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer text */}
      <div className="mt-32 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} SHyam vFx Studio</p>
        
      </div>
      
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-sky-600/5 blur-[120px] -z-10 rounded-t-full pointer-events-none" />
    </section>
  );
};

export default Contact;
