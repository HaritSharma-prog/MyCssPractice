import React from 'react'

export default function Startbatch({name,textColor}) {
  return (
    <>
    <div className='flex items-center gap-2'>
      <div>
        <p className={`text-${textColor} font-serif underline underline-offset-2`}>{name}</p>
        </div>
        <div className='flex item-center'>
          <img src="Vector.svg" alt="none"/>
          <img src="Vector (1).svg" alt="none" className='relative right-3.5'/>
        </div>
    </div>
    </>
  )
}
