import React from 'react'
import Card8 from '../Cards/Card8'

export default function Page8() {
  let arr=[
    {
      image:"Rectangle 1955.png",
      children:"10 tips for avoiding scams and staying safe."
    },
    {
      image:"Rectangle 1956.png",
      children:"Keeping yourself safe when buying Nft’s on Opensea."
    },
    {
      image:"Rectangle 1957.png",
      children:"The beginner’s guide to creating & selling digital art Nft’s."
    },
  ];
  let arr1=[
    {
      img:"Ellipse 60.png"
    },
    {
      img:"Ellipse 59.png"
    },
    {
      img:"Ellipse 61.png"
    }
  ]
  return (
    <>
    <div className='relative mt-40'>
      <div className='relative w-1/2 h-1 bg-gray-300 left-1/4'>
      </div>
      <div className='mt-32 text-4xl font-semibold text-blue-800 font-serif text-center'>
        <h1>
          Resources for Getting Started
        </h1>
      </div>
      <div className='relative mt-6 m-auto w-fit lg:w-96
      n font-eina text-lg text-center'>
        <p>A play of light and shade, chairoscuro is the realm between the light and dark.</p>
      </div>
      <div className='flex items-center mt-24 mb-24 justify-evenly'>
        <div>
          <img src="Vector (2).png" alt="none" />
        </div>
        <div className='grid grid-rows-1 lg:grid-cols-3 w-fit gap-10'>
          {
            arr.map((data,i)=>{
            return <Card8 key={i} images={`${data.image}`}>{data.children}</Card8>
          })}
        </div>
        <div>
          <img src="Vector (3).png" alt="none" />
        </div>
      </div>
      <div className='flex gap-1 justify-center mb-12'>
        {arr1.map((data,i)=>{
        return <img key={i} src={data.img} alt="none" />})}
      </div>
      <div className="absolute top-44 -z-10">
        <img src="Ellipse 65.png" alt="none" />
      </div>
      <div className='absolute top-12 -z-10 right-24'>
        <img src="Ellipse 64.png" alt="none" />
      </div>
      <div className='absolute top-12 -z-20 opacity-40 right-24'>
        <img src="Group 2598 (5).svg" alt="none" />
      </div>
    </div>
    </>
  )
}
