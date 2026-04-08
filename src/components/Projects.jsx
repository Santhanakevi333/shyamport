import React, { useState, useRef } from 'react';
import { Box, Film, PlayCircle, X, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const blenderProjects = [
  { id: 1, title: '3D Concept Render', category: 'Blender 3D', videoUrl: '/videos/blender/1.mp4', poster: '/videos/blender/1.jpg' },
  { id: 2, title: 'Abstract Loop', category: 'Blender 3D', videoUrl: '/videos/blender/10.mp4', poster: '/videos/blender/10.jpg' },
  { id: 3, title: 'Character Animation', category: 'Blender 3D', videoUrl: '/videos/blender/3.mp4', poster: '/videos/blender/3.jpg' },
  { id: 4, title: 'Abstract Loop', category: 'Blender 3D', videoUrl: '/videos/blender/4.mp4', poster: '/videos/blender/4.jpg' },
  { id: 5, title: 'Abstract Loop', category: 'Blender 3D', videoUrl: '/videos/blender/5.mp4', poster: '/videos/blender/5.jpg' },
  { id: 6, title: 'Abstract Loop', category: 'Blender 3D', videoUrl: '/videos/blender/6.mp4', poster: '/videos/blender/6.jpg' },
  { id: 7, title: 'Abstract Loop', category: 'Blender 3D', videoUrl: '/videos/blender/7.mp4', poster: '/videos/blender/7.jpg' },
  { id: 8, title: 'Abstract Loop', category: 'Blender 3D', videoUrl: '/videos/blender/8.mp4', poster: '/videos/blender/8.jpg' },
  { id: 9, title: 'Abstract Loop', category: 'Blender 3D', videoUrl: '/videos/blender/9.mp4', poster: '/videos/blender/9.jpg' },
];

const aeProjects = [
  { id: 1, title: 'Music Video VFX', category: 'After Effects', videoUrl: '/videos/ae/1.mp4', poster: '/videos/ae/1.jpg' },
  { id: 2, title: 'Brand Logo Animation', category: 'After Effects', videoUrl: '/videos/ae/2.mp4', poster: '/videos/ae/2.jpg' },
  { id: 3, title: 'Motion Graphics Promo', category: 'After Effects', videoUrl: '/videos/ae/3.mp4', poster: '/videos/ae/3.jpg' },
  { id: 4, title: 'UI Interaction Concept', category: 'After Effects', videoUrl: '/videos/ae/4.mp4', poster: '/videos/ae/4.jpg' },
  { id: 5, title: 'UI Interaction Concept', category: 'After Effects', videoUrl: '/videos/ae/5.mp4', poster: '/videos/ae/5.jpg' },
  { id: 6, title: 'UI Interaction Concept', category: 'After Effects', videoUrl: '/videos/ae/6.mp4', poster: '/videos/ae/6.jpg' },
  { id: 7, title: 'UI Interaction Concept', category: 'After Effects', videoUrl: '/videos/ae/7.mp4', poster: '/videos/ae/7.jpg' },
  { id: 8, title: 'UI Interaction Concept', category: 'After Effects', videoUrl: '/videos/ae/8.mp4', poster: '/videos/ae/8.jpg' },
  { id: 9, title: 'UI Interaction Concept', category: 'After Effects', videoUrl: '/videos/ae/9.mp4', poster: '/videos/ae/9.jpg' },
];

const VideoCard = ({ project, onClick }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log("Play interrupted:", e));
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 transition-all duration-300 hover:border-slate-500 hover:shadow-2xl hover:shadow-cyan-500/10 cursor-pointer aspect-video"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onClick(project)}
    >
      <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
        <video 
          ref={videoRef}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 scale-105 group-hover:scale-100"
          muted 
          loop 
          playsInline
          preload="metadata"
          src={`${project.videoUrl}#t=0.001`}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90"></div>
      
      {/* Expand Icon - Shows on Hover */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
        <div className="bg-black/50 p-2 rounded-full backdrop-blur-md border border-white/20">
          <Maximize2 size={20} className="text-white" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full p-5 flex flex-col justify-end transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-xl font-bold text-slate-100 drop-shadow-lg font-outfit">{project.title}</h3>
        <p className="text-xs font-medium opacity-80 group-hover:opacity-100 transition-opacity duration-300 w-fit mt-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur border border-white/10 text-cyan-300 shadow-sm transition-colors group-hover:border-cyan-500/50">
          {project.category}
        </p>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState('blender'); // 'blender' | 'ae'
  const [activeVideo, setActiveVideo] = useState(null);

  const currentProjects = activeTab === 'blender' ? blenderProjects : aeProjects;

  return (
    <section id="projects" className="py-24 bg-slate-950 relative z-10 selection:bg-sky-500/30 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500 font-outfit mb-6">
            Explore Projects
          </h2>
          <p className="text-slate-400 text-lg">
            Immerse yourself in high-fidelity 3D environments and cutting-edge motion graphics. Select an area of expertise below to explore the works.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center items-center gap-4 mb-16">
          <button
            onClick={() => setActiveTab('blender')}
            className={`flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 border ${
              activeTab === 'blender' 
                ? 'bg-cyan-500/10 border-cyan-500 text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)]' 
                : 'bg-transparent border-slate-800 text-slate-500 hover:text-slate-300 hover:border-slate-600'
            }`}
          >
            <Box size={20} className={activeTab === 'blender' ? 'drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]' : ''} />
            Blender 3D
          </button>
          <button
            onClick={() => setActiveTab('ae')}
            className={`flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 border ${
              activeTab === 'ae' 
                ? 'bg-purple-500/10 border-purple-500 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.3)]' 
                : 'bg-transparent border-slate-800 text-slate-500 hover:text-slate-300 hover:border-slate-600'
            }`}
          >
            <Film size={20} className={activeTab === 'ae' ? 'drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]' : ''} />
            After Effects
          </button>
        </div>

        {/* Video Grid layout based on Tab */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {currentProjects.map((proj, index) => (
              <VideoCard 
                key={`${activeTab}-${proj.id || index}`} 
                project={proj} 
                onClick={(p) => setActiveVideo(p)} 
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Fullscreen Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-12"
          >
            {/* Close Button Background Catch */}
            <div 
              className="absolute inset-0 cursor-pointer" 
              onClick={() => setActiveVideo(null)}
            />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl aspect-video bg-black rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-white/10 z-10"
            >
              <button 
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-md transition-all duration-300 border border-white/20 hover:border-white/50 hover:rotate-90"
              >
                <X size={24} />
              </button>
              
              <video 
                className="w-full h-full object-contain bg-black"
                src={activeVideo.videoUrl}
                controls
                autoPlay
                playsInline
              >
                Your browser does not support the video tag.
              </video>
              
              {/* Optional: Title overlay at the bottom if desired, but user might just want fullscreen video. Let controls handle it. */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-cyan-600/10 rounded-full mix-blend-screen filter blur-[120px] -z-10 pointer-events-none"></div>
      <div className="absolute top-3/4 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full mix-blend-screen filter blur-[120px] -z-10 pointer-events-none"></div>
    </section>
  );
};

export default Projects;
