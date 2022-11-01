import React from "react";
import {NavLink, useLocation} from "react-router-dom"
import logo from "../images/shared/desktop/logo.svg"
import "../styles/headerStyle.css"
import cart from "../images/shared/desktop/icon-cart.svg"
export default function Header(){

  return (
    <header>
      <div>
        <NavLink to="/" end><img src={logo} alt="audiophile" /></NavLink>
        <nav>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="headphones" >Headphones</NavLink>
          <NavLink to="speakers">Speakers</NavLink>
          <NavLink to="earphones">Earphones</NavLink>
        </nav>
        <img src={cart} alt="cart" />
      </div>
      
    </header>
  )
}