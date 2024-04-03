"use client";
import Image from "next/image";
import React from "react";
export default function Services({
  title,
  descripiton,
  subTitle1,
  subDescription1,
  subIcon1,
  subTitle2,
  subDescription2,
  subIcon2,
  subTitle3,
  subDescription3,
  subIcon3,
}: any) {
  return (
    <>
      <div className="bg-black w-full h-[60px] block md:hidden ">
        {/* background for Explore More Btn */}
      </div>

      <div
        id="servicesSection"
        className="bg-black text-white py-5 md:py-20 px-3 xl:px-60 select-none"
      >
        <p className="text-center subTitleMM">{title}</p>
        <p className="text-center mt-3 myDesc">{descripiton}</p>

        {/* service cards container */}
        <div className="flex flex-col md:flex-row gap-8 xl:gap-14 mt-10">
          {/* card */}
          <div className="flex flex-col gap-3 w-full md:w-1/3 items-center">
            <div className="w-[40px] h-[40px]">
              <Image
                width={50}
                height={50}
                src={subIcon1}
                alt="hero_app"
                className="w-full object-cover"
              />
            </div>
            <p className="text-center font-semibold">{subTitle1}</p>
            <p className="text-center">{subDescription1}</p>
          </div>
          {/* card */}
          <div className="flex flex-col gap-3 w-full md:w-1/3 items-center">
            <div className="w-[40px] h-[40px]">
              <Image
                width={50}
                height={50}
                src={subIcon2}
                alt="hero_app"
                className="w-full object-cover"
              />
            </div>
            <p className="text-center font-semibold">{subTitle2}</p>
            <p className="text-center">{subDescription2}</p>
          </div>
          {/* card */}
          <div className="flex flex-col gap-3 w-full md:w-1/3 items-center">
            <div className="w-[40px] h-[40px]">
              <Image
                width={50}
                height={50}
                src={subIcon3}
                alt="hero_app"
                className="w-full object-cover"
              />
            </div>
            <p className="text-center font-semibold">{subTitle3}</p>
            <p className="text-center">{subDescription3}</p>
          </div>
        </div>
      </div>
    </>
  );
}
