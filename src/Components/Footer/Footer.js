import React from 'react'
import './Footer.css'
import { Link } from "react-router-dom";
function Footer() {
  return (
      <>
      <footer class="container-fluid bg-grey py-5">
<div class="container">
   <div class="row">
      <div class="col-md-6">
         <div class="row">
            <div class="col-md-6 ">
               <div class="logo-part">
                                      <img src="https://i.ibb.co/sHZz13b/logo.png" class="w-50 logo-footer" />
                          <p>Farmart – Your Online Foods & Grocery</p>            
                  <p>7637 Laurel Dr. King Of Prussia, PA 19406</p>
                                      <p>Use this tool as test data for an automated system or find your next pen</p>
                                      <h4> <i class="fa fa-phone" aria-hidden="true"></i>  Hotline: 24/7</h4>
                                      <h5>(+965) 7492-4277</h5>
                                      <h5><i class="fa fa-home" aria-hidden="true"></i>  959 Homestead Street Eastlake, NYC</h5>
                                      <h5><i class="fa fa-envelope" aria-hidden="true"></i>  support@farmart.com</h5>
                                  </div>
                                  
            </div>
            <div class="col-md-6 px-4">
               <h6> About Company</h6>
               <p>Farmart E-Commerce gives you a chance to
quickly & easily find the phone you want and have it
delivered to your home in no time.</p>
               {/* <Link to="#" class="btn-footer"> More Info </Link><br/> */}
               <Link to="/Contact_us" class="btn-footer"> Contact Us</Link>
            </div>
         </div>
      </div>
      <div class="col-md-6">
         <div class="row">
            <div class="col-md-6 px-4">
               <h6> Useful Links</h6>
               <div class="row ">
                  <div class="col-md-6">
                     <ul>
                        <li> <Link to="/About"> About</Link> </li>
                        <li> <Link to="/Contact_us"> Contact</Link> </li>
                        {/* <li> <Link to="#"> Help Center</Link> </li> */}
                        {/* <li> <Link to="#"> Career</Link> </li> */}
                        {/* <li> <Link to="#"> Policy</Link> </li> */}
                                              <li> <Link to="/Flash_sale"> Flash Sale</Link> </li>
                                              <li> <Link to="#"> Official</Link> </li>
                                              <li> <Link to="#"> Sitemap</Link> </li>
                     </ul>
                                      </div>
                                      
                  <div class="col-md-6 px-4">
                    
                     <ul>
                        <li> <Link to="#"> Payments</Link> </li>
                        <li> <Link to="#"> Shipping</Link> </li>
                        <li> <Link to="#"> Product Returns</Link> </li>
                        <li> <Link to="#"> FAQ</Link> </li>
                        <li> <Link to="/Checkout"> Checkout</Link> </li>
                        {/* <li> <Link to="#"> Paypal</Link> </li> */}
                     </ul>
                  </div>
               </div>
            </div>
                              <div class="col-md-6 ">
                                 <h6> Farmart Newsletter</h6>
               <h6> Register now to get updates on promotions and coupns. Don’t worry! We not spam</h6>
               <div class="social">
                  <Link to="#"><i class="fa fa-facebook" aria-hidden="true"></i></Link>
                  <Link to="#"><i class="fa fa-instagram" aria-hidden="true"></i></Link>
               </div>
               <form class="form-footer my-3">
                  <input type="text"  placeholder="search here...." name="search"/>
                  <input type="button" value="Go"/>
               </form>
               <p>That's technology limitation of LCD monitors</p>
            </div>
         </div>
                      </div>
                      
   </div>
              </div>
             
          </footer>
           {/* <div className="container my-4">
                  <div className="row">
                      <div className="col-lg-4">
                          ©2021 Farmart All rights reserved
                  </div>
                   <div className="col-lg-4">
                         <Link to=""><img src="https://drfurithemes.com/farmart2/wp-content/uploads/sites/19/2021/05/footer-new-payment.png" alt="" /></Link>
                      </div>
                  </div>
              </div> */}
      </>
  )
}

export default Footer
