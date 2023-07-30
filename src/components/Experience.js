import React from "react";
import JobsList from "./JobsList";
import "../styles/Experience.css";
import FadeInSection from "../components/FadeInSection";

class Experience extends React.Component {
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
    return (
      <div id="experience">
        <FadeInSection>
          <div className="section-header">
            <span className="section-title">/ experience</span>
          </div>
          <JobsList></JobsList>
        </FadeInSection>
      </div>
    );
  }
}

export default Experience;