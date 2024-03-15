"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Team1 from "../../../public/assets/home-page/team-logo1.png";
import Team2 from "../../../public/assets/home-page/team-logo2.png";
import axios from "axios";

const Matches = () => {
  return (
    // match cards container
    <div className="bg-white flex flex-col items-center md:flex-row gap-5 md:gap-0 justify-center py-10 lg:py-0 h-fit md:h-[180px]">
      {/* card */}
      <div className="flex items-center gap-1 ">
        <div className="flex flex-col w-[100px] lg:w-[130px]">
          <div className="flex justify-center ">
            <div>
              <Image
                width={100}
                height={100}
                src={Team1}
                alt="hero_app"
                className="object-cover w-[60px] h-[60px]"
              />
            </div>
          </div>
          <p className="mt-3 text-center text-xs">Manchester United</p>
        </div>
        <p className="-mt-4 font-semibold">19:00</p>
        <div className="flex flex-col w-[100px] lg:w-[130px]">
          <div className="flex justify-center">
            <div>
              <Image
                width={100}
                height={100}
                src={Team2}
                alt="hero_app"
                className="object-cover w-[60px] h-[60px]"
              />
            </div>
          </div>
          <p className="mt-3 text-center text-xs">Chelsea</p>
        </div>
      </div>

      {/* vertical ruler */}
      <div className="border border-gray-300 h-full "></div>

      {/* card */}
      <div className="flex items-center gap-1 ">
        <div className="flex flex-col w-[100px] lg:w-[130px]">
          <div className="flex justify-center ">
            <div>
              <Image
                width={100}
                height={100}
                src={Team1}
                alt="hero_app"
                className="object-cover w-[60px] h-[60px]"
              />
            </div>
          </div>
          <p className="mt-3 text-center text-xs">Manchester United</p>
        </div>
        <p className="-mt-4 font-semibold">19:00</p>
        <div className="flex flex-col w-[100px] lg:w-[130px]">
          <div className="flex justify-center">
            <div>
              <Image
                width={100}
                height={100}
                src={Team2}
                alt="hero_app"
                className="object-cover w-[60px] h-[60px]"
              />
            </div>
          </div>
          <p className="mt-3 text-center text-xs">Chelsea</p>
        </div>
      </div>

      {/* vertical ruler */}
      <div className="border border-gray-300 h-full "></div>

      {/* card */}
      <div className="flex items-center gap-1 ">
        <div className="flex flex-col w-[100px] lg:w-[130px]">
          <div className="flex justify-center ">
            <div>
              <Image
                width={100}
                height={100}
                src={Team1}
                alt="hero_app"
                className="object-cover w-[60px] h-[60px]"
              />
            </div>
          </div>
          <p className="mt-3 text-center text-xs">Manchester United</p>
        </div>
        <p className="-mt-4 font-semibold">19:00</p>
        <div className="flex flex-col w-[100px] lg:w-[130px]">
          <div className="flex justify-center">
            <div>
              <Image
                width={100}
                height={100}
                src={Team2}
                alt="hero_app"
                className="object-cover w-[60px] h-[60px]"
              />
            </div>
          </div>
          <p className="mt-3 text-center text-xs">Chelsea</p>
        </div>
      </div>
    </div>
  );
};

export default Matches;
