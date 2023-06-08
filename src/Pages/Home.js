import React from 'react'
import { Link } from "react-router-dom";
import Navbar from '../Components/Navbar/Navbar'
import Navbar1 from '../Components/Navbar1/Navbar1'
import Footer from '../Components/Footer/Footer'
import './Home.scss'
import Timer from '../Components/Timer/Timer'
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Counter from '../Components/Counter/Counter'
import Shipping from '../Components/Shipping/Shipping'
function Home() {
  return (
      <>
         
          <div className="">
              <Navbar />
          </div>
          <div className="">
              <Navbar1 />
          </div>
          
          
		 
          <div class=" ">
    <div class="jumbotron text-white jumbotron-image shadow">
      <h2 class="mb-4 mx-5" style={{ color:'#2a4356'}}>
       <b> Active Summer With Juice Milk 300ml</b>
      </h2>
				  <p class="mb-4 mx-5" style={{ color:'#2a4356'}}>
      <b>  New arrivals with nature fruits,juice milks,essentials for summer</b>
      </p>
      <Link to="/Shop" class="btn btn-primary mx-5">Shop Now</Link>
    </div>
  </div>
          <div className="my-5 mx-5">
              <h2 className="mx-5"><b> Browse by Category</b></h2>
		  </div>
		  
		  <div className="container my-4">
			  <div className="row ">
				 <div className="col-lg-2 col-sm col-md">
			  
			  <div class="card text-center">
				  
    <Link to="/Breads_Sweets"> <div class="card-image"> <img src="https://drfurithemes.com/farmart2/wp-content/uploads/sites/19/2021/05/homepage-new-cat-2.png" alt="" /> </div></Link>
    <div class="category text-center"> <b>Breads Sweets</b> </div>
   
					  </div>
				  </div>
				  <div className="col-lg col-sm col-md">
			  
			  <div class="card text-center">
				  
    <Link to="/Coffees_and_Teas"> <div class="card-image"> <img src="https://drfurithemes.com/farmart2/wp-content/uploads/sites/19/2021/05/homepage-new-cat-6.png" alt="" /> </div></Link>
    <div class="category text-center"> <b>Coffees and Teas</b> </div>
   
					  </div>
				  </div>
				  <div className="col-lg col-sm col-md">
			  
			  <div class="card text-center">
				  
    <Link to="/Seafoods"> <div class="card-image"> <img src="https://drfurithemes.com/farmart2/wp-content/uploads/sites/19/2021/05/homepage-new-cat-3.png" alt="" /> </div></Link>
    <div class="category text-center"> <b>Frozen Seafoods</b> </div>
   
					  </div>
				  </div>
				  <div className="col-lg  col-sm col-md">
			  
			  <div class="card text-center">
				  
    <Link to="/Vegetables"> <div class="card-image"> <img src="https://drfurithemes.com/farmart2/wp-content/uploads/sites/19/2021/05/homepage-new-cat-1.png" alt="" /> </div></Link>
    <div class="category text-center"> <b>Fruits & Vegetables</b> </div>
   
					  </div>
				  </div>
				   <div className="col-lg col-sm col-md ">
			  
			  <div class="card text-center">
				  
    <Link to=""> <div class="card-image"> <img src="https://drfurithemes.com/farmart2/wp-content/uploads/sites/19/2021/05/homepage-new-cat-5.png" alt="" /> </div></Link>
    <div class="category text-center"> <b>Wines & Alcohol</b> </div>
   
					  </div>
				  </div>
				   <div className="col-lg  col-sm col-md ">
			  
			  <div class="card text-center">
				  
    <Link to="/Milk"> <div class="card-image"> <img src="https://drfurithemes.com/farmart2/wp-content/uploads/sites/19/2021/05/homepage-new-cat-7.png" alt="" /> </div></Link>
    <div class="category text-center"> <b>Milks and Drinks</b> </div>
   
					  </div>
				  </div>
			  </div>
		  </div>
		  <div className="my-5 mx-5">
              <h2 className="mx-5"><b> Featured Brands</b></h2>
		  </div>

		  <div className="container my-4">
			  <div className="row">
				  <div className="col-sm col-md col-lg">
					  <Link to="">
					  <div class="card" style={{ width: '18rem', height: '20rem' }}>
  <img class="card-img-top" src="https://drfurithemes.com/farmart2/wp-content/uploads/sites/19/2021/05/homepage-new-brand-img-1.png" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title text-center"><b> FoodPouch</b></h5>
    <h4 class="card-text text-center"><b> New Snacks Release</b></h4>
  </div> 
  
  
						  </div>
						  </Link>
				  </div>
				    <div className="col-sm col-md col-lg">
					  <Link to="/Coffees_and_Teas">
					  <div class="card" style={{ width: '18rem', height: '20rem' }}>
  <img class="card-img-top" src="https://drfurithemes.com/farmart2/wp-content/uploads/sites/19/2021/05/homepage-new-brand-img-2.png" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title text-center"><b> TEA</b></h5>
    <h4 class="card-text text-center"><b> Happy Tea 100% Organic</b></h4>
  </div> 
  
  
						  </div>
						  </Link>
				  </div>
				  <div className="col-sm col-md col-lg">
					  <Link to="">
					  <div class="card" style={{ width: '18rem', height: '20rem' }}>
  <img class="card-img-top" src="https://drfurithemes.com/farmart2/wp-content/uploads/sites/19/2021/05/homepage-new-brand-img-3.png" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title text-center"><b> Soda Brand</b></h5>
    <h4 class="card-text text-center"><b> Soda Can Box 24 Pieces</b></h4>
  </div> 
  
  
						  </div>
						  </Link>
				  </div>
				  
				   {/* <div className="col-sm col-md col-lg">
					  <Link to="">
					  <div class="card" style={{ width: '18rem', height: '20rem' }}>
  <img class="card-img-top" src="https://drfurithemes.com/farmart2/wp-content/uploads/sites/19/2021/05/homepage-new-brand-img-4.png" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title text-center"><b> FarmGrocery</b></h5>
    <h4 class="card-text text-center"><b> Fresh Meat Saugage</b></h4>
  </div> 
  
  
						  </div>
						  </Link>
				  </div>
				   <div className="col-sm col-md col-lg">
					  <Link to="">
					  <div class="card" style={{ width: '18rem', height: '20rem' }}>
  <img class="card-img-top" src="https://drfurithemes.com/farmart2/wp-content/uploads/sites/19/2021/05/homepage-new-brand-img-1.png" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title text-center"><b> FarmGrocery</b></h5>
    <h4 class="card-text text-center"><b> Fresh Meat Saugage</b></h4>
  </div> 
  
  
						  </div>
						  </Link>
				  </div> */}
			  </div>
		  </div>
		  <div className="my-5 mx-5">
			  <div className="row">
				  <div className="col-md col-lg col-sm">
					  <h2 className="container mx-5"><b> Top Saver Today</b></h2>
				  </div>
				  <div className="col-md col-lg col-sm ">
					   <Timer/>
					 
				  </div>
			  </div>
              
		  </div>
		 <div className="container my-4">
			  <div className="row ">
				 <div className="col-lg col-sm col-md">
			  
			  <div class="card " style={{ width: '210px',
    height: '550px'}}>
				  
    <Link to=""> <div class="card-image"> <img src="https://drfurithemes.com/farmart2/wp-content/uploads/sites/19/2020/02/08_3a-300x300.jpg" alt=""  style={{width:'200px'}} /> </div></Link>
						  <div class="category "> <b>Vimto Squash Remix Apple 1.5...</b> <br />
							  <Rating name="half-rating-read" defaultValue={4.0} precision={0.5} readOnly />
							   <div className="row my-3">
								  <div className="col">
									  500g
								  </div>
								  <div className="col">
									   $35.00
								  </div>
							  </div>
							  Sold: 10/38 <br />
							  <Counter/>  <br />
							  <Link to="/Add_To_Cart" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Add to Cart</Link>
						  </div>
   
					  </div>
				  </div>
				  <div className="col-lg col-sm col-md">
			  
			  <div class="card " style={{ width: '210px',
    height: '550px'}}>
				  
    <Link to=""> <div class="card-image"> <img src="https://drfurithemes.com/farmart2/wp-content/uploads/sites/19/2020/02/06_4a-300x300.jpg" alt=""  style={{width:'200px'}} /> </div></Link>
						  <div class="category "> <b>Vimto Squash Remix Apple 1.5...</b> <br />
							  <Rating name="half-rating-read" defaultValue={4.0} precision={0.5} readOnly />
							   <div className="row my-3">
								  <div className="col">
									  500g
								  </div>
								  <div className="col">
									   $35.00
								  </div>
							  </div>
							  Sold: 10/38 <br />
							  <Counter/> <br />
							  <Link to="#" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Add to Cart</Link>
						  </div>
   
					  </div>
				  </div>
				   <div className="col-lg col-sm col-md">
			  
			  <div class="card " style={{ width: '210px',
    height: '550px'}}>
				  
    <Link to=""> <div class="card-image"> <img src="https://drfurithemes.com/farmart2/wp-content/uploads/sites/19/2020/02/04_4a.jpg" alt=""  style={{width:'200px'}} /> </div></Link>
						  <div class="category "> <b>Vimto Squash Remix Apple 1.5...</b> <br />
							  <Rating name="half-rating-read" defaultValue={4.0} precision={0.5} readOnly />
							   <div className="row my-3">
								  <div className="col">
									  45g
								  </div>
								  <div className="col">
									   $6.00
								  </div>
							  </div>
							  
							  Sold: 10/38 <br />
							  <Counter/> <br />
							  <Link to="#" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Add to Cart</Link>
						  </div>
   
					  </div>
				  </div>
				  <div className="col-lg col-sm col-md">
			  
			  <div class="card " style={{ width: '210px',
    height: '550px'}}>
				  
    <Link to=""> <div class="card-image"> <img src="https://drfurithemes.com/farmart2/wp-content/uploads/sites/19/2020/02/05_11a.jpg" alt=""  style={{width:'200px'}} /> </div></Link>
						  <div class="category "> <b>Vimto Squash Remix Apple 1.5...</b> <br />
							  <Rating name="half-rating-read" defaultValue={4.0} precision={0.5} readOnly />
							   <div className="row my-3">
								  <div className="col">
									  545g
								  </div>
								  <div className="col">
									   $6.00
								  </div>
							  </div>
							  Sold: 10/38 <br />
							  <Counter/> <br />
							  <Link to="#" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Add to Cart</Link>
						  </div>
   
					  </div>
				  </div>
				  
			  </div>
		  </div>
		  <div className="my-5 mx-5">
			  <h2 className="mx-5"><b> Best Seller</b></h2>
		  </div>
		   <div className="container my-4">
			  <div className="row ">
				 <div className="col-lg col-sm col-md">
			  
			  <div class="card " style={{ width: '210px',
    height: '500px'}}>
				  
    <Link to=""> <div class="card-image"> <img src="https://drfurithemes.com/farmart2/wp-content/uploads/sites/19/2020/02/05_8a.jpg" alt=""  style={{width:'200px'}} /> </div></Link>
						  <div class="category "> <b>Slimming World Vegan Mac Gre</b> <br />
							  <Rating name="half-rating-read" defaultValue={5.0} precision={1.0} readOnly />
							  <div className="row">
								  <div className="col">
									  500g
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
    height: '500px'}}>
				  
    <Link to=""> <div class="card-image"> <img src="https://drfurithemes.com/farmart2/wp-content/uploads/sites/19/2020/02/02_1a.jpg" alt=""  style={{width:'200px'}} /> </div></Link>
						  <div class="category "> <b>Bar S- Classic Bun Le...</b> <br />
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
    height: '500px'}}>
				  
    <Link to=""> <div class="card-image"> <img src="https://drfurithemes.com/farmart2/wp-content/uploads/sites/19/2020/01/01_8a-300x300.jpg" alt=""  style={{width:'200px'}} /> </div></Link>
						  <div class="category "> <b>saute Pan Silver</b> <br /><br />
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
    height: '500px'}}>
				  
    <Link to=""> <div class="card-image"> <img src="https://drfurithemes.com/farmart2/wp-content/uploads/sites/19/2020/02/04_2a.jpg" alt=""  style={{width:'200px'}} /> </div></Link>
						  <div class="category "> <b>Iceland 3 Solo Exotic Brust</b> <br />
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
				  
				  
			  </div>
		  </div>
		  <hr />
	
   <div class=" ">
    <div class="jumbotron text-white jumbotron-image shadow">
      <h2 class="mb-4 mx-5" style={{ color:'#2a4356'}}>
       <b> Active Summer With Juice Milk 300ml</b>
      </h2>
				  <p class="mb-4 mx-5" style={{ color:'#2a4356'}}>
      <b>  New arrivals with nature fruits,juice milks,essentials for summer</b>
      </p>
      
    </div>
  </div>
		  
		   <div className="mx-4">
			  <Shipping/>
		   </div>
		  
		  
         
<Footer/>
         
      </>
  )
}

export default Home
