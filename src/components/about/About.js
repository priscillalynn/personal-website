import React from 'react'
import './about.css'
import ME from '../../assets/pc2.gif'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className=".container.about__container grid">
        
          <div className="about__me-img">
            <img src={ME} alt="About Me" />
          </div>
        
          <div className="about__me">
          <p>
          I am currently a third year Computer Science major at Florida International University.
          <br />
          For the upcoming 2022 Fall semester, I will be working on my own personal projects to gain the necessary skills to obtain my first Software Engineer internship.
          <br />
          Outside of work, I like to read fiction novels, do outdoor activities such as hiking, and play video games. 
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
    </section>
  )
}

export default About