import React from "react";
import {useParams, useLocation, NavLink} from "react-router-dom"
import CategoryLinks from "./CategoryLinks";
import About from "./About";
import data from "../products.json"
import "../styles/productStyle.css"

export default function Product({addItemToCart}){
  
 
  
  const back = useLocation().pathname.slice(0, useLocation().pathname.lastIndexOf("/"))
  const params = useParams()
  const productData = Array.from(data.products)
          .filter(item => item.slug === params.productSlug)
  
  const [item, setItem] = React.useState({
    item: productData[0],
    quantity: 1
  })
  function decreaseItemQuantity(){
    console.log("changing product quantity")

      setItem(prev => (
        {
          ...prev,
          quantity: prev.quantity-1
        }
      )
    )
  }
  function increaseItemQuantity(){
    console.log("changing product quantity")
    setItem(prev => (
      {
        ...prev,
        quantity: prev.quantity+1
      }
    ))
  }
  
  const productBoxContents = productData[0].includedItems.map(item => (
    <li>
      <span className="product-box-quantity">{item.quantity}x</span>
      <span className="product-box-item">{item.item}</span>
    </li>
  ))
  
  const productOthers = productData[0].others.map(item => (
    <div>
      <img src={`/odin_shopping_cart${item.image.desktop}`} alt={item.name}/>
      <h3>{item.name}</h3>
      <NavLink to={`/odin_shopping_cart/${item.slug}`} >
      <button>see product</button>
      </NavLink>
      
    </div>
  ))


  const product = (

    <section className={`product ${productData[0].slug}`}>
      <div className="product-heading">
        <img src={`/odin_shopping_cart${productData[0].image.desktop}`} alt={productData[0].name}/>
        <div>
            {productData[0].new && <h4>new product </h4>}
            <h3>{productData[0].name}</h3>
            <p>{productData[0].description}</p>
            <p className="price">{`$ ${productData[0].price}`}</p>

            <div className="product-cart">
              <div className="product-cart-change">
                <button className="btn btn-cart-change" onClick={decreaseItemQuantity}>-</button>
                <div>{item.quantity}</div>
                <button className="btn btn-cart-change" onClick={increaseItemQuantity}><p>+</p></button>
              </div>
              <button className="btn btn-cart-add" onClick={()=>addItemToCart(item)}>add to cart</button>
            </div>
          </div>
      </div>

      <div className="product-details">
        <div className="product-features">
          <h3>features</h3>
          <p>{productData[0].features}</p>
        </div>
        <div className="product-box">
          <h3>in the box</h3>
          {productBoxContents}
        </div>
      </div>

      <div className="product-gallery">
        <img src={`/odin_shopping_cart${productData[0].gallery.first.desktop}`} alt={productData[0].name + " gallery image one"}/>
        <img src={`/odin_shopping_cart${productData[0].gallery.second.desktop}`} alt={productData[0].name + " gallery image two"}/>
        <img src={`/odin_shopping_cart${productData[0].gallery.third.desktop}`} alt={productData[0].name + " gallery image three"}/>
      </div>

      <div className="product-others">
        <h3>you may also like</h3>
        <div className="others">
          {productOthers}
        </div>
      </div>

    </section>
  )

    
  return(
    <main className="product">
      <section className="content">
        <NavLink to={back}>
          Go Back
        </NavLink>
        {product}
      </section>

      <CategoryLinks />
      <About />
    </main>
  )
}