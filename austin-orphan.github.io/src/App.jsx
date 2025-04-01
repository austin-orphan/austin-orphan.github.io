import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import DSA from './components/DSA';
import LSD from './components/LSD';
import './App.css';

function App() {
    return (
        <Router basename="/">
            <Header />
            <nav>
                <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
                    Home
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
                    About
                </NavLink>
                <NavLink to="/dsa" className={({ isActive }) => (isActive ? 'active' : '')}>
                    DSA Cheat Sheet
                </NavLink>
                <NavLink to="/lsd" className={({ isActive }) => (isActive ? 'active' : '')}>
                    Lean Software Development
                </NavLink>
            </nav>
            <div className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/dsa" element={<DSA />} />
                    <Route path="/lsd" element={<LSD /> } />
                    <Route path="*" element={<h2>404 - Page Not Found</h2>} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;