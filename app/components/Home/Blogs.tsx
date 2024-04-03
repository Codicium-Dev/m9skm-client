import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import axios from "axios";
import { API_URL } from "@/app/constants";

const Blogs = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/blog/list`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        const fetchedData = res?.data?.data;
        setNews(fetchedData);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  }, []);

  return (
    <div className="bg-black h-[375px] lg:h-[550px] xl:h-[630px] px-10 xl:px-[190px] py-[30px] flex flex-row justify-center items-center">
      {/* Carousal */}
      <Carousel
        opts={{
          align: "center",
        }}
        className="w-[200px] md:w-[650px] lg:w-[830px]"
      >
        <CarouselContent className="">
          {news?.map((newItem: any) => (
            <CarouselItem
              key={newItem?.id}
              className="md:basis-1/2 lg:basis-1/3 "
            >
              <Link href={`blogs/${newItem?.id}`}>
                <div className="h-[300px] rounded-xl overflow-hidden cursor-pointer select-none">
                  <div className="w-full h-full relative">
                    <Image
                      width={360}
                      height={400}
                      src={newItem?.photo}
                      alt="blogs"
                      className="w-full h-full object-cover"
                    ></Image>

                    {/* text over picture */}
                    <div className="absolute top-0 pt-[160px] lg:opacity-0 lg:hover:opacity-100 inset-0 flex items-center justify-center transition-opacity duration-500  ">
                      <div className="text-white p-5 bg-black bg-opacity-50 w-full h-full flex items-center">
                        <h3
                          className="text-sm md:text-lg font-semibold"
                          dangerouslySetInnerHTML={{
                            __html: newItem?.title
                              ? newItem?.title.substr(0, 90) +
                                (newItem?.title.length > 90 ? "..." : "")
                              : "",
                          }}
                        ></h3>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Blogs;
