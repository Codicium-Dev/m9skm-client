import Image from "next/image";
import Link from "next/link";
import React from "react";

import { DIRECT_DOWNLOAD_URL, PLAYSTORE_URL } from "@/app/constants";

import MobileApp from "../../../public/assets/home-page/mobile-app.png";
import PlayStore from "../../../public/assets/home-page/play-store.png";

const ShowCase = ({ description }: any) => {
  return (
    <div className="h-fit lg:h-[550px] xl:h-[630px] px-10 xl:px-[190px] py-[30px] lg:py-[150px] flex flex-col md:flex-row items-center justify-between select-none">
      <div className="w-full md:w-[60%]">
        <p className="title text-center md:text-left">Now Available</p>
        <p className="myDesc text-center md:text-left">{description}</p>

        <div className="flex flex-col md:flex-row mt-3 md:mt-0 gap-3 md:gap-5 mb-3 items-center">
          <Link href={DIRECT_DOWNLOAD_URL} target="_blank">
            <div className="md:mt-5 py-3 px-5 border-2 border-black bg-transparent hover:bg-black hover:text-white transition-all duration-300 rounded-md text-center w-[200px] h-[50px] ">
              <span>Download Now</span>
            </div>
          </Link>

          <Link href={PLAYSTORE_URL} target="_blank">
            <div className="md:mt-5 w-[200px] h-[50px] overflow-hidden rounded-lg  ">
              <Image
                width={300}
                height={569}
                src={PlayStore}
                alt="PlayStore"
                className="w-full h-full object-cover"
              />
            </div>
          </Link>
        </div>
      </div>
      <div>
        <Image
          width={250}
          height={500}
          src={MobileApp}
          alt="hero_app"
          className="object-contain w-[230px] h-[500px]"
        />
      </div>
    </div>
  );
};

export default ShowCase;
