import React from 'react';

const Hero = () => {
    return (
        <section
            id="hero"
            className="h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white"
        >
            <div className="text-center">
                <h1 className="text-5xl font-bold">Hi, I'm Anuj Mehla</h1>
                <p className="mt-4 text-xl">
                    A passionate developer building cool projects.
                </p>
                <a
                    href="#projects"
                    className="mt-8 inline-block px-6 py-3 bg-white text-blue-500 font-semibold rounded shadow hover:bg-gray-100"
                >
                    View My Projects
                </a>
            </div>
        </section>
    );
};

export default Hero;
