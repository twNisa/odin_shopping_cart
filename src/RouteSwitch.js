import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Home from "./components/Home"
import Category from "./components/Category"
import Cart from "./components/Cart"
import Product from "./components/Product"
import ScrollToTop from "./components/ScrollToTop"
import NotFound from "./components/NotFound"
export default function RouteSwitch(){

  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} >
        
          <Route path="headphones" element={<Category type="headphones"/>}>
            <Route path=":productSlug" element={<Product />} />
          </Route>

          <Route path="speakers" element={<Category type="speakers" />}>
            <Route path=":productSlug" element={<Product />} />
          </Route>

          <Route path="earphones" element={<Category type="earphones" />}>
            <Route path=":productSlug" element={<Product />} />
          </Route>

        </Route>
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  )
}