import React, { useState } from 'react';
import './PortfolioCart.scss';
import logoImg from "../../Images/footerLogos/Facebook_Logo_(2019).png.webp"

const PortfolioCart = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="PortfolioCart"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isHovered &&
        <div className='portfolioCart_content'>
          <h1 className="overlay-text">My Program</h1>
          <p>My Slogan</p>
          <img src={logoImg} alt="" />
        </div>
      }
      <a href="https://ok.ru" target="_blank" rel="noopener noreferrer">
        <video
          src="/videos/istockphoto-2195839050-640_adpp_is.mp4"
          autoPlay
          loop
          muted
          className={isHovered ? "visible" : "hidden"}
        />
      </a>

    </div>
  );
};

export default PortfolioCart;
