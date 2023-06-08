import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About/About';
import Contact_us from './Pages/Contact/Contact_us';
import My_account from './Pages/Account/My_account'
import Flash_sale from './Pages/FlashSale/Flash_sale';
import Fruits from './Pages/Fruits/Fruits';
import Meat from './Pages/Meat/Meat';
import Milk from './Pages/Milk/Milk';
import Vegetables from './Pages/Vegetable/Vegetables';
import Buitoni from './Pages/Buitoni/Buitoni';
import Demos from './Pages/Demos/Demos';
import Cart from './Pages/Cart/Cart';
import Shop from './Pages/Shop/Shop'
import Butter_Cream from './Pages/Butter Cream/Butter_Cream';
import Freshly from './Pages/Freshly/Freshly';
import Hot_Pockets from './Pages/Hot Pockets/Hot_Pockets'
import Checkout from './Pages/Checkout/Checkout';
import Add_To_Cart from './Pages/Add to Cart/Add_To_Cart';
import Breads_Sweets from './Pages/Breads Sweets/Breads_Sweets';
import Coffees_and_Teas from './Pages/Coffees and teas/Coffees_and_Teas';
import Seafoods from './Pages/Seafoods/Seafoods'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/About' element={<About />} />
          <Route exact path='/Contact_us' element={<Contact_us />} />
          <Route exact path='/My_account' element={<My_account />} />
          <Route exact path='/Flash_sale' element={<Flash_sale />} />
          <Route exact path='/Fruits' element={<Fruits />} />
          <Route exact path='/Meat' element={<Meat />} />
          <Route exact path='/Milk' element={<Milk />} />
          <Route exact path='/Vegetables' element={<Vegetables />} />
          <Route exact path='/Buitoni' element={<Buitoni />} />
          <Route exact path='/Demos' element={<Demos />} />
          <Route exact path='/Cart' element={<Cart />} />
          <Route exact path='/Shop' element={<Shop />} />
          <Route exact path='/Butter_Cream' element={<Butter_Cream />} />
          <Route exact path='/Freshly' element={<Freshly />} />
          <Route exact path='/Hot_Pockets' element={<Hot_Pockets />} />
          <Route exact path='/Checkout' element={<Checkout />} />
          <Route exact path='/Add_To_Cart' element={<Add_To_Cart />} />
          <Route exact path='/Breads_Sweets' element={<Breads_Sweets />} />
          <Route exact path='/Coffees_and_Teas' element={<Coffees_and_Teas />} />
           <Route exact path='/Seafoods' element={<Seafoods />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
