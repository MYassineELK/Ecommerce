import React from 'react'

export default function Brand() {
  return (
    <div>
       <div className=' mt-14 bg-black sm:p-8 p-4  sm:h-72 h-48  rounded-t-3xl '>
        <center>        <div className=' sm:text-6xl text-3xl font-serif text-white '>Brand names</div>
</center>
        <div className=' grid sm:grid-cols-5 sm:-mt-0 -mt-1 grid-cols-3 '>
          <img src={require("./4bc42e58df65d08056ad28d7eef6cd6d-removebg-preview.png")} className=' sm:w-48 w-32 sm:mt-0 mt-2 sm:h-48 ' alt="" />
          <img src={require("./5d31dd276ec496a1f32c9e2ccec8990d-removebg-preview.png")} className=' sm:w-48 w-28 sm:h-60 sm:block hidden h-32 -mt-4' alt="" />
          <img src={require("./7058ae29db2988922758b616bf007c51-removebg-preview.png")} className=' sm:w-48 w-28 sm:h-48 sm:block hidden h-28' alt="" />
          <img src={require("./c-removebg-preview.png")} className=' sm:w-48 h-28 sm:h-48 w-28' alt="" />
          <img src={require("./fb-removebg-preview.png")} className=' sm:w-60 sm:h-48 w-44 h-28 sm:mt-0 mt-2' alt="" />
        </div>
        </div> 
      
    </div>
  )
}
