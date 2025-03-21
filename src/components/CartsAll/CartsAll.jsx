import React from 'react'
import './CartsAll.scss'
import Cart from '../Cart/Cart'
import img from '../../Images/vertical_line.png'
import cart from "../../Content/cart"
console.log(cart);

function CartsAll() {
  return (
    <>
      <div className='CartsAll'>
        {
          cart.map((el, i) => {
            return (  // Fix: you need to return the Cart component inside map
              <Cart key={i} photo={el.photo} text={el.text} span={el.span} />
            );
          })
        }
      </div>
      <div className="center_line">
        <img src={img} alt="Vertical line" />
      </div>
    </>
  )
}

export default CartsAll;
