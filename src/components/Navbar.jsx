import React from 'react'

const Navbar = () => {
  return (
    <header className='w-full bg-[#232f3f] '>
      <div className='w-full max-lg:hidden container py-2 px-5 flex justify-between  m-auto '>
        <div className=' flex text-[#e0e0e0]'>
          <span className='max-lg:hidden text-[0.85em]  hover:text-orange-400'>Free Intenarional Shiping. No Minimum Purchase Required*</span>
        </div>
        <ul className=' flex justify-end gap-6 list-none text-[#e0e0e0] [&>li]:text-[0.85em] [&>li]:cursor-pointer [&>li]:hover:text-orange-400 [&>li]:transition-colors [&>li]:duration-300 '>
          <li>My Acount</li>
          <li>Wish List</li>
          <li>Check out</li>
          <li>Gift Certification</li>
          <li>USD</li>
        </ul>
      </div>
      <div className='w-full px-3 sm:px-5 py-5 flex gap-5 justify-center lg:justify-between  m-auto'>
        <div className='flex max-lg:justify-between max-lg:container items-center gap-10 grow'>
          <div className='bg-gray-700 lg:hidden'>
            <svg
              className="w-8 h-8 text-gray-300 self-end"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth={2}
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </div>
          <div className='flex gap-2 items-center'>
            <h1 className='font-space font-bold text-[2.5em] text-white'>Multi</h1>
            <span className='bg-white font-space rounded text-center font-semibold text-[#ff7e00] text-[0.75em] px-[4px]'>MART</span>
          </div>
          <div className='flex max-lg:hidden h-full  max-h-[45px] w-full max-w-[700px]'>
            <input type="search" placeholder='Search for anything…' className='h-full flex-1 bg-white text-[0.9em] px-8 py-2 outline-0 text-gray-800 rounded-l-full' />
            <button className='h-auto font-semibold rounded-r-full px-10 text-white  bg-[#ff7e00]'>SEARCH</button>
          </div>
          <div className='lg:hidden'>
            <svg
              className="w-8 h-8 text-gray-300 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M4 4a1 1 0 0 1 1-1h1.5a1 1 0 0 1 .979.796L7.939 6H19a1 1 0 0 1 .979 1.204l-1.25 6a1 1 0 0 1-.979.796H9.605l.208 1H17a3 3 0 1 1-2.83 2h-2.34a3 3 0 1 1-4.009-1.76L5.686 5H5a1 1 0 0 1-1-1Z"
                clipRule="evenodd"
              />
            </svg>
          </div>

        </div>
        <div className='max-w-[1000px] max-lg:hidden flex gap-8'>
          {/* User Account */}
          <div className='flex group gap-2 hover:cursor-pointer'>
            <div className='h-[45px] w-[45px] flex justify-center items-center rounded-full border-1 border-gray-400 group-hover:bg-[#ff7e00] transition-colors duration-300'>
              <svg
                className="w-7 h-7 text-[#ff7e00] group-hover:text-white transition-colors duration-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className='flex flex-col'>
              <h2 className='text-white text-[0.9em] font-semibold'>Welcome Back</h2>
              <span className='text-gray-400 text-[0.9em]'>User Name</span>
            </div>
          </div>
          <div className='flex group gap-2 hover:cursor-pointer'>
            <div className='h-[45px] w-[45px] group-hover:bg-[#ff7e00] flex justify-center items-center rounded-full border-1 border-gray-400 transition-colors duration-500'>
              <svg
                className="w-7 h-7 text-[#ff7e00] group-hover:text-white transition-colors duration-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M4 4a1 1 0 0 1 1-1h1.5a1 1 0 0 1 .979.796L7.939 6H19a1 1 0 0 1 .979 1.204l-1.25 6a1 1 0 0 1-.979.796H9.605l.208 1H17a3 3 0 1 1-2.83 2h-2.34a3 3 0 1 1-4.009-1.76L5.686 5H5a1 1 0 0 1-1-1Z"
                  clipRule="evenodd"
                />
              </svg>

            </div>
            <div className='flex flex-col'>
              <h2 className='text-white text-[0.9em] font-semibold'>My Cart</h2>
              <span className='text-gray-400 text-[0.9em]'>6 items - $6876</span>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full max-lg:hidden flex px-10 m-auto'>
        <div className='text-white w-55 flex items-center justify-between bg-[#ff7e00] font-semibold text-[1.1em] py-3 px-7'>
          <span>CATEGORIES</span>
          <svg
            className="w-8 h-8 text-white self-end"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth={2}
              d="M5 7h14M5 12h14M5 17h14"
            />
          </svg>

        </div>
        <nav className='grow flex px-4 ml-7'>
          <ul className='flex items-center gap-7 text-white font-semibold [&>li]:text-[0.9em] [&>li]:cursor-pointer [&>li]:hover:text-[#ff7e00] [&>li]:transition-colors [&>li]:duration-300'>
            <li>HOME</li>
            <li>PAGES</li>
            <li>BLOGES</li>
            <li>CONTACTS</li>
            <li>BUY THEME NOW</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar