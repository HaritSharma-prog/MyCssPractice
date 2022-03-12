import React from "react";
import Imagecards from "../Cards/Imagecards";
import Button from "../Button/Button";
import Page4 from "./Page4";
import Page5 from "./Page5";
import Page6 from './Page6'
import Page7 from './Page7'
import Page8 from "./Page8";
import Page9 from "./Page9"
import Page3Card from "../Cards/Page3Card";

export default function Page3() {
  return (
    <>
      <div className="relative bottom-36 border-4 page2_gradient -z-90 lg:h-auto">
        <img
          src="Asset 202a (1).png"
          alt="none"
          className="absolute top-40 w-40 -left-20"
        />
        <img
          src="Asset 152a.svg"
          alt="none"
          className="absolute right-0 top-2/3"
        />
        <div className="flex flex-col xl:flex-row lg:items-center lg:gap-3">
        <div className="relative m-auto top-40 flex flex-col sm:justify-center items-center md:left-6 md:flex md:top-16 lg:block lg:left-14 lg:top-36 lg:scale-90 ">
          <h2 className="text-3xl font-bold text-blue-800 font-serif lg:hidden md:block md:mb-10 mb-12">
            Notable Drops
          </h2>
          <div className="flex sm:items-end items-center relative w-auto sm:gap-9 flex-col lg:flex-row scale-75 sm:scale-100">
            <div>
              <Imagecards shadow="Vector 69.svg" image="Rectangle 284.png" name="FriYayWiz"/>
            </div>
            <div className="relative sm:-left-16 sm:top-2 md:-left-9">
              <Imagecards shadow="Vector 70.svg" image="Rectangle 285.png" name="Kootings"/>
            </div>
          </div>
          <div className="lg:flex relative w-auto -top-11 left-8 hidden md:-top-9">
            <div>
              <Imagecards shadow="Vector 72.svg" image="Rectangle 287.png" name="Harry chinati"/>
            </div>
            <div className="relative -left-20 md:-left-12">
              <Imagecards shadow="Vector 71.svg" image="Rectangle 286.png" name="PixelWizards"/>
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-4 relative 2xl:right-14 sm:mt-32 items-center">
          <h2 className="lg:text-5xl hidden text-3xl font-normal text-blue-800 font-serif sm:block md:hidden lg:block">
            Notable Drops
          </h2>
          <p className="font-eina lg:text-xl text-xl leading-loose lg:w-96 text-center">
              Upload your work (image, video, audio, or 3D art), add a title and
              description, and customize your NFTs stats, and unlockable
              content.
          </p>
          <Button type="primary">View all</Button>
        </div>
        </div>
        <div className="absolute top-1/4 opacity-40">
          <img src="Group 2598.svg" alt="none" />
        </div>
        <div className="hidden lg:block">
          <Page4/>
        </div>
        <div className="relative mt-44">
        <Page5/>
        </div>
        <div className="flex justify-evenly mt-7 flex-col items-center lg:flex-row lg:scale-95">
          <div className="hidden lg:block">
          <img src="Vector (6).svg" alt="none" className="top-3"/>
          </div>
          <Page3Card bgimage="Rectangle 1946.svg" circleimg={"Ellipse 53.svg"} name={"FriYaywiz"}/>
          <Page3Card bgimage="Rectangle 1947.svg" circleimg={"Ellipse 54.svg"} name={"Pixelwizards"}/>
          <Page3Card bgimage="Rectangle 1948.svg" circleimg={"Ellipse 55.svg"} name={"Aesthetic'smatter"}/>
          <div className="hidden lg:block">
          <img src="Vector (7).svg" alt="none" />
          </div>
        </div>
        <div className="absolute -bottom-10 right-0">
          <img src="Asset 152a (1).svg" alt="none"/>
        </div>
        <div className="relative flex justify-center bottom-28">
          <div className="flex gap-1">
            <img src="Ellipse 57.svg" alt="none"/>
            <img src="Ellipse 56.svg" alt="none"/>
            <img src="Ellipse 58.svg" alt="none"/>
          </div>
        </div>
        <div>
          <Page6/>
        </div>
        <div>
          <Page7/>
        </div>
        <div>
          <Page8/>
        </div>
        <div>
          <Page9/>
        </div>
      </div>
    </>
  );
}
