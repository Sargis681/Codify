import React from 'react'
import "./AboutCart.scss"
import userIcon from "../../Images/user.png"

const AboutCart = () => {
    return (
        <div className='about_cart'>
            <img src={userIcon} alt="" />
            <h3>Who We Are</h3>
            <p>We are a team of San Diego web design and development professionals who love partnering with good people and businesses to help them achieve online success.</p>
        </div>
    )
}

export default AboutCart
