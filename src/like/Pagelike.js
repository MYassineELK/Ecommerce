import React from 'react'
import {useSelector } from 'react-redux';

export default function Pagelike() {
    const shopp=useSelector(state=>state.shopp.shopp)
    const prodwi=shopp.filter((e)=>e.like!==false)
  return (
    <div>
      <div className=' bg-black h-20 w-full'></div>
      <div>
       {prodwi.map((e)=><div>{e.prix}</div>)}
      </div>
    </div>
  )
}
