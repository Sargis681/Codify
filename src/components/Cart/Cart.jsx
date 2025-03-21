import React from 'react';
import './Cart.scss';
// import img1 from "../../../src/Images/CartImg/service_icon_3-1.png";


function Cart({ photo, text, span }) {
    console.log(photo);
    
    return (
        <div className='Cart'>
            <img src={photo} alt="Service icon" />
            <h2>{text}</h2>
            <span>{span}</span>
        </div>
    );
}

export default Cart;
