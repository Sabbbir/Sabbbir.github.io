// src/App.js

import React, { useEffect } from 'react';
import './styles.css';
import Background from './components/Background';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Awards from './components/Awards';
import BackToTop from './components/BackToTop';

function App() {
    useEffect(() => {
        // Fade-in Observer
        const sections = document.querySelectorAll('section');
        const options = {
            threshold: 0.1
        };
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, options);
        sections.forEach(section => {
            observer.observe(section);
        });

        // Smooth Scrolling handled via anchor tags in index.html
    }, []);

    return (
        <div className="App">
            <Background />
            <header>
                <div className="container">
                    <h1>Sabbir Ahmed</h1>
                    <p>Computer Science Student & Machine Learning Enthusiast</p>
                    <nav>
                        <a href="#education"><i className="fas fa-graduation-cap"></i> Education</a>
                        <a href="#skills"><i className="fas fa-code"></i> Skills</a>
                        <a href="#projects"><i className="fas fa-project-diagram"></i> Projects</a>
                        <a href="#experience"><i className="fas fa-briefcase"></i> Experience</a>
                        <a href="#awards"><i className="fas fa-trophy"></i> Awards</a>
                        <a href="#contact"><i className="fas fa-envelope"></i> Contact</a>
                    </nav>
                </div>
            </header>

            <Education />
            <Skills />
            <Projects />
            <Experience />
            <Awards />
            <section id="contact">
                <div className="container">
                    <h2>Contact</h2>
                    <form id="contact-form" className="contact-form" action="https://formspree.io/f/mvgoydvj" method="POST">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" placeholder="Your Name" required />
                        
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="_replyto" placeholder="Your Email" required />
                        
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
                        
                        <button type="submit">Send Message</button>
                    </form>
                    <div id="form-message" className="hidden">
                        <p>Thank you for your message! I will get back to you soon.</p>
                    </div>
                    <div className="social-links">
                        <p>Email: <a href="mailto:sabbir.ahmed.cse19.just@gmail.com"><i className="fas fa-envelope"></i> sabbbir.ahmed.cse19.just@gmail.com</a></p>
                        <p>LinkedIn: <a href="https://www.linkedin.com/in/sabbbir-ahmed1925/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i> linkedin.com/in/sabbbir-ahmed1925/</a></p>
                        <p>GitHub: <a href="https://github.com/Sabbbir" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> Sabbbir</a></p>
                    </div>
                </div>
            </section>

            <BackToTop />
        </div>
    );
}

export default App;

