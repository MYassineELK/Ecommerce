import React from 'react'
import "./Loding.css"
export default function Loding(props) {
  return (
    <div className={`${props.afich} bagr transition ease-in-out duration-700   bg-black w-full h-full`}>
<center>
<div className='mt-64 '>
<div className="spinnerContainer">
  <div className="spinner" />
  <div className="loader">
  <h1 className=' text-base w-full -mt-8'>Welcome to my luxe store</h1>  
  </div>
</div>

</div>

</center>

    </div>
  )
}
