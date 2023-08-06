import React from "react";
import "../styles/Intro.css"
import Typist from "react-typist-component";
import temp from '../assets/pc3.gif'
import FadeInSection from "./FadeInSection";
import EmailIcon from '@mui/icons-material/Email';

/*
const Intro = () => {
  return (
    <>
    <section id="intro">
        <div className="container header-container">
          
        <div className="header-img">
           <img src={temp} alt="computer" />
        </div>
  
          <Typist avgTypingDelay={120}>
            <span className="intro-title">
              {"hi, i'm "}
              <span className="intro-name">{"priscilla."}</span>
              <span className="Cursor">|</span>
            </span>            
          </Typist>

          <FadeInSection>
          <div className="intro-subtitle">I like to code sometimes.</div>
          <div className="intro-desc">
            I'm a senior Computer Science student at Florida International University and I have great
            interest in full-stack development, artificial intelligence,
            and data analytics. 
          </div>
          <a href="#contact" className="btn btn-primary">
              Say Hi!
            </a>
        </FadeInSection>
        </div>
      </section>
    </>
  );
};
*/


class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    return (
      <div id="intro">
        <div className="header-img">
            <img src={temp} alt="computer" />
        </div>
        <Typist avgTypingDelay={120}>
          <span className="intro-title">
            {"hi, i'm "}
            <span className="intro-name">{"priscilla"}</span>
            {"."}
            <span className="cursor">|</span>
          </span>
        </Typist>
        <FadeInSection>
          <div className="intro-subtitle">I like to code sometimes.</div>
          <div className="intro-desc">
            I'm a senior Computer Science student and aspiring Software Engineer based in South Florida. I have great
            interest in full-stack development, artificial intelligence,
            and data analytics.
          </div>
          <a
            href="#contact"
            className="intro-contact"
          >
            <EmailIcon></EmailIcon>
            {"  " + "Say hi!"}
          </a>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;
