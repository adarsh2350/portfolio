import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn, faTwitter, faInstagram, faFacebookF, faGithub } from "@fortawesome/free-brands-svg-icons"
import './social.css'

const social = () => {
  return (
    <>
      <h1 className='name'>ADARSH KUMAR</h1>
      <div className="social">
          <NavLink to="https://www.linkedin.com/in/adarsh2350/"><FontAwesomeIcon className="logos" icon={faLinkedinIn} /></NavLink>
          <NavLink to="https://twitter.com/adarsh2350"><FontAwesomeIcon className="logos" icon={faTwitter} /></NavLink>
          <NavLink to="https://www.instagram.com/a_adarsh_kr/"><FontAwesomeIcon className="logos" icon={faInstagram} /></NavLink>
          <NavLink to="https://www.facebook.com/adarsh2350"><FontAwesomeIcon className="logos" icon={faFacebookF} /></NavLink>
          <NavLink to="https://github.com/adarsh2350"><FontAwesomeIcon className="logos" icon={faGithub} /></NavLink>
      </div>
    </>
  )
}

export default social
