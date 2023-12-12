import React from 'react'
import { useParams } from 'react-router-dom'
import {useDispatch,useSelector } from 'react-redux';
import {cart,Addqontite,supqontite } from '../Redux/Slice';

export default function Prodoidit() {
    const {id}=useParams()
    const shopp=useSelector(state=>state.shopp.shopp)
    const prodwi=shopp.filter((e)=>e.id==id)
    const dispatch=useDispatch();

  return (
    <div className=' '>
       <div className=' bg-black h-20 w-full '></div><br /><br />
       {prodwi.map((e,k)=><div className=' sm:w-9/12 w-full container sm:h-96 bg-white rounded-lg shadow-2xl' key={k}>
     
       <div>
       <div className=' grid grid-cols-1 sm:grid-cols-2 '>
       <div className='sm:w-96 sm:-mt-4 sm:h-96' > <img src={e.img} className='sm:-ml-3   mt-3 rounded-3xl sm:rounded-l-lg'  alt="" /></div>

                <div className=' space-y-1 p-3  sm:-ml-10  sm:mt-8'>
                    <div className='flex sm:space-x-80 mt-28 space-x-36 sm:mt-5'>
                      
                    <p className='-mt-14 w-32 text-lg font-serif  text-amber-800'>{e.catigore}</p>
                    <p className='-mt-14 text-gray-600'>{"$"+e.prixint*e.qountite+".00"}</p>
                    </div>
                    <p className=' text-xl font-serif '>{e.title}</p>
                     <div className=' w-10/12 text-gray-700'>{e.desc}</div><br />
              <center>
              <div className=' flex space-x-6'>
               <div className=' flex  mb-2 rounded-xl'>
                        <button className=' bg-slate-200 p-2 w-10 ' onClick={()=>{dispatch(supqontite(e.id))}}>-</button>
                        <div className='text-lg border p-2 text-center w-10'> {e.qountite} </div>
                        <button className=' bg-slate-200 p-2 w-10 '  onClick={()=>{dispatch(Addqontite(e.id))}}>+</button>
                    </div>
    
               <button className="button w-7/12 p-2" onClick={()=>{dispatch(cart(e.id))}}>
   ADD TO CART
   <svg className="cartIcon ml-2 " viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" /></svg>
 </button>
 
               </div>
               <br />
               <div className='ml-8 space-y-4' >
              <div className='sm:w-96 bg-black h-1 -ml-8 sm:-ml-24'></div>
              <p className=' flex justify-start -ml-8    text-amber-800'><span className=' text-gray-600 '> Catigore :</span>{e.catigore}</p>

              </div>
              </center>
                </div>
            
                

            

            </div>
       </div>
       </div>)}
    </div>
  )
}
