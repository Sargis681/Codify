import React from 'react'
import "./Resources.scss"
import bookImg from "../../../src/Images/book-1.png"
import GetStarted from '../Buttons/GetStarted/GetStarted'
import lineImg from "../../Images/vertical_line.png"
import lineImgBlack from "../../Images/vertical_line3.png"

const Resources = () => {
    return (
        <>
            <div className='Resources'>
                <div className="resources_container">
                    <h2>B2B Marketing & Web Design Resources</h2>
                    <p>B2B client acquisition is not the same as B2C– a B2B website, brand messaging and content marketing play a much different role. We understand the B2B marketing and sales funnel and the tactics that generate and nurture ideal client leads.</p>
                    <div className='strategy_center'>
                        <img src={lineImg} alt="" />
                    </div>
                    <div className='resources_img'>
                        <img src={bookImg} alt="" />
                        <img src={bookImg} alt="" />
                        <img src={bookImg} alt="" />
                    </div>
                </div>
                <div className='strategy_center'>
                    <img src={lineImg} alt="" />
                </div>
                <GetStarted />
                <div className='strategy_center'>
                    <img src={lineImg} alt="" />
                </div>
                <div className='strategy_center'>
                    <img src={lineImgBlack} alt="" />
                </div>
            </div>
        </>
    )
}

export default Resources
