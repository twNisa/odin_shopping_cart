import React from "react";
import "../styles/checkoutStyle.css"
import {useForm} from "react-hook-form"

export default function Checkout({shoppingCart}){
  const {register, handleSubmit, errors} = useForm()
  const [form, setForm] = React.useState(
    {
      
        name: "",
        email: "",
        phone: "",
      
      
        address: "",
        postcode: "",
        city: "",
        country: "",
      
      
        eMoneyNumber: "",
        eMoneyPin:"",
      
    }
  )

  const onSubmit = e=>{
    e.preventDefault()
    console.log("submitted")
  }
    
  const items = shoppingCart.map(item => {
    return (
      <div className="form-item">
        <img src={`/odin_shopping_cart/images/cart/image-${item.item.slug}.jpg`} alt={item.item.slug} />
        <div>
          <div>
            <p className="name">{item.item.shortName}</p>
            <p>{`x${item.quantity}`}</p>
          </div>
          <p>$ {item.item.price}</p>
        </div>
        
      </div>
    )
  })

  const totalPrice = shoppingCart.map(item =>{
      const p = item.item.price * item.quantity
      return p
    }).reduce((accu, curr)=>{
      return accu+ curr
    },0 )

  let total = totalPrice
  let gst = parseFloat((total * 0.1).toFixed(2))
  let shipping = 50
  let grand = total + gst + shipping

  const prices = (
      <div className="form-prices">
        <div><span>total</span><span>$ {total}</span></div>
        <div><span>shipping</span><span>$ {shipping}</span></div>
        <div><span>GST (included)</span><span>$ {gst}</span></div>

        <div className="grand-total"><span>grand total</span><span>$ {grand}</span></div>  
      </div>
  )
  

 
  return (
  <main className="checkout">
    <a className="back-btn" onClick={()=>window.history.back()}>
            Go Back
      </a>
    <section className="content">
      <form onSubmit={onSubmit}>
        <div className="form-checkout">
          <h3>checkout</h3>
          <fieldset>
            <legend>Billing details</legend>
            <div>

              <input 
                {...register("name", 
                  {
                    required: true, 
           
                    maxLength: 20
                  })
                } 
                placeholder="Name" 
              />
              <input type="email" {...register("email", { required: true})} placeholder="Email address" />
              <input {...register("phone")} placeholder="Phone number" />
            </div>
           
          </fieldset>

          <fieldset>
            <div>
              <legend>shipping info</legend>
                <input {...register("address")} placeholder="Address" />
                <input {...register("postcode")} placeholder="Postcode" />
                <input {...register("city")} placeholder="City" />
                <input {...register("country")} placeholder="Country" />
            </div>
          </fieldset>

          <fieldset>
          <legend>payment details</legend>
          <label htmlFor="payment">
            <input type="radio" value="eMoney" checked {...register("payment")} />
            e-money
            <input type="radio" value="cod" {...register("payment")} />
            Cash on Delivery
          </label>
          
          </fieldset>

        </div>
        <div className="form-summary">
          <h4>summary</h4>
          <div className="form-items-summary">
            {items}
            {prices}
          </div>
          <button type="submit">Continue & pay</button>
        </div>
      </form>
    </section>
  </main>)
}