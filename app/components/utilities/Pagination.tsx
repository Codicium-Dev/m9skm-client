// components/Pagination.ts
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageCount, onPageChange }: any) => {
  const loadingState = () => {
    return "";
  };

  // const goToFirstPage = () => {
  //   onPageChange(0); // Navigate to the first page
  // };

  // const goToLastPage = () => {
  //   onPageChange(pageCount - 1); // Navigate to the last page
  // };

  // console.log('current page in pagination >', currentPage);

  return (
    <div className="pagination flex gap-3 justify-center pb-20 select-none">
      <ReactPaginate
        pageCount={pageCount}
        pageRangeDisplayed={4}
        marginPagesDisplayed={1}
        onPageChange={({ selected }) => onPageChange(selected)}
        containerClassName={
          "pagination__list flex gap-1 md:gap-3 items-center text-xs md:text-lg "
        }
        pageLinkClassName={"px-[9px] py-2 border border-black rounded-md"}
        activeLinkClassName={"bg-black text-white font-semibold"}
        previousLinkClassName={
          "px-3 py-[8px] md:py-[6.5] border border-black rounded-md text-white font-semibold text-xs md:text-lg"
        }
        nextLinkClassName={
          "px-3 py-[8px] md:py-[6.5] border border-black rounded-md text-white font-semibold text-xs md:text-lg"
        }
        previousLabel="<"
        nextLabel=">"
        breakClassName="hidden"
        activeClassName={"active"}
        disabledClassName="hidden"
        disabledLinkClassName="hidden"
        renderOnZeroPageCount={loadingState}
      />
    </div>
  );
};

export default Pagination;
