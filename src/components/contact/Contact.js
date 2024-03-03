import './Contact.css';
import { FaLocationArrow, FaMedium, FaGithub, FaLinkedin } from "react-icons/fa";
import darkiphone1 from '../../assets/images/darkiphone1.png'
import darkiphone2 from '../../assets/images/darkiphone2.png'

const Contact = () => {
    return (
      <section id="contact" className="contact-section-container">
        <div className="contact-column">
          <div className="contact-information" data-aos="fade-right">
            <div className="about-title">
              <FaLocationArrow className="arrow-icon" />
              <span>Get In Touch</span>
            </div>
            <p>If you want to work together on a project or just have a chat, please don't hesitate to contact me via email below.</p>
            <a class="email-link" href="mailto:TalhaNajeebAkhun3@gmail.com" target="_blank" rel="noreferrer">Say Hello</a>
          </div>
          <div className="relative" data-aos="fade-left">
            <img className="dark-phone" src={darkiphone1} alt="iPhone" />
            <img className="dark-phone phone-animation" src={darkiphone2} alt="iPhone" />
          </div>
        </div>
        <footer>
          <span><small>© All rights reserved</small></span>
          <ul>
            <li><a href="https://github.com/TalhaAkhun" target="_blank" rel="noreferrer"><FaGithub /></a></li>
            <li><a href="https://www.linkedin.com/in/talha-akhun3/" target="_blank" rel="noreferrer"><FaLinkedin /></a></li>
          </ul>
        </footer>
      </section>
    );
  };
  
export default Contact;
  
