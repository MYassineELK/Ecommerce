import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Rotate from 'react-awesome-reveal';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Ensure autoplay styles are imported

import './styles.css'; // Your custom styles will be here

import { Autoplay,Pagination } from 'swiper/modules';
import { Datascroollp } from './Datascroollp'; // Your data source

export default function App() {
  return (
    <>
       <Rotate >
       <Swiper
      
        // Add breakpoints for responsive behavior
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 4,
            spaceBetween: 30
          },
        }}
        centeredSlides={true}
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]} // Add Autoplay to the modules array
        className="mySwiper"
      >
        {Datascroollp.map((item, index) => (
        
            <SwiperSlide  key={index}>
                        
                        <img src={item.img} alt={`Slide ${index}`} />
                        
                      
          </SwiperSlide>
  
          
        ))}
      </Swiper>
       </Rotate>
    </>
  );
}