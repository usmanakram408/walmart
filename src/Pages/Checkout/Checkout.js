import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Navbar1 from '../../Components/Navbar1/Navbar1'
import Shipping from '../../Components/Shipping/Shipping'
import Footer from '../../Components/Footer/Footer'

function Checkout() {
  return (
        <>
          <Navbar />
          <Navbar1 />
          <div className="container my-5">
              <h1 className="text-dark">Checkout</h1>
          </div>
          <Shipping />
          <Footer/>
      </>
  )
}

export default Checkout
