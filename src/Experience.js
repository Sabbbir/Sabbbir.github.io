// src/components/Experience.js

import React from 'react';

const experienceData = [
    {
        title: 'ICT Olympiad Bangladesh',
        date: 'Apr 2022 - Current',
        position: 'University Team Leader',
        description: ''
    },
    {
        title: 'Research Assistant, VMI Lab, JUST',
        date: 'Nov 2023 - Current',
        position: '',
        description: 'Researched advanced image segmentation models, exploring and implementing cutting-edge image processing algorithms. Gained hands-on experience in applying state-of-the-art techniques to real-world datasets, contributing to the lab\'s ongoing projects.'
    },
    {
        title: 'Lab Assistant, Dept. of CSE, JUST',
        date: 'Feb 2024 - June 2024',
        position: '',
        description: 'Facilitated hands-on training for 25 students on MS Office Suite. Designed and evaluated midterm and final exams and quizzes to enhance student understanding and assess proficiency in MS Office tools.'
    },
    {
        title: 'Machine Learning Teaching Assistant, JUST',
        date: 'Oct 2024 - Current',
        position: '',
        description: 'Supporting lab sessions for 50+ students on core machine learning topics, including supervised and unsupervised learning. Assisting in the preparation of assignments, quizzes, and projects to reinforce student understanding. Aiming to enhance student engagement through hands-on demonstrations and personalized guidance.'
    },
    // Add more experiences as needed
];

const Experience = () => {
    return (
        <section id="experience">
            <div className="container">
                <h2>Experience</h2>
                <hr />
                {experienceData.map((exp, index) => (
                    <div className="education-item" key={index}>
                        <h3>{exp.title}</h3>
                        <p className="date">{exp.date}</p>
                        {exp.position && <p><strong>Position:</strong> {exp.position}</p>}
                        <p>{exp.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Experience;

