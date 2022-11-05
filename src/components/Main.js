import React from "react";
import data from "../products.json"
export default function Main(){
  console.log(data)
  return (
    <main className="homepage">
      <div className="banner">
        <div>
          <h4>new product</h4>
          <h1>XX99 MARK II HEADPHONES</h1>
          <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
          <button>see product</button>
        </div>
      </div>
    </main>
  )
}