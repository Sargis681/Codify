import React from 'react'
import "./AboutContent.scss"
import AboutCart from '../AboutCart/AboutCart'

const AboutContent = () => {
  return (
    <div className='AboutContent'> 
        <div className="aboutContent_container">
            <div className="about">
                <h1>About</h1>
            </div>
            <div className="center">
              <h2>
              "We love what we do and we love helping others succeed at what they love to do."
              </h2>
              <p>Gregory F. Parrino, CEO</p>

            </div>
            <div className="bottom">
            <AboutCart/>
            <AboutCart/>
            <AboutCart/>
            </div>
        </div>
    </div>
  )
}

export default AboutContent
