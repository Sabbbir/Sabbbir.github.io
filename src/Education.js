// src/components/Education.js

import React from 'react';

const Education = () => {
    return (
        <section id="education">
            <div className="container">
                <h2>Education</h2>
                <hr />
                <div className="education-item">
                    <h3>Jashore University of Science and Technology</h3>
                    <p className="date">Jan 2020 - Current</p>
                    <p>Bachelor of Science in Computer Science and Engineering</p>
                </div>
                <div className="education-item">
                    <h3>Govt. Sundarban Adarsha College, Khulna</h3>
                    <p className="date">Graduated with GPA: 5.00/5.00</p>
                    <p>Higher Secondary Certificate</p>
                </div>
            </div>
        </section>
    );
}

export default Education;

