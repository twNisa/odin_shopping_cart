import React from "react"
import {NavLink} from "react-router-dom"
import "../styles/categoryLinksStyle.css"

export default function CategoryLinks(){

  const categories = ["headphones", "speakers", "earphones"]
  const linksArr = categories.map(category =>(
    
      <NavLink to={`/${category}`} key={category}>
    
          <img src={`../images/shared/desktop/image-${category}.png`} alt={`${category}`} />
          <h4>{category}</h4>
          <div>
            <p>shop</p>
            <img src="../images/shared/desktop/icon-arrow-right.svg" alt="click"/>
          </div>
        
      </NavLink>
    
  ))
  return (
    <section id="links">
      <div>
        {linksArr}
      </div>
    </section>
  )
}