import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundElements from './components/BackgroundElements';
import ThemeProvider from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="font-display transition-colors duration-700 min-h-screen flex flex-col relative overflow-x-hidden selection:bg-primary selection:text-white text-text-main-light dark:text-text-main-dark">
        <BackgroundElements />
        <Header />
        <main className="flex-grow pt-20">
          <Hero/>
          <About />
          <Skills />
          <Services />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;