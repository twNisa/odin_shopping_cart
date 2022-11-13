import React from "react";
import {NavLink, useLocation} from "react-router-dom"
import logo from "../images/shared/desktop/logo.svg"
import "../styles/headerStyle.css"
import cartImg from "../images/shared/desktop/icon-cart.svg"

import Cart from "./Cart";
export default function Header(props){
  const [cartShow, setCartShow] = React.useState(false)
  function cartClick(){
    setCartShow(!cartShow)
    
  }
  function toggleCartShow(e){
    const parent = document.querySelector(".cart-modal")
    console.log("toggle clicked", e.target)
    if(e.target.className==="close-cart" || e.target.className.includes("check-out")){
      console.log("toggle")
      setCartShow(!cartShow)
    }
    // if(e.target.className === "cart-show" || e.target.className.includes("check-out")){
    //   console.log("toggle")
    //   setCartShow(!cartShow)
    // }
  }
  
  return (
    <header>
      <div>
        <NavLink to="/odin_shopping_cart/" end><img src={logo} alt="audiophile" /></NavLink>
        <nav>
          <NavLink to="/odin_shopping_cart/" end>Home</NavLink>
          <NavLink to="/odin_shopping_cart/headphones" >Headphones</NavLink>
          <NavLink to="/odin_shopping_cart/speakers">Speakers</NavLink>
          <NavLink to="/odin_shopping_cart/earphones">Earphones</NavLink>
        </nav>
        <a className="cart" onClick={cartClick}>
          {<img  src={cartImg} alt="cart"></img>}
          {props.shoppingCart.length>0 && <span>{props.getCartQuantity()}</span>}
        </a>
        {cartShow && 
        <Cart shoppingCart={props.shoppingCart} 
              changeQuantity={props.changeQuantity}
              removeAll={props.removeAllFromCart}
              addItem={props.addItemToCart}
              getCartQuantity={props.getCartQuantity}
              toggleCartShow={toggleCartShow}
        />}
      </div>
      
    </header>
  )
}