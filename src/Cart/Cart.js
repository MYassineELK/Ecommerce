import React, { useState } from 'react'
import {useDispatch,useSelector } from 'react-redux';
import { Addqontite,supqontite,Removecart} from '../Redux/Slice';

import "./Cart.css"
import { Link } from 'react-router-dom';
export default function Cart() {
    const shopp=useSelector(state=>state.shopp.shopp)
    const prodwi=shopp.filter((e)=>e.cart!==false)
    const dispatch=useDispatch();
   var c=0
   for (let i = 0; i < prodwi.length; i++) {
       c+=prodwi[i].prixint*prodwi[i].qountite
   }
  return (
    <div className=' '>
      <div className=' bg-black h-20 w-full'></div><br /><br />
      <div className=' text-6xl font-serif text-center'>Cart
      
           </div><br />
      <div className=' grid sm:grid-cols-2 container grid-cols-1 gap-4'>
       <div className=' space-y-4' >
       {prodwi.map((e,k)=><div className=' bg-white rounded-lg shadow-2xl' key={k}>
       <table>
        <tr>
            <td className=' h-52 sm:w-52'> <img src={e.img} className=' rounded-3xl sm:rounded-l-lg'  alt="" /></td>
            <td className=' w-6'></td>
            <td>
            
                <div className=' space-y-1 p-2'>
                    <p className=' text-lg font-serif text-amber-800'>{e.title}</p>
                    <p className=' text-gray-600'>{"$"+e.prixint*e.qountite+".00"}</p>
                    <div className=' text-gray-700'>{e.desc.slice(0,90)}</div>
                    <div className=' flex  mb-2'>
                        <button className=' bg-slate-200  w-8 ' onClick={()=>{dispatch(supqontite(e.id))}}>-</button>
                        <div className='text-lg border text-center w-8'> {e.qountite} </div>
                        <button className=' bg-slate-200  w-8 '  onClick={()=>{dispatch(Addqontite(e.id))}}>+</button>
                    </div>
    
<button className='flex space-x-1  w-28 p-2.5  rounded-md bg-red-500' onClick={()=>{dispatch(Removecart(e.id))}}> <div ><svg className='  text-white' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" width="23" height="23">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
</svg></div><div className=" text-red-50 mt-1 font-extralight">Remove</div> </button>
                </div>
            </td>
        </tr>
       </table>
       </div>)}


      
       </div>
       <div className=' bg-white rounded-lg shadow-lg h-36'  >
       <center>
       
            <div className=' text-2xl font-serif'>CART TOTALS</div>
       <div className='flex  justify-center space-x-28 sm:space-x-56'>
        <div className=' text-lg font-serif text-amber-800'>Total</div>
        <div></div>
        <div className='text-gray-600 text-base'>{"$"+c+".00"}</div>
       </div>
      
    <Link to="/Checkout">
    <button className="Btn bg-black mt-6 mb-5 hover:bg-white">
  Pay
  <svg className="svgIcon" viewBox="0 0 576 512"><path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z" /></svg>
</button></Link>
<br />
<br />
    </center>
</div>
      </div>
    </div>
  )
}