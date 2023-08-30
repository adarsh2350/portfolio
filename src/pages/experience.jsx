import React from 'react'
import Header from '../components/header'
import './experience.css'

const experience = () => {
  return (
    <>
      <Header />
      <div className='pfhead'>
        <h1>
            <span>
                <i class="texthead fas fa-chalkboard"></i>
            </span>
            <span className='texthead'>
              {" "}EXPERIENCE
            </span>
        </h1>
      </div>
      <div className='body'>
        <h1 className='body-text'>Under Progress...</h1>
      </div>
    </>
  )
}

export default experience