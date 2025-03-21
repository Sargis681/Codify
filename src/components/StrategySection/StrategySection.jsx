import React from 'react';
import './StrategySection.scss';
import img from '../../Images/white_line_big.png';
import StrategyCart from '../StrategyCart/StrategyCart';
import strategy from './../../Strategy/Strategy.js'; // Import the strategy array

const StrategySection = () => {
  return (
    <div className="StrategySection">
      <div className="center_line">
        <img src={img} alt="Center Line" />
      </div>

      <div className="strategy">
        {strategy.map((item, i) => (
          <StrategyCart
            key={i}
            h1={item.h1}
            h2={item.h2}
            photoStrategy={item.photoStrategy}
            span={item.span}
          />
        ))}
      </div>

      <div className="center_line last">
        <img src={img} alt="Center Line" />
      </div>
    </div>
  );
}

export default StrategySection;
