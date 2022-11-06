import {BrowserRouter, Routes, Route,  Link} from "react-router-dom"
import React from "react"
import Home from "./components/Home"
import Category from "./components/Category"
import Cart from "./components/Cart"
import Product from "./components/Product"
import ScrollToTop from "./components/ScrollToTop"
import NotFound from "./components/NotFound"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./components/Main"
import Checkout from "./components/Checkout"

export default function App(){
  const [shoppingCart, setShoppingCart] = React.useState([])
 
  function addItemToCart(item){
    const i = shoppingCart.findIndex(cartItem => cartItem.item.id === item.item.id)
    if(i > -1){
      setShoppingCart(prev => {
        return (
          prev.map(ele => {
            if (ele.item.id === item.item.id){
              return {item: ele.item, quantity: ele.quantity + item.quantity }
            }
            return ele
          })
        )
      })
    }else{
        setShoppingCart([...shoppingCart, item])
    }
  }

  function removeAllFromCart(){
    setShoppingCart([])
  }
  function changeQuantity(e, id){
    if(e.target.textContent === "+"){
       setShoppingCart(prev => {
        return (
          prev.map(ele => {
            
            if (ele.item.id === id){
              return {item: ele.item, quantity: ele.quantity+1 }
            }
            return ele
          })
        )
      })
    } else{
      setShoppingCart(prev => { 
        return (
          prev.map((ele, index) => {
            if (ele.item.id === id){
              return {item: ele.item, quantity: ele.quantity-1 }              
            }
            return ele
          })
          .filter(ele => ele.quantity > 0)
        )
      })
    }
  }

  function getCartQuantity(){
    return shoppingCart.reduce((accu, curr) => {
      if(!curr){
        return accu + 0
      }
      return accu + curr.quantity
    }, 0)
  }

  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Header 
        shoppingCart={shoppingCart}
        addItemToCart={addItemToCart}
        removeAllFromCart={removeAllFromCart}
        changeQuantity={changeQuantity}
        getCartQuantity={getCartQuantity}
      />
      <Routes>
        <Route path="/odin_shopping_cart" element={<Home />}>
        <Route index element={<Main />} />

          <Route path="/odin_shopping_cart/headphones" element={<Category type="headphones"/>}/>
          <Route path="/odin_shopping_cart/headphones/:productSlug" element={<Product 
            addItemToCart={addItemToCart} />} 
          
          />

          <Route path="/odin_shopping_cart/speakers" element={<Category type="speakers" />} />
            <Route path="/odin_shopping_cart/speakers/:productSlug" element={<Product 
            addItemToCart={addItemToCart} />} 
            
            />

          <Route path="/odin_shopping_cart/earphones" element={<Category type="earphones" />} />
          <Route path="/odin_shopping_cart/earphones/:productSlug" element={<Product    
            addItemToCart={addItemToCart} />} 
          
          />
          <Route path="/odin_shopping_cart/checkout" element={<Checkout shoppingCart={shoppingCart} />} />
       
          <Route path="*" element={<NotFound />} />

        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}