import React from 'react'
import './Flash_sale.scss'
import Navbar from '../../Components/Navbar/Navbar'
import Navbar1 from '../../Components/Navbar1/Navbar1'
import Footer from '../../Components/Footer/Footer'
import { Link } from "react-router-dom";
import Shipping from '../../Components/Shipping/Shipping'
function Flash_sale() {
  return (
      <>
          <Navbar />
          <Navbar1 />
          
<div class="jumbotron text-center splash">
  <h1 style={{marginTop:'0px'}}  >GET YOUR OWN
DAILY BIG & BEST DEALS.</h1>
  <p class="lead">Update at 12 AM everyday.  </p>
		  </div>
		 


		  <div className="mx-4">
			  <Shipping/>
		   </div>
          <Footer/>
      </>
  )
}

export default Flash_sale
