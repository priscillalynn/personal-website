import React from 'react'
import './App.css'
//import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

import Intro from './components/Intro'
import FadeInSection from '../src/components/FadeInSection'
import Navbar from './components/Nav'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'

const App = () => {
  return (
    <>
    <Intro />
    <Navbar />
    <About />
    <Experience />
    <Projects />
    <Skills />
    <Contact />
    <Footer />
    </>
    
  )
}

export default App