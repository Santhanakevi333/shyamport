import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-950">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 text-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          src="/videos/blender/1.mp4"
        />
        {/* Dark Overlay to make text readable */}
        <div className="absolute inset-0 bg-slate-950/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-slate-950/60" />
      </div>

      {/* Dynamic Background Elements: Frosted Blue & Steel Blue */}
      <div className="absolute top-0 w-[600px] h-[600px] bg-sky-300/10 rounded-full blur-[120px] -translate-y-1/2 opacity-60 mix-blend-screen animate-pulse z-0" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#4682B4]/20 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 opacity-50 mix-blend-screen z-0" />
      
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center gap-6"
        >
          {/* Badges Container */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
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

            <motion.a 
              href="https://www.youtube.com/@SHyamvFxStudio/videos"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="px-5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 backdrop-blur-md shadow-[0_0_15px_rgba(239,68,68,0.2)] hover:shadow-[0_0_25px_rgba(239,68,68,0.4)] hover:bg-red-500/20 transition-all cursor-pointer group flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span className="text-sm font-bold text-red-100 uppercase tracking-wider group-hover:text-white transition-colors">
                19K+ YouTube SubscriBERs
              </span>
            </motion.a>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white">
            <span className="block mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
              SHyam vFx Studio
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
            <a href="#projects" className="px-8 py-4 rounded-full font-semibold text-white border border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all hover:scale-105 inline-block">
              Explore Projects
            </a>
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
