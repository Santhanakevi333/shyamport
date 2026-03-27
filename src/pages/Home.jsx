import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 font-sans selection:bg-sky-500/30 scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Contact />
      </main>
    </div>
  );
};

export default Home;
