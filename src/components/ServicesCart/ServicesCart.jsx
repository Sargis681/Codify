import React from 'react'
import "./ServicesCart.scss"
import img from "../../../src/Images/img_3-800x800.jpg"

const ServicesCart = () => {
  return (
    <div className='servicesCart'>
        <img src={img} alt="" />
        <h3>Marketing</h3>
        <p>We use strategic marketing tactics that have been proven to work. Social networks, Pay-per</p>
        <h4>Read More</h4>
    </div>
  )
}

export default ServicesCart 
