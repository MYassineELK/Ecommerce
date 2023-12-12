import React from 'react'
import "./Otrecat.css"
import { Link } from 'react-router-dom'
export default function Otrecatigore() {
  return (
    <div className=' bg-white'>
      <center>
        <br />
        <br />
      <div className=' grid sm:grid-cols-2 grid-cols-1 w-full sm:w-11/12 sm:space-y-0 space-y-3 sm:space-x-4'>
        <div className='w-full h-72  ctg1'>
         <center>
          <div className="text-white textcat1 text-4xl mb-3">
SUNGLASSES</div>
<button className=' bg-transparent text-lg p-2   text-white  border-2 border-white '>
 <Link to="/Shop">VIEW COLLECTION</Link>
</button>
         </center>
        </div>

        <div className='w-full h-72 space-y-3'>

          <div className="w-full bg-white h-36 ctg2">
          <center><br /><br /><br /><br /><br /><br /><br /><div className=' hidden sm:block'><br /><br /><br /><br /></div>
        <div className="text-white text-4xl mb-3">

          WATCHES</div>
<button className=' bg-transparent text-lg p-2   text-white  border-2 border-white '>
 <Link to="/Shop">VIEW COLLECTION</Link>
</button>
         </center>
          </div>
          <div className="w-full bg-white h-36 ctg3">
          <center><br /><br /><br /><br /><br /><br /><br /><div className=' hidden sm:block'><br /><br /><br /><br /></div>
          <div className="text-white textcat2 text-4xl mb-3">
          BRACELETS</div>
<button className=' bg-transparent text-lg p-2   text-white  border-2 border-white '>
<Link to="/Shop">VIEW COLLECTION</Link>
</button>
         </center>
          </div>
        </div>
      </div>
      </center>
    </div>
  )
}
