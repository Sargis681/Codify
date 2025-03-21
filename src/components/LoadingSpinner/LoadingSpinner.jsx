import React from 'react'
import "./LoadingSpinner.scss"
import loading from "../../Images/a2dc9668f2cf170fe3efeb263128b0e7.gif"

const LoadingSpinner = () => {
    return (
        <div className='LoadingSpinner'>
            <img src={loading} alt="" />
        </div>
    )
}

export default LoadingSpinner
