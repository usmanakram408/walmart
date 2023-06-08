import React from 'react'
import './Navbar1.css'
import { Link } from "react-router-dom";
function Navbar1() {
  return (
      <>
         
   
        <nav>
        {/* <div id="logo">Your Logo here</div> */}

        <label for="drop" class="toggle">Menu</label>
        <input type="checkbox" id="drop" />
            <ul class="menu">
                      <li><Link to="/Flash_sale"><i class="bi bi-lightning"></i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lightning" viewBox="0 0 16 16">
  <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1H6.374z"/>
</svg> Deals Today</Link></li>
                      {/* <li><Link to="#"><i class="bi bi-tag"></i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tag" viewBox="0 0 16 16">
  <path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0z"/>
  <path d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1zm0 5.586 7 7L13.586 9l-7-7H2v4.586z"/>
</svg> Special Prices</Link></li> */}
                <li>
                    
                    <label for="drop-1" class="toggle">Fresh +</label>
                    <Link to="/Fruits">Fresh</Link>
                    <input type="checkbox" id="drop-1"/>
                    <ul>
                        <li><Link to="/Fruits">Fruit</Link></li>
                        <li><Link to="/Meat">Meat & Poultry</Link></li>
                              <li><Link to="/Milk">Milk, Butter & Eggs</Link></li>
                              <li><Link to="/Vegetables">Vegetables</Link></li>
                    </ul> 

                </li>
                <li>

                
                <label for="drop-2" class="toggle">Frozen +</label>
                <Link to="/Buitoni">Frozen</Link>
                <input type="checkbox" id="drop-2"/>
                <ul>
                    <li><Link to="/Buitoni">Buitoni</Link></li>
                              <li><Link to="/Butter_Cream">Buttercream</Link></li>
                              {/* <li><Link to="/Freshly">Freshly</Link></li>
                              <li><Link to="/Hot_Pockets">Hot Pockets</Link></li> */}
                    {/* <li>
                       
                         
                    <label for="drop-3" class="toggle">Tutorials +</label>
                    <Link to="#">Tutorials</Link>         
                    <input type="checkbox" id="drop-3"/>

                    <ul>
                        <li><Link to="#">HTML/CSS</Link></li>
                        <li><Link to="#">jQuery</Link></li>
                        <li><Link to="#">Other</Link></li>
                    </ul>
                    </li> */}
                </ul>
                </li>
                      <li><Link to="/">Demos</Link></li>
                      <li>
                    
                    <label for="drop-3" class="toggle">Shop +</label>
                    <Link to="/Shop">Shop</Link>
                    <input type="checkbox" id="drop-3"/>
                          <ul>
                        <li><Link to="/Cart">Cart</Link></li>
                        <li><Link to="/Checkout">Checkout</Link></li>
                              {/* <li><Link to="#">Single Product </Link></li> */}
                    </ul> 

                </li>
                {/* <li>
                    
                    <label for="drop-4" class="toggle">Blog +</label>
                    <Link to="#">Blog</Link>
                    <input type="checkbox" id="drop-4"/>
                          <ul>
                        <li><Link to="#">Blog Default</Link></li>
                        <li><Link to="#">Single Post</Link></li>
                            
                    </ul> 

                      </li> */}
                      {/* <li>
                    
                    <label for="drop-1" class="toggle">Pages +</label>
                    <Link to="#">Pages</Link>
                    <input type="checkbox" id="drop-1"/>
                          <ul>
                        <li><Link to="#">About Us</Link></li>
                              <li><Link to="#">Contact Us</Link></li>
                              <li><Link to="#">FAQs</Link></li>
                               <li><Link to="#">Page 404</Link></li>
                             <li><Link to="#">Coming Soon</Link></li>
                    </ul> 

                </li> */}
                <li><Link to="/Contact_us">Contact</Link></li>
                <li><Link to="/About">About</Link></li>
            </ul>
        </nav>


      </>
  )
}

export default Navbar1
