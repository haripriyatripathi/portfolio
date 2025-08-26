import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-dark relative overflow-hidden">
      {/* Global animated background elements */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div className="absolute animate-shimmer bg-gradient-to-r from-transparent via-primary/30 to-transparent w-full h-0.5 top-1/4" style={{ animationDelay: '0s' }} />
        <div className="absolute animate-shimmer bg-gradient-to-r from-transparent via-primary/20 to-transparent w-full h-0.5 top-2/4" style={{ animationDelay: '2s' }} />
        <div className="absolute animate-shimmer bg-gradient-to-r from-transparent via-primary/25 to-transparent w-full h-0.5 top-3/4" style={{ animationDelay: '4s' }} />
      </div>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
