import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Navbar1 from '../../Components/Navbar1/Navbar1'
import Shipping from '../../Components/Shipping/Shipping'
import Footer from '../../Components/Footer/Footer'
import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';
import Counter from '../../Components/Counter/Counter'
const Add_To_Cart = () => {
  return (
    <div>
      <Navbar />
      <Navbar1 />
      <div className="container my-4">
			  <div className="row ">
				 <div className="col-lg col-sm col-md">
			  
			  <div class="card " style={{ width: '230px',
    height: '450px'}}>
				  
    <Link to=""> <div class="card-image my-3"> <img src="https://pictures.grocerapps.com/lgthumb/grocerapp-blue-band-margarine-spread-62de3f1906846.jpeg" alt=""  style={{width:'150px'}} /> </div></Link>
						  <div class="category my-3"> <b>Blue Band</b> <br />
							  <Rating name="half-rating-read" defaultValue={5.0} precision={1.0} readOnly />
							  <div className="row">
								  <div className="col">
									  1.5kg
								  </div>
								  <div className="col">
									   $2.5
								  </div>
							  </div>
							 
							 
							  <Counter/>  <br />
							  <Link to="/Checkout" class="btn btn-secondary btn-sm active" style={{width:'200px'}} role="button" aria-pressed="true">Proceed To Checkout </Link>
						  </div>
   
					  </div>
				  </div>
				  <div className="col-lg col-sm col-md">
			  
			  
				  </div>
				   <div className="col-lg col-sm col-md">
			  
			  
				  </div>
				  <div className="col-lg col-sm col-md">
			  
			  
				  </div>
				  
				  
			  </div>
		  </div>
      <Shipping />
      <Footer/>
    </div>
  )
}

export default Add_To_Cart
