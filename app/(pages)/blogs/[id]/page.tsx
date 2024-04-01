"use client";
import Navbar from "@/app/components/nav/Navbar";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import heroApp from "../../../../public/assets/news/news.jpg";
import Footer from "@/app/components/Footer";
import axios from "axios";
import { useParams } from "next/navigation";
import { API_URL } from "@/app/constants";

interface NewsData {
  id: number;
  title: string;
  photo: any;
  description: string;
}
const Detail = () => {
  const { id } = useParams();

  const [news, setNews] = useState<NewsData | null>(null);

  useEffect(() => {
    axios
      .get(`${API_URL}/blog/show/${id}`, {
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
  }, [id]);

  return (
    <>
      <Navbar visibleDefault={true} fixed={false} />

      <div className="bg-black p-5 md:p-[60px]">
        <Link href={"/blogs"} className="">
          <button className="bg-[#fea61f] px-5 py-2 text-xs md:text-sm rounded-md ">
            &lt; Go Back
          </button>
        </Link>

        {/* card container */}
        <div className="flex justify-center mt-5 ">
          {/* card */}

          {news && (
            <div className="w-full md:w-[80%] lg:w-1/2">
              <span className="text-white text-2xl font-semibold ">
                {news.title}
              </span>

              <div className="w-full mt-3">
                <Image
                  width={800}
                  height={800}
                  src={news.photo}
                  alt="hero_app"
                  priority
                  className="w-full object-cover"
                />
              </div>

              <div className="mt-4 flex flex-col gap-4 w-full text-white text-sm md:text-base lg:text-lg">
                <span
                  className="block"
                  dangerouslySetInnerHTML={{
                    __html: news.description ? news.description : "",
                  }}
                ></span>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer footerColor="" />
    </>
  );
};

export default Detail;
