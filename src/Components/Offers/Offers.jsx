import React from 'react'
import './Offers.css'
import exclusive_image  from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='container'>
    <div className='offers'>
    
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For YOU</h1>
        <p>Only On Best Sellers Products</p>
        <button>Check Now</button>
      </div>

    <div className="offers-right">
        <img src={exclusive_image} alt=''/>
    </div>
    </div>
    </div>
  )
}

export default Offers

