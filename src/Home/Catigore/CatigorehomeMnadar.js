import React from 'react'
import "./CatigoreMnadare.css"
import { Link } from 'react-router-dom'
export default function CatigorehomeMnadar() {
  return (
    <div className='mnadar'>
       <div className='  text-white w-11/12 space-y-1 '>
        <br /><br /><br /><br /> 
        <h2 className='flex  justify-end mr-3 titlee sm:mr-28 sm:text-8xl text-7xl   font-serif'>Elegant</h2>
        <h2 className='flex  justify-end mr-3 sm:mr-20 sm:text-8xl text-7xl  font-serif'> Eyewear.</h2>
        <span className='flex  justify-end -mr-7 sm:mr-24 text-lg titlee sm:text-xl'> Check out our collection of stylish shades.</span>
       <div className='flex  justify-end mr-7 sm:mr-40 '>
       <a className="playstore-button " href="#">
  <span className="texts">
    <span className="text-2  btnvuie  text-lg"><Link to="/Shop">VIEW SUNGLASSES</Link></span>
  </span>
</a>
       </div>
       </div>
    </div>
  )
}
