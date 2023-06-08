import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Navbar1 from '../../Components/Navbar1/Navbar1'
import Footer from '../../Components/Footer/Footer'
import Shipping from '../../Components/Shipping/Shipping'
function Demos() {
  return (
    <>
    
          <Navbar />
          <Navbar1 />
          
            <div className="mx-4">
			  <Shipping/>
		   </div>

          <Footer/>
      </>
  )
}

export default Demos
