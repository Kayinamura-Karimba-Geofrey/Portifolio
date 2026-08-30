import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
    Navbar,
    Hero,
    About,
    Skills,
    Projects,
    ProfessionalExperience,
    Education,
    Certifications,
    Testimonials,
    Contact,
    Footer,
    ScrollProgress,
    BackToTop,
} from './components/Portfolio';
import ResumePage from './pages/ResumePage';

function Portfolio() {
    return (
        <div className="min-h-screen bg-black transition-colors duration-500 grain-overlay">
            <ScrollProgress />
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-lg focus:text-sm focus:font-bold"
            >
                Skip to content
            </a>
            <Navbar />
            <main id="main-content">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <ProfessionalExperience />
                <Education />
                <Certifications />
                <Testimonials />
                <Contact />
            </main>
            <Footer />
            <BackToTop />
        </div>
    );
}

function App() {
    return (
        <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/resume" element={<ResumePage />} />
        </Routes>
    );
}

export default App;
