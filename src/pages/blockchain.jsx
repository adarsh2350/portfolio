import React from 'react'
import Navbar from '../components/navbar'
import './blockchain.css'

const blockchain = () => {
  return (
    <div className='projnav'>
      <Navbar />
      <div className='title-box'>
        <h1 className='projti'>Blockchain</h1>
      </div>
      <div className='body'>
        <h1 style={{color: '#009688'}}>Under Progress...</h1>
      </div>
    </div>
  )
}

export default blockchain