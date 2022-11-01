import React from "react";
import Header from "./Header";
import Footer from "./Footer";
export default function NotFound(){
  return (
    <div>
      <Header />
      <div className="error">
        <h1>#404. page does not exist</h1>
      
      </div>
      <Footer />
    </div>
  )
}