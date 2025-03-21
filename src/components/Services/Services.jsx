import React from 'react'
import "./Services.scss"
import ServicesCart from '../ServicesCart/ServicesCart.jsx'

const Services = () => {
    return (
        <div className='Services'>
            <div className="Services_container">
                <div className="services">
                    <h1>Services</h1>
                </div>
                <div className="content">
                    <ServicesCart />
                    <ServicesCart />
                    <ServicesCart />
                    <ServicesCart />
                    <ServicesCart />
                    <ServicesCart />
                </div>

            </div>
        </div>
    )
}

export default Services
