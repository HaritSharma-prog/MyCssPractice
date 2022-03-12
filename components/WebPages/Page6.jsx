import React from 'react'
import Categories from '../Cards/Categories'
import Button from '../Button/Button';

export default function Page6() {
  let arr=[
    {
        image:"Rectangle 308.svg",
        title:"Art",
        pera:"Art is something that stimulates an individual’s thoughts"
    },
    {
        image:"Rectangle 308 (1).svg",
        title:"Music",
        pera:"Music is the art of arraning sounds elements of melody"
    },
    {
        image:"Rectangle 308 (2).svg",
        title:"Visual Worlds",
        pera:"Visuals are the picture elements , as distinguished"
    },
    {
        image:"Rectangle 308 (3).svg",
        title:"Trading Cards",
        pera:"A Trading card ( or collectible card ) is a small card."
    },
    {
        image:"Rectangle 309.svg",
        title:"Collectibles",
        pera:"An item worth far more than it was sold for rarity."
    },
    {
        image:"Rectangle 309 (1).svg",
        title:"Sports",
        pera:"Sport pertains to any form of competitive."
    },
    {
        image:"Rectangle 309 (2).svg",
        title:"Domain Name",
        pera:"Use Traditional Domains. The native name suffix."
    },
    {
        image:"Rectangle 309 (3).svg",
        title:"All Nft's",
        pera:"Music is the art of arranging sounds elements of melody"
    }
]
  return (
    <>
    <div className='flex flex-col relative gap-12'>
      <div>
        <div className='flex flex-col items-center gap-6'>
          <div>
            <h1 className='text-4xl font-medium font-serif text-blue-700'>Explore Categories</h1>
          </div>
          <div>
            <p className='font-eina font-light w-fit text-lg text-center'>A play of light and shade, chairoscuro is the realm between the light and dark.</p>
          </div>
        </div>
        <div className='absolute top-0'>
          <img src="Asset 152a (2).svg" alt="none"/>
        </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-5 gap-32 m-auto sm:md-36 xl:grid-cols-4 xl:gap-16'>
          { arr.map((data,i)=>{
            return <Categories key={i} image={data.image} title={data.title} pera={data.pera}/>
          })}
        </div>
        <div className='absolute top-56 right-0 -z-10 opacity-60'>
          <img src="Group 2598 (2).svg" alt="none"/>
        </div>
        <div className='flex justify-center'>
          <Button type="primary">Explore Marketplace</Button>
        </div>
        <div className='absolute'>
          <img src="Asset 152a (3).svg" alt="none" />
        </div>
    </div>
    </>
  )
}
