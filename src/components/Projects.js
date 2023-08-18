import React from "react";
import "../styles/Projects.css";
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import FadeInSection from "./FadeInSection";
//import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from 'react-bootstrap/Carousel';
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const spotlightProjects = {
      Creatorverse: {
        title: "creatorverse",
        desc:
          "A frontend that supports CRUD operations and API interactions on favorite content creators.",
        techStack: "REACT.JS, VITE, SUPABASE",
        link: "https://github.com/priscillalynn/codepath-web103-prework",
        //open: "",
        image: "https://user-images.githubusercontent.com/85073401/249640071-239799f6-6e5e-48d4-829c-f390671d0444.gif"
      },
      Booksurf: {
        title: "booksurf",
        desc:
          "Book surfing website utilizing the Open Library API.",
        techStack: "REACT.JS, OPENLIBRARY API",
        link: "https://github.com/priscillalynn/lib-surf",
        //open: "",
        image: "https://i.pinimg.com/originals/7b/1b/b6/7b1bb67b642f2665a0709a26e57300e1.gif"
      },
      Pomodoro: {
        title: "pomodoro",
        desc:
          "A visually pleasing pomodoro timer website that incorporates a calming work/study playlist.",
        techStack: "HTML, CSS, JAVASCRIPT",
        link: "https://github.com/priscillalynn/pomodoro",
        //open: "",
        image: "https://github.com/priscillalynn/pomodoro/assets/85073401/a38a1390-d73f-410a-b7c8-17aa5517d85e"
      },
      Bloom: {
        title: "bloom",
        desc:
          "A flower arrangement company's site utilizing a flexbox layout.",
        techStack: "HTML, CSS",
        link: "https://github.com/priscillalynn/bloom-company-site",
        //open: "",
        image: "https://user-images.githubusercontent.com/85073401/223115482-59a4384e-3f94-4546-8b21-9a2e41b9bae4.gif"
      }
    };
    const projects = {
      "title": {
        desc: "description",
        techStack: "Python (Flask), Vue.js, Bootstrap, SQL",
        link: "https://github.com/",
        open: "https://github.com/",
      },
      "title": {
        desc: "description",
        techStack: "Javascript, HTML / CSS",
        link: "https://github.com/",
        open: "https://github.com/",
      },
      "title": {
        desc: "description",
        techStack: "Node.js (Express.js), React.js, PostgreSQL",
        link: "https://github.com/",
      },
      "title": {
        desc: "description",
        techStack: "Javascript, Node.js, Natural NLP, Telegram API",
        link: "https://github.com/",
        open: "",
      },
      "title": {
        desc: "description",
        techStack: "Java, Android Studio",
        link: "https://github.com/",
        open: "",
      },
      "title": {
        desc: "description",
        techStack: "Python",
        link: "https://github.com/",
        open: "",
      },
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ software-creations</span>
        </div>
        <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>
                    {spotlightProjects[key]["desc"]}
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </p>
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        {/*
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
        */}
      </div>
    );
  }
}

export default Projects;