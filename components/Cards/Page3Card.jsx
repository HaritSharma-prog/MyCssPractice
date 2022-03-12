import React from 'react'
import Startbatch from '../lables/Startbatch'

export default function Page3Card({bgimage,circleimg,name}) {
  return (
    <>
    <div className='relative mb-60'>
        <div>
            <img src={`${bgimage}`} alt="none" />
        </div>
        <div className="absolute bg-white -bottom-12 rounded-b-3xl">
            <div className="flex flex-col items-center gap-8 m-9 relative ">
                <div className='absolute -top-20'>
                <img src={`${circleimg}`} alt="none"/>
                </div>
                <div className='flex justify-center gap-3 mt-7'>
                    <h1 className='text-2xl font-serif text-blue-700 '>{`${name}`}</h1>
                    <Startbatch/>
                </div>
                <div className='w-fit text-center'>
                    <p className='font-eina text-lg font-extralight'>A play of light and shade, chairoscuro is the realm.</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

