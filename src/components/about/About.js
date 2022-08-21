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
          Hello there!
          I am currently a third year Computer Science major at Florida International University.
          <br />
          For the upcoming 2022 Fall semester, I will be working on my own personal projects to gain the necessary skills to obtain my first Software Engineer internship. I have experience with Java, HTML/CSS, JavaScript, SQL, and Kotlin. For Fall 2022, I will be participating in CodePath organization's Android Development in Kotlin course and will be looking for internship opportunities for 2023.
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