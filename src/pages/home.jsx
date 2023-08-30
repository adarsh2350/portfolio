import React from 'react'
import Navbar from '../components/navbar'
import Social from '../components/social'
import { NavLink } from 'react-router-dom'

const home = () => {
    return (
        <>
          <div className="banner">
            <Navbar />
            <div className="content">
                <Social />
              <div>
                <NavLink to='/skills'><button class="btn"><span></span>Know More...</button></NavLink>
            </div>
            </div>
          </div>
        </>
    )
}

export default home
