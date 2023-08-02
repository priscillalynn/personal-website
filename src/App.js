import React from 'react'
import './App.css'
import Intro from './components/Intro'
import Navbar from './components/Nav'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
//import Skills from './components/skills/Skills'
//import Contact from './components/contact/Contact'
import Footer from './components/Footer'



const App = () => {
  return (
    <div className="App">
      <div id="content">
    <Intro />
    <About />
    <Experience />
    <Projects />
    <Footer />
    </div>
    <Navbar />
    </div>
    
  );
}

export default App