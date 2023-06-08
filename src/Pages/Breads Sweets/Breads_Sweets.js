import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Navbar1 from '../../Components/Navbar1/Navbar1'
import Shipping from '../../Components/Shipping/Shipping'
import Footer from '../../Components/Footer/Footer'
import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';
import Counter from '../../Components/Counter/Counter'
function Breads_Sweets() {
  return (
      <>
          <Navbar />
          <Navbar1 />
          <div className="container my-4">
			  <div className="row ">
				 <div className="col-lg col-sm col-md">
			  
			  <div class="card " style={{ width: '210px',
    height: '500px'}}>
				  
    <Link to=""> <div class="card-image"> <img src="https://pictures.grocerapps.com/lgthumb/grocerapp-dawn-bran-bread-340g-62761f0864215.jpeg" alt=""  style={{width:'200px'}} /> </div></Link>
						  <div class="category "> <b>dawn bran bread 340g</b> <br />
							  <Rating name="half-rating-read" defaultValue={4.0} precision={0.5} readOnly />
							   <div className="row my-3">
								  <div className="col">
									  340g
								  </div>
								  <div className="col">
									   $0.6
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
				  
    <Link to=""> <div class="card-image"> <img src="https://pictures.grocerapps.com/lgthumb/grocerapp-dawn-bread-crumbs-624ade91587f9.jpeg" alt=""  style={{width:'200px'}} /> </div></Link>
						  <div class="category "> <b>dawn bread crumbs 1kg</b> <br />
							  <Rating name="half-rating-read" defaultValue={4.0} precision={0.5} readOnly />
							   <div className="row my-3">
								  <div className="col">
									  1000gm
								  </div>
								  <div className="col">
									   $0.9
								  </div>
							  </div>
							  
							  <Counter/> <br />
							  <Link to="#" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Add to Cart</Link>
						  </div>
   
					  </div>
				  </div>
				   <div className="col-lg col-sm col-md">
			  
			  <div class="card " style={{ width: '210px',
    height: '500px'}}>
				  
    <Link to=""> <div class="card-image"> <img src="https://pictures.grocerapps.com/lgthumb/grocerapp-dawn-bread-plain-large-725g-62761ab9a147b.jpeg" alt=""  style={{width:'200px'}} /> </div></Link>
						  <div class="category "> <b>dawn bread plain large 725g</b> <br />
							  <Rating name="half-rating-read" defaultValue={4.0} precision={0.5} readOnly />
							   <div className="row my-3">
								  <div className="col">
									  1 unit
								  </div>
								  <div className="col">
									   $0.77
								  </div>
							  </div>
							  
							  
							  <Counter/> <br />
							  <Link to="#" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Add to Cart</Link>
						  </div>
   
					  </div>
				  </div>
				  <div className="col-lg col-sm col-md">
			  
			  <div class="card " style={{ width: '210px',
    height: '500px'}}>
				  
    <Link to=""> <div class="card-image"> <img src="https://pictures.grocerapps.com/lgthumb/grocerapp-dawn-bread-small-6172c166e8858.jpeg" alt=""  style={{width:'200px'}} /> </div></Link>
						  <div class="category "> <b>dawn bread plain small 340g</b> <br />
							  <Rating name="half-rating-read" defaultValue={4.0} precision={0.5} readOnly />
							   <div className="row my-3">
								  <div className="col">
									  1 unit
								  </div>
								  <div className="col">
									   $0.4
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

export default Breads_Sweets
