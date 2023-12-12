import React from 'react'

export default function Sirvice() {
  return (
    <div className=' rounded-b-3xl p-5 bg-gray-50 shadow-xl '>
      <center>
        <div className=' container  grid sm:grid-cols-4 gap-y-8 sm:gap-8 grid-cols-1'>
            <div className=''>
                <img src={require("./icon-delivery-removebg-preview.png")} className=' w-8 h-8 mb-2' alt="" />
                <div className=' text-xl font-sans'>EXPRESS DELIVERY.</div>
                <div className=' text-gray-500'>We’ll ship the order immediately after your purchase</div>
            </div>
            <div className=''>
            <img src={require("./icon-return.png")} className=' w-8 h-8 mb-2' alt="" />
                <div className=' text-xl font-sans'> FREE RETURNS</div>
                <div className=' text-gray-500'>All returns are free within 30 days of your order.</div>
            </div>
            <div className=''>
            <img src={require("./icon-support-removebg-preview.png")} className=' w-8 h-8 mb-2' alt="" />
                <div className=' text-xl font-sans'>HELPFUL SUPPORT</div>
                <div className=' text-gray-500'>Our support staff is ready 24/7 to answer any questions.</div>
            </div>
            <div className=''>
            <img src={require("./icon-card-removebg-preview.png")} className=' w-8 h-8 mb-2' alt="" />
                <div className=' text-xl font-sans'>SECURE PAYMENT</div>
                <div className=' text-gray-500'>All payments on our site are processed securely.</div>
            </div>
        </div>
      </center>
    </div>
  )
}
