import React from 'react'
import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';
import Counter from '../../Components/Counter/Counter'
import img5 from '../../Components/Images/download-removebg-preview (10).png'
import img6 from '../../Components/Images/download-removebg-preview (11).png'
import img7 from '../../Components/Images/download-removebg-preview (9).png'
import img8 from '../../Components/Images/640x640-removebg-preview.png'
import Navbar from '../../Components/Navbar/Navbar'
import Navbar1 from '../../Components/Navbar1/Navbar1'
import Footer from '../../Components/Footer/Footer'
import Shipping from '../../Components/Shipping/Shipping'
function Buitoni() {
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
				  
    <Link to=""> <div class="card-image my-0"> <img src={img5} alt=""  style={{width:'180px'}} /> </div></Link>
						  <div class="category my-0"> <b>Haagen-dasz caramel</b> <br />
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
				  
    <Link to=""> <div class="card-image my-0"> <img src={img6} alt=""  style={{width:'180px'}} /> </div></Link>
						  <div class="category my-2"> <b>Soft galeto cream</b> <br />
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
				  
    <Link to=""> <div class="card-image my-0"> <img src={img7} alt=""  style={{width:'180px'}} /> </div></Link>
						 <br/> <div class="category my-0"> <b>iceland soft scoop </b> 
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
				  
    <Link to=""> <div class="card-image my-1"> <img src={img8} alt=""  style={{width:'200px'}} /> </div></Link>
						  <div class="category my-0"> <b >vanilla soft scoop </b> <br />
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

export default Buitoni
