// src/components/Projects.js

import React from 'react';

const projectsData = [
    {
        title: 'Automatic License Plate Detection Using ML',
        date: 'Jan 2024 - May 2024',
        tools: ['Python', 'Django', 'YOLOv8 model'],
        description: 'Co-developed an AI-driven Bengali License Plate detection system at Visual Machine Intelligence Lab. Integrated a LIDAR with Raspberry Pi to automate registration and storage.',
        image: 'assets/images/segmentation_demo.png',
        github: 'https://github.com/Sabbbir/image-segmentation'
    },
    {
        title: 'AI Chatbot using Open Source LLM',
        date: 'May 2024',
        tools: ['Ollama with llama3-8b', 'Streamlit'],
        description: 'Developed a bot that answers user queries using an open-source Large Language Model. The bot searches information provided in a PDF and answers questions, working as a smart sales assistant 24/7.',
        image: 'assets/images/chatbot.png', // Add corresponding image
        github: 'https://github.com/Sabbbir/ai-chatbot'
    },
    {
        title: 'Virtual Photo Booth',
        date: 'Sep 2023',
        tools: ['Python', 'QtPy6', 'PyTorch', 'BASNet Model'],
        description: 'Created a Virtual Photo Booth app using BASNet, Python, and QtPy6. This app separates the user from the background and replaces it with a new background chosen by the user. Presented this project at CSE Fest-JUST 2023.',
        image: 'assets/images/virtual_photo_booth.png', // Add corresponding image
        github: 'https://github.com/Sabbbir/virtual-photo-booth'
    },
    {
        title: 'NASA Space Apps Challenge 2023',
        date: 'Aug 2023',
        tools: ['HTML', 'CSS', 'Bootstrap', 'three.js', 'Python'],
        description: 'Led team Entergalactic, selected among the top teams for the 2nd round. Features include viewing Mars in 3D, learning about its attributes, and getting weather reports from rovers on Mars.',
        image: 'assets/images/nasa_space_apps.png', // Add corresponding image
        github: 'https://github.com/Sabbbir/nasa-space-apps'
    },
    // Add more projects as needed
];

const Projects = () => {
    return (
        <section id="projects">
            <div className="container">
                <h2>Projects</h2>
                <hr />
                {projectsData.map((project, index) => (
                    <div className="project" key={index}>
                        <img src={project.image} alt={`${project.title} Screenshot`} />
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p className="date">{project.date}</p>
                            <p><strong>Tools Used:</strong> {project.tools.join(', ')}</p>
                            <p>{project.description}</p>
                            <a href={project.github} target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> View on GitHub</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;

