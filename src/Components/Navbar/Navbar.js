import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
    <nav class="navbar">
  <i class="material-icons menu-icon">
    menu
  </i>
        <div class="logo">
          <a href="/">
            <img src="https://github.com/subeshb1/GrabCheap/blob/master/img/logo_inverse.jpg?raw=true" alt="logo" />
            
    <div class="text">    FarmGrocery
            </div>
            </a>
  </div>
  <div class="item search right" tabindex="0">
    <div class="search-group">
      <select>
        <option value="all">All</option>
        <option value="all">Breads Sweets</option>
        <option value="all">Chocolate</option>
        <option value="all">Cupcakes</option>
        <option value="all">Drinks</option>
      </select>
    <input type="text"/>
    <i class="material-icons search-icon">
      search
    </i>
      </div>
  </div>
        <h5>8 800 332 65-66</h5>
        
  
  <Link to="/My_account" class="  item">

    <div class="group">
      <i class="material-icons" >
        account_circle
      </i>
      <div class="detail">
        Account
        <div class="sub">Sign In</div>
      </div>
    </div>
  </Link>

  <Link to="/Cart" class="item">
    <div class="group">
      <i class="material-icons">
        shopping_cart
      </i>  
      <div class="detail">
        Cart 
        <div class="sub">Rs 0.0</div>
      </div>
    </div>
  </Link>
</nav>
    </>
  )
}

export default Navbar
