import React from 'react';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects.js';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Footer />
        </div>
    );
}

export default App;
