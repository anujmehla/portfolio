import React from 'react';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects.js';
import Footer from './components/Footer';
import Contact from './components/contact.js';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
