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
                For Fall 2022, my goal is to gain experience working in a professional software development environment by obtaining an internship for 2023. As a student with a strong grasp of CS fundamentals like object-oriented programming, data structures & algorithms, I am capable of learning quickly and working well on a team. Obtaining an internship would mean achieving something in a field that I am truly passionate about, with the outcome of growing into a better developer.
                <br />
                <br />
                Here are some of the technologies I have been working with: 
                <br />
                <br />
                Java, HTML/CSS, JavaScript, SQL, Kotlin, C
                <br />
                <br />
                Outside of work and school, I like to read fiction novels, do outdoor activities such as hiking, and play video games. 
              </p>
          <div className='about_cta'>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            </div>
          </div>
        </div>
    </section>
  )
}

export default About