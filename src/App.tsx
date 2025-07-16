import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Certifications from './components/Certifications/Certifications';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import EasterEgg from './components/Easter/EasterEgg';
import MusicPlayer from './components/MusicPlayer/MusicPlayer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import PWAInstallPrompt from './components/PWA/PWAInstallPrompt';
import SEOHelmet from './components/SEO/SEOHelmet';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <div className="min-h-screen bg-white dark:bg-dark-900 transition-colors duration-300">
          <SEOHelmet />
          <CustomCursor />
          <LoadingScreen />
          <EasterEgg />
          <MusicPlayer />
          <ScrollToTop />
          <PWAInstallPrompt />
          
          <Header />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Certifications />
            <Blog />
            <Contact />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;