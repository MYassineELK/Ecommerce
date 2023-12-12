import React from 'react'
import Navbare from './Navbare'
import "./Furstpage.css"
import Rotate from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
export default function Furstpage() {
  return (
    <div className=' '>
        
        <div className='w-full h-64 bag'  style={{backgroundSize:"cover",backgroundRepeat:"no-repeat",height:"663px"}}>
        
      <nav>
      <br /><br />
      <Rotate >
      <h1 className=' mt-32 text text-white text-6xl sm:text-8xl container'>
      Fashion & Luxe
      </h1>
      </Rotate>
      <Rotate >
      <h3 className=' text2 sm:text-lg text-base w-9/12   sm:w-4/12 sm:ml-16 ml-7 -mt-10 text-white'>
      An accessories store with an aura of elegance and luxury to that make you 
      stand out wherever you are, dear user.
      </h3>  </Rotate >
      
      <button className="playstore-button" href="#">
  <span className="texts">
  <Link to="/Shop"><span className="text-2 font-mono">SHOP PRODUCTS</span></Link>
  </span>
</button>
  </nav>
    </div>
    </div>
  )
}
