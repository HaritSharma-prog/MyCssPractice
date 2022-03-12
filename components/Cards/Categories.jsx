import React from 'react'

export default function Categories({image,title,pera}) {
  return (
    <>
    <div className='flex gap-5 items-center '>
        <img src={`${image}`} alt="none"/>
        <div className='flex flex-col gap-3'>
            <h2 className='text-blue-900 font-medium text-2xl font-serif'>{`${title}`}</h2>
            <div className='w-40'>
                <p className='font-eina'>{`${pera}`}</p>
            </div>
        </div>
    </div>
    </>
  )
}
