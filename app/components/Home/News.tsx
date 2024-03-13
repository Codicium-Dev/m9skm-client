import Image from "next/image";
import React from "react";
import DemoPic from "../../../public/assets/news/news.jpg";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const News = () => {
  return (
    <div className="bg-black h-fit lg:h-[550px] xl:h-[630px] px-10 xl:px-[190px] py-[30px] flex flex-row justify-center items-center">
      {/* Carousal */}
      <Carousel
        opts={{
          align: "center",
        }}
        className=" w-[830px]"
      >
        <CarouselContent className="">
          {Array.from({ length: 7 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 ">
              <div className="h-[300px] rounded-xl overflow-hidden">
                <div className="w-full h-full relative">
                  <Image
                    width={140}
                    height={60}
                    src={DemoPic}
                    alt="PlayStore"
                    className="w-full h-full object-cover"
                  ></Image>

                  {/* text over picture */}
                  <div className="absolute top-[160px] inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg">
                    <div className="text-white text-center">
                      <h3 className="text-lg font-semibold">Hover Text</h3>
                      <p className="text-sm">
                        Additional information or description Lorem ipsum dolor
                        sit amet Lorem, ipsum dolor.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default News;
