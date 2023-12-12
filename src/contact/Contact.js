import React from 'react'
import Footer from '../Home/footer/Footer'
import "./contact.css"
export default function Contact() {
  return (
    <div className=' bg-white'>
        <div className=' bg-black h-20'></div>
      <center>
        <div className=' mt-16 text-7xl font-serif'>Contact</div>
        <div className='w-11/12 sm:w-9/12 text-base mt-2 text-gray-600'>We value open communication with our customers and are here to assist you every step of the way. Feel free to reach out to us through our contact form or email, and our dedicated customer support team will promptly address any inquiries, concerns, or feedback you may have, ensuring that your experience with us is nothing short of exceptional. We look forward to hearing from you.</div>
      </center>
      <div className=' flex justify-center mt-9 '>
     <form className="forme shadow-2xl">
  <div>
  <table className=' w-full '>
        <tr>
            <td>
            <div className="flex-columne">
    <label>Name </label></div>
  <div className="inputForme">
    <input type="text" className="inpute" placeholder="Enter your Email" />
  </div>
            </td>
            <td className=' w-3'></td>
            <td>
            <div className="flex-columne">
    <label>Email </label></div>
  <div className="inputForme">
    <input type="text" className="inpute" placeholder="Enter your Email" />
  </div>
            </td>
        </tr>
    </table>
  </div>
  
  <div className="flex-columne">
    <label>Message </label></div>
  <div className="">
    <textarea  placeholder="Enter your Massage" className='textarea h-36 w-full' name="" id="" cols="" rows="10"></textarea>
  </div>
  <div className="flex-row">
    <button className="button-submit w-40">CONTACT US</button>
  </div></form>

      </div>
      <Footer/>
    </div>
  )
}
