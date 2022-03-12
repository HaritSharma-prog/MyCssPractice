import React from 'react'

export default function Card8({images,children}) {
  return (
    <>
    <div className='flex flex-col xl:flex-row bg-white gap-2 lg:gap-7 w-fit items-center'>
        <div>
            <img src={images} alt="none"/>
        </div>
        <div className='p-8 pr-0'>
        <div  className='w-56 p-auto text-xl font-eina text-blue-800 font-semibold'>
            <p>{children}</p>
        </div>
        </div>
    </div>
    </>
  )
}
