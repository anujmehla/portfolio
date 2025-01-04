import React from 'react';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Spoorthi',
            description:
                'This is a ngo website backend built using Spring Boot.',
            link: 'https://github.com/anujmehla/Spoorthi',
        },
        {
            id: 2,
            title: 'Local Bank',
            description:
                'This is replica of a bank website built using Spring Boot.',
            link: 'https://github.com/anujmehla/LocalBank',
        },
    ];

    return (
        <section id="projects" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-10">
                    My Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="border rounded-lg p-4 shadow hover:shadow-lg"
                        >
                            <h3 className="text-xl font-bold">
                                {project.title}
                            </h3>
                            <p className="mt-2">{project.description}</p>
                            <a
                                href={project.link}
                                className="text-blue-500 mt-4 inline-block"
                            >
                                View Project
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
