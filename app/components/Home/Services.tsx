"use client";
import Image from "next/image";
import React from "react";
import ServiceIcon1 from "../../../public/assets/services/service1.png";
import ServiceIcon2 from "../../../public/assets/services/service2.png";
import ServiceIcon3 from "../../../public/assets/services/service3.png";

export default function Services({servicesAcitve, title, description}: any) {
  return (
    <>
      <div className="bg-black w-full h-[60px] block md:hidden">
        {/* background for Explore More Btn */}
      </div>

      <div
        id="servicesSection"
        className={`bg-black text-white py-5 md:py-20 px-3 xl:px-60 ${
          servicesAcitve ? "block" : "hidden"
        }`}
      >
        <p className="text-center subTitleMM">ဝန်ဆောင်မှုများ</p>
        <p className="text-center mt-3 myDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dicta
          ad temporibus cumque. Dicta libero rerum dolor laborum nemo adipisci?
        </p>

        {/* service cards container */}
        <div className="flex flex-col md:flex-row gap-8 xl:gap-14 mt-10">
          {/* card */}
          <div className="flex flex-col gap-3 w-full md:w-1/3 items-center">
            <div className="w-[40px] h-[40px]">
              <Image
                width={50}
                height={50}
                src={ServiceIcon1}
                alt="hero_app"
                className="w-full object-cover"
              />
            </div>
            <p className="text-center">ငွေသွင်းငွေထုတ် လျင်မြန်ခြင်း</p>
            <p className="text-center">
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
            </p>
          </div>
          {/* card */}
          <div className="flex flex-col gap-3 w-full md:w-1/3 items-center">
            <div className="w-[40px] h-[40px]">
              <Image
                width={50}
                height={50}
                src={ServiceIcon2}
                alt="hero_app"
                className="w-full object-cover"
              />
            </div>
            <p className="text-center">ငွေသွင်းငွေထုတ် လျင်မြန်ခြင်း</p>
            <p className="text-center">
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
            </p>
          </div>
          {/* card */}
          <div className="flex flex-col gap-3 w-full md:w-1/3 items-center">
            <div className="w-[40px] h-[40px]">
              <Image
                width={50}
                height={50}
                src={ServiceIcon3}
                alt="hero_app"
                className="w-full object-cover"
              />
            </div>
            <p className="text-center">ငွေသွင်းငွေထုတ် လျင်မြန်ခြင်း</p>
            <p className="text-center">
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
