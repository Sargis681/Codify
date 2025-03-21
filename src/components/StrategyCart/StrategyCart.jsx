import React from 'react';
import './StrategyCart.scss';
// import img from "../../../src/Images/CartImg/service_icon_3-1.png"
// const img  = "../../../src/Images/img_img_9-800x800.a511fc33c53f634e7e85.jpg"

const StrategyCart = ({ h1, h2, photoStrategy, span }) => {
    return (
        <div className="StrategyCart">
            <div className='strategy_left'>
                <h1>{h1}</h1>
                <h2>{h2}</h2>
            </div>
            <div className='strategy_center'>
                <img src={
                    // img
                    photoStrategy

                } alt="Strategy" />
            </div>
            <div className="strategy_right">
                <span>{span}</span>
            </div>
        </div>
    );
}

export default StrategyCart;
