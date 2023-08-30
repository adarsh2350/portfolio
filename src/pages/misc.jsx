import React from 'react'
import Navbar from '../components/navbar'
import { NavLink } from 'react-router-dom'
import './misc.css'

const misc = () => {
  return (
    <div className='projnav'>
      <Navbar />
      <div className='title-box'>
        <h1 className='projti'>Miscellaneous  </h1>
      </div>
      <div className='timeline'>
          <div className="timeline-divider-misc"></div>
          <div className="timeline-box">
            <h1>Self Driving Cabs</h1><br/>
            <NavLink className="github" to='https://github.com/adarsh2350/SDC'>Github</NavLink><br />
            <span><b>Technologies used :  </b></span>
            <span>MATLAB, TLBO, intlinprog</span><br /><br/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur sint corporis commodi optio voluptatem suscipit voluptatibus consectetur quas cupiditate sapiente quam, culpa temporibus odit natus perspiciatis. Quis animi ullam officiis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, enim.</p>
          </div>
          <div className="timeline-box">
            <h1>Shuffle</h1><br/>
            <NavLink className="github" to='https://github.com/adarsh2350/Shuffle'>Github</NavLink><br />
            <span><b>Technologies used :  </b></span>
            <span>C++</span><br /><br/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur sint corporis commodi optio voluptatem suscipit voluptatibus consectetur quas cupiditate sapiente quam, culpa temporibus odit natus perspiciatis. Quis animi ullam officiis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, enim.</p>
          </div>
          <div className="timeline-box">
            <h1>Bending moment and Shear force Diagram</h1><br/>
            <NavLink className="github" to='https://github.com/adarsh2350/ME212_Project'>Github</NavLink><br />
            <span><b>Technologies used :  </b></span>
            <span>Python, Numpy, Matplotlib</span><br /><br/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur sint corporis commodi optio voluptatem suscipit voluptatibus consectetur quas cupiditate sapiente quam, culpa temporibus odit natus perspiciatis. Quis animi ullam officiis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, enim.</p>
          </div>
        </div>
    </div>
  )
}

export default misc