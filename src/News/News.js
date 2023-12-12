import React from 'react'
import { NEWS } from './Newsdata'
import Footer from '../Home/footer/Footer'
import { Reveal } from 'react-awesome-reveal'
export default function News() {
  return (
    <div>
       <div className=' bg-black h-20'></div>
       <br /> <br /><br />
       <center>
        <div className=' text-7xl font-serif'>News</div>
        <div className=' sm:text-base text-sm w-11/12   text-yellow-600'>ACCESSORIES <span className=' text-lg text-black'>|</span> BLOG <span className=' text-lg text-black'>|</span> BRACELETS <span className=' text-lg text-black'>|</span> SUNGLASSES <span className=' text-lg text-black'>|</span> WATCHES</div><br /><br />
       <div className=' grid grid-cols-1 sm:grid-cols-3 gap-x-5 gap-y-7 sm:gap-y-10 container'>
        {NEWS.map((e,k)=><div key={k}>
          <Reveal effect="fadeInUp"><div  className=' rounded-xl shadow-2xl'>
            <img className=' rounded-t-xl' src={e.img} alt="" />
            <div className=' grid grid-cols-2 gap-x-44 mt-2'>
                <div className=' text-gray-600'>{e.time}</div>
                <div className=' text-yellow-600'>{e.catigore}</div>
            </div>
           <div className=' w-10/12'>
           <div className=' text-3xl font-serif'>{e.title}</div>
            <div className=' text-sm mt-2 text-gray-700 '>{e.text}</div><br />
           </div>

        </div></Reveal>
        </div>)}
       </div><br />
       </center>


       <Footer/>
    </div>
  )
}
