import React from 'react'

export default function Page3() {
  return (
    <>
        <div className="flex flex-col items-center gap-8 relative">
            <h1 className='font-serif text-3xl font-semibold  text-blue-800'>Trending in All Categories</h1>
            <div className='w-fit lg:w-96 text-center font-sans font-light'>
                <p>A play of light and shade,chairoscuro is the realm between the light and dark</p>
            </div>
        </div>
        <img src="Asset 202a.svg" alt="none"/>
        <div className='flex gap-5 font-eina justify-end'>
            <h2 className='text-blue-600 font-semibold'>Recently Added</h2>
            <div className='text-blue-600 font-semibold'>|</div>
            <h2 className='text-blue-400'>Mostlyused</h2>
        </div>
    </>
  )
}
