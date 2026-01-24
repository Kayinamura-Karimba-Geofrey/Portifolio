import React from 'react';
import { Navbar, Hero, About, Skills, Projects, ExperienceEducation, Contact, Footer } from './components/Portfolio';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500 grain-overlay">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ExperienceEducation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
