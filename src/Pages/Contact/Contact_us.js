import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Navbar1 from '../../Components/Navbar1/Navbar1'
import Footer from '../../Components/Footer/Footer'
import { Link } from "react-router-dom";
import './Contact-us.css'
import Shipping from '../../Components/Shipping/Shipping'
function Contact_us() {
  return (
    <>
      <Navbar /> 
      <Navbar1 />
      <div className="my-4 mx-5">
        <div className="row mx-5">
          <div className="col-md col-sm col-lg mx-3">
            <h3 className="text-dark text-left "><b> Contact Information</b></h3>
            <h3 className="text-dark text-left my-5"><b> Location</b></h3>
            <p class="" style={{ color: '#999', fontSize: '12px', letterSpacing: '1px' }}>STORE</p>
            <h5>68 Atlantic Ave St, Brooklyn, NY 90002, USA</h5>
            <h5>(+005) 5896 72 78 79</h5>
            <h5>support@farmart.com</h5>
            <p class="" style={{ color: '#999', fontSize: '12px', letterSpacing: '1px' }}>WAREHOUSE</p>
            <h5>172 Richmond Hill Ave St, Stamford, NY 90002, USA</h5>
            <h5>(+005) 5896 03 04 05</h5>
           
          </div>
          <div className="col-md-1 col-sm-1 col-lg-1">
            <div class="vl d-none d-lg-block"></div>

          </div>

          
          <div className="col-md col-sm col-lg">
            <h3 className="text-dark text-left"><b> Drop Us A Line</b></h3>
            <p className="my-5">Required fields are marked *</p>
            
            <input type="" class="form-control" id="" placeholder="Subject (optional)"></input>
            <textarea class="form-control my-5" id="" rows="4" placeholder="write your message here"></textarea>
             <div class="form-row">
    <div class="form-group col-md-6">
     
      <input type="" class="form-control" id="" placeholder="Your Name *"/>
    </div>
    <div class="form-group col-md-6">
      
                <input type="" class="form-control" id="" placeholder="Your Email *" />
                
              </div>
              <Link to="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Send a message</Link>
  </div>
          </div>
        </div>
      </div>
      <hr />
       <div className="mx-4">
			  <Shipping/>
		   </div>
      <Footer/>
    </>
  )
}

export default Contact_us

