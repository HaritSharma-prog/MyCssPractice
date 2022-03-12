import React from 'react'

export default function Cards({children,heading,innertext}) {
    
  return (
    <>  
    
    <div className='col-span-1 bg-gradient p-0.5 rounded-md'>
      <div className="relative py-3 px-3 bg-white h-full rounded-md">
          <div className='flex flex-col gap-5 text-center'>
              <h1 className='mt-9 font-serif font-semibold text-2xl text-blue-600 '>{heading}</h1>
              <p className='m-auto px-7 leading-7'>{children}</p>
          </div>
      </div>
    </div>
    </>
  )
}
