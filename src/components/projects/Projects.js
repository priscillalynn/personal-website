import React from 'react'
import './projects.css'
import IMG1 from '../../assets/app.jpg'
import IMG2 from '../../assets/Earthlings_Logo.png'


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
          <div className="portfolio__item-cta">
            <a href="https://github.com/CatDevz/Earthlings" className='btn' target="_blank" rel="noopener noreferrer">Github</a>
            <a href="https://devpost.com/software/earthlings" className='btn btn-primary' target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="project 2" />
          </div>
          <h3>LibSurf</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/priscillalynn/lib-surf" className='btn' target="_blank" rel="noopener noreferrer">Github</a>
            <a href="https://github.com" className='btn btn-primary' target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="project 3" />
          </div>
          <h3>Coming Soon: Game Collection</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target="_blank" rel="noopener noreferrer">Github</a>
            <a href="https://github.com" className='btn btn-primary' target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Projects