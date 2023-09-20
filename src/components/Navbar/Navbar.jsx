// eslint-disable-next-line no-unused-vars
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className='bg-[#FFB800] h-[5px] w-full border border-black'></div>
      <div className="bg-[#F40404] text-white py-7">
      <div className="max-w-container mx-auto">
        <div className='flex items-center'>
          <div className='w-1/4'>
              <picture>
                  <img src={"images/petroil-logo.png"} alt="Petroil Logo" />
              </picture>
          </div>
          <div className='w-3/4'>
              <div className='flex justify-end items-center gap-[72px]'>
                <div>
                  <ul className='flex gap-12'>
                      <li><a href="#" className='font-poppins text-base font-semibold uppercase'>Home</a></li>
                      <li><a href="#" className='font-poppins text-base font-semibold uppercase'>About</a></li>
                      <li><a href="#" className='font-poppins text-base font-semibold uppercase'>Services</a></li>
                      <li><a href="#" className='font-poppins text-base font-semibold uppercase'>Gallery</a></li>
                      <li><a href="#" className='font-poppins text-base font-semibold uppercase'>Blog</a></li>
                  </ul>
                </div>
                <div>
                  <div className='px-[32px] py-[14px] border-2 border-white cursor-pointer'>
                    <a href="#" className='font-poppins text-base font-semibold uppercase'>Contact</a>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar