import React from 'react'
import './projects.css'
import IMG2 from '../../assets/Earthlings_Logo.png'
import IMG3 from '../../assets/bookicon.png'


const Projects = () => {
  return (
    <section id='projects'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="project 1" />
          </div>
          <h3>Hackathon Winner: <br />Earthlings</h3>
          <p>Earthlings is an android-based application that will show you the location of all garbage cans.</p>
          <br />
          <br />
          <p>JavaScript, Java</p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/CatDevz/Earthlings" className='btn' target="_blank" rel="noopener noreferrer">Github</a>
            <a href="https://devpost.com/software/earthlings" className='btn btn-primary' target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="project 2" />
          </div>
          <h3>LibSurf</h3>
          <p>LibSurf is a web application that implements the Open Library API and will allow you to search a library for any book you're looking for.</p>
          <br />
          <br />
          <p>JavaScript, HTML / CSS</p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/priscillalynn/lib-surf" className='btn' target="_blank" rel="noopener noreferrer">Github</a>
            <a href="https://github.com" className='btn btn-primary' target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Projects