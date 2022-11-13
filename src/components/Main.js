import React from "react";
import data from "../products.json"
import banner from "../images/home/desktop/image-hero.jpg"
import CategoryLinks from "./CategoryLinks"
import About from "./About"
import zx9Img from "../images/home/desktop/image-speaker-zx9.png"
import zx7Img from "../images/home/desktop/image-speaker-zx7.jpg"
import yx1Img from "../images/home/desktop/image-earphones-yx1.jpg"
import pattern from "../images/home/desktop/pattern-circles.svg"
import "../styles/mainStyle.css"
export default function Main(){
  console.log(data)
  return (
    <main className="homepage">
      <div className="banner">
        <div className="img-bg">
          <picture>
            <img src={banner} alt="hero image" />
          </picture>
        </div>
        <div className="banner-content">
            <h4>new product</h4>
            <h1>XX99 MARK II HEADPHONES</h1>
            <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
            <button>see product</button>
        </div>
      </div>
      
      <CategoryLinks />

      <section className="product-stack">
        <div>
          <picture>
            <img src={zx9Img} />
          </picture>
          <div>
            <h2>
              ZX9 SPEAKER
            </h2>
            <p>
            Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
            </p>
            <button>see product</button>
          </div>
        </div>

        <div>
          <picture>
            <img src={zx7Img} />
          </picture>
          <div>
            <h2>
              ZX7 SPEAKER
            </h2>
            <button>see product</button>
          </div>
        </div>

        <div>
          <picture>
            <img src={yx1Img} />
          </picture>
          <div>
            <h2>
              YX1 EARPHONES
            </h2>
            <button>see product</button>
          </div>
        </div>
      </section>

      <About />
    </main>
  )
}