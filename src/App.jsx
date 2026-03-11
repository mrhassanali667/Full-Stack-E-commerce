import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function NextButton() {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slideNext()} className=' absolute top-1/2 right-4 transform -translate-y-1/2 bg-red-400 text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500' >
      Next
    </button>
  );
}

function PreviousButton() {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slidePrev()} className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-red-400 text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500' >
      Previous

    </button>
  );
}

function App() {


  return (
    <>
      <div className='h-screen w-screen  font-sans'>
        <Navbar />
        <Swiper
          spaceBetween={50}
          slidesPerView={3  }
          loop={true}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide><div className='h-20  bg-gray-400 p-4'>Slide 1</div></SwiperSlide>
          <SwiperSlide><div className='h-20  bg-pink-400 p-4'>Slide 2</div></SwiperSlide>
          <SwiperSlide><div className='h-20  bg-blue-400 p-4'>Slide 3</div></SwiperSlide>
          <SwiperSlide><div className='h-20  bg-green-400 p-4'>Slide 4</div></SwiperSlide>
          <SwiperSlide><div className='h-20  bg-violet-400 p-4'>Slide 5</div></SwiperSlide>
        </Swiper>

        <PreviousButton />
        <NextButton />


      </div>

    </>
  )
}

export default App
