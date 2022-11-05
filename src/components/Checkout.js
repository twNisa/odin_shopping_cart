import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

export default function Checkout({shoppingCart}){
  const items = shoppingCart.map(item => {
    return (
      <div className="form-item">
        <img src={`/odin_shopping_cart/images/cart/image-${item.item.slug}.jpg`} alt={item.item.slug} />
        <div>
          <p>{item.item.shortName}</p>
          <p>{item.item.price}</p>
        </div>
        <p>{`x${item.quantity}`}</p>
      </div>
    )
  })

  const totalPrice = shoppingCart.map(item =>{
      const p = item.item.price * item.quantity
      return p
    }).reduce((accu, curr)=>{
      return accu+ curr
    },0 )

  let total = totalPrice
  let gst = parseFloat((total * 0.1).toFixed(2))
  let shipping = 50
  let grand = total + gst + shipping

  const prices = (
      <div className="form-prices">
        <div><span>total</span><span>$ {total}</span></div>
        <div><span>shipping</span><span>$ {shipping}</span></div>
        <div><span>GST (included)</span><span>$ {gst}</span></div>

        <div className="grand-total"><span>grand total</span>$ {grand}</div>
      </div>
  )
  
 
  return (<main section="checkout">
    <a className="back-btn" onClick={()=>window.history.back()}>
          Go Back
    </a>
    <form>
      <div className="form-checkout">
        <h3>checkout</h3>
      </div>
      <div className="form-summary">
        <h4>summary</h4>
        <div className="form-items-summary">
          {items}
          {prices}
        </div>
        
      </div>
    </form>
  </main>)
}