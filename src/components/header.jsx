import React from 'react'
import Navbar from './navbar'
import Social from './social'
import './header.css'

const header = () => {
  return (
    <>
        <div className="header">
            <Navbar />
            <div className='content'>
                <Social />
            </div>
        </div>
    </>
  )
}

export default header