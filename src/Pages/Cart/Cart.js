import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Navbar1 from '../../Components/Navbar1/Navbar1'
import Shipping from '../../Components/Shipping/Shipping'
import './Cart.css'
import { Link } from "react-router-dom";
import Footer from '../../Components/Footer/Footer'
function Cart() {
  return (
      <>
          <Navbar />
          <Navbar1 />
          <div className="container ">
              <h1 className="text-dark my-4"><b> Cart</b></h1>
          </div>
          <div className="container my-5">
              <Link to="/Shop" class="btn  btn-lg active"style={{backgroundColor:'#e1e8ed'}} role="button" aria-pressed="true">Return to Shop</Link>
          </div>
          <hr />
           <div className="mx-4">
			  <Shipping/>
          </div>
          <Footer/>
      </>
  )
}

export default Cart
