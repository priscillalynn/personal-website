import React from 'react'
import './App.css'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Intro from './components/Intro'

const App = () => {
  return (
    <>
    <Intro />
    <Nav />
    <About />
    <Projects />
    <Skills />
    <Contact />
    <Footer />
    </>
    
  )
}

export default App