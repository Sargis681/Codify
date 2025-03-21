import React from 'react'
import './HeaderContent.scss'
import GetStarted from '../Buttons/GetStarted/GetStarted'

function HeaderContent() {
  return (
    <div className='HeaderContent'>
      <div className="container">
        {/* <BackgroundVideo/> */}
        <span className='welcome'>WELCOME TO</span>
        <span>CODIFY</span>
        <div className="list">
          <span className='color1'>Web Design ,</span>
          <span className='color2'>Marketing ,</span>
          <span>&</span>
          <span className='color3'>Branding</span>
        </div>
        <div>
        </div>
        <GetStarted />
      </div>
    </div>
  )
}

export default HeaderContent
