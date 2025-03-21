import React from 'react'
import "./Informal.scss"
import InformalCart from '../InformalCart/InformalCart'

const Informal = () => {
  return (
    <div className='Informal'>
      <div className="informal_container">
        <InformalCart/>
        <InformalCart/>
        <InformalCart/>


      </div>
    </div>
  )
}

export default Informal
