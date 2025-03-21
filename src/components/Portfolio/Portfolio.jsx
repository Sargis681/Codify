import React from 'react'
import "./Portfolio.scss"
import PortfolioCart from '../PortfolioCart/PortfolioCart'
import Slider from './../Slider/Slider';

const Portfolio = () => {
  return (
    <div className='Portfolio'>
      <h1>Portfolio</h1>
        <div className="portfolio_container">
            <PortfolioCart/>
            <PortfolioCart/>
            <PortfolioCart/>
            <PortfolioCart/>
            <PortfolioCart/>
            <PortfolioCart/>
        </div>
        <Slider/>
    </div>
  )
}

export default Portfolio
