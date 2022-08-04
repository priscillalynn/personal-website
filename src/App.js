import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'

const App = () => {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Projects />
    <Skills />
    <Contact />
    </>
    
  )
}

export default App