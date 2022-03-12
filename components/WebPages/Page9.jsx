import React from "react";
import SocialCard from "../Cards/SocialCard";

export default function Page9() {
  let arr = [
    {
      background: "bg-sky-600 ",
      logo: "Vector (4).png",
    },
    {
      background: "bg-red-600",
      logo: "Vector (5).png",
    },
    {
      background: "bg-blue-700",
      logo: "Vector (6).png",
    },
    {
      background: "bg-sky-400",
      logo: "Vector (7).png",
    },
  ];
  return (
    <>
      <div className="mt-48 flex flex-col lg:flex-row w-screen relative">
        <div className="absolute right-0 bottom-0 lg:w-1/2">
          <img src="Rectangle 317.png" alt="none" />
        </div>
        <div className="flex flex-col gap-24 lg:w-1/2 Page9_background lg:pr-12 relative items-center lg:items-end">
          <div className="gap-2 flex mt-24 mb-40 rotate-180">
            {arr.map((data, i) => {
              return (
                <SocialCard key={i} background={data.background} logo={data.logo} />
              );
            })}
          </div>
          <div className="rotate-180 mb-8">
            <p className="font-eina text-xl w-fit p-4 lg:p-0 lg:w-96 text-white">
              From Opensea.io, go to your profile icon and click “Create” in the
              top right corner. You’ll be taken to the NFT item creation page.
              This page will allow you to upload your NFT file, name it and add
              a description.
            </p>
          </div>
          <div className="absolute -bottom-40 opacity-50 -right-40 rounded-3xl">
            <img src="Ellipse 66.png" alt="none" />
          </div>
          <div className="mb-10 flex gap-10 items-center rotate-180">
            <img src="image 74.png" alt="none" />
            <h2 className="text-white font-serif text-4xl">OpenSea</h2>
          </div>
        </div>
        <div className="lg:w-1/2 flex flex-col">
          <div className="w-full">
            <div className="font-eina text-blue-700 font flex justify-around w-full mx-auto text-sm">
              <div className="flex flex-col gap-6 items-start">
                <h1 className="font-semibold text-2xl font-serif">Resources</h1>
                <button>Help Center</button>
                <button>Platform Status</button>
                <button>Partners</button>
                <button>Gas-Free Marketplace</button>
                <button>Suggestions</button>
                <button>Discord Community</button>
                <button>Newsletter</button>
                <button>Blog</button>
                <button>Docs</button>
              </div>
              <div className="flex flex-col gap-16">
                <div className="flex flex-col gap-6 items-start">
                  <h1 className="font-semibold text-2xl font-serif">
                    My Account
                  </h1>
                  <button>Profile</button>
                  <button>Favourites</button>
                  <button>My Collections</button>
                  <button>Settings</button>
                </div>
                <div className="flex flex-col gap-6 items-start">
                  <h1 className="font-semibold text-2xl font-serif">Stats</h1>
                  <button>Rankings</button>
                  <button>Activity</button>
                </div>
              </div>
              <div className="flex flex-col gap-6 items-start">
                <h1 className="font-semibold text-2xl font-serif">Company</h1>
                <button>About</button>
                <button>Careers</button>
              </div>
            </div>
          </div>
        <div className="flex flex-col gap-4 p-14 items-start">
        <h1 className="text-blue-700 font-semibold text-2xl font-serif">Stay In The Loop</h1>
        <div  className="font-eina text-blue-700 text-sm w-3/4">
        <p>Join our mailing list to stay in the loop with out newest feature releases, NFT drops, and tips & tricks for navigating OpenSea.</p>
        </div>
        <div className="flex gap-5 lg:scale-75 scale-50 md:right-16 relative right-36">
          <input type="email" placeholder="Email Address" className="placeholder-blue-700  p-2"/>
          <div className=" w-40 bg-blue-700 text-white flex justify-center">
            <button>
              <div className="">
              <p className="font-eina">Sign Up</p>
              </div>
              </button>
          </div>
        </div>
        </div>
        <div className="bg-gray-200 h-1 relative bottom-12 w-full"></div>
        </div>
      </div>
        <div className="flex gap-12 text-blue-700 font-eina absolute md:bottom-2 lg:bottom-28 bottom-5 right-6 text-xs sm:text-lg mt-12">
          <button><p>Privacy Policy</p></button>
          <button><p>Term & Conditions</p></button>
        </div>
    </>
  );
}
