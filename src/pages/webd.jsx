import React from 'react'
import Navbar from '../components/navbar'
import './webd.css'
import { NavLink } from 'react-router-dom'

const webd = () => {
  return (
    <>
      <div className='projnav'>
        <Navbar />
        <div className='title-box'>
          <h1 className='projti'>WebD</h1>
        </div>
        <div className='timeline'>
          <div className="timeline-divider-web"></div>
          <div className="timeline-box">
            <h1>pixelAI</h1><br/>
            <NavLink className="github" to='https://github.com/adarsh2350/pixelAI'>Github</NavLink><br />
            <span><b>Technologies used :  </b></span>
            <span>vite, ReactJS, ExpressJS, MongoDB atlas, openAI API, axios, tailwind</span><br /><br/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur sint corporis commodi optio voluptatem suscipit voluptatibus consectetur quas cupiditate sapiente quam, culpa temporibus odit natus perspiciatis. Quis animi ullam officiis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, enim.</p>
          </div>
          <div className="timeline-box">
            <h1>TalkLink</h1><br/>
            <NavLink className="github" to='https://github.com/adarsh2350/TalkLink'>Github</NavLink><br />
            <span><b>Technologies used :  </b></span>
            <span>ReactJS, ExpressJS, MongoDB atlas, Redux, Socket.io, JWT, bcrypt</span><br /><br/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur sint corporis commodi optio voluptatem suscipit voluptatibus consectetur quas cupiditate sapiente quam, culpa temporibus odit natus perspiciatis. Quis animi ullam officiis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, enim.</p>
          </div>
          <div className="timeline-box">
            <h1>Weather App</h1><br/>
            <NavLink className="github" to='https://github.com/adarsh2350/weather_app'>Github</NavLink><br />
            <span><b>Technologies used :  </b></span>
            <span>handlebars, ExpressJS, weather API</span><br /><br/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur sint corporis commodi optio voluptatem suscipit voluptatibus consectetur quas cupiditate sapiente quam, culpa temporibus odit natus perspiciatis. Quis animi ullam officiis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, enim.</p>
          </div>
          <div className="timeline-box">
            <h1>Contact</h1><br/>
            <NavLink className="github" to='https://github.com/adarsh2350/contact'>Github</NavLink><br />
            <span><b>Technologies used :  </b></span>
            <span>ReactJS, ExpressJS, mongoDB atlas, JWT, bcrypt, Bootstrap</span><br /><br/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur sint corporis commodi optio voluptatem suscipit voluptatibus consectetur quas cupiditate sapiente quam, culpa temporibus odit natus perspiciatis. Quis animi ullam officiis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, enim.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default webd