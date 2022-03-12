import React from "react";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <>
      <div className="overflow-hidden w-full">
        <div className="min-h-screen overflow-clip relative w-screen">
          <img
            src="./image 64.png"
            className="absolute top-0 -z-20 w-full h-full object-cover"
            alt="none"
          />
          <img
            src="./Noise hero.png"
            alt="none"
            className="absolute -z-10 top-0 h-full w-full object-cover"
          />
          <div className="w-full absolute h-full hero-gradient-dark -z-5"></div>
          <div className="relative w-full md:w-1/2 xl:w-45pc min-h-screen top-0 left-panel text-white z-0">
            <img src="/topleft.svg" className="absolute top-0 left-0 w-full " />
            <div className="py-8 px-8 lg:px-16 h-full">
              <div className="flex justify-between w-screen">
                <div className="flex items-center gap-2 ">
                  <img src="./image 73.png" alt="none" className="logo" />
                  <p className="font-serif font-bold text-xl">OpenSea</p>
                </div>
                <div className="flex relative right-24  lg:right-52 gap-14 items-center">
              <div className="searchbox w-52 h-9"
              >
                <div className="hidden sm:block">
                  <input
                    type="search"
                    name="search"
                    id="search"
                    placeholder="Search"
                    className="relative pl-10 h-9 w-52 searchColor text-white outline-none "
                  />
                  <img
                    src="Vector (1).png"
                    alt="none"
                    className="relative bottom-7 left-2 -opacity-80 pointer-events-none"
                  />
                </div>
              </div>
              <img
                src="Vector.png"
                alt="none"
                className="h-8 decoration-white hidden lg:block"
              />
              <div>
                <div className="flex flex-col gap-1">
                  <div className="w-7 h-1 bg-white"></div>
                  <div className="w-7 h-1 bg-white"></div>
                  <div className="w-7 h-1 bg-white"></div>
                </div>
              </div>
            </div>
              </div>
              <h1 className="font-serif lg:text text-5xl 2xl:text-8xl pt-20 flex flex-col gap-3">
                <div>Discover.</div>
                <div>Collect. & Sell.</div> <div>Extraordinary</div>
                <div className="text-color relative">
                  <span>{"NFT's"}</span>
                  <img
                    src="Ellipse 48.svg"
                    alt="none"
                    className="w-44 -top-3 -left-5 absolute lg:w-80 lg:-top-4 lg:-left-9"
                  />
                </div>
              </h1>
              <div className="text-xl max-w-xs mt-7">
                {"On the world's first & largest NFT marketplace."}
              </div>
              <div className="flex gap-4 font-serif text-xs mt-28 relative right-5 sm:right-0">
                <Button type="primary">Explore</Button>
                <Button type="secondary">Create</Button>
              </div>
              <div className="relative">
                <p className="underline opacity-60 mt-24 pb-56 md:pb-80 underline-offset-1">
                  Get Featured On The Homepage
                </p>
                <img
                  src="heroB.svg"
                  className="absolute -bottom-60 -right-60 hidden sm:block"
                  alt="none"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-1/2 min-h-screen top-0 right-0">
          <div className="">
            <img src="Mask Group.svg" alt="none"/>
          </div>
          <div className="absolute top-8 right-28">
          </div>
          <div className="absolute w-430 h-480 top-96 right-28 bg-green hidden lg:block">
            <div className="flex flex-col w-430 h-480 gap-4 justify-end items-end">
              <img src="Group 1.png" alt="none" className="drop-shadow-none w-430 "/>
              <h3 className="underline underline-offset-3   text-blue-400 text-3xl font-serif relative inline">SoulCurryArt</h3>
              <p className="text-right text-white text-lg">A play of light and shade, chairoscurso is the realm between the light and dark</p>
              <div className="relative">
                <Button type="ternary">Place Bid</Button>
              </div>
           </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
