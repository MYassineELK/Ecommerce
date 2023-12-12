import React from 'react'
import "./Facile.css"
import Rotate from 'react-awesome-reveal';

export default function Facilbitwin() {
  return (
    <div className=' bg-white'>
        <Rotate>
        <br /><br /><br />
      <center>
        <img src={require('./watch-icon.png')} className=' w-32 h-32' alt="" /> <br />
        <div className=' text-8xl facil'>Stylish. Functional.</div>
        <div className=' text-8xl facil'> Quality.</div><br />
        <div className=' facil2 text-xl'>Our goal is to provide products that stand the test of time.</div>
      </center> </Rotate>
    </div>
  )
}
