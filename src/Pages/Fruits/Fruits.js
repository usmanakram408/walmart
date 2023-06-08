import React from 'react'
import './fruits.less'
import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';
import Counter from '../../Components/Counter/Counter'
import img1 from '../../Components/Images/images-removebg-preview.png'
import img2 from '../../Components/Images/download-removebg-preview (2).png'
import Navbar from '../../Components/Navbar/Navbar'
import Navbar1 from '../../Components/Navbar1/Navbar1'
import Footer from '../../Components/Footer/Footer'
import Shipping from '../../Components/Shipping/Shipping'
function Fruits() {
  return (
    <>
          <Navbar />
          <Navbar1 />
       <img src="https://i0.wp.com/demo4.drfuri.com/farmart2/wp-content/uploads/sites/11/2021/05/homepage-new-shop-banner.png" class="img-fluid" alt="Responsive image"></img>
  <div className="container my-4">
			  <div className="row ">
				 <div className="col-lg col-sm col-md">
			  
			  <div class="card " style={{ width: '210px',
    height: '450px'}}>
				  
    <Link to=""> <div class="card-image"> <img src="https://drfurithemes.com/farmart2/wp-content/uploads/sites/19/2020/01/01_9a.jpg" alt=""  style={{width:'200px'}} /> </div></Link>
						  <div class="category "> <b>Fresh Oranges</b> <br />
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
    height: '450px'}}>
				  
    <Link to=""> <div class="card-image"> <img src={img1} alt=""  style={{width:'200px'}} /> </div></Link>
						  <div class="category "> <b>Fresh Apples</b> <br />
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
    height: '450px'}}>
				  
    <Link to=""> <div class="card-image"> <img src="https://drfurithemes.com/farmart2/wp-content/uploads/sites/19/2020/01/01_8a-300x300.jpg" alt=""  style={{width:'200px'}} /> </div></Link>
						  <div class="category "> <b>Fresh Mangoes</b> <br />
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
    height: '450px'}}>
				  
    <Link to=""> <div class="card-image my-3"> <img src={img2} alt=""  style={{width:'200px'}} /> </div></Link>
						  <div class="category my-3"> <b >Fresh Bananas</b> <br />
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
    height: '450px'}}>
				  
    <Link to=""> <div class="card-image"> <img src="https://drfurithemes.com/farmart2/wp-content/uploads/sites/19/2020/01/01_9a.jpg" alt=""  style={{width:'200px'}} /> </div></Link>
						  <div class="category "> <b>Fresh Oranges</b> <br />
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
    height: '450px'}}>
				  
    <Link to=""> <div class="card-image"> <img src={img1} alt=""  style={{width:'200px'}} /> </div></Link>
						  <div class="category "> <b>Fresh Apples</b> <br />
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
    height: '450px'}}>
				  
    <Link to=""> <div class="card-image"> <img src="https://drfurithemes.com/farmart2/wp-content/uploads/sites/19/2020/01/01_8a-300x300.jpg" alt=""  style={{width:'200px'}} /> </div></Link>
						  <div class="category "> <b>Fresh Mangoes</b> <br />
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
    height: '450px'}}>
				  
    <Link to=""> <div class="card-image my-3"> <img src={img2} alt=""  style={{width:'200px'}} /> </div></Link>
						  <div class="category my-3"> <b >Fresh Bananas</b> <br />
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
      </>
  )
}

export default Fruits
