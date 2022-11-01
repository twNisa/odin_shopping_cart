import React from "react";
import logo from "../images/shared/desktop/logo.svg"
import {NavLink} from "react-router-dom"
import "../styles/footerStyle.css"
import facebook from "../images/shared/desktop/icon-facebook.svg"
import twitter from "../images/shared/desktop/icon-twitter.svg"
import instagram from "../images/shared/desktop/icon-instagram.svg"
export default function Footer(){
  return (
    <footer>
      <div>
        <nav>
          <img src={logo} alt="audiophile logo"></img>
          <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="headphones">Headphones</NavLink>
            <NavLink to="Speakers">Speakers</NavLink>
            <NavLink to="Earphones">Earphones</NavLink>
          </div>
        </nav>
        <div className="details">
          <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week.</p>
          <div className="icons">
            <a href="#"><img src={facebook} alt="facebook"/></a>
            <a href="#"><img src={twitter} alt="twitter"/></a>
            <a href="#"><img src={instagram} alt="instagram"/></a>
            {/* <a href="#"><img src="../images/shared/desktop/icon-facebook.svg" alt="facebook"/></a>
            <a href="#"><img src="../images/shared/desktop/icon-twitter.svg" alt="twitter"/></a>
            <a href="#"><img src="../images/shared/desktop/icon-instagram.svg" alt="instagram"/></a> */}
          </div>
        </div>
        <p>
          Copyright 2022. All Rights Reserved. 
        </p>
        
      </div>
      <p>
          Made by <a href="#"><span>github</span> twNisa</a> 2022. Design from Frontend Mentor
        </p>
    </footer>
  )
}