import React from 'react'
import Cards from "../Cards/Cards"

export default function Page2() {
  const CardData = [
    {
      title: "Set up your wallet",
      description: (
        <>
          Once you’ve set up your wallet of choice, connect it to OpenSea.Learn
          about the <span className="text-blue-500">wallets we support.</span>
        </>
      ),
    },
    {
      title: "Create your collection",
      description: (
        <>
          Click <span className="text-blue-500">My Collections</span> and set up
          your collection. Add social links, a description, profile & banner
          images, and set a secondary.
        </>
      ),
    },
    {
      title: "Add your NFT's",
      description: (
        <>
          Upload your work (image, video, audio, or 3D art), add a title and
          description, and customize your NFTs stats, and unlockable content.
        </>
      ),
    },
    {
      title: "List them for sale",
      description: (
        <>
          Choose between auctions, fixed-price listings, and declining-price
          listings. You choose how you want to sell your NFTs.
        </>
      ),
    },
  ];
  return (
    <>
      <div className="relative w-screen bg bg1_gradient">
        <img src="Asset 202a.png" alt="none" className="absolute top-32 right-0"/>
        <img src="Asset 152a.png" alt="none" className='absolute top-40'/>
        <img src="Mask Group (1).svg" alt="none" className='bg-color-green absolute top-14  right-0 opacity-80 -z-50'/>
        <img src="Mask Group (2).svg" alt="none" className='absolute top-40 -z-50'/>
        <div className='relative w-90 mx-auto rounded-3xl  -top-36 bg2_gradient border-2 border-white'>
          <div className='flex flex-col items-center gap-9 text-lg relative font-serif pt-48 px-8 pb-6'>
            <h2 className='relative  text-blue-50 md:text-blue-900 
             text-2xl sm:text-4xl'>{"Create & Sell Your NFT's"}</h2>
            <div className='w-auto  text-center sm:max-w-sm   '>
            <p className='font-eina px-2 text-white sm:text-black'>A play of light and shade,chairoscuro is the realm between the light and dark.</p>
            </div>
             <div className="w-full mt-16">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mx-auto w-fit max-w-7xl">
                  {CardData.map((card,i) => {
                    return <Cards key={card.title} heading={card.title} innertext="">
                    {card.description}
                    </Cards>
                  })}
                </div>
            </div>
            <div className="relative  -top-96 opacity-30 left-16 sm:hidden lg:block lg:left-96 sm:opacity-100 sm:top-0">
              <img src="Asset 202a (1).png" alt="none" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
