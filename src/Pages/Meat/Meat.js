import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Navbar1 from '../../Components/Navbar1/Navbar1'
import Footer from '../../Components/Footer/Footer'
import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';
import img1 from '../../Components/Images/download-removebg-preview (3).png'
import img2 from '../../Components/Images/download-removebg-preview (2).png'
import Counter from '../../Components/Counter/Counter'
import Shipping from '../../Components/Shipping/Shipping'
function Meat() {
  return (
    <div>
       <Navbar />
          <Navbar1 />
           <img src="https://i0.wp.com/demo4.drfuri.com/farmart2/wp-content/uploads/sites/11/2021/05/homepage-new-shop-banner.png" class="img-fluid" alt="Responsive image"></img>

		  <div className="container my-4">
			  <div className="row ">
				 <div className="col-lg col-sm col-md">
			  
			  <div class="card " style={{ width: '210px',
    height: '420px'}}>
				  
    <Link to=""> <div class="card-image my-3"> <img src="https://www.nutritionadvance.com/wp-content/uploads/2017/05/beef-meat.jpg" alt=""  style={{width:'200px'}} /> </div></Link>
						  <div class="category my-3"> <b>Beef</b> <br />
							  <Rating name="half-rating-read" defaultValue={5.0} precision={1.0} readOnly />
							  <div className="row">
								  <div className="col">
									  1.5kg
								  </div>
								  <div className="col">
									   $35.00
								  </div>
							  </div>
							 
							 
							  <Counter/>  <br />
							  <Link to="#" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Add to Cart</Link>
						  </div>
   
					  </div>
				  </div>
				  <div className="col-lg col-sm col-md">
			  
			  <div class="card " style={{ width: '210px',
    height: '420px'}}>
				  
    <Link to=""> <div class="card-image my-3"> <img src="https://www.nutritionadvance.com/wp-content/uploads/2017/05/lamb-meat.jpg" alt=""  style={{width:'200px'}} /> </div></Link>
						  <div class="category my-3 "> <b>Lamb and Mutton</b> <br />
							  <Rating name="half-rating-read" defaultValue={4.0} precision={0.5} readOnly />
							  <div className="row">
								  <div className="col">
									  500g
								  </div>
								  <div className="col">
									   $35.00
								  </div>
							  </div>
							  
							  
							  <Counter/> <br />
							  <Link to="#" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Add to Cart</Link>
						  </div>
   
					  </div>
				  </div>
				   <div className="col-lg col-sm col-md">
			  
			  <div class="card " style={{ width: '210px',
    height: '420px'}}>
				  
    <Link to=""> <div class="card-image my-3"> <img src="https://www.nutritionadvance.com/wp-content/uploads/2017/05/chicken-meat.jpg" alt=""  style={{width:'200px'}} /> </div></Link>
						  <div class="category my-3"> <b>Chicken</b> <br />
							  <Rating name="half-rating-read" defaultValue={4.0} precision={0.5} readOnly />
							  <div className="row">
								  <div className="col">
									  500g
								  </div>
								  <div className="col">
									   $35.00
								  </div>
							  </div>
							  
							  
							  <Counter/> <br />
							  <Link to="#" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Add to Cart</Link>
						  </div>
   
					  </div>
				  </div>
				  <div className="col-lg col-sm col-md">
			  
			  <div class="card " style={{ width: '210px',
    height: '420px'}}>
				  
    <Link to=""> <div class="card-image my-3"> <img src="https://www.nutritionadvance.com/wp-content/uploads/2017/05/turkey-meat.jpg" alt=""  style={{width:'200px'}} /> </div></Link>
						  <div class="category my-3"> <b >Turkey</b> <br />
							  <Rating name="half-rating-read" defaultValue={4.0} precision={0.5} readOnly />
							  <div className="row">
								  <div className="col">
									1 dozen
								  </div>
								  <div className="col">
									   $35.00
								  </div>
							  </div>
							  
							  
							  <Counter/> <br />
							  <Link to="#" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Add to Cart</Link>
						  </div>
   
					  </div>
				  </div>
				  
				  
			  </div>
		  </div>
		   <div className="container my-4">
			  <div className="row ">
				 <div className="col-lg col-sm col-md">
			  
			  <div class="card " style={{ width: '210px',
    height: '420px'}}>
				  
    <Link to=""> <div class="card-image my-3"> <img src="https://www.nutritionadvance.com/wp-content/uploads/2017/05/venison-meat.jpg" alt=""  style={{width:'200px'}} /> </div></Link>
						  <div class="category my-3"> <b>Venison</b> <br />
							  <Rating name="half-rating-read" defaultValue={5.0} precision={1.0} readOnly />
							  <div className="row">
								  <div className="col">
									  1.5kg
								  </div>
								  <div className="col">
									   $35.00
								  </div>
							  </div>
							 
							 
							  <Counter/>  <br />
							  <Link to="#" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Add to Cart</Link>
						  </div>
   
					  </div>
				  </div>
				  <div className="col-lg col-sm col-md">
			  
			  <div class="card " style={{ width: '210px',
    height: '420px'}}>
				  
    <Link to=""> <div class="card-image my-3"> <img src="https://www.nutritionadvance.com/wp-content/uploads/2017/05/duck-meat.jpg" alt=""  style={{width:'200px'}} /> </div></Link>
						  <div class="category my-3"> <b>Duck</b> <br />
							  <Rating name="half-rating-read" defaultValue={4.0} precision={0.5} readOnly />
							  <div className="row">
								  <div className="col">
									  500g
								  </div>
								  <div className="col">
									   $35.00
								  </div>
							  </div>
							  
							  
							  <Counter/> <br />
							  <Link to="#" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Add to Cart</Link>
						  </div>
   
					  </div>
				  </div>
				   <div className="col-lg col-sm col-md">
			  
			  <div class="card " style={{ width: '210px',
    height: '420px'}}>
				  
    <Link to=""> <div class="card-image my-3"> <img src="https://www.nutritionadvance.com/wp-content/uploads/2017/05/wild-boar-meat.jpg" alt=""  style={{width:'200px'}} /> </div></Link>
						  <div class="category my-3"> <b>Wild Boar</b> <br />
							  <Rating name="half-rating-read" defaultValue={4.0} precision={0.5} readOnly />
							  <div className="row">
								  <div className="col">
									  500g
								  </div>
								  <div className="col">
									   $35.00
								  </div>
							  </div>
							  
							  
							  <Counter/> <br />
							  <Link to="#" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Add to Cart</Link>
						  </div>
   
					  </div>
				  </div>
				  <div className="col-lg col-sm col-md">
			  
			  <div class="card " style={{ width: '210px',
    height: '420px'}}>
				  
    <Link to=""> <div class="card-image my-3"> <img src="https://www.nutritionadvance.com/wp-content/uploads/2018/08/roast-pheasant-meat.jpg" alt=""  style={{width:'200px'}} /> </div></Link>
						  <div class="category my-3"> <b >Pheasant</b> <br />
							  <Rating name="half-rating-read" defaultValue={4.0} precision={0.5} readOnly />
							  <div className="row">
								  <div className="col">
									1 dozen
								  </div>
								  <div className="col">
									   $35.00
								  </div>
							  </div>
							  
							  
							  <Counter/> <br />
							  <Link to="#" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Add to Cart</Link>
						  </div>
   
					  </div>
				  </div>
				  
				  
			  </div>
		  </div>
           <div className="mx-4">
			  <Shipping/>
		   </div>

          <Footer/>
    </div>
  )
}

export default Meat
