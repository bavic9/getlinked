import React from 'react'
import { FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn, FaMapMarkerAlt, FaPhone } from "react-icons/fa";



const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
          <div className='footer-flex'>
              <div className='footer-head'>
                <h2>get<span>linked</span></h2>
                <p>Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology</p>
                <div className='footer-terms'>
                  <p className='term-use'>Terms of Use</p>
                  <p>Privacy Policy</p>
                </div>
              </div>
              <div className='footer-links'>
                <span>Useful links</span>
                <ul className="navbar-nav">
                  <li className="nav-item">
                        <a className="" href="#">overview</a>
                  </li>
                  <li className="nav-item active">
                      <a className="" href="#">timeline</a>
                  </li>
                  
                  <li className="nav-item">
                      <a className="" href="#">FAQs</a>
                  </li>
                  <li className="nav-item">
                      <a className="" href="#">register</a>
                  </li>
                </ul> 
                <ul className='app-icons'>
                  <li>
                    <span>Follow us</span>
                  </li>
                  <li>
                    <a href='#'><FaInstagram className='app-icon'/></a>
                  </li>
                  <li>
                    <a href='#'><FaTwitter className='app-icon'/></a>
                  </li>
                  <li>
                    <a href='#'><FaFacebookF className='app-icon'/></a>
                  </li>
                  <li>
                    <a href='#'><FaLinkedinIn className='app-icon'/></a>
                  </li>
                </ul>
              </div>

              <div className='footer-contacts'>
                <ul className="contact-nav">
                  <li className="nav-item">
                    <span className='contact-us'>contact us</span>
                  </li>
                </ul>
                <div className='contact-icon'>
                  <FaPhone className='app'/>
                  <p>+234 6707653444</p>
                </div>
                <div className='contact-icon'>
                  <FaMapMarkerAlt className='app'/>
                    <p className='address'>
                      27,Alara Street
                      Yaba 100012
                      Lagos State
                    </p>
                </div>
              </div>
            </div>
            <p className='footer-end'>All rights reserved. &copy; getlinked Ltd.</p>
        </div>
      
    </div>
  )
}

export default Footer
