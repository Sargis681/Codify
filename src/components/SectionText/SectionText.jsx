import React from 'react'
import line from '../../Images/vertical_line.png'
import GetStarted from '../Buttons/GetStarted/GetStarted'
import './SectionText.scss'

function SectionText() {
    return (
        <div className='SectionText'>
            <img src={line} alt="" />
            <h2>We are the one of the most effective
                Web Design Companies</h2>
            <p>Getting online is easy. Succeeding online is a different story. You’ll need more than just a beautiful website to stand out these days. Online marketing solutions. Conversion-based web design coupled with a lead generating marketing plan, your online success is inevitable.
            </p>
            <img src={line} alt="" />
            <GetStarted />
            <img src={line} alt="" />


        </div>
    )
}

export default SectionText
