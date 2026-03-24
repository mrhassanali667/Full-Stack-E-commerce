import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



function App() {

  const [swiper, setSwiper] = useState(null);


  return (
    <>
      <div className='h-screen w-screen overflow-y-auto  font-sans'>
        <Navbar />
        <div className=''>
          <Swiper
            modules={[ Pagination]}
            pagination={{ clickable: true }}
            // autoplay={{ delay: 3000, disableOnInteraction: false }}
            allowTouchMove={false}  
            speed={900}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => setSwiper(swiper)}
          >
            <SwiperSlide><div className='h-130  bg-[url(./carousel-1.jpg)] bg-cover bg-center bg-no-repeat' >Slide 1</div></SwiperSlide>
            <SwiperSlide><div className='h-130  bg-[url(./carousel-2.jpg)] bg-cover bg-center bg-no-repeat' >Slide 2</div></SwiperSlide>
            <SwiperSlide><div className='h-130  bg-[url(./carousel-3.jpg)] bg-cover bg-center bg-no-repeat' >Slide 3</div></SwiperSlide>
            <SwiperSlide><div className='h-130  bg-[url(./carousel-4.jpg)] bg-cover bg-center bg-no-repeat' >Slide 4</div></SwiperSlide>
          </Swiper>
        </div>

        <button onClick={() => swiper.slidePrev()} className=' m-10  bg-red-400 text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500' >
          Previous
        </button>

        <button onClick={() => swiper.slideNext()} className=' bg-red-400 text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500' >
          Next
        </button>
      </div>

    </>
  )
}

export default App
