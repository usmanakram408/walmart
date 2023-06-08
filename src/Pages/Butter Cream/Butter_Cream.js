import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Navbar1 from '../../Components/Navbar1/Navbar1'
import Shipping from '../../Components/Shipping/Shipping'
import Footer from '../../Components/Footer/Footer'
import { Link } from "react-router-dom"
import Rating from '@mui/material/Rating'
import Counter from '../../Components/Counter/Counter'
function Butter_Cream() {
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
							  <Link to="#" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Add to Cart</Link>
						  </div>
   
					  </div>
				  </div>
				  <div className="col-lg col-sm col-md">
			  
			  <div class="card " style={{ width: '210px',
    height: '450px'}}>
				  
    <Link to=""> <div class="card-image my-0"> <img src="https://pictures.grocerapps.com/lgthumb/grocerapp-mumtaz-margerine-627502bcc889e.jpeg" alt=""  style={{width:'200px'}} /> </div></Link>
						  <div class="category my-0 "> <b>Mumtaz margarine</b> <br />
							  <Rating name="half-rating-read" defaultValue={4.0} precision={0.5} readOnly />
							  <div className="row">
								  <div className="col">
									  200gm
								  </div>
								  <div className="col">
									   $1.5
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
				  
    <Link to=""> <div class="card-image my-3"> <img src="https://pictures.grocerapps.com/lgthumb/grocerapp-200ml-olper-cream-60efd827ee5f8.jpeg" alt=""  style={{width:'150px'}} /> </div></Link>
						  <div class="category my-3"> <b>Olpers Dairy Cream</b> <br />
							  <Rating name="half-rating-read" defaultValue={4.0} precision={0.5} readOnly />
							  <div className="row">
								  <div className="col">
									  200ml
								  </div>
								  <div className="col">
									   $0.6
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
				  
    <Link to=""> <div class="card-image my-3"> <img src="https://pictures.grocerapps.com/lgthumb/grocerapp-milk-pak-dairy-cream-62064acb9e957.jpeg" alt=""  style={{width:'150px'}} /> </div></Link>
						  <div class="category my-3"> <b >Milk pak Dairy Cream</b> <br />
							  <Rating name="half-rating-read" defaultValue={4.0} precision={0.5} readOnly />
							  <div className="row">
								  <div className="col">
									200ml
								  </div>
								  <div className="col">
									   $0.70
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
    height: '480px'}}>
				  
    <Link to=""> <div class="card-image my-3"> <img src="https://pictures.grocerapps.com/lgthumb/grocerapp-milkpak-salted-dairy-butter-100g-60efe5f074da8.jpeg" alt=""  style={{width:'150px'}} /> </div></Link>
						  <div class="category my-3"> <b>Milk Pak Salted Cream</b> <br />
							  <Rating name="half-rating-read" defaultValue={5.0} precision={1.0} readOnly />
							  <div className="row">
								  <div className="col">
									  100gm
								  </div>
								  <div className="col">
									   $0.9
								  </div>
							  </div>
							 
							 
							  <Counter/>  <br />
							  <Link to="#" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Add to Cart</Link>
						  </div>
   
					  </div>
				  </div>
				  <div className="col-lg col-sm col-md">
			  
			  <div class="card " style={{ width: '210px',
    height: '480px'}}>
				  
    <Link to=""> <div class="card-image my-3"> <img src="https://pictures.grocerapps.com/lgthumb/grocerapp-nurpur-dairy-cream-60eff061b8e3c.jpeg" alt=""  style={{width:'180px'}} /> </div></Link>
						  <div class="category my-3"> <b>nurpur dairy cream</b> <br />
							  <Rating name="half-rating-read" defaultValue={4.0} precision={0.5} readOnly />
							  <div className="row">
								  <div className="col">
									  200ml
								  </div>
								  <div className="col">
									   $0.60
								  </div>
							  </div>
							  
							  
							  <Counter/> <br />
							  <Link to="#" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Add to Cart</Link>
						  </div>
   
					  </div>
				  </div>
				   <div className="col-lg col-sm col-md">
			  
			  <div class="card " style={{ width: '210px',
    height: '480px'}}>
				  
    <Link to=""> <div class="card-image my-1"> <img src="https://pictures.grocerapps.com/lgthumb/grocerapp-adams-butter-5e6bff97ec675.jpeg" alt=""  style={{width:'200px'}} /> </div></Link>
						  <div class="category my-4"> <b>adam's butter</b> <br />
							  <Rating name="half-rating-read" defaultValue={4.0} precision={0.5} readOnly />
							  <div className="row">
								  <div className="col">
									  50g
								  </div>
								  <div className="col">
									   $0.42
								  </div>
							  </div>
							  
							  
							  <Counter/> <br />
							  <Link to="#" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Add to Cart</Link>
						  </div>
   
					  </div>
				  </div>
				  <div className="col-lg col-sm col-md">
			  
			  <div class="card " style={{ width: '210px',
    height: '480px'}}>
				  
    <Link to=""> <div class="card-image my-3"> <img src="https://pictures.grocerapps.com/lgthumb/grocerapp-prema-butter-6114d30dd70d5.jpeg" alt=""  style={{width:'180px'}} /> </div></Link>
						  <div class="category my-3"> <b >Prema butter</b> <br />
							  <Rating name="half-rating-read" defaultValue={4.0} precision={0.5} readOnly />
							  <div className="row">
								  <div className="col">
									190 gm
								  </div>
								  <div className="col">
									   $1.5
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

export default Butter_Cream
