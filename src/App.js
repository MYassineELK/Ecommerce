import React, { useState } from 'react'
import Nav from "./Home/furst/Nav"
import Aboutpage from './Aboute/Aboutpage'
import { Route, Routes } from 'react-router-dom'
import Pagehome from "./Home/Pagehome"
import Contact from './contact/Contact'
import News from './News/News'
import Shop from './Shop/Shop'
import Signin from './Signup/Signin'
import Signup from './Signup/Signup'
import Pagelike from './like/Pagelike'
import Cart from './Cart/Cart'
import Paye from './Paye/Paye'
import Prodoidit from './Prodois/Prodoidit'
import Loding from './Loading/Loding'
export default function App() {
  const [loding,setloding]=useState(false)
  setTimeout(()=>{
    setloding(true)
    console.log(loding)

  },8000
  )
  return (
    <div className=''>
      <Loding afich={loding?'hidden':'block'} />
   <div className={loding?'block transition ease-in-out duration-700 ':'hidden transition ease-in-out duration-700 '}>
   <Nav />
     
    
     <Routes>
      <Route path='/' element={ <Pagehome/>}/>
      <Route path='/Home' element={ <Pagehome/>}/>
      <Route path='/About' element={ <Aboutpage/>}/>
      <Route path='/Contact' element={ <Contact/>}/>
      <Route path='/Cart' element={ <Cart/>}/>
      <Route path='/Like' element={ <Pagelike/>}/>
      <Route path='/Shop' element={ <Shop/>}/>
      <Route path='/Signin' element={ <Signin/>}/>
      <Route path='/Signup' element={ <Signup/>}/>
      <Route path='/News' element={ <News/>}/>
      <Route path='/Checkout' element={ <Paye/>}/>
      <Route path='/Prodact/:id' element={ <Prodoidit/>}/>

     </Routes>
   </div>
    </div>
  )
}
