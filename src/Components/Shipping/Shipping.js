import React from 'react'

function Shipping() {
  return (
      <>
      <section className="my-4 mx-5">
			  <div className="row">
				  <div className="col-md-3 col-sm-3 col-lg-3">
					  <div className="row">
						  <div className="col-2">
							  <i class='fa fa-rocket' style={{fontSize:'34px'}}></i>
						  </div>
						  <div className="col-10">
							  <h5>Free Shipping <br />For all orders over $200</h5>
						  </div>
					  </div>
					  
					
				  </div>
				  <div className="col-md-3 col-sm-3 col-lg-3">
					   <div className="row">
						  <div className="col-2">
							 <i class='fa fa-refresh' style={{fontSize:'34px'}}></i>
						  </div>
						  <div className="col-10">
							  <h5>1 & 1 Returns  <br />Cancellation after 1 day</h5>
						  </div>
					  </div>
					  <h4> <br /></h4>
				  </div>
				  <div className="col-md-3 col-sm-3 col-lg-3">
					   <div className="row">
						  <div className="col-2">
							  <i class="fa fa-shield"  style={{fontSize:'34px'}}></i>
						  </div>
						  <div className="col-10">
							  <h5>100% Secure Payment <br />Gurantee secure payments</h5>
						  </div>
					  </div>
					  <h4> <br /></h4>
				  </div>
				  <div className="col-md-3 col-sm-3 col-lg-3">
					   <div className="row">
						  <div className="col-2">
							  <i class='fa fa-support' style={{fontSize:'34px'}}></i>
						  </div>
						  <div className="col-10">
							  <h5>24/7 Dedicated Support<br />Anywhere & anytime</h5>
						  </div>
					  </div>
					  <h4><br /></h4>
				  </div>
			  </div>
          </section>
      </>
  )
}

export default Shipping
