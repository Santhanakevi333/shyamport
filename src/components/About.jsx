import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative py-24 px-6 max-w-7xl mx-auto z-10 scroll-mt-20">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left Side: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/20 backdrop-blur-md mb-2">
            <span className="text-sm font-semibold text-sky-400 tracking-wider uppercase">
              About Me
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-sky-200 bg-clip-text text-transparent leading-tight pb-2">
            A creative journey in 2D & 3D animation and video production.
          </h2>
          
          <div className="space-y-5 text-lg text-slate-300 font-light leading-relaxed">
            <p>
              I specialize in transforming ideas into immersive visual experiences using <span className="text-sky-300 font-medium">After Effects, Blender, Premiere Pro, and Photoshop</span>. From motion graphics to cinematic edits, my work is driven by creativity, precision, and storytelling.
            </p>
            <p>
              Every frame I create is designed to capture attention, communicate ideas, and leave a lasting impact.
            </p>
            <p className="border-l-2 border-sky-500 pl-4 py-2 italic text-sky-100 bg-sky-500/5 rounded-r-lg">
              "I believe animation is not just about movement — it’s about emotion, energy, and bringing imagination to life."
            </p>
          </div>
        </motion.div>

        {/* Right Side: Visual Tools Showcase */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Frosted / Steel Blue dynamic backdrop for the cards */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#4682B4]/20 to-sky-300/10 blur-3xl -z-10 rounded-full" />
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 md:translate-y-8">
              <div className="bg-slate-900/40 backdrop-blur-xl border border-sky-500/10 p-6 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-300 group">
                <div className="w-12 h-12 bg-[#9999FF]/10 rounded-xl flex items-center justify-center mb-4 text-[#9999FF] font-bold text-xl group-hover:bg-[#9999FF]/20 transition-colors">Ae</div>
                <h3 className="font-semibold text-white">After Effects</h3>
                <p className="text-sm text-slate-400 mt-1">Motion graphics & compositing.</p>
              </div>
              <div className="bg-slate-900/40 backdrop-blur-xl border border-sky-500/10 p-6 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-300 group">
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 text-orange-400 font-bold text-xl group-hover:bg-orange-500/20 transition-colors">B</div>
                <h3 className="font-semibold text-white">Blender</h3>
                <p className="text-sm text-slate-400 mt-1">3D modeling & animation.</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-slate-900/40 backdrop-blur-xl border border-sky-500/10 p-6 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-300 group">
                <div className="w-12 h-12 bg-[#EA77FF]/10 rounded-xl flex items-center justify-center mb-4 text-[#EA77FF] font-bold text-xl group-hover:bg-[#EA77FF]/20 transition-colors">Pr</div>
                <h3 className="font-semibold text-white">Premiere Pro</h3>
                <p className="text-sm text-slate-400 mt-1">Cinematic video editing.</p>
              </div>
              <div className="bg-slate-900/40 backdrop-blur-xl border border-sky-500/10 p-6 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-300 group">
                <div className="w-12 h-12 bg-[#31A8FF]/10 rounded-xl flex items-center justify-center mb-4 text-[#31A8FF] font-bold text-xl group-hover:bg-[#31A8FF]/20 transition-colors">Ps</div>
                <h3 className="font-semibold text-white">Photoshop</h3>
                <p className="text-sm text-slate-400 mt-1">Image manipulation & art.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
