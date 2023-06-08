import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Navbar1 from '../../Components/Navbar1/Navbar1'
import Shipping from '../../Components/Shipping/Shipping'
import Footer from '../../Components/Footer/Footer'
import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';
import Counter from '../../Components/Counter/Counter'
function Coffees_and_Teas() {
  return (
      <>
          <Navbar />
          <Navbar1 />
           <div className="container my-4">
			  <div className="row ">
				 <div className="col-lg col-sm col-md">
			  
			  <div class="card " style={{ width: '210px',
    height: '500px'}}>
				  
    <Link to=""> <div class="card-image"> <img src="https://pictures.grocerapps.com/lgthumb/grocerapp-tapal-danedar-black-tea-634907fe98963.jpeg" alt=""  style={{width:'200px'}} /> </div></Link>
						  <div class="category "> <b>tapal danedar black tea</b> <br />
							  <Rating name="half-rating-read" defaultValue={4.0} precision={0.5} readOnly />
							   <div className="row my-3">
								  <div className="col">
									  350g
								  </div>
								  <div className="col">
									   $2.3
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
				  
    <Link to=""> <div class="card-image"> <img src="https://pictures.grocerapps.com/lgthumb/grocerapp-lipton-yellow-label-jar-61b98589b6d10.jpeg" alt=""  style={{width:'200px'}} /> </div></Link>
						  <div class="category "> <b>liptopn yellow label jar</b> <br />
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
				   <div className="col-lg col-sm col-md">
			  
			  <div class="card " style={{ width: '210px',
    height: '500px'}}>
				  
    <Link to=""> <div class="card-image"> <img src="https://pictures.grocerapps.com/lgthumb/grocerapp-brooke-bond-supreme-pouch-6349094ed0242.jpeg" alt=""  style={{width:'200px'}} /> </div></Link>
						  <div class="category "> <b>brooke bond supreme pouch</b> <br />
							  <Rating name="half-rating-read" defaultValue={4.0} precision={0.5} readOnly />
							   <div className="row my-3">
								  <div className="col">
									  900 gm
								  </div>
								  <div className="col">
									   $5.9
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
				  
    <Link to=""> <div class="card-image"> <img src="https://pictures.grocerapps.com/lgthumb/grocerapp-tapal-danedar-tea-jar-63491061a6246.jpeg" alt=""  style={{width:'200px'}} /> </div></Link>
						  <div class="category "> <b>tapal danedar tea jar</b> <br />
							  <Rating name="half-rating-read" defaultValue={4.0} precision={0.5} readOnly />
							   <div className="row my-3">
								  <div className="col">
									  440 gm
								  </div>
								  <div className="col">
									   $2.9
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

export default Coffees_and_Teas
