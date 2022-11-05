import React from "react";
import "../styles/categoryStyle.css"
import data from "../products.json"
import About from "./About";
import CategoryLinks from "./CategoryLinks";
import {NavLink} from "react-router-dom"

export default function Category({type}){
  console.log(data)
  // sort((a,b)=> (a.new && !b.new) ? 1: (!a.new && b.new)? -1 : 0)
  function sortArr(arr){
    return arr.sort((a, b)=>(
      (a.new > b.new) ? -1 : (a.new < b.new)? 1 : 0)
    )
  }
  const filteredPageContentArr = Array.from(data.products)
    .filter(item => (
      item.category===type
    ))

  const pageContentArr = sortArr(filteredPageContentArr)
    .map(item => {
      return (
        <div className={`item ${item.slug}`} key={item.id} new={item.new.toString()}>
          <img src={`/odin_shopping_cart${item.image.desktop}`} alt={item.name}/>
          <div>
            {item.new && <h4>new product </h4>}
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          
            <NavLink to={`/odin_shopping_cart/${item.category}/${item.slug}`} className="btn" >See product</NavLink>
          </div>
        </div>
      )
    })
    console.log(pageContentArr)
    // pageContentArr = pageContentArr.sort((a, b)=>(a)

  return (
    <>
      <main className="category">
        <div className="banner">
          <h1>{type}</h1>
        </div>
        <div className="content">
          {pageContentArr}
        </div>
      </main>
      <CategoryLinks />
      <About />
    </>
    

  )
}