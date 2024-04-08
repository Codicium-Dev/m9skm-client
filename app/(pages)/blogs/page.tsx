"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/nav/Navbar";
import Pagination from "@/app/components/utilities/Pagination";
import { API_URL } from "@/app/constants";

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
    <>
      <Navbar visibleDefault={true} fixed={false} />

      <div className="flex flex-wrap gap-5 justify-center px-5 lg:max-w-[1200px] lg:mx-auto pt-5 pb-10">
        {/* card */}
        {paginatedData?.map((item: any) => {
          return (
            <Link key={item?.id} href={`blogs/${item?.id}`}>
              <div className="pb-[100px] w-full h-fit md:w-[400px] bg-black relative rounded-md overflow-hidden ">
                <div className="w-full h-[300px] ">
                  <Image
                    src={item?.photo}
                    width={400}
                    height={300}
                    alt="DemoPic"
                    priority
                    className="w-full h-full object-cover"
                  ></Image>
                </div>
                <div className="text-white px-5 ">
                  <span className="block mt-7 mb-3 blogTitle">
                    {item?.title}
                  </span>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: item?.description
                        ? item?.description.substr(0, 175) +
                          (item?.description.length > 175 ? "..." : "")
                        : "",
                    }}
                  ></p>
                  <button className="bg-[#fea61f] px-5 py-1 absolute bottom-7 left-5 text-black rounded-md ">
                    Continue Reading
                  </button>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {news && (
        <Pagination
          pageCount={Math.ceil(news.length / PAGE_SIZE)}
          onPageChange={handlePageChange}
        />
      )}

      <Footer footerColor={"black"} />
    </>
  );
}

export default page;
