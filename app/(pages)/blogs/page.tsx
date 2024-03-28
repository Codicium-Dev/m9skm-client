"use client";
import Navbar from "@/app/components/nav/Navbar";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "@/app/components/utilities/Pagination";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import Blogs from "@/components/Blogs";

const PAGE_SIZE = 4;

async function getBlogs() {
  const res = await fetch("http://m9.goldenyellowtravel.com/api/v1/blog/list");
  const data = await res.json();
  return data.data;
}

async function page() {
  // const blogs = await getBlogs();

  const [currentPage, setCurrentPage] = useState(0);
  const [blogs, setBlogs] = useState([]);

  const handlePageChange = (selected: any) => {
    setCurrentPage(selected);
  };

  const paginatedData = blogs.slice(
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
        const fetchedData = res?.data?.data;
        setBlogs(fetchedData);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  }, []);

  return (
    <>
      <Navbar visibleDefault={true} fixed={false} />

      {paginatedData.length > 0 &&
        paginatedData.map(({ id, title, subtile, description, photo }: any) => (
          <Blogs
            key={id}
            id={id}
            title={title}
            subtile={subtile}
            description={description}
            photo={photo}
          />
        ))}

      {blogs && (
        <Pagination
          pageCount={Math.ceil(blogs.length / PAGE_SIZE)}
          onPageChange={handlePageChange}
        />
      )}

      <Footer footerColor={"black"} />
    </>
  );
}

export default page;
