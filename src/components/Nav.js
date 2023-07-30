import React from "react";
import { Sidenav } from 'rsuite';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/Nav.css'
import FadeInSection from "./FadeInSection";

const isMobile = window.innerWidth < 600;

class Navbar extends React.Component {
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
    const { expanded } = this.state;

    const links = [
      <a href="#">/home</a>,
      <a href="#about">/about</a>,
      <a href="#experience">/experience</a>,
      <a href="#projects">/projects</a>
    ];

    return (
      <div className="sidebar-nav">
        {!isMobile && (
          <Sidenav
            expanded={expanded}
            defaultOpenKeys={["3", "4"]}
            activeKey={this.state.activeKey}
            onSelect={this.handleSelect}
            appearance={"subtle"}
          >
            <Sidenav.Body>
              <div className="sidebar-links">
                {links.map((link, i) => (
                  <FadeInSection delay={`${i + 1}00ms`}>
                    <div>{link}</div>
                  </FadeInSection>
                ))}
              </div>
            </Sidenav.Body>
          </Sidenav>
        )}
        <div className="sidebar-logos" href="/">
          <a href="mailto:plynn9036@gmail.com">
            <EmailIcon style={{ fontSize: 20 }}></EmailIcon>
          </a>
          <a href="https://github.com/priscillalynn" target="_blank" rel="noreferrer noopener">
            <GitHubIcon style={{ fontSize: 19 }}></GitHubIcon>
          </a>
          <a href="https://www.linkedin.com/in/priscillalynn/" target="_blank" rel="noreferrer noopener">
            <LinkedInIcon style={{ fontSize: 21 }}></LinkedInIcon>
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;