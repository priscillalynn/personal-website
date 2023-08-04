import React from "react";
import "../styles/About.css";
import FadeInSection from "../components/FadeInSection";

class About extends React.Component {
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
    const one = (
      <p>
        I am currently studying <b>Computer Science</b> at <a href="https://www.fiu.edu/" 
        target="_blank">Florida International University</a> in Miami, FL.
        At the same time, I am undertaking a Data Analytics internship at{" "}
        <a href="https://www.bankunited.com/">BankUnited</a>.
      </p>
    );
    const two = (
      <p>
        Outside of work, I enjoy developing my own personal projects and keeping up with new technologies. I also play a lot of video games. 
      </p>
    );
    const three = (
      <p>
        <b>Want to chat?</b> Shoot me a message at{" "}
        <a href="mailto:plynn9036@gmail.com">
          plynn9036@gmail.com
        </a>{" "}
        and let's talk.
      </p>
    );

    const desc_items = [one, two];

    const tech_stack = [
      "Javascript ES6+",
      "Python",
      "React.js",
      "SQL",
      "HTML & CSS",
      "MS Power Apps",
    ];

    const tech_items = tech_stack.map(stack => <li>{stack}</li>);

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img src={"https://i.pinimg.com/564x/d9/ec/6a/d9ec6a65dded8a9bb6e9f1f9ee646646.jpg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;