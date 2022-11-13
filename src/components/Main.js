import React from "react";
import data from "../products.json"
import banner from "../images/home/desktop/image-hero.jpg"
import CategoryLinks from "./CategoryLinks"
import About from "./About"
import zx9Img from "../images/home/desktop/image-speaker-zx9.png"
import zx7Img from "../images/home/desktop/image-speaker-zx7.jpg"
import yx1Img from "../images/home/desktop/image-earphones-yx1.jpg"
import {NavLink} from "react-router-dom"
import {motion} from "framer-motion"

import "../styles/mainStyle.css"

export default function Main(){
  
  return (
    <main className="homepage">
      <div className="banner">
        <motion.div className="img-bg"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{
          duration: 2,
          delay: .5,

        }}>
          <picture>
            <img src={banner} alt="hero image" />
          </picture>
        </motion.div>
        <motion.div className="banner-content"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{
            duration: 2,
            delay: 1,
          }}
        >
            <h4>new product</h4>
            <h1>XX99 MARK II HEADPHONES</h1>
            <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
            <NavLink to={`/odin_shopping_cart/headphones/xx99-mark-two-headphones`} className="btn" >See product</NavLink>
        </motion.div>
      </div>
      
      <CategoryLinks />

      <section className="product-stack">
        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity:1}}
          viewport={{ once: true }}
          transition={{
            
            duration: 1
          }}
        >
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
            <NavLink to={`/odin_shopping_cart/speakers/zx9-speaker`} className="btn" >See product</NavLink>
          </div>
        </motion.div>

        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity:1}}
          viewport={{ once: true }}
          transition={{
            
            duration: 1
          }}
        >
          <picture>
            <img src={zx7Img} />
          </picture>
          <div>
            <h2>
              ZX7 SPEAKER
            </h2>
            <NavLink to={`/odin_shopping_cart/speakers/zx7-speaker`} className="btn" >See product</NavLink>
          </div>
        </motion.div>

        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity:1}}
          transition={{
            
            duration: 1
          }}
        >
          <picture>
            <img src={yx1Img} />
          </picture>
          <div>
            <h2>
              YX1 EARPHONES
            </h2>
            <NavLink to={`/odin_shopping_cart/earphones/yx1-earphones`} className="btn" >See product</NavLink>
          </div>
        </motion.div>
      </section>
        
      <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity:1}}
          viewport={{once: true}}
          transition={{
            
            duration: 1
          }}
        >
          <About />
        </motion.div>
      
    </main>
  )
}