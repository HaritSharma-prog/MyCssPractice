import React from 'react'
import { useState } from 'react'
import Button from '../Button/Button'

export default function Page7() {
const [visibility, setvisibility] = useState("hidden");
const [image, setimage] = useState("Vector (8).svg")
    let clickhere=()=>{
        if((visibility==="hidden"))
        {
            setvisibility("block");
            setimage("Vector (8).svg");
        }
        else
        {
            setvisibility("hidden");
            setimage("Vector (9).svg");
        }
    }
  return (
    <>
    <div className='relative'>
        <div className='flex flex-col sm:flex-row items-center sm:items-start sm:justify-evenly mt-48 sm:mt-64 ml-7'>
            <div className='absolute -top-96 left-0 opacity-25'>
                <img src="Group 2598 (3).svg" alt="none"/>
            </div>
            <div className='flex flex-col gap-12'>
                <div className='w-96'>
                    <h1 className='text-3xl font-medium text-blue-900'>
                    We will try to help you if you are confused.
                    </h1>
                </div>
                <div className="w-80">
                    <p>
                    A fequently asked question (FAQ) forum is often used in articles, websites, email lists, and online forums where common questions tend to recur.
                    </p>
                </div>
            </div>
            <div className='absolute top-3'>
            <img src="Asset 152a (2).png" alt="none" />
            </div>
                <div className='flex flex-col gap-24 p-2'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex flex-col font-eina gap-2 cursor-pointer' onClick={clickhere}>
                        <div className='flex justify-between'>
                            <h3 className='text-blue-900 font-semibold text-xl '>How do I create an NFT?</h3>
                            <img src={`${image}`}
                             alt="none" />
                        </div>
                        <p className={`w-96 text ${visibility}`}>
                        From Opensea.io, go to your profile icon and click “Create” in the top right corner. You’ll be taken to the NFT item creation page. This page will allow you to upload your NFT file, name it and add a description.
                        </p>
                    </div>
                    <div className='flex text-blue-900 font-semibold text-xl justify-between' >
                        <p>How do i create and sell NFTs on Polygon?</p>
                        <img src="Vector (9).svg"
                        alt="none" />
                    </div>
                    <div className='text-blue-900 font-semibold text-xl flex justify-between'>
                        <p>What is Freezing Metadata</p>
                        <img src="Vector (9).svg"
                        alt="none" />
                    </div>
                    <div className='text-blue-900 font-semibold text-xl flex justify-between'>
                        <p>Does Opensea allow physical item trades?</p>
                        <img src="Vector (9).svg"
                        alt="none" />
                    </div>
                    <div className='text-blue-900 font-semibold justify-between text-xl flex'>
                        <p>How do i add a collection collaboration?</p>
                        <img src="Vector (9).svg"
                        alt="none" />
                    </div>
                </div>
                <div>
                    <Button type="primary">View All</Button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
