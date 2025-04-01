import React from 'react';
import Profile from './Profile';
import Nav from './Nav';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';

function App() {
    return (
        <div>
            <Profile />
            <Nav />
            <div className="main-content">
                <div className="section" id="home">
                    <h2>Welcome</h2>
                    <p>This is my personal GitHub page. Feel free to copy and expand this template!</p>
                </div>

                <div className="section" id="about">
                    <h2>About Me</h2>
                    <p>I'm an experienced full-stack lead developer with over 12 years across many industries.</p>
                    <p>Passionate about designing scalable software solutions, mentoring teams, and building real-world applications that solve meaningful problems.</p>
                </div>

                <div className="section" id="projects">
                    <h2>Projects</h2>
                    <p>This project, which uses React to create a Single Page Application (SPA): <a href="https://github.com/austin-orphan/austin-orphan.github.io">Repository Link</a></p>
                    <p>A TODO app showcasing Vue.js fundamentals: <a href="https://github.com/austin-orphan/austin-todo">Repository Link</a></p>
                </div>

                <div className="section" id="contact">
                    <h2>Contact</h2>
                    <p><a href="mailto:austin.orphan1@gmail.com">Email</a></p>
                    <p><a href="https://github.com/austin-orphan">GitHub</a></p>
                    <p><a href="https://linkedin.com/in/austin-orphan">LinkedIn</a></p>
                </div>
            </div>

            <footer>
                <p>This website is made with</p>
                <div>
                    <a href="https://vite.dev" target="_blank">
                        <img src={viteLogo} className="logo" alt="Vite logo" />
                    </a>
                    <a href="https://react.dev" target="_blank">
                        <img src={reactLogo} className="logo react" alt="React logo" />
                    </a>
                </div>
                <h3>Vite + React</h3>
                <p className="read-the-docs">
                    Click on the Vite and React logos to learn more
                </p>
                <p>&copy; 2025 Austin Orphan. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;