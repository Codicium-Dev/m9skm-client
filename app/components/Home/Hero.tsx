"use client";
import Image from "next/image";
import heroApp from "@/public/assets/home-page/hero_app.png";
import { Button } from "@/components/ui/button";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import Link from "next/link";

function Hero() {
  return (
    <div className="relative flex flex-col md:flex-row gap-0 md:gap-10 mx-[20px] md:mx-[80px] lg:mx-[200px] h-[420px] md:h-[450px]">
      <div className="flex-col">
        <div>
          <h1 className="text-xl lg:text-4xl font-bold lg:mt-[50px] w-full xl:w-[540px] ">
            Lorem ipsum dolor
          </h1>
          <p className="mt-5 text-sm lg:text-lg w-full xl:w-[540px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            neque at, tenetur minima exercitationem molestias et quis ipsam quas
            sapiente eum fuga illum libero ab doloremque delectus nulla vitae
            veniam.
          </p>
        </div>

        <Button
          variant="outline"
          className="bg-transparent border-black hover:bg-black hover:text-white mt-4 block"
        >
          Download Now
        </Button>
      </div>

      <div className="absolute bottom-0 left-1/2 md:left-auto right-0 transform -translate-x-1/2 md:transform-none w-[150px] min-w-[150px] md:w-[150px] md:min-w-[200px] xl:w-[250px] xl:min-w-[250px]">
        <Image
          width={500}
          height={580}
          src={heroApp}
          alt="hero_app"
          className="w-full object-cover"
        />
      </div>

      <Link href="#servicesSection" scroll={true}>
        <div className="absolute -bottom-14 md:bottom-0 left-1/2 transform -translate-x-1/2 text-white">
          <div className="flex flex-col items-center">
            <p className="md:text-white font-semibold text-sm md:text-base">
              Explore More
            </p>
            <div>
              <IoIosArrowDown size={30} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Hero;
