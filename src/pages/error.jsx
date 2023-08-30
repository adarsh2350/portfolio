import React from 'react'
import pic from '../images/error.svg'
import { NavLink } from 'react-router-dom'

const error = () => {
  return (
    <div className="error">
      <img src={pic} alt="pic" />
      <NavLink to='/'><button class="btn erbtn"><span></span>Back to HOME</button></NavLink>
    </div>
  )
}

export default error