import React from 'react'
import './About.css'
import { Link } from "react-router-dom";
import Navbar from '../../Components/Navbar/Navbar'
import Navbar1 from '../../Components/Navbar1/Navbar1'
import Footer from '../../Components/Footer/Footer'
import Shipping from '../../Components/Shipping/Shipping'
function About() {
  return (
      <>
          <Navbar />
          <Navbar1 />
       
          <img src="https://drfurithemes.com/farmart2/wp-content/uploads/sites/19/elementor/thumbs/about-new-img1-1-pztfx9iyrk4sicionpkautycl56vccevfnvrnuxlcg.jpg" class="img-fluid my-4" alt="Responsive image"></img>
          <div className="container">
          <h2 className="">EST. 1986</h2>
          <h1 className="text-left text-dark a"><b> Farmart’s Story</b></h1>
          <p> 
                   <p className="mx-2">Farmart E-Commerce gives you a chance to
quickly & easily find the phone you want and have it
delivered to your home in no time.</p>
          </p>
          <p className="mx-2">Our affordability, fast and reliable delivery, and the fact that you will
always be able to find the phone that you are looking for in our offer, have
made us stand out in the market, but they are simply symptoms of our
dedication to what we are doing and our desire to constantly keep improving.
We know that in order to do that, we need to keep in close touch with our
              customers and listen to their suggestions and critiques.</p>
              <img src="https://drfurithemes.com/farmart2/wp-content/uploads/sites/19/2021/05/about-new-signature.png" class="img-fluid mx-2" alt="Responsive image"></img>
              </div>
          <hr className="b" />

<div class="container">

        <div class="row">

           
<div class="col-md-3 col-sm-6">

                <div class="our-team">

                    <div class="pic">

                        <img src="https://drfurithemes.com/farmart2/wp-content/uploads/sites/19/2021/05/about-new-person-1.png"/>

                    </div>

                    <h3 class="title">Williamson</h3>

                    <span class="post">CEO & Founder    </span>


                  


                </div>

            </div>


   

     

            <div class="col-md-3 col-sm-6">

                <div class="our-team">

                    <div class="pic">

                        <img src="https://drfurithemes.com/farmart2/wp-content/uploads/sites/19/2021/05/about-new-person-2.png"/>

                    </div>

                    <h3 class="title">Kristiana</h3>

                    <span class="post">CEO Founder</span>


                     


                </div>

            </div>




    

            <div class="col-md-3 col-sm-6">

                <div class="our-team">

                    <div class="pic">

                        <img src="https://drfurithemes.com/farmart2/wp-content/uploads/sites/19/2021/05/about-new-person-3.png"/>

                    </div>

                    <h3 class="title">Kristiana</h3>

                    <span class="post">Product Management</span>

                    


   

                </div>

            </div>



            <div class="col-md-3 col-sm-6">

                <div class="our-team">

                    <div class="pic">

                        <img src="https://drfurithemes.com/farmart2/wp-content/uploads/sites/19/2021/05/about-new-person-4.png"/>

                    </div>

                    <h3 class="title">Kristiana</h3>

                    <span class="post">CTO</span>


                    


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

export default About
