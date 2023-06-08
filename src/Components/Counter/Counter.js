import React, { useState } from 'react'
import './Counter.css'
const Counter = () => {
  const[count,setCount]=useState(0);
  const inc=()=>{
    setCount(count+1);
  }
  const dec=()=>{
    if(count>0)
    setCount(count-1);
  }
  return (
    <div className="text-center">
      <button style={{ width: '30px' }} onClick={dec}> -  </button>
       {count}
      <button className=""style={{width:'30px'}}  onClick={inc} > + </button>
    </div>
  )
}
export default Counter