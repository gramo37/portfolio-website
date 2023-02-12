import React from 'react'
import About from '../components/About';
import Dashboard from '../components/Dashboard';
import Projects from '../components/Projects';
import Resume from '../components/Resume';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Dashboard />
            <About />
            <Resume />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </>
    )
}

export default Home