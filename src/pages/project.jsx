import React from 'react'
import Header from '../components/header'
import './project.css'
import { NavLink } from 'react-router-dom'

const project = () => {
  return (
    <>
        <Header />
        <h1 class="heading">
              <span>
                  <i class="texthead fas fa-file"></i>
              </span>
              <span className='texthead'>
                  {" "}PROJECTS
              </span>
              <div className='body'>
                <div className='prjbx'>
                  <NavLink to='./webd' className='prjtxt'>WebD</NavLink>
                </div>
                <div className='prjbx'>
                <NavLink to='./datasc' className='prjtxt'>Data Science</NavLink>
                </div>
                <div className='prjbx'>
                <NavLink to='./blockchain' className='prjtxt'>Blockchain</NavLink>
                </div>
                <div className='prjbx'>
                <NavLink to='./misc' className='prjtxt'>Miscellaneous</NavLink>
                </div>
              </div>
          </h1>
    </>
  )
}

export default project