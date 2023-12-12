import React from 'react'

import Furstpage from './furst/Furstpage'
import Scroll from './scroll/Scroll'
import Scrollp from './scrollprodact/Scrollp'
import CatigorehomeMnadar from './Catigore/CatigorehomeMnadar'
import Facilbitwin from './Catigore/Facilbitwin'
import Otrecatigore from './Catigore/Otrecatigore'
import Shop from './shop/Shop'
import Raey from './Raéy/Raéy'
import Brand from './brand/Brand'
import Aboutehome from './abouthome/Aboutehome'
import Sirvice from './abouthome/Sirvice'
import Footer from './footer/Footer'
export default function Pagehome() {
  return (
    <div>
    
       <Furstpage/>
      <Scrollp/>
      <Scroll/> 
      <CatigorehomeMnadar/>
      <Facilbitwin/>
      <Otrecatigore/>
     <div className='sm:hidden -mt-4'>
     <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
     </div>
      <Scroll/> 
      <Shop/>
      <Brand/>
      <Aboutehome/>
      <Sirvice/>
      <Raey/>
      <Footer/>
     
     
    </div>
  )
}
