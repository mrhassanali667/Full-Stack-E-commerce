import React from 'react'

const Navbar = () => {
  return (
    <header className='w-full bg-[#232f3f] '>
      <div className='w-full container py-2 flex  m-auto '>
        <div className='w-[50%] flex text-[#e0e0e0]'>
          <span className='text-[0.85em]  hover:text-orange-400'>Free Intenarional Shiping. No Minimum Purchase Required*</span>
        </div>
        <ul className='w-[50%] flex justify-end gap-6 list-none  text-[#e0e0e0] [&>li]:text-[0.85em] [&>li]:cursor-pointer [&>li]:hover:text-orange-400 [&>li]:transition-colors [&>li]:duration-300 '>
          <li>My Acount</li>
          <li>Wish List</li>
          <li>Check out</li>
          <li>Gift Certification</li>
          <li>USD</li>
        </ul>
      </div>
      <div className='w-full px-10 py-5 flex gap-5 justify-between  m-auto'>
        <div className='flex items-center gap-5 grow'>
          <div className='flex gap-2 items-center'>
            <h1 className='font-space font-bold text-[2.5em] text-white'>Multi</h1>
            <span className='bg-white font-space rounded text-center font-semibold text-[#ff7e00] text-[0.75em] px-[4px]'>MART</span>
          </div>
          <div className='flex max-h-[45px] w-full max-w-[500px]'>
            <input type="search" name="" id="" className='flex-1 bg-white px-5 py-2 outline-0 text-gray-800 rounded-l-full' />
            <button className='rounded-r-full px-5 text-white  bg-[#ff7e00]'>Search</button>
          </div>
        </div>
        <div className='max-w-[1000px] flex gap-8'>
          {/* User Account */}
          <div className='flex gap-2'>
            <div className='h-[45px] w-[45px] flex justify-center items-center rounded-full border-1 border-gray-400'>
              <svg
                className="w-7 h-7 text-[#ff7e00]"
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
          <div className='flex gap-2'>
            <div className='h-[45px] w-[45px] flex justify-center items-center rounded-full border-1 border-gray-400'>
              <svg
                className="w-7 h-7 text-[#ff7e00]"
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
      <div className='w-full flex px-6 m-auto'>
        <div className='text-white w-70 bg-[#ff7e00] text-[1.5em] py-2 px-10'>
          Category
        </div>
        <nav className='grow flex px-4 ml-7'>
          <ul className='flex items-center gap-7 text-white font-semibold [&>li]:text-[0.9em]'>
            <li>HOME</li>
            <li>PAGES</li>
            <li>BLOGES</li>
            <li>CONTACTS</li>
            <li>BUY THEME NOW</li>
            <li></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar