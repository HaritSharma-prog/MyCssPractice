import React from 'react'
import Eth from '../lables/Eth'
import Startbatch from '../lables/Startbatch';
import { useState } from 'react';
export default function Imagecards({shadow,image,name}) {
  const [color, setcolor] = useState('white');
  return (
    <>
    <div className='flex relative'>
        <img src={shadow} alt="none" className='relative'/>
        <div className=' flex absolute '>
            <img src={image} alt="none"/>
            <div className='absolute right-8 top-4'>
                <Eth/>
            </div>
            <div className='absolute left-4 bottom-4'>
              <Startbatch name={name} textColor={color}/>
            </div>
        </div>
    </div>
    </>
  )
}
