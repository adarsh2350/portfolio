import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

const navbar = () => {
  return (
    <>
        <div className="navbar">
            <NavLink className="lt" href="./"><h1 className="logo">Portfolio.</h1></NavLink>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/edu">Education</NavLink></li>
                <li><NavLink to="/skills">Skills</NavLink></li>
                <li><NavLink to="/project">Projects</NavLink></li>
                <li><NavLink to="/experience">Experience</NavLink></li>
            </ul>
        </div>
    </>
  )
}

export default navbar
