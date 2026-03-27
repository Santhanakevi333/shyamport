import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-950">
      {/* Dynamic Background Elements: Frosted Blue & Steel Blue */}
      <div className="absolute top-0 w-[600px] h-[600px] bg-sky-300/10 rounded-full blur-[120px] -translate-y-1/2 opacity-60 mix-blend-screen animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#4682B4]/20 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 opacity-50 mix-blend-screen" />
      
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center gap-6"
        >
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl"
          >
            <span className="text-sm font-medium text-slate-300 uppercase tracking-widest">
              Available for freelance
            </span>
          </motion.div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white">
            <span className="block mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
              Shyam VFX Studio
            </span>
          </h1>

          {/* Typing Effect Subheadline */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-[#4682B4] min-h-[60px] md:min-h-[80px]">
            <TypeAnimation
              sequence={[
                '3D Animator',
                2000,
                'Motion Graphics Designer',
                2000,
                'Video Editor',
                2000,
                'Visual Effects Specialist',
                2000
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </h2>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mt-4 leading-relaxed font-light">
            Bringing your imagination to life through stunning visual effects, fluid 3D animations, and cinematic video editing.
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <button className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all hover:scale-105">
              <span className="relative z-10 flex items-center gap-2">
                <Play className="w-4 h-4 fill-black" /> View Showreel
              </span>
            </button>
            <button className="px-8 py-4 rounded-full font-semibold text-white border border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all hover:scale-105">
              Explore Projects
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="text-xs uppercase tracking-widest font-semibold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-slate-500 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
