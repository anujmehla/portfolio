import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4 fixed w-full top-0">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">My Portfolio</h1>
                <ul className="flex space-x-4">
                    <li>
                        <a href="#hero" className="hover:underline">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="hover:underline">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="hover:underline">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:underline">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
