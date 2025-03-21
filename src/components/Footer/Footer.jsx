import React from 'react'
import "./Footer.scss"
// import footerLogo from "../../Images/footer_logo_deep-1.png"
import instagram from "../../Images/footerLogos/Instagram_icon.png"
import facebook from "../../Images/footerLogos/Facebook_Logo_(2019).png.webp"
import linkdin from "../../Images/footerLogos/LinkedIn_logo_initials.png.webp"
import logo from "../../Images/CodifyWorksLogo.png"


const Footer = () => {
    return (
        <div className='Footer'>
            <div className="footer_container">
                <div className='Footer_top_logo'>
                    {/* <h1>DreamSoft</h1> */}
                    <img src={logo} alt="" />
                </div>
                <div className='logos'>
                    <img src={instagram} alt="" />
                    <img src={facebook} alt="" />
                    <img src={linkdin} alt="" />
                </div>
            </div>
            <div className="footer_botom">
                <h3>
                    © Copyright 2025 All Rights Reserved
                </h3>
            </div>
        </div>
    )
}

export default Footer 
