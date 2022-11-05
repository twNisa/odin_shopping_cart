import React from "react";
import cartImg from "../images/cart/empty-cart.png"
import { NavLink } from "react-router-dom";
export default function Cart(props){
  console.log(props)
 
  const cartItems = 
    <>
      <div>
        <h3>cart ({props.getCartQuantity()})</h3>
        <button onClick={props.removeAll}>remove all</button>
      </div>

      {props.shoppingCart.length > 0 && props.shoppingCart.map(item => (
      <div key={item.item.id}>
        <img src={`/odin_shopping_cart/images/cart/image-${item.item.slug}.jpg`} alt={item.item.slug} />
        <div>
          <h5>{item.item.slug.slice(0, item.item.slug.indexOf("-"))}</h5>
          <p>$ {item.item.price}</p>
        </div>
        <div className="product-cart-change">
          <button className="btn btn-cart-change" onClick={(e)=>props.changeQuantity(e, item.item.id)}>-</button>
          <div>{item.quantity}</div>
          <button className="btn btn-cart-change" onClick={(e)=>props.changeQuantity(e, item.item.id)}><p>+</p></button>
        </div>
      </div>
      ))}
      <div className="cart-price">
        <p>total</p>
        <p>$ {props.shoppingCart.reduce((accu, curr)=> {
          return(
            accu + curr.quantity * curr.item.price
          )
        }, 0)}</p>
      </div>
      <NavLink to="/odin_shopping_cart/checkout">
        <button className="btn check-out">checkout</button>
      </NavLink>
    </>
  
  const emptyCart = <>
    <h3 className="empty">empty cart</h3>
    <img src="/odin_shopping_cart/images/cart/empty-cart.png" alt="empty cart" />
  </>
  return (
    <div className="cart-modal">
      {props.shoppingCart.length > 0 ? cartItems : emptyCart}
    </div>  
  )
 
}