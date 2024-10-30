
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { MainContent } from './components/main/main';
import About from './components/About/about'; // Допустим, у вас есть компонент "О нас"
import Services from './components/Services/services'; // И компонент "Услуги"
import './styles.css';

const App = () => {
    return (
        <Router>
            <div className="container">
                <Header />
                <Routes>
                    <Route path="/" element={<MainContent />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;

