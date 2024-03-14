"use client";
import Navbar from "@/app/components/nav/Navbar";
import Image from "next/image";
import DemoPic from "../../../public/assets/news/news.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "@/app/components/utilities/Pagination";

const PAGE_SIZE = 4;

function page() {
  const [currentPage, setCurrentPage] = useState(0);
  const [news, setNews] = useState([]);

  const handlePageChange = (selected: any) => {
    setCurrentPage(selected);
  };

  const paginatedData = news.slice(
    currentPage * PAGE_SIZE,
    (currentPage + 1) * PAGE_SIZE
  );

  useEffect(() => {
    axios
      .get(`http://m9.goldenyellowtravel.com/api/v1/blog/list`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        // console.log(res);
        const fetchedData = res?.data?.data;
        setNews(fetchedData);
        // console.log("fetchedData >> ", fetchedData);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  }, []);

  return (
    <>
      <Navbar visibleDefault={true} fixed={false} />

      {/* cards container */}
      <div className="flex flex-wrap gap-5 justify-center px-5 py-10 md:px-10 md:py-20 lg:px-[200px] lg:py-10 ">
        {/* card */}
        {paginatedData?.map((item, index) => {
          return (
            <div key={index} className=" w-[400px] h-[590px] bg-black relative">
              <div className="w-full h-[300px] ">
                <Image
                  src={DemoPic}
                  width={200}
                  height={200}
                  alt="DemoPic"
                  className="w-full h-full object-cover"
                ></Image>
              </div>
              <div className="text-white px-5 ">
                <span className="block mt-7 mb-3 blogTitle">{item.title}</span>
                <span
                  className="block"
                  dangerouslySetInnerHTML={{
                    __html: item?.description
                      ? item?.description.substr(0, 175) +
                        (item?.description.length > 175 ? "..." : "")
                      : "",
                  }}
                ></span>
                <button className="bg-[#fea61f] px-5 py-1 absolute bottom-7 left-5 text-black rounded-md ">
                  Continue Reading
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <Pagination
        pageCount={Math.ceil(news.length / PAGE_SIZE)}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
}

export default page;
