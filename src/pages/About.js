import React from 'react';
import './About.css'; // Import the CSS file

const AboutMe = () => {
    return (
        <div className="about-me-container">
            <h2>About Me</h2>
            <p>
                Hello! I’m <strong>Sahil Bambarkar</strong>, an ambitious Full-Stack Developer with a strong interest in multimedia design. I bring new ideas and a creative mindset to the table. Despite being new to the sector, I have gained valuable experience in website and app development, where I combine technical expertise with creative design skills to create amazing digital experiences.
            </p>
            <h3>Skills</h3>
            <ul>
                <li>Front-End: HTML, CSS, JavaScript (React, Next.js, Vite)</li>
                <li>Back-End: Node.js, Express.js, Python (Django), Java</li>
                <li>Databases: SQL (MySQL, PostgreSQL), NoSQL (MongoDB, Firebase)</li>
                <li>Version Control: Git, GitHub</li>
                <li>Deployment: AWS, Vercel</li>
            </ul>
            <h3>Projects</h3>
            <p>Check out my projects on <a href="https://github.com/sahilbambarkar/" target="_blank" rel="noopener noreferrer">GitHub</a>!</p>
            <h3>Connect with Me</h3>
            <p>
                Feel free to reach out on
                <a href="https://www.linkedin.com/in/sahil-bambarkar-7082632b2/" target="_blank" rel="noopener noreferrer"> LinkedIn</a>,
             or
                <a href="mailto:sahilbambarkar007@gmail.com"> Email Me</a>.
            </p>
        </div>
    );
};

export default AboutMe;