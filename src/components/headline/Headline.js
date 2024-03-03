import { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaPaperclip, FaGithub, FaMedium } from "react-icons/fa";
import './Headline.css';

const Headline = () => {
  const [isWrapperActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isWrapperActive);
  };

    return (
      <section id="headline" className="headline-section-container">
        <div className="headline-information" data-aos="fade-right">
          <ul className="headline-icons">
            <li><a href="https://github.com/TalhaAkhun" target="_blank" rel="noreferrer"><FaGithub /></a></li>
            <li><a href="https://www.linkedin.com/in/talha-akhun3/" target="_blank" rel="noreferrer"><FaLinkedin /></a></li>
          </ul>
          <div className="headline-texts">
            <p>Hi, my name is</p>
            <p>Talha Najeeb Akhun</p>
            <p>I build things for the web</p>
          <p>I’m a Web Developing specializing in building (and occasionally designing) exceptional digital experiences. Currently.</p>
            <button onClick={toggleClass}>Contact me</button>
          </div>
        </div>

        <div onClick={toggleClass} className={isWrapperActive ? 'contact-wrapper on' : 'contact-wrapper'}>
          <div className="contact-button">
            <a href="https://www.linkedin.com/in/talha-akhun3/" target="_blank" rel="noreferrer">
            <FaLinkedin />
            Linkedin
            </a>
          </div>
          <div className="contact-button">
            <a href="mailto:TalhaNajeebAkhun3@gmail.com" target="_blank" rel="noreferrer">
            <FaEnvelope />
            Email
            </a>
          </div>
          <div className="contact-button">
          <a href="https://medium.com/@TalhaNajeeb/you-teach-you-learn-6f5ac50aae65" target="_blank" rel="noreferrer"><FaMedium />Articles</a>
          </div>
          <div className="contact-button">
            <a href="https://docs.google.com/document/d/1LbPa1ridPgLK8a7S7N86yOm4bRhlgkTKyYPqqfxeKbI/edit" target="_blank" rel="noreferrer">
            <FaPaperclip />
            Resume</a>
          </div>
        </div>
      </section>
    );
  };
  
export default Headline;
  