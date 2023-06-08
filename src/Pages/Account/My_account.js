import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Navbar1 from '../../Components/Navbar1/Navbar1'
import './My_account.css'
import Footer from '../../Components/Footer/Footer'
import { Link } from "react-router-dom";
import Shipping from '../../Components/Shipping/Shipping'
function My_account() {
  return (
   <>
   <Navbar/>
          <Navbar1 />
          <h2 className="text-dark text-center my-5"><b> My account</b></h2>
          <ol class="breadcrumb">
    <li class="g breadcrumb-item" ><Link to="#" >Home</Link></li>
    <li class="breadcrumb-item active" aria-current="page">My Account</li>
  </ol>
<div class="login-form">
    <form action="/examples/actions/confirmation.php" method="post">
        <h2 class="text-center">Log in</h2>       
        <div class="form-group">
            <input type="text" class="form-control" placeholder="Username" required="required"/>
        </div>
        <div class="form-group">
            <input type="password" class="form-control" placeholder="Password" required="required"/>
        </div>
        <div class="form-group">
            <button type="submit" class="btn btn-primary btn-block">Log in</button>
        </div>
        <div class="clearfix">
            <label class="float-left form-check-label"><input type="checkbox"/> Remember me</label>
            <Link to="#" class="float-right" style={{color:'blue'}}>Forgot Password?</Link>
        </div>        
    </form>
    <p class="text-center"><Link to="#" style={{color:'blue'}}>Create an Account</Link></p>
</div>
        
           <div className="mx-4">
			  <Shipping/>
		   </div>
          <Footer/>
      </>
  )
}

export default My_account
