import React from 'react'
import icon from "../../Images/book-1.png"
import "./InformalCart.scss"

const InformalCart = () => {
    return (
        <div className='InformalCart'>
            <img src={icon} alt="" />
            <h2>Call Us</h2>
            <div className="numbers">
                <span>
                    New Accounts: 1-800-123-4567
                </span>
                <span>
                    Support: 1-800-123-4569
                </span>
            </div>



        </div>
    )
}

export default InformalCart 
