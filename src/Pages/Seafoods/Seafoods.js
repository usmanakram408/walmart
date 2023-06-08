import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Navbar1 from '../../Components/Navbar1/Navbar1'
import Shipping from '../../Components/Shipping/Shipping'
import Footer from '../../Components/Footer/Footer'
import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';
import Counter from '../../Components/Counter/Counter'
function Seafoods() {
  return (
      <>
          <Navbar />
          <Navbar1 />
          <div className="container my-4">
			  <div className="row ">
				 <div className="col-lg col-sm col-md">
			  
			  <div class="card " style={{ width: '210px',
    height: '500px'}}>
				  
    <Link to=""> <div class="card-image"> <img src="https://pictures.grocerapps.com/lgthumb/grocerapp-prawns-iqf-tail-on-size-63c635d850e5e.jpeg" alt=""  style={{width:'200px'}} /> </div></Link>
						  <div class="category "> <b>prawns iqf tail on size 26/30</b> <br />
							  <Rating name="half-rating-read" defaultValue={4.0} precision={0.5} readOnly />
							   <div className="row my-3">
								  <div className="col">
									  500gm
								  </div>
								  <div className="col">
									   $2.8
								  </div>
							  </div>
							  
							  <Counter/>  <br />
							  <Link to="/Add_To_Cart" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Add to Cart</Link>
						  </div>
   
					  </div>
				  </div>
				  <div className="col-lg col-sm col-md">
			  
			  <div class="card " style={{ width: '210px',
    height: '500px'}}>
				  
    <Link to=""> <div class="card-image"> <img src="https://pictures.grocerapps.com/lgthumb/grocerapp-prawns-iqf-tail-on-size-63c63631eb6ca.jpeg" alt=""  style={{width:'200px'}} /> </div></Link>
						  <div class="category "> <b>prawns iqf tail on size 16/20</b> <br />
							  <Rating name="half-rating-read" defaultValue={4.0} precision={0.5} readOnly />
							   <div className="row my-3">
								  <div className="col">
									  475gm
								  </div>
								  <div className="col">
									   $5.1
								  </div>
							  </div>
							  
							  <Counter/> <br />
							  <Link to="#" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Add to Cart</Link>
						  </div>
   
					  </div>
				  </div>
				   
				 
				  
			  </div>
		  </div>
          <Shipping />
          <Footer/>
      </>
  )
}

export default Seafoods
