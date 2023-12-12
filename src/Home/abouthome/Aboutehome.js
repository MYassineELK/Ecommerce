import React from 'react'
import "./Abouthome.css"
import Rotate from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

export default function Aboutehome() {
  return (
    <div>
      <div className='about'>
      <center>
      <div><br /><br /><br /><br /><br /><br /><br /><br /><br /></div>

<Rotate><div className=' space-y-3'><div className="text-white text-7xl font-serif">
            About Us</div>
            <div className=' w-3/5 text-white text-base '>Meet Yacine, a person with a passion for men's fashion and accessories. With his experience in e-commerce and impeccable sense of style, he decided to embark on an entrepreneurial journey and founded Luxe. </div>
<button className=' bg-transparent text-lg p-2   text-white w-44 border-2 border-white '>
<Link to="/About">Look at my story</Link>
</button>
</div> </Rotate>

         </center>
      </div>
    </div>
  )
}
