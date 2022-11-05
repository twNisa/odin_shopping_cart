import React from "react"
import  "../styles/aboutStyle.css"
import bestGear from "../images/shared/desktop/image-best-gear.jpg"

export default function About(){
  return(
    <section id="about">
      <div>
        <div>
          <h2>
            bringing you the <span>best</span> audio gear
          </h2>
          <p>
          Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <img src={bestGear} alt="audiophile headphone" />
      </div>
    </section>
  )

}