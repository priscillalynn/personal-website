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
        techStack: "REACT.JS, SUPABASE",
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
        open: "https://libsurf.xyz/",
        image: "https://i.pinimg.com/originals/7b/1b/b6/7b1bb67b642f2665a0709a26e57300e1.gif"
      },
      Pomodoro: {
        title: "pomodoro",
        desc:
          "A visually pleasing pomodoro timer website that incorporates a calming work/study playlist.",
        techStack: "HTML, CSS, JAVASCRIPT",
        link: "https://github.com/priscillalynn/pomodoro",
        //open: "",
        image: "https://user-images.githubusercontent.com/85073401/216035513-f219cdc1-e031-43cb-b0b6-9a97842e40c1.gif"
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
      "TDSB Homework Management Interface": {
        desc:
          "An application created for Toronto District School Board, with a Flask back-end and a Vue front-end.",
        techStack: "Python (Flask), Vue.js, Bootstrap, SQL",
        link: "https://github.com/gazijarin/TDSBHomeworkManagement",
        open: "https://tdsb-app.herokuapp.com/"
      },
      "Adam A.I.": {
        desc:
          "A self-learning A.I. that learns to traverse through a complex maze using the genetic algorithm.",
        techStack: "Javascript, HTML / CSS",
        link: "https://github.com/gazijarin/adamai",
        open: "https://gazijarin.github.io/AdamAI/"
      },
      "Distributed Logging and Monitoring System": {
        desc:
          "A system that establishes an ORM connection to a Prisma client in order to communicate logs from microservices.",
        techStack: "Node.js (Express.js), React.js, PostgreSQL",
        link:
          "https://github.com/gazijarin/Distributed-Logging-and-Monitoring-System"
      },
      "Odin Bot": {
        desc:
          "A Telegram bot that helps you excel on your daily tasks through Node NLP.",
        techStack: "Javascript, Node.js, Natural NLP, Telegram API",
        link: "https://github.com/gazijarin/OdinBot",
        open: ""
      },
      "Game Centre": {
        desc:
          "An Android app consisting of three board games, including multiplayer, autosave, user authentication, etc.",
        techStack: "Java, Android Studio",
        link: "https://github.com/gazijarin/gamecentre",
        open: ""
      },
      "Minimax Stonehenge": {
        desc:
          "Two-player, zero-sum game with a strategic Minimax artificial intelligence.",
        techStack: "Python",
        link: "https://github.com/gazijarin/stonehenge",
        open: ""
      }
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
      </div>
    );
  }
}

export default Projects;