import React from 'react';
import { Navbar, Hero, About, Skills, Projects, ProfessionalExperience, Contact, Footer } from './components/Portfolio';

function App() {
  return (
    <div className="min-h-screen bg-black transition-colors duration-500 grain-overlay">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ProfessionalExperience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
