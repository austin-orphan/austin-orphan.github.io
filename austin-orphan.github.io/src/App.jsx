import React from 'react';
import Profile from './Profile';
import Nav from './Nav';
import './App.css';

function App() {
    return (
        <div>
            <Profile />
            <Nav />
            <div className="main-content">
                <div className="section" id="home">
                    <h2>Welcome</h2>
                    <p>This is your personal GitHub page. Feel free to modify and expand this template!</p>
                </div>

                <div className="section" id="about">
                    <h2>About Me</h2>
                    <p>Add your bio here. Talk about your skills, experience, and interests.</p>
                </div>

                <div className="section" id="projects">
                    <h2>Projects</h2>
                    <p>List your projects here with brief descriptions and links.</p>
                </div>

                <div className="section" id="contact">
                    <h2>Contact</h2>
                    <ul>
                        <li><a href="mailto:austin.orphan1@gmail.com">Email</a></li>
                        <li><a href="https://github.com/austin-orphan">GitHub</a></li>
                        <li><a href="https://linkedin.com/in/austin-orphan">LinkedIn</a></li>
                    </ul>
                </div>
            </div>

            <footer>
                <p>© 2025 Austin Orphan. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;