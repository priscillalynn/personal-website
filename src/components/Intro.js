import React from "react";
import "../App.css";
import Typist from "react-typist-component";
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import temp from '../assets/pc3.gif'
import FadeInSection from "../FadeInSection";

const Intro = () => {
  return (
    <>
      <header>
        <div className="container header__container">
          
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
            I'm a senior Computer Science student at Florida International University. I have great
            interest in full-stack development, artificial intelligence,
            and data analytics. 
          </div>
          <a href="#contact" className="btn btn-primary">
              Say Hi!
            </a>
        </FadeInSection>
        </div>


  
        <div className='header__socials'>
      <a href='mailto:plynn9036@gmail.com' target="_blank" rel="noreferrer noopener" style={{ fontSize: '21px' }}><MdEmail/></a>
      <a href='https://github.com/priscillalynn' target="_blank" rel="noreferrer noopener" style={{ fontSize: '20px' }}><FaGithub/></a>
      <a href='https://www.linkedin.com/in/priscillalynn/' target="_blank" rel="noreferrer noopener" style={{ fontSize: '16px' }}><BsLinkedin/></a>
    </div>   
      </header>
    </>
  );
};

export default Intro;
