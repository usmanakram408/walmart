import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Navbar1 from '../../Components/Navbar1/Navbar1'
import Footer from '../../Components/Footer/Footer'
import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';
import Counter from '../../Components/Counter/Counter'
import img1 from '../../Components/Images/images-removebg-preview (8).png'
import img2 from '../../Components/Images/images-removebg-preview (9).png'
import img3 from '../../Components/Images/download-removebg-preview (1).png'
import img4 from '../../Components/Images/01_20a.jpg'
import img5 from '../../Components/Images/download-removebg-preview (5).png'
import img6 from '../../Components/Images/images-removebg-preview (5).png'
import img7 from '../../Components/Images/images-removebg-preview (6).png'
import img8 from '../../Components/Images/download-removebg-preview (6).png'
import Shipping from '../../Components/Shipping/Shipping'
function Milk() {
  return (
    <>
          <Navbar />
          <Navbar1 />
           <img src="https://i0.wp.com/demo4.drfuri.com/farmart2/wp-content/uploads/sites/11/2021/05/homepage-new-shop-banner.png" class="img-fluid" alt="Responsive image"></img>

 <div className="container my-4">
			  <div className="row ">
				 <div className="col-lg col-sm col-md">
			  
			  <div class="card " style={{ width: '210px',
    height: '420px'}}>
				  
    <Link to=""> <div class="card-image my-3"> <img src={img1} alt=""  style={{width:'200px'}} /> </div></Link>
						  <div class="category my-3"> <b>Fresh Butter</b> <br />
							  <Rating name="half-rating-read" defaultValue={5.0} precision={1.0} readOnly />
							  <div className="row">
								  <div className="col">
									  1kg
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
				  
    <Link to=""> <div class="card-image my-3"> <img src={img2} alt=""  style={{width:'200px'}} /> </div></Link>
						  <div class="category my-5 "> <b>Fresh milk</b> <br />
							  <Rating name="half-rating-read" defaultValue={4.0} precision={0.5} readOnly />
							  <div className="row">
								  <div className="col">
									  1kg
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
				  
    <Link to=""> <div class="card-image my-3"> <img src={img3} alt=""  style={{width:'200px'}} /> </div></Link>
						  <div class="category my-4"> <b>fresh eggs</b> <br />
							  <Rating name="half-rating-read" defaultValue={4.0} precision={0.5} readOnly />
							  <div className="row">
								  <div className="col">
									  1dozen
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
				  
    <Link to=""> <div class="card-image "> <img src={img4} alt=""  style={{width:'180px'}} /> </div></Link>
						  <div class="category"> <b >cultured milk drink</b> <br />
							  <Rating name="half-rating-read" defaultValue={4.0} precision={0.5} readOnly />
							  <div className="row">
								  <div className="col">
									1 unit
								  </div>
								  <div className="col">
									   $5.00-$8.90
								  </div>
							  </div>
							  
							  
							  <Counter/> <br />
							  <Link to="#" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Add to Cart</Link>
						  </div>
   
					  </div>
				  </div>
				  
				  
			  </div>
		  </div>
		   {/* <div className="container my-4">
			  <div className="row ">
				 <div className="col-lg col-sm col-md">
			  
			  <div class="card " style={{ width: '210px',
    height: '420px'}}>
				  
    <Link to=""> <div class="card-image my-4"> <img src={img5} alt=""  style={{width:'200px'}} /> </div></Link>
						  <div class="category my-4"> <b>Beets</b> <br />
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
				  
    <Link to=""> <div class="card-image my-3"> <img src={img6} alt=""  style={{width:'200px'}} /> </div></Link>
						  <div class="category my-2"> <b>fresh Ginger</b> <br />
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
				  
    <Link to=""> <div class="card-image my-3"> <img src={img7} alt=""  style={{width:'200px'}} /> </div></Link>
						  <div class="category my-1"> <b>Fresh garlic</b> <br />
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
				  
    <Link to=""> <div class="card-image my-3"> <img src={img8} alt=""  style={{width:'200px'}} /> </div></Link>
						  <div class="category my-3"> <b >Tomatoes</b> <br />
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
		  </div> */}
           <div className="mx-4">
			  <Shipping/>
		   </div>
          <Footer/>
      </>
  )
}

export default Milk
