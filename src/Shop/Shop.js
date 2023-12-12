import React, { useState } from 'react'
import Rotate from 'react-awesome-reveal';
import Footer from '../Home/footer/Footer';
import "./shop.css"
import { useDispatch, useSelector } from 'react-redux';
import { like,cart} from '../Redux/Slice';
import { Link } from 'react-router-dom';

export default function Shop() {
  const dispatch=useDispatch();
  const shopp=useSelector(state=>state.shopp.shopp)
 const [prodwoi,setprodwi]=useState(shopp)
 const [shrch,setshrch]=useState("")
  const [catigore,setcatigore]=useState(false)
  const afhichwh=()=>{
   setprodwi(shopp.filter((e)=>e.catigore==="WATCH"));
  }
  const SUNGLASSES=()=>{
    setprodwi(shopp.filter((e)=>e.catigore==="SUNGLASSES"));
  }
  const afhichb=()=>{
    setprodwi(shopp.filter((e)=>e.catigore==="BRACELET"));
  }
  const sorshe=()=>{
    if (sorshe==" ") {
      setprodwi(shopp);
    }else{
      setprodwi(shopp.filter((e)=>(e.title===shrch ||e.catigore===shrch)));
    }
  }
  const afhichto=()=>{
    setprodwi(shopp);
  }
  return (
    <div><div className=' bg-black h-20'></div><br /><br /><br />
  <div className=' container  ' style={{position:"absolute",zIndex:"1"}}>
  <div className='flex justify-end w-full space-x-10  '>
    
<div className='sm:w-6/12 w-8/12'>
<div className="searchbar ">
  <div className="searchbar-wrapper">
    <div className="searchbar-left">
      <div className="search-icon-wrapper">
       <button onClick={()=>sorshe()}>
       <span className="search-icon searchbar-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
            </path>
          </svg>
        </span>
       </button>
      </div>
    </div>
    <div className="searchbar-center">
      <div className="searchbar-input-spacer" />
      <input type="text" className="searchbar-input" onChange={(e)=>setshrch(e.target.value)} maxLength={2048} name="q" autoCapitalize="off" autoComplete="off" title="Search" role="combobox" placeholder="Search " />
    </div>
    <br />
  </div>
</div><br />


</div>

   <div className=' flex-col '>
    <button className='mt-1' onClick={()=>setcatigore(!catigore)}>
        <img  src={require("./setting.png")} alt="" />
    </button>
    <div className={catigore?"block":"hidden"} >
    <div className=' flex  flex-col bg-white  rounded-lg p-3 space-y-1 -ml-28 mt-1'> 
    <Link onClick={()=>afhichto()}>All</Link>
      <Link onClick={()=>SUNGLASSES()}>SUNGLASSES</Link>
      <Link onClick={()=>afhichb()}>BRACELET</Link>
      <Link onClick={()=>afhichwh()}>WATCH</Link>
    </div>
    </div>
    </div>
   </div>
  </div><br />
    <br />

         <div className=' flex justify-center'>
     <div className='  mt-5 grid sm:grid-cols-5 grid-cols-1 gap-y-10 sm:gap-x-5'>
     
     {
         prodwoi.map((e,k)=><div key={k}><Rotate  > <div  className=' w-80 sm:w-60 carde shadow-lg rounded-lg'>
         
      
       <center className=' space-y-4'>
        <div className=' -mb-14 flex justify-end w-56'>
            
        <label className="containereee ">
  <input type="checkbox" onClick={()=>{dispatch(like(e.id))}}/>
  <svg id="Layer_1" version={1.0} viewBox="0 0 24 24" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M16.4,4C14.6,4,13,4.9,12,6.3C11,4.9,9.4,4,7.6,4C4.5,4,2,6.5,2,9.6C2,14,12,22,12,22s10-8,10-12.4C22,6.5,19.5,4,16.4,4z" /></svg>
</label>
        </div>
        <Link to={`/Prodact/${e.id}`}>   <img src={e.img} className=' rounded-lg'  alt=""/>   </Link>
       

         <br />
          <div className='text-lg'>{e.title}</div>
          <div className=' text-base text-gray-500'>{e.prix}</div>
     <button className="button w-10/12 p-2" onClick={()=>{dispatch(cart(e.id))}}>
   ADD TO CART
   <svg className="cartIcon ml-2 " viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" /></svg>
 </button>
 
         </center>
    
              </div> </Rotate></div>)
     }
      
      
     </div>
   </div><br />

   <Footer/>
    </div>
  )
}
