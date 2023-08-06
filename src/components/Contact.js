import React from 'react'
import '../styles/contact.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import FadeInSection from "../components/FadeInSection";



const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jdpjnyg', 'template_ulavat8', form.current, 'kbQj4KeG0eF12qS3S')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <FadeInSection>
    <div id='contact'>
        <div className="section-header ">
          <span className="section-title">/ contact</span>
        </div>
      <div className="contact-container">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required />
          <button type='submit' className='send-btn'>Send Message</button>
        </form>
      </div>
    </div>
    </FadeInSection>
  )
}

export default Contact